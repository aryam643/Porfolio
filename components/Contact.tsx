"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-120px" })
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">("idle")
  const links = [
    { label: "GitHub", href: "https://github.com/aryam643", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aryamsharma/", icon: Linkedin },
  ]

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.email)
      setCopyStatus("copied")
    } catch {
      setCopyStatus("failed")
    }
  }

  return (
    <section id="contact" className="section-shell py-20">
      <div className="section-inner">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.5 }}
          className="paper-card flex flex-col gap-8 p-7 md:flex-row md:items-end md:justify-between md:p-10"
        >
          <div>
            <p className="text-sm font-medium text-primary">Contact</p>
            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">Let&apos;s talk.</h2>
            <p className="mt-4 max-w-xl text-muted-foreground">For backend engineering roles, collaboration, or questions about my work, email is the quickest way to reach me.</p>
            <p className="mt-5 text-sm text-muted-foreground">{portfolioData.location} · {portfolioData.email}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button type="button" onClick={copyEmail} className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
              {copyStatus === "copied" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copyStatus === "copied" ? "Email copied" : "Copy email"}
            </button>
            <a href={`mailto:${portfolioData.email}`} className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary">
              <Mail className="h-4 w-4" /> Open email app
            </a>
            {links.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary">
                <Icon className="h-4 w-4" />
                {label}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            ))}
            <span role="status" aria-live="polite" className="w-full text-xs text-muted-foreground">
              {copyStatus === "failed" ? `Could not copy automatically. Select the address above: ${portfolioData.email}` : copyStatus === "copied" ? "Address copied to clipboard." : ""}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
