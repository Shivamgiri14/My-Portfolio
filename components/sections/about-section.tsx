"use client"

import { motion } from "framer-motion"
import { Code, Cpu, Brain, MapPin, Sparkles, Zap, Rocket, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  const skills = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Embedded Systems",
      description: "Passionate about IoT, microcontrollers, and hardware-software integration",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Data Structures & Algorithms",
      description: "Strong foundation in problem-solving and algorithmic thinking",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning",
      description: "Exploring AI/ML applications in embedded systems and data analysis",
    },
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-blue-900/30 dark:to-gray-800" />
        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-lg blur-lg rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-12 h-12 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-lg"
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div className="relative inline-block">
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-teal-600 dark:from-white dark:via-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
              About Me
            </h2>
          </motion.div>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Floating decoration */}
            <motion.div
              className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <div className="space-y-6 relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  className="absolute -left-4 top-1 w-1 h-16 bg-gradient-to-b from-blue-500 to-transparent rounded-full"
                  initial={{ height: 0 }}
                  whileInView={{ height: 64 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  I'm a final-year Electronics and Communication Engineering student at VIT Chennai, passionate about
                  bridging the gap between hardware and software through innovative embedded systems solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <motion.div
                  className="absolute -left-4 top-1 w-1 h-16 bg-gradient-to-b from-teal-500 to-transparent rounded-full"
                  initial={{ height: 0 }}
                  whileInView={{ height: 64 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  viewport={{ once: true }}
                />
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed pl-6">
                  Originally from Ranchi, Jharkhand, I love building tech projects that solve real-world problems. My
                  interests span across embedded systems, machine learning, and Python development, always seeking to
                  create impactful solutions.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 pl-6"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-2 rounded-full bg-blue-500/10 dark:bg-blue-400/10"
                >
                  <MapPin className="w-5 h-5 text-blue-500" />
                </motion.div>
                <span className="font-medium">Ranchi, Jharkhand | VIT Chennai</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
            className="space-y-6 relative"
          >
            {/* Background decorative elements */}
            <motion.div
              className="absolute -top-10 -right-5 w-20 h-20 bg-gradient-to-br from-teal-400/10 to-blue-400/10 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm relative overflow-hidden">
                  {/* Card glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    whileHover={{
                      background: [
                        "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(168, 85, 247, 0.05), rgba(20, 184, 166, 0.05))",
                        "linear-gradient(45deg, rgba(20, 184, 166, 0.05), rgba(59, 130, 246, 0.05), rgba(168, 85, 247, 0.05))",
                        "linear-gradient(45deg, rgba(168, 85, 247, 0.05), rgba(20, 184, 166, 0.05), rgba(59, 130, 246, 0.05))"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start space-x-4">
                      <motion.div 
                        className="p-3 rounded-xl bg-gradient-to-br from-blue-500/10 to-teal-500/10 text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ 
                          rotate: [0, -10, 10, 0],
                          transition: { duration: 0.5 }
                        }}
                      >
                        {skill.icon}
                        {/* Icon glow */}
                        <motion.div
                          className="absolute inset-0 rounded-xl bg-blue-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          initial={{ scale: 0.8 }}
                          whileHover={{ scale: 1.2 }}
                        />
                      </motion.div>
                      <div className="flex-1">
                        <motion.h3 
                          className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                          whileHover={{ x: 5 }}
                        >
                          {skill.title}
                        </motion.h3>
                        <motion.p 
                          className="text-gray-600 dark:text-gray-300 leading-relaxed"
                          whileHover={{ x: 5 }}
                          transition={{ delay: 0.1 }}
                        >
                          {skill.description}
                        </motion.p>
                      </div>
                      
                      {/* Floating mini icons */}
                      <motion.div
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{
                          y: [0, -5, 0],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {index === 0 && <Rocket className="w-4 h-4 text-teal-400" />}
                        {index === 1 && <Target className="w-4 h-4 text-blue-400" />}
                        {index === 2 && <Zap className="w-4 h-4 text-purple-400" />}
                      </motion.div>
                    </div>
                  </CardContent>
                  
                  {/* Bottom border gradient */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
