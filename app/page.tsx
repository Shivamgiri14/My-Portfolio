"use client"
import { motion, useScroll, useSpring } from "framer-motion"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ProjectsSection } from "@/components/sections/projects-section"
import { ResumeSection } from "@/components/sections/resume-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="relative">
        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-teal-500 transform-origin-0 z-50"
          style={{ scaleX }}
        />

        <Header />

        <main className="overflow-hidden">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ResumeSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}
