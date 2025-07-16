import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-accent-50 to-primary-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-8"
          variants={itemVariants}
        >
          <div className="relative inline-block">
            <motion.img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-gradient-to-r from-primary-500 to-accent-500 shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 opacity-75 blur"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-primary-600 via-accent-500 to-primary-600 bg-clip-text text-transparent animate-pulse-slow">
            Hi, I'm Alex
          </span>
        </motion.h1>

        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-gray-700 dark:text-gray-300"
          variants={itemVariants}
        >
          <span className="relative">
            Front-End Developer
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            />
          </span>
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          I create beautiful, interactive, and user-friendly web experiences with modern technologies.
          Let's build something amazing together!
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={itemVariants}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          
          <motion.button
            className="px-8 py-4 border-2 border-primary-500 text-primary-500 dark:text-primary-400 rounded-full font-semibold text-lg hover:bg-primary-500 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.button>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6 mb-12"
          variants={itemVariants}
        >
          {[
            { icon: Github, href: '#', color: 'hover:text-gray-800 dark:hover:text-white' },
            { icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
            { icon: Mail, href: '#', color: 'hover:text-red-500' },
          ].map(({ icon: Icon, href, color }, index) => (
            <motion.a
              key={index}
              href={href}
              className={`p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-600 dark:text-gray-400 ${color} transition-all duration-300`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          className="animate-bounce"
          variants={itemVariants}
        >
          <ArrowDown className="mx-auto text-primary-500 dark:text-primary-400" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};