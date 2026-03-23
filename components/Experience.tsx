"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, TrendingUp } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-120px" })

  return (
    <section id="experience" className="section-shell">
      <div className="section-inner">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <div className="section-kicker">Experience</div>
          <h2 className="section-title max-w-4xl">Recent work across production Django systems, product tooling, and applied frontend delivery.</h2>
          <p className="section-copy max-w-3xl">
            The common thread in my experience is shipping features that have to work under real use: migrations,
            performance fixes, auth flows, internal tooling, and product surfaces that connect cleanly to backend logic.
          </p>
        </motion.div>

        <div className="relative mt-14 space-y-8">
          <div className="absolute bottom-0 left-[7.35rem] top-0 hidden w-px bg-border/80 lg:block" />

          {portfolioData.experiences.map((exp, index) => (
            <motion.article
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.15 }}
              className="relative grid gap-4 lg:grid-cols-[190px_1fr]"
            >
              <div className="lg:pt-4">
                <div className="inline-flex rounded-full border border-border/80 bg-card/80 px-4 py-2 text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground backdrop-blur">
                  {exp.period}
                </div>
                <p className="mt-4 text-sm font-medium text-muted-foreground">{exp.type}</p>
              </div>

              <div className="relative paper-card p-6 md:p-8">
                <div className="absolute left-0 top-10 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-primary ring-8 ring-background lg:block" />

                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-3xl font-semibold display-font">{exp.title}</h3>
                    <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                      <span className="font-semibold text-foreground">{exp.company}</span>
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <Badge variant="outline" className="rounded-full border-border/80 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em]">
                    {`0${index + 1}`}
                  </Badge>
                </div>

                <div className="accent-divider mt-8" />

                <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <h4 className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                      <TrendingUp className="h-4 w-4 text-primary" />
                      Key Achievements
                    </h4>
                    <ul className="mt-4 space-y-3">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-3 text-sm leading-7 text-muted-foreground">
                          <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">Stack</h4>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="rounded-full border-border/80 px-3 py-1.5 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
