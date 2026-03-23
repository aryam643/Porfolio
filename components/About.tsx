"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Database, Code, Server, Zap } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

const iconMap = {
  server: Server,
  database: Database,
  code: Code,
  zap: Zap,
} as const

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-120px" })
  const education = portfolioData.education

  return (
    <section id="about" className="section-shell">
      <div className="section-inner">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 36 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
            transition={{ duration: 0.75 }}
          >
            <div className="section-kicker">About</div>
            <h2 className="section-title max-w-4xl">Product-minded engineering with backend depth and a bias toward clarity.</h2>
            <p className="section-copy max-w-3xl">
              I like work that sits between solid engineering and useful product outcomes. That usually means APIs that
              stay predictable, frontend experiences that feel fast, and systems that are easy to extend once real usage
              starts shaping the roadmap.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {portfolioData.focusAreas.map((area, index) => {
                const Icon = iconMap[area.iconKey as keyof typeof iconMap]

                return (
                  <motion.div
                    key={area.title}
                    initial={{ opacity: 0, y: 22 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
                    transition={{ duration: 0.5, delay: index * 0.08 + 0.18 }}
                    className="paper-card p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold display-font">{area.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">{area.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="space-y-5"
          >
            <div className="paper-card p-7 md:p-8">
              <div className="flex items-center justify-between">
                <span className="section-kicker">Education</span>
                <span className="text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">02 / Grounding</span>
              </div>
              <h3 className="mt-8 text-3xl font-semibold display-font">{education.degree}</h3>
              <p className="mt-3 text-base text-muted-foreground">
                {education.school} • {education.location}
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.26em] text-muted-foreground">
                {education.period} • {education.score}
              </p>

              <div className="accent-divider mt-8" />

              <div className="mt-8 flex flex-wrap gap-2">
                {education.courses.map((course) => (
                  <Badge key={course} variant="outline" className="rounded-full border-border/75 px-3 py-1.5 text-xs">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="ink-card p-7 md:p-8">
              <div className="relative z-10">
                <p className="text-[0.68rem] uppercase tracking-[0.3em] text-slate-300">Working Style</p>
                <h3 className="mt-5 text-3xl font-semibold display-font text-white">Ship practical systems. Keep them readable.</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  I prefer designs that survive contact with production: small enough to reason about, fast enough to
                  feel good, and structured enough that the next feature doesn&apos;t become a rewrite.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {["Backend correctness", "Fast iteration", "Measured performance", "Clear code paths"].map((item) => (
                    <div key={item} className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-8 grid gap-4 md:grid-cols-4"
        >
          {portfolioData.stats.map((stat) => (
            <div key={stat.label} className="paper-card p-5">
              <p className="text-[0.68rem] uppercase tracking-[0.26em] text-muted-foreground">{stat.label}</p>
              <p className="mt-4 text-4xl font-semibold display-font">{stat.value}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
