import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = 'nodejs';

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const body: ContactPayload = await request.json();
    const name = (body.name || "").toString().trim();
    const email = (body.email || "").toString().trim();
    const message = (body.message || "").toString().trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Basic validation for production hardening
    if (name.length > 100) {
      return NextResponse.json({ error: "Name is too long" }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) || email.length > 254) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }
    if (message.length < 5 || message.length > 5000) {
      return NextResponse.json({ error: "Message length out of bounds" }, { status: 400 });
    }

    let smtpHost = process.env.SMTP_HOST;
    let smtpPort = Number(process.env.SMTP_PORT || 587);
    let smtpUser = process.env.SMTP_USER;
    let smtpPass = process.env.SMTP_PASS;
    let toEmail = process.env.CONTACT_TO_EMAIL || smtpUser || "";

    let isUsingTestAccount = false;

    // In development, if SMTP is not configured, use Ethereal test account automatically
    if (
      process.env.NODE_ENV !== "production" &&
      (!smtpHost || !smtpUser || !smtpPass)
    ) {
      const testAccount = await nodemailer.createTestAccount();
      smtpHost = "smtp.ethereal.email";
      smtpPort = 587;
      smtpUser = testAccount.user;
      smtpPass = testAccount.pass;
      toEmail = toEmail || testAccount.user;
      isUsingTestAccount = true;
    }

    if (!smtpHost || !smtpUser || !smtpPass || !toEmail) {
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const info = await transporter.sendMail({
      from: `Portfolio Contact <${smtpUser}>`,
      to: toEmail,
      replyTo: email,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message.replace(/\n/g, "<br/>")}</p>`,
    });

    const previewUrl = isUsingTestAccount
      ? nodemailer.getTestMessageUrl(info)
      : undefined;

    return NextResponse.json({ ok: true, messageId: info.messageId, previewUrl });
  } catch (error) {
    console.error("/api/contact error", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}


