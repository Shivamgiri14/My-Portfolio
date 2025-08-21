"use client"

import { motion } from "framer-motion"
import { Download, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ResumeSection() {
  const handleDownload = () => {
    // In a real application, this would download the actual resume PDF
    const link = document.createElement("a")
    link.href = "/ShivamKumarGiri_Resume.pdf"
    link.download = "Shivam_Kumar_Giri_Resume.pdf"
    link.click()
  }

  const handleView = () => {
    // In a real application, this would open the resume in a new tab
    window.open("/ShivamKumarGiri_Resume.pdf", "_blank")
  }

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-600 dark:from-white dark:to-blue-400 bg-clip-text text-transparent">
            Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Download my resume to learn more about my experience, skills, and achievements.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Shivam Kumar Giri - Resume
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Electronics and Communication Engineering Student
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={handleView}
                      variant="outline"
                      size="lg"
                      className="flex items-center space-x-2 px-6 py-3 rounded-full font-semibold border-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 bg-transparent"
                    >
                      <Eye className="w-5 h-5" />
                      <span>View Resume</span>
                    </Button>

                    <Button
                      onClick={handleDownload}
                      size="lg"
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download PDF</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Resume Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="border-0 bg-white dark:bg-gray-800 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Education</h4>
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-gray-800 dark:text-gray-200">VIT Chennai</h5>
                        <p className="text-gray-600 dark:text-gray-300">
                          B.Tech in Electronics and Communication Engineering
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">2022 - 2026</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Skills</h4>
                    <div className="space-y-2">
                      <p className="text-gray-600 dark:text-gray-300">• Embedded Systems & IoT</p>
                      <p className="text-gray-600 dark:text-gray-300">• Python & Machine Learning</p>
                      <p className="text-gray-600 dark:text-gray-300">• Data Structures & Algorithms</p>
                      <p className="text-gray-600 dark:text-gray-300">• Database Management System</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
