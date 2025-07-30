"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Server, Database, Zap, Users } from "lucide-react"

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      name: "Whisper Transcribe API",
      description:
        "High-performance transcription microservice using OpenAI's Whisper model. Built with Django REST framework, handles concurrent requests with Redis queue system and supports multiple audio formats.",
      stack: ["Django", "Redis", "Celery", "OpenAI Whisper", "PostgreSQL", "Docker", "AWS S3"],
      sourceCode: "https://github.com/aryam643/Aud_describe",
      category: "Backend API",
      icon: Server,
      metrics: ["99.9% uptime", "500ms avg response", "1000+ files/day"],
    },
    {
      name: "Real-time Video Communication System",
      description:
        "Scalable video calling backend with WebSocket connections, room management, and signaling server. Supports multiple concurrent sessions with load balancing and auto-scaling.",
      stack: ["Node.js", "Socket.io", "Redis", "WebRTC", "MongoDB", "Docker Swarm"],
      sourceCode: "https://github.com/aryam643/video_call",
      livePreview: "https://video-call-gules.vercel.app/",
      category: "Real-time System",
      icon: Zap,
      metrics: ["100+ concurrent users", "50ms latency", "Auto-scaling"],
    },
    {
      name: "Distributed Chat Infrastructure",
      description:
        "Microservices-based chat system with message queuing, user presence tracking, and horizontal scaling. Features include message persistence, file sharing, and real-time notifications.",
      stack: ["Node.js", "Firebase", "Redis", "WebSocket", "Microservices", "Load Balancer"],
      sourceCode: "https://github.com/aryam643/WeChat",
      livePreview: "https://we-chat-hqgc.vercel.app/",
      category: "Microservices",
      icon: Users,
      metrics: ["10K+ messages/min", "Multi-region", "99.99% availability"],
    },
    {
      name: "ML-Powered Cyberbullying Detection API",
      description:
        "RESTful API service for real-time text classification using SVM algorithms. Includes data preprocessing pipeline, model versioning, and A/B testing framework for continuous improvement.",
      stack: ["Python", "Flask", "Scikit-learn", "PostgreSQL", "Docker", "MLflow"],
      sourceCode: "https://github.com/aryam643/CyberDect",
      livePreview: "https://cyberdect.netlify.app/",
      category: "ML Backend",
      icon: Database,
      metrics: ["95% accuracy", "200ms inference", "1M+ predictions"],
    },
    {
      name: "Time-Series Prediction Engine",
      description:
        "LSTM-based prediction system for landslide detection with real-time data ingestion, model training pipeline, and alert system. Processes sensor data and provides early warning notifications.",
      stack: ["Python", "TensorFlow", "Apache Kafka", "InfluxDB", "FastAPI", "Kubernetes"],
      sourceCode: "https://github.com/aryam643/Landslide_prediction",
      category: "Data Pipeline",
      icon: Database,
      metrics: ["Real-time processing", "TB+ data handled", "24/7 monitoring"],
    },
    {
      name: "Multi-threaded Chat Server",
      description:
        "Low-level socket programming implementation of a chat server supporting multiple concurrent connections. Features include custom protocol design, thread pooling, and connection management.",
      stack: ["C++", "Socket Programming", "Multithreading", "Linux", "TCP/IP"],
      sourceCode: "https://github.com/aryam643/TerminalLink",
      category: "System Programming",
      icon: Server,
      metrics: ["1000+ connections", "Custom protocol", "Zero downtime"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 font-mono">
            {"<Projects />"}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 code-gradient">Backend Systems & APIs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scalable backend solutions, microservices architectures, and high-performance systems that power modern
            applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group hover:-translate-y-2 border-primary/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <project.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="text-xs mb-2">
                          {project.category}
                        </Badge>
                        <CardTitle className="group-hover:text-primary transition-colors duration-300">
                          {project.name}
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Performance Metrics */}
                  <div className="grid grid-cols-3 gap-2">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center p-2 bg-secondary/50 rounded text-xs">
                        <span className="font-mono text-primary">{metric}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.slice(0, 5).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.stack.length > 5 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.stack.length - 5} more
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.livePreview && (
                      <Button size="sm" asChild>
                        <a href={project.livePreview} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
