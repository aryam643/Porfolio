"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: "Backend Languages",
      skills: [
        { name: "Python", level: 95, color: "bg-yellow-500" },
        { name: "Node.js", level: 90, color: "bg-green-500" },
        { name: "C++", level: 85, color: "bg-blue-500" },
        { name: "Java", level: 80, color: "bg-red-500" },
      ],
    },
    {
      title: "Frameworks & APIs",
      skills: [
        { name: "Django/DRF", level: 95, color: "bg-green-600" },
        { name: "Express.js", level: 90, color: "bg-gray-600" },
        { name: "FastAPI", level: 88, color: "bg-teal-500" },
        { name: "Flask", level: 85, color: "bg-blue-400" },
      ],
    },
    {
      title: "Databases & Storage",
      skills: [
        { name: "PostgreSQL", level: 92, color: "bg-blue-600" },
        { name: "MongoDB", level: 88, color: "bg-green-500" },
        { name: "Redis", level: 90, color: "bg-red-500" },
        { name: "InfluxDB", level: 75, color: "bg-purple-500" },
      ],
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS", level: 88, color: "bg-orange-500" },
        { name: "Docker", level: 92, color: "bg-blue-500" },
        { name: "Kubernetes", level: 80, color: "bg-blue-600" },
        { name: "CI/CD", level: 85, color: "bg-green-600" },
      ],
    },
    {
      title: "System Design",
      skills: [
        { name: "Microservices", level: 90, color: "bg-purple-600" },
        { name: "Load Balancing", level: 85, color: "bg-indigo-500" },
        { name: "Caching", level: 88, color: "bg-red-600" },
        { name: "Message Queues", level: 82, color: "bg-yellow-600" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", level: 95, color: "bg-orange-600" },
        { name: "Linux", level: 90, color: "bg-gray-700" },
        { name: "Nginx", level: 85, color: "bg-green-700" },
        { name: "Elasticsearch", level: 78, color: "bg-yellow-500" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 font-mono">
            {"<Skills />"}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 code-gradient">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive backend development skills with focus on scalability, performance, and reliability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-lg text-center">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{
                        duration: 0.6,
                        delay: categoryIndex * 0.1 + skillIndex * 0.1,
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                      </div>
                      <div className="relative">
                        <Progress value={0} className="h-2" />
                        <motion.div
                          className={`absolute top-0 left-0 h-2 rounded-full ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1.5,
                            delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold mb-6">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "GraphQL",
              "WebSockets",
              "gRPC",
              "Apache Kafka",
              "RabbitMQ",
              "Prometheus",
              "Grafana",
              "Jenkins",
              "Terraform",
              "Ansible",
              "Celery",
              "Socket.io",
              "JWT",
              "OAuth",
              "SSL/TLS",
              "API Gateway",
              "Service Mesh",
              "Istio",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
