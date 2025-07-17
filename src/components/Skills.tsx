import { motion } from 'framer-motion';
import { Code, Palette, Database, Wrench } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      color: 'from-lime-500 to-green-500',
      skills: [
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Framer Motion', level: 70 },
        { name: 'Redux Toolkit Query, RTK Query', level: 85 },
      ]
    },
    {
      title: 'Programming Languages',
      icon: Palette,
      color: ' from-amber-200 to-[#ffcb74]',
      skills: [
        { name: 'HTML5', level: 85 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'typeScript', level: 85},
        { name: 'Java', level: 70 },
        { name: 'Python', level: 50},
        { name: 'go', level: 50 },
      ]
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'MongoDB', level: 70 },
        { name: 'prisma', level: 75 },
        { name: 'strapi', level: 80 },
        { name: 'supabase', level: 80 },
      ]
    },
    {
      title: 'Tools',
      icon: Wrench,
      color: ' from-emerald-500 to-emerald-800',
      skills: [
        { name: 'Git, GitHub', level: 70},
        { name: 'Visual Studio Code', level: 95 },
        { name: 'Vite', level: 85 },
        { name: 'postman', level: 85 },
        { name: 'figma', level: 60 },
        { name: 'yarn', level: 85 },
        { name: 'netbeans', level: 70 },
        
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-[#2f2f2f] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#fdc057] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            <span className="bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500  dark:from-[#ffcb74] dark:via-amber-300 dark:to-[#ffcb74] bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ffcb74] to-amber-300 dark:from-[#ffcb74] dark:to-[#f6f6f6] mx-auto rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to create amazing digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-white dark:bg-[#111111] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-6`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <category.icon className="text-white" size={24} />
              </motion.div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {[
            { number: '8+', label: 'Projects Completed' },
            { number: '2+', label: 'Years Experience' },
            { number: '3+', label: 'Happy Clients' },
            { number: '15+', label: 'Technologies' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#ffcb74] to-amber-300 dark:from-[#ffcb74] dark:to-[#f6f6f6] bg-clip-text text-transparent mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};