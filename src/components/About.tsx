import { motion } from 'framer-motion';
import { Code, Palette, Zap, Heart } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my passion.',
      color: 'from-lime-500 to-green-500'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Bringing creative ideas to life with beautiful user interfaces.',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed and exceptional user experience.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Heart,
      title: 'User-Focused',
      description: 'Creating intuitive experiences that users love and enjoy.',
      color: 'from-emerald-800 to-emerald-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-[#111111] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ffcb74] to-amber-300" 
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500  dark:from-[#ffcb74] dark:via-amber-300 dark:to-[#ffcb74]  bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffcb74] to-amber-300 dark:from-[#ffcb74] dark:to-[#f6f6f6] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative flex items-center justify-center">
              <motion.img
                src="/photo_2025-03-06_01-38-20.jpg"
                alt="About me"
                className="rounded-full shadow-2xl lg:w-96 lg:h-96  md:w-80 md:h-80 w-64 h-64  object-cover"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-14 bg-gradient-to-r from-[#fce1b4] to-[#fddea9] rounded-full opacity-20 blur-3xl"
                animate={{ rotate: [0, 1, -1, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Passionate Developer & Creative Thinker
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With over 2 years of experience in front-end development, I specialize in creating 
              modern, responsive, and user-friendly web applications. I'm passionate about 
              combining creativity with functionality to deliver exceptional digital experiences.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, contributing to 
              open-source projects, or experimenting with the latest web technologies. I believe 
              in continuous learning and staying up-to-date with industry best practices.
            </p>
            
            <motion.div
              className="flex flex-wrap gap-3 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {['React.js', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Chakra UI','shadcn/ui',' MongoDB'].map((tech, index) => (
                <motion.span
                  key={tech}
              className="
              px-4 py-2 
  bg-gradient-to-r from-[#cbcbcb] to-[#ffcb74] 
  dark:from-gray-700 dark:to-[#ffcb74] 
  text-[#1f1f1f] dark:text-[#f6f6f6] 
  rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-white dark:bg-[#2f2f2f] p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="text-white" size={24} />
                </motion.div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};