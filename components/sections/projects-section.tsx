"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
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
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in embedded systems, IoT, and machine learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-gray-50 dark:bg-gray-900 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center space-x-2 bg-transparent"
                      onClick={() => window.open(project.github, '_blank')}
                      disabled={project.github === '#'}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </Button>
                    <Button
                      size="sm"
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600"
                      onClick={() => window.open(project.demo, '_blank')}
                      disabled={project.demo === '#'}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Demo</span>
                    </Button>
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
