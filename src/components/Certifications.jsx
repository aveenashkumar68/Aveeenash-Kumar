import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiExternalLink } from 'react-icons/fi'

const certifications = [
  {
    title: 'MERN Stack Development',
    issuer: 'Simplilearn',
    date: '2024',
    color: 'from-neon-purple to-neon-blue',
    icon: '🚀',
  },
  {
    title: 'The Complete SQL Bootcamp',
    issuer: 'Udemy',
    date: '2024',
    color: 'from-neon-cyan to-neon-blue',
    icon: '🗃️',
  },
  {
    title: 'Core Java Bootcamp',
    issuer: 'Udemy',
    date: '2024',
    color: 'from-neon-pink to-neon-purple',
    icon: '☕',
  },
]

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="certifications" className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-[150px]" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle">
            Credentials validating my continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15 + 0.2, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-6 group relative overflow-hidden"
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`} />

              {/* Background glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`} />

              <div className="relative">
                {/* Icon */}
                <div className="text-4xl mb-4">{cert.icon}</div>

                {/* Award badge */}
                <div className="flex items-center gap-2 mb-3">
                  <FiAward className="text-neon-cyan" size={16} />
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-medium">Certificate</span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg text-white mb-2 group-hover:text-neon-cyan transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer & Date */}
                <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.date}</p>

                {/* Decorative corner */}
                <div className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-r ${cert.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
