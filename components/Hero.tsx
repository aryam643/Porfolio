"use client"

import { motion } from "framer-motion"
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
              {portfolioData.location}
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {portfolioData.availability}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="section-title max-w-5xl text-[3.2rem] sm:text-[4.2rem] xl:text-[5.9rem]"
            >
              I build reliable backend systems for real products.
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
              <a className="inline-flex h-11 items-center gap-2 rounded-lg bg-foreground px-6 font-medium text-background" href={portfolioData.resumeDownloadUrl} target="_blank" rel="noreferrer">
                <Download className="h-4 w-4" /> Download resume
              </a>
              <a className="inline-flex h-11 items-center gap-2 rounded-lg border border-border bg-card px-6 font-medium" href="https://github.com/aryam643" target="_blank" rel="noreferrer">
                View GitHub <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {portfolioData.socialLinks.map((link) => {
                const Icon = socialIcons[link.label as keyof typeof socialIcons] ?? Globe

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
                  <p className="text-3xl font-semibold leading-tight display-font md:text-4xl">{portfolioData.headline}</p>
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
                <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">Currently Building</p>
                {portfolioData.projects
                  .filter((project) => project.featured)
                  .slice(0, 2)
                  .map((project) => (
                    <div key={project.name} className="noise-dot rounded-[1.35rem] border border-border/75 bg-card/70 p-4 pl-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-semibold">{project.name}</p>
                          <p className="mt-1 text-sm leading-6 text-muted-foreground">{project.metrics[0]}</p>
                        </div>
                        <span className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
