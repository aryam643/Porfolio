import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"
import { portfolioData } from "@/lib/portfolio-data"

export const metadata: Metadata = {
  title: `${portfolioData.name} | ${portfolioData.headline}`,
  description: portfolioData.summary,
  icons: {
    icon: "/placeholder-logo.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
