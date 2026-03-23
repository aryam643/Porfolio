"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { portfolioData } from "@/lib/portfolio-data"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-120px" })

  return (
    <section id="skills" className="section-shell">
      <div className="section-inner">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="section-kicker">Skills</div>
          <h2 className="section-title max-w-4xl">Breadth where it helps, depth where the work actually demands it.</h2>
          <p className="section-copy max-w-3xl">
            This stack is intentionally broad because the work has been broad. Most of my strongest execution sits at
            the intersection of Django, React, database work, API design, and product engineering.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {portfolioData.skillGroups.map((category, index) => {
            const highlight = index === 0 || index === 4

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{ duration: 0.55, delay: index * 0.06 + 0.16 }}
                className={highlight ? "md:col-span-2 xl:col-span-1" : ""}
              >
                <div className={highlight ? "ink-card h-full p-6 md:p-7" : "paper-card h-full p-6 md:p-7"}>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className={`text-[0.68rem] uppercase tracking-[0.28em] ${highlight ? "text-slate-300" : "text-muted-foreground"}`}>
                          {`Category 0${index + 1}`}
                        </p>
                        <h3 className={`mt-4 text-3xl font-semibold display-font ${highlight ? "text-white" : ""}`}>{category.title}</h3>
                      </div>
                      <span className={`text-[0.68rem] uppercase tracking-[0.28em] ${highlight ? "text-slate-400" : "text-muted-foreground"}`}>
                        {category.items.length} items
                      </span>
                    </div>

                    <div className="accent-divider mt-7" />

                    <div className="mt-7 flex flex-wrap gap-2.5">
                      {category.items.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className={`rounded-full px-3 py-1.5 text-xs ${
                            highlight
                              ? "border-white/15 bg-white/5 text-slate-100"
                              : "border-border/75 bg-background/80 text-foreground"
                          }`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
