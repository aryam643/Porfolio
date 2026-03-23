"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Coffee, Github, Globe, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { portfolioData } from "@/lib/portfolio-data"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-120px" })
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || "Failed to send message")
      }

      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out — I'll get back to you soon.",
      })
      setFormData({ name: "", email: "", message: "" })
    } catch (err: any) {
      toast({
        title: "Could not send message",
        description: err?.message || "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/aryam643", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aryamsharma/", label: "LinkedIn" },
    { icon: Globe, href: portfolioData.website, label: "Website" },
  ]

  const contactInfo = [
    { icon: Mail, label: "Email", value: portfolioData.email, href: `mailto:${portfolioData.email}` },
    { icon: Phone, label: "Phone", value: portfolioData.phone, href: `tel:${portfolioData.phone}` },
    { icon: MapPin, label: "Location", value: portfolioData.location, href: null },
    { icon: Globe, label: "Website", value: portfolioData.website.replace("https://", ""), href: portfolioData.website },
  ]

  return (
    <section id="contact" className="section-shell">
      <div className="section-inner">
        <div className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 36 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
            transition={{ duration: 0.7 }}
            className="ink-card p-7 md:p-8"
          >
            <div className="relative z-10">
              <div className="section-kicker border-white/15 bg-white/5 text-slate-300">Contact</div>
              <h2 className="mt-7 text-5xl font-semibold leading-[0.94] text-white display-font md:text-6xl">
                Let&apos;s build the next useful thing.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
                I&apos;m most interested in backend-heavy product teams, full-stack roles with strong execution
                standards, and technically honest work where reliability actually matters.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {["Backend", "Full Stack", "Real-time Apps", "Product Engineering"].map((tag) => (
                  <Badge key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-100 hover:bg-white/10">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="mt-10 grid gap-3">
                {contactInfo.map((info) => (
                  <div key={info.label} className="rounded-[1.35rem] border border-white/10 bg-white/5 p-4">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-white">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-[0.68rem] uppercase tracking-[0.28em] text-slate-400">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="mt-2 block text-base font-medium text-slate-100 hover:text-white">
                            {info.value}
                          </a>
                        ) : (
                          <p className="mt-2 text-base font-medium text-slate-100">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-slate-100 transition-colors hover:bg-white/10"
                  >
                    <social.icon className="h-4 w-4" />
                    {social.label}
                  </a>
                ))}
              </div>

              <div className="mt-10 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-3">
                  <Coffee className="h-5 w-5 text-orange-300" />
                  <p className="text-sm font-medium text-slate-100">Preferred conversations</p>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Production Django work, React product interfaces, API-heavy features, platform reliability, and
                  product engineering roles with strong execution standards.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="paper-card p-2"
          >
            <Card className="border-0 bg-transparent shadow-none">
              <CardHeader className="p-5 md:p-6">
                <CardTitle className="text-4xl font-semibold display-font">Send a message</CardTitle>
                <CardDescription className="max-w-2xl text-base leading-7 text-muted-foreground">
                  Whether it&apos;s a role, a project, or a collaboration idea, leave the context here and I&apos;ll get
                  back to you.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-5 pt-0 md:p-6 md:pt-0">
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="h-12 rounded-2xl border-border/80 bg-background/80"
                    />
                    <Input
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12 rounded-2xl border-border/80 bg-background/80"
                    />
                  </div>
                  <Textarea
                    name="message"
                    placeholder="Tell me what you're building, what role you're hiring for, or what problem you want help with..."
                    rows={9}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="rounded-[1.5rem] border-border/80 bg-background/80"
                  />
                  <div className="flex flex-col gap-4 border-t border-border/80 pt-5 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm leading-6 text-muted-foreground">
                      Best for role outreach, collaboration, backend work, and product engineering conversations.
                    </p>
                    <Button type="submit" className="rounded-full bg-foreground px-6 text-background hover:bg-foreground/90" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
