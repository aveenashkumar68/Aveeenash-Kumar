import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiUsers, FiTarget, FiAward } from 'react-icons/fi'

const highlights = [
  { icon: FiCode, title: 'Problem Solver', desc: 'Analytical thinker with strong DSA skills' },
  { icon: FiUsers, title: 'Team Leader', desc: 'Led teams and mentored 100+ students' },
  { icon: FiTarget, title: 'Goal Oriented', desc: 'Focused on delivering real-world impact' },
  { icon: FiAward, title: 'Quick Learner', desc: 'Adaptable and always upskilling' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="about" className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know the person behind the code
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8">
              <p className="text-gray-300 leading-relaxed text-base lg:text-lg mb-4">
                I'm a <span className="text-neon-cyan font-medium">Computer Science Engineering</span> student
                with a deep passion for building modern, scalable web applications.
                I specialize in the <span className="text-neon-purple font-medium">MERN stack</span> and love
                turning ideas into real-world products that solve meaningful problems.
              </p>
              <p className="text-gray-400 leading-relaxed text-base lg:text-lg">
                Beyond coding, I'm an active contributor to the developer community — I've led
                open source programs, conducted workshops, and mentored aspiring developers.
                I believe in writing clean, maintainable code and constantly pushing my boundaries
                to learn new technologies.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '10+', label: 'Projects' },
                { value: '100+', label: 'Students Mentored' },
                { value: '5+', label: 'Certifications' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="glass-card p-4 text-center"
                >
                  <p className="text-2xl lg:text-3xl font-bold gradient-text font-heading">{stat.value}</p>
                  <p className="text-xs lg:text-sm text-gray-400 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center mb-4
                              group-hover:from-neon-purple/40 group-hover:to-neon-cyan/40 transition-all duration-300">
                  <item.icon className="text-neon-cyan group-hover:scale-110 transition-transform" size={22} />
                </div>
                <h3 className="font-heading font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
