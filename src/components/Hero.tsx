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
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-accent-50 to-primary-100 dark:from-[#1111] dark:via-[#2f2f2f] dark:to-[#1111]">
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-[#f6f6f6] to-[#ffcb74] rounded-full"
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
          {/* <div className="relative inline-block">
            <motion.img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-gradient-to-r from-[#f6f6f6] to-[#ffcb74] shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#f6f6f6] to-[#ffcb74] opacity-75 blur"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div> */}
        </motion.div>
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
          variants={itemVariants}
        >
          <span className="bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500   dark:from-[#ffcb74] dark:via-amber-300 dark:to-[#ffcb74] bg-clip-text text-transparent animate-pulse-slow">
            Hi, I'm Mariam 
          </span>
        </motion.h1>
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6 text-gray-700 dark:text-gray-300"
          variants={itemVariants}
        >
          <span className="relative">
            Front-End Developer
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ffcb74] to-amber-300 rounded-full"
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
          I focus on writing clean, maintainable code and crafting responsive interfaces that work seamlessly across devices.
          Let&apos;s build something amazing together and turn ideas into reality!
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          variants={itemVariants}
        >
            <motion.a
          href="#projects"
          className="px-8 py-4 bg-gradient-to-r from-[#ffcb74] to-amber-300 dark:from-[#ffcb74] dark:to-[#f6f6f6] text-[#2f2f2f] rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block text-center"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
        View My Work
        </motion.a>
          

          
        <motion.a
        href="/Mariam_Elsayed_CV.pdf"
        download
        className="px-8 py-4 border-2 border-[#ffcb74] text-[#2f2f2f] dark:text-[#ffcb74] rounded-full font-semibold text-lg hover:bg-[#ffcb74] dark:hover:text-[#2f2f2f] transition-all duration-300 inline-block text-center"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        >
            Download CV
        </motion.a>

        </motion.div>
        <motion.div
          className="flex justify-center space-x-6 mb-12"
          variants={itemVariants}
        >
          {[
            { icon: Github, href: 'https://github.com/mariamelsayed12', color: 'hover:text-gray-800 dark:hover:text-white' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/mariam-elsayed123', color: 'hover:text-blue-600' },
            { icon: Mail, href: 'mailto:ms9441505@gmail.com', color: 'hover:text-red-500' },
          ].map(({ icon: Icon, href, color }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              className={`p-3 rounded-full bg-white dark:bg-[#2f2f2f] shadow-lg text-gray-600 dark:text-[#f6f6f6] ${color} transition-all duration-300`}
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
          <ArrowDown className="mx-auto text-amber-500 dark:text-[#FFCB74]" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
};