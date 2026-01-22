import { motion } from 'motion/react';
import { GraduationCap, Award, Heart, Code } from 'lucide-react';

export function About() {
  const stats = [
    { icon: GraduationCap, label: 'Degree', value: 'BICT' },
    { icon: Award, label: 'GPA', value: '3.16' },
    { icon: Code, label: 'Projects', value: '3+' },
    { icon: Heart, label: 'Passion', value: 'IT' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Undergraduate Student
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                I'm currently pursuing my{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  Bachelor of Information and Communication Technology (BICT)
                </span>{' '}
                at the{' '}
                <span className="font-semibold">University of Vavuniya</span>,
                with a current GPA of 3.16.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                My journey in technology has been driven by an unwavering
                passion for software development, problem-solving, and
                continuous learning. I believe in the power of technology to
                transform lives and create meaningful solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Whether it's building web applications, exploring new
                programming languages, or tackling complex challenges, I'm
                always eager to expand my knowledge and skills in the
                ever-evolving world of IT.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl shadow-lg text-center"
                >
                  <stat.icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
