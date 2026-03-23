"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { ArrowUpRight, Code2, Menu, Terminal, X } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:pt-6">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`mx-auto flex max-w-7xl items-center gap-3 rounded-[1.75rem] border border-border/80 px-4 py-3 backdrop-blur-xl transition-all duration-300 md:px-5 ${
          isScrolled ? "bg-background/88 shadow-[0_20px_60px_rgba(28,32,41,0.10)]" : "bg-background/72"
        }`}
      >
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
            <Terminal className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="text-[0.62rem] uppercase tracking-[0.34em] text-muted-foreground">Portfolio 2026</p>
            <p className="text-sm font-semibold md:text-base">{portfolioData.shortName}</p>
          </div>
        </a>

        <nav className="mx-auto hidden items-center gap-1 rounded-full border border-border/70 bg-card/70 p-1 md:flex">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.18 }}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
            >
              {item.name}
            </motion.a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 md:flex">
          <a
            href={portfolioData.resumeViewUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-4 py-2 text-sm font-medium text-foreground transition-transform duration-200 hover:-translate-y-0.5"
          >
            Resume
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <ModeToggle />
        </div>

        <div className="ml-auto flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setIsMobileMenuOpen((open) => !open)}>
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 max-w-7xl rounded-[1.75rem] border border-border/80 bg-background/92 p-4 shadow-[0_24px_80px_rgba(28,32,41,0.10)] backdrop-blur-xl"
          >
            <div className="mb-4 flex items-center gap-3 rounded-2xl bg-secondary/60 p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                <Code2 className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">{portfolioData.name}</p>
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">{portfolioData.headline}</p>
              </div>
            </div>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-2xl border border-border/70 bg-card/70 px-4 py-3 text-sm font-medium text-foreground"
                >
                  {item.name}
                </a>
              ))}
              <a
                href={portfolioData.resumeViewUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-between rounded-2xl bg-foreground px-4 py-3 text-sm font-medium text-background"
              >
                View Resume
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div className="mx-auto mt-2 h-0.5 max-w-7xl origin-left rounded-full bg-gradient-to-r from-orange-400 via-primary to-teal-500" style={{ scaleX }} />
    </header>
  )
}

export default Header
