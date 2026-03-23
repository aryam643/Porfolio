"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Download, Github, Globe, Linkedin, Mail } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail,
  Website: Globe,
} as const

const Hero = () => {
  const [activeRoleIndex, setActiveRoleIndex] = useState(0)
  const activeRole = portfolioData.roles[activeRoleIndex]

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveRoleIndex((current) => (current + 1) % portfolioData.roles.length)
    }, 2200)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="top" className="section-shell pt-36 md:pt-40">
      <div className="section-inner">
        <div className="grid items-end gap-10 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-kicker"
            >
              Chandigarh, India
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Available for backend and product engineering roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="section-title max-w-5xl text-[3.2rem] sm:text-[4.2rem] xl:text-[5.9rem]"
            >
              Building useful software with strong backend foundations and cleaner product execution.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="section-copy max-w-3xl"
            >
              {portfolioData.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Button size="lg" className="rounded-full bg-foreground px-7 text-background hover:bg-foreground/90 pulse-glow" asChild>
                <a href={portfolioData.resumeDownloadUrl} target="_blank" rel="noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-border/80 bg-card/70 px-7 hover:bg-card"
                asChild
              >
                <a href="https://github.com/aryam643" target="_blank" rel="noreferrer">
                  View GitHub
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {portfolioData.socialLinks.map((link) => {
                const Icon = socialIcons[link.label as keyof typeof socialIcons]

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </a>
                )
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-12 grid max-w-4xl gap-3 sm:grid-cols-2 xl:grid-cols-4"
            >
              {portfolioData.stats.map((stat) => (
                <div key={stat.label} className="metric-tile">
                  <p className="text-[0.7rem] uppercase tracking-[0.24em] text-muted-foreground">{stat.label}</p>
                  <p className="mt-3 text-3xl font-semibold display-font">{stat.value}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative"
          >
            <div className="paper-card soft-grid p-7 md:p-8">
              <div className="flex items-center justify-between">
                <span className="section-kicker">Current Track</span>
                <span className="text-[0.68rem] uppercase tracking-[0.32em] text-muted-foreground">01 / Signal</span>
              </div>

              <div className="mt-10">
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">Active Role</p>
                <div className="mt-3 min-h-[5rem]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeRole}
                      initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -22, filter: "blur(8px)" }}
                      transition={{ duration: 0.35 }}
                      className="text-3xl font-semibold leading-tight display-font md:text-4xl"
                    >
                      {activeRole}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="accent-divider mt-8" />

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <div className="rounded-[1.35rem] border border-border/80 bg-background/75 p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">Base</p>
                  <p className="mt-2 text-lg font-semibold">{portfolioData.location}</p>
                </div>
                <div className="rounded-[1.35rem] border border-border/80 bg-background/75 p-4">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">Contact</p>
                  <a href={`mailto:${portfolioData.email}`} className="mt-2 block text-lg font-semibold hover:text-primary">
                    {portfolioData.email}
                  </a>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                {portfolioData.focusAreas.slice(0, 4).map((area, index) => (
                  <div key={area.title} className="noise-dot rounded-[1.35rem] border border-border/75 bg-card/70 p-4 pl-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold">{area.title}</p>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">{area.description}</p>
                      </div>
                      <span className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, rotate: -6, y: 10 }}
              animate={{ opacity: 1, rotate: -4, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="paper-card absolute -left-2 top-8 hidden max-w-[14rem] px-4 py-3 md:block"
            >
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">Performance</p>
              <p className="mt-2 text-sm font-medium">10K+ API requests optimized with query tuning and Redis caching.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, rotate: 6, y: 10 }}
              animate={{ opacity: 1, rotate: 4, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="ink-card absolute -right-2 bottom-10 hidden max-w-[14rem] px-4 py-3 md:block"
            >
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-slate-300">Production Mindset</p>
              <p className="mt-2 text-sm font-medium text-slate-100">
                Practical engineering over theory theatre. Ship it, profile it, improve it.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
