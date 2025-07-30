"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Box, Sphere } from "@react-three/drei"
import { Server, Database, Cloud, Zap, Shield, Globe } from "lucide-react"

const SystemDiagram = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />

      {/* API Gateway */}
      <Box position={[0, 2, 0]} args={[2, 0.5, 0.5]} material-color="#3b82f6" />

      {/* Microservices */}
      <Box position={[-3, 0, 0]} args={[1, 1, 0.5]} material-color="#10b981" />
      <Box position={[0, 0, 0]} args={[1, 1, 0.5]} material-color="#10b981" />
      <Box position={[3, 0, 0]} args={[1, 1, 0.5]} material-color="#10b981" />

      {/* Database */}
      <Sphere position={[0, -2, 0]} args={[0.8]} material-color="#f59e0b" />

      {/* Cache */}
      <Box position={[-2, -2, 0]} args={[0.8, 0.8, 0.5]} material-color="#ef4444" />

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  )
}

const Architecture = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const architecturePatterns = [
    {
      icon: Server,
      title: "Microservices Architecture",
      description:
        "Designing loosely coupled, independently deployable services with clear boundaries and responsibilities.",
      technologies: ["Docker", "Kubernetes", "API Gateway"],
      color: "text-blue-500",
    },
    {
      icon: Database,
      title: "Database Design & Optimization",
      description:
        "Implementing efficient data models, indexing strategies, and query optimization for high-performance applications.",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Database Sharding"],
      color: "text-green-500",
    },
    {
      icon: Cloud,
      title: "Cloud-Native Solutions",
      description: "Building scalable, resilient applications using cloud services and serverless architectures.",
      technologies: ["AWS", "Lambda", "ECS", "RDS","EC2", "S3", "CloudFormation","GCP"],
      color: "text-purple-500",
    },
    {
      icon: Zap,
      title: "High-Performance Systems",
      description: "Optimizing system performance through caching, load balancing, and efficient resource utilization.",
      technologies: ["Redis", "Nginx", "Load Balancers", "CDN"],
      color: "text-yellow-500",
    },
    {
      icon: Shield,
      title: "Security & Authentication",
      description: "Implementing robust security measures, authentication systems, and data protection protocols.",
      technologies: ["JWT", "OAuth", "SSL/TLS", "API Security"],
      color: "text-red-500",
    },
    {
      icon: Globe,
      title: "API Design & Integration",
      description: "Creating RESTful APIs, GraphQL endpoints, and seamless third-party service integrations.",
      technologies: ["REST", "GraphQL", "OpenAPI", "Webhooks","Anthropic","GroqAI"],
      color: "text-indigo-500",
    },
  ]

  return (
    <section id="architecture" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 font-mono">
            {"<SystemArchitecture />"}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 code-gradient">System Architecture & Design</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Expertise in designing scalable, maintainable, and high-performance backend architectures
          </p>
        </motion.div>

        {/* 3D System Diagram */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Card className="h-96 border-primary/20">
            <CardHeader>
              <CardTitle className="text-center">Microservices Architecture Visualization</CardTitle>
            </CardHeader>
            <CardContent className="h-80">
              <SystemDiagram />
            </CardContent>
          </Card>
        </motion.div>

        {/* Architecture Patterns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {architecturePatterns.map((pattern, index) => (
            <motion.div
              key={pattern.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group hover:-translate-y-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-lg bg-secondary ${pattern.color}`}>
                      <pattern.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {pattern.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">{pattern.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {pattern.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* System Design Principles */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Card className="p-8 bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/20">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-6 text-center code-gradient">System Design Principles</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Scalability", desc: "Horizontal & vertical scaling strategies" },
                  { title: "Reliability", desc: "Fault tolerance & disaster recovery" },
                  { title: "Performance", desc: "Low latency & high throughput" },
                  { title: "Security", desc: "Defense in depth & zero trust" },
                ].map((principle, index) => (
                  <motion.div
                    key={principle.title}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  >
                    <h4 className="font-semibold text-primary mb-2">{principle.title}</h4>
                    <p className="text-sm text-muted-foreground">{principle.desc}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Architecture
