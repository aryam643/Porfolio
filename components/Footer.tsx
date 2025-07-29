"use client"

import { motion } from "framer-motion"
import { Code2, Terminal, Heart } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-secondary/50 py-12 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          {/* Logo */}
          <motion.div className="flex items-center justify-center space-x-2" whileHover={{ scale: 1.05 }}>
            <div className="flex items-center space-x-1">
              <Terminal className="h-6 w-6 text-primary" />
              <Code2 className="h-6 w-6 text-secondary-foreground" />
            </div>
            <h3 className="text-2xl font-bold code-gradient font-mono">Aryam.dev</h3>
          </motion.div>

          {/* Copyright */}
          <div className="space-y-2">
            <p className="text-muted-foreground font-mono">
              © 2024 Aryam Sharma. Built with Next.js, TypeScript & Three.js
            </p>
            <motion.p
              className="text-sm text-muted-foreground flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> and lots of ☕ for scalable systems
            </motion.p>
          </div>

          {/* Tech Stack */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 pt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {["Next.js", "TypeScript", "Three.js", "Framer Motion", "Tailwind CSS"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-mono border border-primary/20"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
