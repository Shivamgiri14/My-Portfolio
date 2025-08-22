"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles, Code2 } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative overflow-hidden py-12">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/30 to-indigo-900 dark:from-black dark:via-gray-900 dark:to-black" />
        {/* Floating elements */}
        <motion.div
          className="absolute top-4 left-1/4 w-12 h-12 bg-gradient-to-r from-blue-400/15 to-purple-400/15 rounded-full blur-lg"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-4 right-1/3 w-8 h-8 bg-gradient-to-r from-teal-400/20 to-green-400/20 rounded-full blur-sm"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Decorative top border */}
          <motion.div
            className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 128 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          />
          
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Floating sparkles */}
            <motion.div
              className="absolute -top-2 -left-8 opacity-70"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </motion.div>
            
            <motion.div
              className="absolute -top-1 -right-6 opacity-60"
              animate={{
                rotate: [0, -360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >
              <Code2 className="w-4 h-4 text-blue-400" />
            </motion.div>
            
            <motion.p 
              className="flex items-center justify-center space-x-2 text-gray-300 text-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span>Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-5 h-5 text-red-500 fill-current" />
              </motion.div>
              <span>by</span>
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent font-semibold"
                whileHover={{ 
                  backgroundPosition: ["0% 50%", "100% 50%"],
                  transition: { duration: 0.5 }
                }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Shivam Kumar Giri
              </motion.span>
            </motion.p>
          </motion.div>
          
          {/* Copyright with animation */}
          <motion.p 
            className="text-gray-400 text-sm relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.span
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              © 2024 All rights reserved.
            </motion.span>
            
            {/* Subtle floating dots */}
            <motion.div
              className="absolute -left-4 top-1/2 w-1 h-1 bg-blue-400/60 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute -right-4 top-1/2 w-1 h-1 bg-teal-400/60 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            />
          </motion.p>
          
          {/* Bottom decorative element */}
          <motion.div
            className="flex justify-center space-x-2 mt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}
