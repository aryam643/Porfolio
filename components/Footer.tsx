"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Code2, Terminal } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="section-shell pb-10 pt-8">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="paper-card p-6 md:p-8"
        >
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                  <Terminal className="h-5 w-5" />
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/70 text-foreground">
                  <Code2 className="h-5 w-5" />
                </div>
              </div>
              <h3 className="mt-6 text-4xl font-semibold display-font">{portfolioData.shortName}</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                © {currentYear} {portfolioData.name}. Backend engineering and product work, built to hold up in
                production.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <a
                href={portfolioData.resumeViewUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-4 py-2 text-sm font-medium text-foreground"
              >
                Resume
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <div className="flex flex-wrap gap-2 md:justify-end">
                {["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border/75 bg-background/80 px-3 py-1.5 text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
