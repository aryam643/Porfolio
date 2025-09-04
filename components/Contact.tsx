"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Mail, Send, Github, Linkedin, Instagram, MapPin, Clock, Coffee } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || "Failed to send message")
      }

      toast({
        title: "Message sent successfully!",
        description: "Thanks for reaching out — I'll get back to you within 24 hours.",
      })
      setFormData({ name: "", email: "", message: "" })
    } catch (err: any) {
      toast({
        title: "Could not send message",
        description: err?.message || "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/aryam643", label: "GitHub", color: "hover:text-gray-600" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/aryamsharma/",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/_aryamsharma_/",
      label: "Instagram",
      color: "hover:text-pink-600",
    },
  ]

  const contactInfo = [
    { icon: Mail, label: "Email", value: "aryamsharma.dev@gmail.com", href: "mailto:aryamsharma.dev@gmail.com" },
    { icon: MapPin, label: "Location", value: "Available for Remote Work", href: null },
    { icon: Clock, label: "Response Time", value: "Within 24 hours", href: null },
    { icon: Coffee, label: "Availability", value: "Open to opportunities", href: null },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 font-mono">
            {"<Contact />"}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 code-gradient">Let's Build Something Amazing</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next backend project? I'm always excited to work on challenging problems and scalable
            solutions. Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Send me a message
                </CardTitle>
                <CardDescription>
                  Whether it's about a project, collaboration, or just to say hi - I'd love to hear from you!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="font-mono"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="font-mono"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project or just say hello..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="font-mono"
                    />
                  </div>
                  <Button type="submit" className="w-full pulse-glow" disabled={isSubmitting}>
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 code-gradient">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary/70 transition-colors"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-primary hover:underline font-mono text-sm">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground font-mono text-sm">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Card className="bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Coffee className="h-5 w-5 text-primary" />
                    Currently Available
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    I'm actively looking for new opportunities in backend development, system architecture, and product
                    engineering roles.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Full-time</Badge>
                    <Badge variant="secondary">Contract</Badge>
                    <Badge variant="secondary">Remote</Badge>
                    <Badge variant="secondary">Consulting</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Response Promise */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-secondary/30 rounded-lg p-6 border border-primary/10"
            >
              <h4 className="text-lg font-semibold mb-2 text-primary">Quick Response Guarantee</h4>
              <p className="text-muted-foreground text-sm">
                I typically respond to all messages within 24 hours. For urgent matters or immediate opportunities, feel
                free to reach out on LinkedIn for faster response.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
