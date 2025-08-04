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
      title: "  Software Product Developer Intern",
      company: "TT Consultants",
      location: "Mohali",
      period: "2025 - Present",
      type: "Internship",
      achievements: [
        "Developed and optimized ERP modules by migrating from TCL to Django, improving system performance and scalability by 40%.",
        "Implemented frontend and backend components, integrating API communication and database operations with 95% efficiency.",
      ],
      technologies: ["Python", "Django", "PostgreSQL", "Redis", "AWS", "Docker", "TCL", "Javascript"],
    },
    {
      title: "React Developer Intern",
      company: "Pragamatic Silicon",
      location: "Noida",
      period: "2024",
      type: "Internship",
      achievements: [
        "Engineered login and payment gateway pages with Razorpay integration, ensuring secure and seamless transaction processing.",
        "Collaborated with backend team to implement RESTful API endpoints for payment gateway functionality",
      ],
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "Raazorpay"],
    },
    {
      title: "Machine Learning Intern",
      company: "IIIT Una",
      location: "Una",
      period: "2023-2024",
      type: "Internship",
      achievements: [
        "Demonstrated proficiency in data collection and analysis using IoT technologies, particularly in the context of Himachal Pradesh.",
        "Acquired knowledge and practical experience in Artificial Neural Networks (ANN) and Convolutional Neural Networks (CNN), enhancing understanding of foundational machine learning techniques.",
      ],
      technologies: ["Python", "Deep Learning", "Bi-LSTM", "Pytest"],
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
