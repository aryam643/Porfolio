"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, ExternalLink, Github, Server, Database, Zap, Users } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

const projectIconMap = {
  users: Users,
  database: Database,
  zap: Zap,
  server: Server,
} as const

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-120px" })

  return (
    <section id="projects" className="section-shell">
      <div className="section-inner">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 36 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="section-kicker">Projects</div>
            <h2 className="section-title max-w-4xl">A portfolio built around systems, product surfaces, and technical range rather than filler.</h2>
            <p className="section-copy max-w-3xl">
              I&apos;ve selected projects that show different strengths: real-time collaboration, systems programming,
              dashboard work, AI integration, and product-oriented full-stack execution.
            </p>
          </div>

          <Button variant="outline" className="w-fit rounded-full border-border/80 bg-card/70 px-6 hover:bg-card" asChild>
            <a href="https://github.com/aryam643" target="_blank" rel="noreferrer">
              View All Repos
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioData.projects.map((project, index) => {
            const Icon = projectIconMap[project.iconKey as keyof typeof projectIconMap]
            const isFeatured = index === 0 || index === 3

            return (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 36 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
                transition={{ duration: 0.65, delay: index * 0.08 + 0.12 }}
                className={isFeatured ? "md:col-span-2" : ""}
              >
                <div className={`paper-card h-full ${isFeatured ? "lg:grid lg:grid-cols-[1.1fr_0.9fr]" : ""}`}>
                  <div className="relative p-6 md:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-[0.68rem] uppercase tracking-[0.3em] text-muted-foreground">{project.category}</p>
                          <p className="mt-1 text-xs uppercase tracking-[0.24em] text-muted-foreground">{`Project 0${index + 1}`}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="rounded-full border-border/80 px-3 py-1 text-[0.68rem] uppercase tracking-[0.22em]">
                        Active
                      </Badge>
                    </div>

                    <h3 className="mt-8 text-3xl font-semibold leading-tight display-font md:text-4xl">{project.name}</h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{project.description}</p>

                    <div className="mt-8 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant="outline" className="rounded-full border-border/75 px-3 py-1.5 text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <Button size="sm" className="rounded-full bg-foreground px-5 text-background hover:bg-foreground/90" asChild>
                        <a href={project.sourceCode} target="_blank" rel="noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </a>
                      </Button>
                      {project.livePreview && (
                        <Button size="sm" variant="outline" className="rounded-full border-border/80 bg-card/70 px-5 hover:bg-card" asChild>
                          <a href={project.livePreview} target="_blank" rel="noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Preview
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="soft-grid border-t border-border/75 p-6 md:p-8 lg:border-l lg:border-t-0">
                    <p className="text-[0.68rem] uppercase tracking-[0.3em] text-muted-foreground">Project Signals</p>
                    <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                      {project.metrics.map((metric, metricIndex) => (
                        <motion.div
                          key={metric}
                          initial={{ opacity: 0, x: 14 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 14 }}
                          transition={{ duration: 0.4, delay: index * 0.08 + metricIndex * 0.06 + 0.24 }}
                          className="rounded-[1.35rem] border border-border/75 bg-background/80 p-4"
                        >
                          <p className="text-sm font-medium text-foreground">{metric}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="accent-divider mt-8" />

                    <p className="mt-8 text-xs uppercase tracking-[0.28em] text-muted-foreground">
                      {isFeatured ? "Featured build" : "Supporting build"}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {isFeatured
                        ? "Chosen for the portfolio because it combines user-facing polish with meaningful technical constraints."
                        : "Included because it adds range without repeating the same problem shape."}
                    </p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
