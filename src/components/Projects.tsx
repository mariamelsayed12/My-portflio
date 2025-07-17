import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform (Shopzy Store)',
      description: 'A modern e-commerce platform built with React, TypeScript,Supabase,Chakra UI,  and Stripe integration. Features include product list, shopping cart, user login, and dark/light mode.',
      image: '/photo_2025-07-17_04-03-59.jpg',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Chakra UI ',' APIs with Redux Toolkit Query'],
      liveUrl: 'https://full-stack-ecommerce-app-shopzy.vercel.app/',
      githubUrl: 'https://github.com/mariamelsayed12/FullStack-Ecommerce-App-Shopzy',
      featured: true
    },
    {
      id: 2,
      title: 'CodeMap – AI-Powered Learning Platform (Graduation Project)',
      description: 'Full-stack learning platform with roadmap generation, progress tracking, AI chatbot, and tasks assigned to every roadmap.',
      image: '/photo_2025-07-17_04-27-51.jpg',
      technologies: ['react-hot-toast','React Hook Form','React Router', 'TypeScript', 'React Router', 'framer-motion'],
      liveUrl: 'https://codemapuser.netlify.app',
      githubUrl: 'https://github.com/CodeMapGp/Roadmap',
      featured: false
    },
    {
      id: 3,
      title: 'Visual Studio Code Clone',
      description: 'Developed a detailed front-end VS Code clone using React.js precisely replicating the look and core features of the actual VS Code editor',
      image: '/photo_2025-07-17_04-17-29.jpg',
      technologies: [ 'React.js', 'react-resizable-panels', 'react-syntax-highlighter', 'Redux Toolkit','Tailwind CSS'],
      liveUrl: 'https://visual-studio-code-clone.vercel.app/',
      githubUrl: 'https://github.com/mariamelsayed12/visual-studio-code-clone',
      featured: true
    },
    {
      id: 4,
      title: 'Full-Stack To-Do List',
      description: 'Built a full-stack To-Do app using Next.js, Users can add, edit, mark, and delete tasks easily.',
      image: '/photo_2025-07-17_04-35-17.jpg',
      technologies: ['Next.js', 'shadcn/ui', 'MongoDB', 'Prisma','Clerk authentication'],
      liveUrl: 'https://full-stack-todo-app-next-js.vercel.app/',
      githubUrl: 'https://github.com/mariamelsayed12/Full-Stack-Todo-App-with-Next.js-and-MonogoDB',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations, dark mode, and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['React', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: 'https://github.com/mariamelsayed12/My-portflio',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-[#f6f6f6] dark:bg-[#111111] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`
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
            <span className="bg-gradient-to-r from-amber-500 via-amber-300 to-amber-500  dark:from-[#ffcb74] dark:via-amber-300 dark:to-[#ffcb74] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-[#ffcb74] mx-auto rounded-full" />
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-white dark:bg-[#2f2f2f] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-[#2f2f2f]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                >
                  <div className="flex space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      className="p-3 bg-white/90 rounded-full text-gray-800 hover:bg-white transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      className="p-3 bg-white/90 rounded-full text-gray-800 hover:bg-white transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-[#ffcb74] dark:group-hover:text-[#ffcb74] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-[#ffcb74]/20 dark:bg-[#ffcb74]/20 text-[#2f2f2f] dark:text-[#ffcb74] rounded-full text-xs font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.1 * techIndex }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center space-x-2 text-[#ffcb74] hover:text-[#ffcb74]/80 dark:hover:text-[#ffcb74]/80 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    <Eye size={16} />
                    <span className="text-sm font-medium">Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Source Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Other Projects
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group bg-white dark:bg-[#2f2f2f] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-[#2f2f2f]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-[#ffcb74] dark:group-hover:text-[#ffcb74] transition-colors duration-300">
                    {project.title}
                  </h4>
                  <div className="flex space-x-2">
                    <motion.a
                      href={project.liveUrl}
                      className="p-2 text-gray-400 hover:text-[#ffcb74] transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                    </motion.a>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-[#ffcb74]/20 dark:bg-[#ffcb74]/20 text-[#2f2f2f] dark:text-[#ffcb74] rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-[#ffcb74]/20 dark:bg-[#ffcb74]/20 text-[#2f2f2f] dark:text-[#ffcb74] rounded text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};