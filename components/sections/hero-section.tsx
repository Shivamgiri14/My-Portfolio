"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Download, Play, Sparkles, Code2, Zap, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect, useCallback } from "react"

export function HeroSection() {
  const [currentBackground, setCurrentBackground] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  
  const roles = [
    "Electronics & Communication Engineer",
    "Embedded Systems Developer",
    "Machine Learning Explorer",
    "Full Stack Developer",
    "DSA Problem Solver"
  ]
  
  const scrollToAbout = () => {
    const element = document.querySelector("#about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }


  // Auto-cycle through backgrounds every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % 4)
    }, 20000)
    return () => clearInterval(interval)
  }, [])

  // Auto-cycle through roles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  // Set visibility on mount
  useEffect(() => {
    setIsVisible(true)
  }, [])

  const backgroundVariants = {
    initial: { opacity: 0, scale: 1.1 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  }

  const textVariants = {
    initial: { opacity: 0, y: 50, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 1.1 }
  }

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 30, scale: 0.9 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Animated background mesh */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-teal-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900" />
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, #06b6d4 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, #8b5cf6 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, #3b82f6 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      {/* Background Option 1: Animated Gradient Waves */}
      {currentBackground === 0 && (
        <motion.div 
          className="absolute inset-0"
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 dark:from-blue-800 dark:via-purple-800 dark:to-teal-800">
            <div className="absolute inset-0 opacity-40">
              {/* Enhanced flowing waves */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-y-12"
                animate={{ x: ["-100%", "100%"], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute top-1/4 left-0 w-full h-64 bg-gradient-to-r from-cyan-400/30 via-blue-400/30 to-transparent rotate-12"
                animate={{ 
                  x: ["-100%", "100%"],
                  scaleY: [1, 1.2, 1]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute bottom-1/4 right-0 w-full h-48 bg-gradient-to-l from-teal-400/30 via-green-400/30 to-transparent -rotate-12"
                animate={{ 
                  x: ["100%", "-100%"],
                  scaleY: [1, 1.3, 1]
                }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              />
              {/* Additional animated layers */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      )}

      {/* Background Option 2: Geometric Patterns */}
      {currentBackground === 1 && (
        <motion.div 
          className="absolute inset-0"
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
            <div className="absolute inset-0">
              {/* Animated geometric shapes */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                  style={{
                    left: `${10 + (i * 8)}%`,
                    top: `${20 + (i * 5)}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
              {/* Hexagonal pattern overlay */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `radial-gradient(circle at 25px 25px, #60a5fa 2px, transparent 2px)`,
                backgroundSize: '50px 50px'
              }} />
            </div>
          </div>
        </motion.div>
      )}

      {/* Background Option 3: Particle Field */}
      {currentBackground === 2 && (
        <motion.div 
          className="absolute inset-0"
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-blue-900">
            <div className="absolute inset-0">
              {/* Floating particles */}
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/40 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100 - Math.random() * 100],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 10,
                    repeat: Infinity,
                    delay: Math.random() * 5,
                  }}
                />
              ))}
              {/* Connecting lines effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-pulse" />
            </div>
          </div>
        </motion.div>
      )}

      {/* Background Option 4: Custom Image with Overlay */}
      {currentBackground === 3 && (
        <motion.div 
          className="absolute inset-0"
          variants={backgroundVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-blue-800 to-purple-900">
            {/* You can replace this with your own image */}
            <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
            {/* Animated overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
        </motion.div>
      )}

      {/* Enhanced floating elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-l from-teal-500/20 to-green-500/20 rounded-full blur-2xl"
        animate={{
          y: [0, 30, 0],
          x: [0, -25, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Background Control Buttons */}
      <div className="absolute top-8 right-8 z-20 flex gap-2">
        {[0, 1, 2, 3].map((index) => (
          <motion.button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentBackground === index 
                ? 'bg-white shadow-lg scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            onClick={() => setCurrentBackground(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            title={[
              "Gradient Waves",
              "Geometric Patterns", 
              "Particle Field",
              "Custom Image"
            ][index]}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          className="max-w-5xl mx-auto"
        >
          {/* Floating icons */}
          <div className="absolute -top-10 -left-10 md:-left-20">
            <motion.div
              className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
              animate={{ 
                rotate: [0, 360],
                y: [0, -20, 0]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <Code2 className="w-8 h-8 text-blue-500" />
            </motion.div>
          </div>
          
          <div className="absolute -top-5 -right-10 md:-right-20">
            <motion.div
              className="w-14 h-14 bg-gradient-to-r from-teal-500/20 to-green-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm"
              animate={{ 
                rotate: [360, 0],
                y: [0, -15, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            >
              <Zap className="w-7 h-7 text-teal-500" />
            </motion.div>
          </div>

          {/* Enhanced name with sparkle effect */}
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 text-yellow-400" />
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 relative">
              <motion.span
                className="bg-gradient-to-r from-gray-900 via-blue-800 to-teal-600 dark:from-white dark:via-blue-400 dark:to-teal-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Shivam Kumar Giri
              </motion.span>
              
              {/* Glowing underline */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, delay: 1 }}
              />
            </h1>
          </motion.div>

          {/* Animated role display */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="h-16 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentRole}
                  className="text-xl md:text-3xl text-gray-600 dark:text-gray-300 font-medium max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {roles[currentRole]}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Enhanced button group */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                />
                <span className="relative z-10 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  View My Work
                </span>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-4 rounded-full font-semibold border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 bg-transparent backdrop-blur-sm relative group"
                onClick={() => window.open('/ShivamKumarGiri_Resume.pdf', '_blank')}
              >
                <span className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Resume
                </span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-6"
          >
            {[
              { icon: Github, href: "#", color: "hover:text-gray-900 dark:hover:text-white" },
              { icon: Linkedin, href: "#", color: "hover:text-blue-600" },
              { icon: Mail, href: "#", color: "hover:text-red-500" }
            ].map(({ icon: Icon, href, color }, index) => (
              <motion.a
                key={index}
                href={href}
                className={`p-3 rounded-full bg-white/10 backdrop-blur-sm text-gray-600 dark:text-gray-400 ${color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-300 group"
        onClick={scrollToAbout}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <div className="relative bg-white/5 backdrop-blur-sm rounded-full p-3 border border-white/10">
            <ChevronDown className="w-6 h-6" />
          </div>
        </div>
      </motion.button>
    </section>
  )
}
