"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, TrendingUp } from "lucide-react"

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences = [
    {
      title: "Senior Backend Developer",
      company: "Tech Innovations Inc.",
      location: "Remote",
      period: "2023 - Present",
      type: "Full-time",
      achievements: [
        "Architected microservices handling 1M+ daily requests",
        "Reduced API response time by 60% through optimization",
        "Led team of 5 developers in building scalable systems",
        "Implemented CI/CD pipelines reducing deployment time by 80%",
      ],
      technologies: ["Python", "Django", "PostgreSQL", "Redis", "AWS", "Docker", "Kubernetes"],
    },
    {
      title: "Backend Developer",
      company: "StartupXYZ",
      location: "Bangalore, India",
      period: "2022 - 2023",
      type: "Full-time",
      achievements: [
        "Built RESTful APIs serving 100K+ users",
        "Designed database schema for multi-tenant architecture",
        "Integrated third-party payment gateways",
        "Implemented real-time notifications system",
      ],
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "AWS Lambda", "Stripe API"],
    },
    {
      title: "Software Development Intern",
      company: "TechCorp Solutions",
      location: "Delhi, India",
      period: "2021 - 2022",
      type: "Internship",
      achievements: [
        "Developed automated testing frameworks",
        "Contributed to open-source projects",
        "Optimized database queries improving performance by 40%",
        "Collaborated with cross-functional teams",
      ],
      technologies: ["Python", "Flask", "MySQL", "Git", "Jenkins", "Pytest"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge variant="outline" className="mb-4 font-mono">
              {"<Experience />"}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 code-gradient">Professional Journey</h2>
            <p className="text-xl text-muted-foreground">
              Building scalable systems and leading development teams across different domains
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/20">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                          {exp.title}
                        </CardTitle>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                          <span className="font-semibold text-primary">{exp.company}</span>
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary" className="w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-green-500" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                              <span className="text-primary mt-1.5 text-xs">▶</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
