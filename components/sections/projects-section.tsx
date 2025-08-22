"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Sparkles, Star, Zap, Rocket } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ProjectsSection() {
  const projects = [
    {
      title: "Smart Storage Health Monitor",
      description:
        "An IoT-based system that monitors storage conditions using sensors to track temperature, humidity, and air quality. Features real-time alerts and data visualization dashboard.",
      techStack: ["Arduino", "IoT", "Python", "Flask", "MongoDB"],
      image: "/placeholder.svg?height=300&width=500",
      github: "#",
      demo: "#",
    },
    {
      title: "IoT Plant Monitoring System",
      description:
        "Automated plant care system with soil moisture, light, and temperature sensors. Includes mobile app for remote monitoring and automated watering system.",
      techStack: ["ESP32", "React Native", "Firebase", "Sensors", "IoT"],
      image: "/placeholder.svg?height=300&width=500",
      github: "#",
      demo: "#",
    },
    {
      title: "Task Scheduling System",
      description:
        "A web-based task scheduling application built with the MERN stack. It enables users to create, assign, and manage tasks efficiently with real-time updates, ensuring better productivity and collaboration.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript", "REST API"],
      image: "/placeholder.svg?height=300&width=500",
      github: "https://github.com/Nikhilsingh28/Task-Scheduler",
      demo: "#",
    },
    {
      title: "Fire Alarm System",
      description:
        "Intelligent fire detection system using multiple sensors and machine learning algorithms. Features SMS alerts, mobile app integration, and emergency response automation.",
      techStack: ["Arduino", "Machine Learning", "Android", "GSM", "Sensors"],
      image: "/placeholder.svg?height=300&width=500",
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-teal-50/50 dark:from-gray-800 dark:via-blue-900/20 dark:to-gray-900" />
        {/* Floating elements */}
        <motion.div
          className="absolute top-10 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-lg blur-xl rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 1.2, 1],
            y: [0, -10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-12 h-12 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-lg"
          animate={{
            x: [0, 20, 0],
            y: [0, -20, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-10 w-8 h-8 bg-gradient-to-r from-teal-400/20 to-green-400/20 rounded-full blur-sm"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
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
              className="absolute -top-3 -right-3"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Rocket className="w-10 h-10 text-orange-400" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-600 to-teal-600 dark:from-white dark:via-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </motion.div>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in embedded systems, IoT, and machine learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="h-full group border-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm relative overflow-hidden hover:shadow-2xl transition-all duration-500">
                {/* Card background glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  whileHover={{
                    background: [
                      "linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.05), rgba(20, 184, 166, 0.1))",
                      "linear-gradient(135deg, rgba(20, 184, 166, 0.1), rgba(59, 130, 246, 0.05), rgba(168, 85, 247, 0.1))",
                      "linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(20, 184, 166, 0.05), rgba(59, 130, 246, 0.1))"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                
                {/* Floating star decoration */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </motion.div>

                <div className="relative overflow-hidden rounded-t-lg">
                  <motion.img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                    whileHover={{ filter: "brightness(1.1)" }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  />
                  
                  {/* Floating tech icons on hover */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.div
                      className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-3 shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Zap className="w-6 h-6 text-blue-500" />
                    </motion.div>
                  </motion.div>
                </div>

                <CardHeader className="relative z-10">
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </motion.div>
                </CardHeader>

                <CardContent className="space-y-4 relative z-10">
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 leading-relaxed"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {project.techStack.map((tech, techIndex) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        whileHover={{ 
                          scale: 1.1,
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <Badge
                          variant="secondary"
                          className="bg-gradient-to-r from-blue-100 to-teal-100 text-blue-800 dark:from-blue-900 dark:to-teal-900 dark:text-blue-200 border border-blue-200 dark:border-blue-700 hover:shadow-md transition-all duration-200"
                        >
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="flex space-x-4 pt-4">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center space-x-2 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 border-2 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
                        onClick={() => window.open(project.github, '_blank')}
                        disabled={project.github === '#'}
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        size="sm"
                        className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => window.open(project.demo, '_blank')}
                        disabled={project.demo === '#'}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
                
                {/* Bottom accent border */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
