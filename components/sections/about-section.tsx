"use client"

import { motion } from "framer-motion"
import { Code, Cpu, Brain, MapPin } from "lucide-react"
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
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a final-year Electronics and Communication Engineering student at VIT Chennai, passionate about
                bridging the gap between hardware and software through innovative embedded systems solutions.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Originally from Ranchi, Jharkhand, I love building tech projects that solve real-world problems. My
                interests span across embedded systems, machine learning, and Python development, always seeking to
                create impactful solutions.
              </p>

              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Ranchi, Jharkhand | VIT Chennai</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 border-0 bg-white dark:bg-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-blue-500 dark:text-blue-400">{skill.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{skill.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
