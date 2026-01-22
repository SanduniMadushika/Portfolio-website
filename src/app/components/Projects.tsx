import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Smart Past',
      description:
        'Designed and developed a full-stack smart past paper download application using React for the frontend, Node.js for backend APIs, and MongoDB for database management, ensuring smooth navigation and fast access to exam papers.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://cdn.dribbble.com/userupload/40372366/file/original-5a783918706896714d5d333b28a76eda.png?resize=752x&vertical=center',
    },
    {
      title: 'Vle web Application',
      description:
        'Developed a web-based Virtual Learning Environment (VLE) using HTML, CSS, and PHP, with user authentication, course material management, and online access to learning resources',
      technologies: ['HTML', 'CSS', 'PHP'],
      image: 'https://cdn.dribbble.com/userupload/26030215/file/original-1a00c7216684c0c1694324aeebf79fcd.png?resize=752x&vertical=center',
    },
    {
      title: 'BdayBuddy Birthday Finder Application',
      description:
        'bdaybuddy is a .NET Windows Forms application designed to help users find student details based on their birth month and day. The app provides an intuitive search interface that allows users to input a specific date and retrieve corresponding student information',
      technologies: ['JavaScript', 'API Integration', 'Chart.js'],
      image: 'https://cdn.dribbble.com/userupload/8939231/file/original-2cfe4172defedcb3ddb34b7da00b54f1.png?resize=752x&vertical=center',
    },
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio website showcasing projects and skills with modern design and animations.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Here are some of my recent academic and personal projects that
            showcase my skills and passion for development.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-50 dark:bg-gray-700 text-blue-700 dark:text-blue-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:underline">
                      <Github className="w-4 h-4" />
                      Source Code
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
