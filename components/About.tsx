"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Database, Cloud, Code, Users, Zap } from "lucide-react"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const expertise = [
    {
      icon: Server,
      title: "Backend Architecture",
      description: "Designing scalable microservices and distributed systems",
      color: "text-blue-500",
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Optimizing queries and designing efficient data models",
      color: "text-green-500",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "AWS, Docker, Kubernetes, and serverless architectures",
      color: "text-purple-500",
    },
    {
      icon: Code,
      title: "API Development",
      description: "FAST APIs, RESTful APIs, GraphQL, and real-time communication",
      color: "text-orange-500",
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Leading planning and execution of development projects",
      color: "text-pink-500",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "System optimization and high-performance computing",
      color: "text-yellow-500",
    },
  ]

  const stats = [
    { label: "Year Experience", value: "1", color: "text-blue-500" },
    { label: "Projects", value: "15+", color: "text-green-500" },
    { label: "APIs Built", value: "10+", color: "text-purple-500" },
    { label: "Systems Scaled", value: "2", color: "text-orange-500" },
  ]

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Badge variant="outline" className="mb-4 font-mono">
              {"<About />"}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 code-gradient">Software Product Developer & Backend Engineer</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about building robust, scalable backend systems that power modern applications. I specialize in
              creating efficient architectures that handle millions of requests while maintaining high performance and
              reliability.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-primary/20">
                  <CardContent className="p-0">
                    <h3 className={`text-3xl font-bold ${stat.color} font-mono`}>{stat.value}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Expertise Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 group hover:-translate-y-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`p-3 rounded-lg bg-secondary ${item.color}`}>
                        <item.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Philosophy */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Card className="p-8 bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/20">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 code-gradient">My Development Philosophy</h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-mono">
                  <span className="text-primary">"</span>
                  Clean code, scalable architecture, and continuous learning are the pillars of great software. I
                  believe in writing code that not only works today but evolves gracefully with tomorrow's requirements.
                  <span className="text-primary">"</span>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
