"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Instagram, Download, ChevronDown, Server, Database, Cloud } from "lucide-react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei"

const AnimatedSphere = () => {
  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial color="#3b82f6" attach="material" distort={0.3} speed={1.5} roughness={0} />
      </Sphere>
    </Float>
  )
}

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/aryam643", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/aryamsharma/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/_aryamsharma_/", label: "Instagram" },
  ]

  const techIcons = [
    { icon: Server, label: "Backend Systems" },
    { icon: Database, label: "Database Design" },
    { icon: Cloud, label: "Cloud Architecture" },
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden matrix-bg">
      {/* 3D Background */}
      <div className="absolute inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 -z-5">
        {techIcons.map((tech, index) => (
          <motion.div
            key={tech.label}
            className="absolute"
            style={{
              left: `${20 + index * 25}%`,
              top: `${30 + index * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + index,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="p-4 bg-primary/10 rounded-full backdrop-blur-sm border border-primary/20">
              <tech.icon className="h-6 w-6 text-primary" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-mono text-sm border border-primary/20 mb-4">
              {"{ Backend Developer & System Architect }"}
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm <span className="code-gradient">Aryam Sharma</span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-3xl text-muted-foreground mb-8 font-mono"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="text-primary">const</span> role = [
            <br />
            <span className="ml-4 text-green-500">"Backend Developer",</span>
            <br />
            <span className="ml-4 text-blue-500">"Software Product Engineer",</span>
            <br />
            <span className="ml-4 text-purple-500">"System Architect"</span>
            <br />
            ];
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Specialized in building scalable backend systems, microservices architecture, and high-performance
            applications. Expert in designing robust APIs, optimizing database performance, and implementing
            cloud-native solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <Button size="lg" className="group pulse-glow" asChild>
              <a
                href="https://drive.google.com/file/d/1t7DsEhPmNeRFaaee0x9q_SO5-66PLpeh/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>

            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                  className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 border border-primary/20"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
