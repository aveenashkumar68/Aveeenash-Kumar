import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    title: 'Software Developer Intern',
    company: 'Code Alpha',
    period: '2024',
    location: 'Remote',
    type: 'Internship',
    description: [
      'Built responsive web applications using modern frontend frameworks',
      'Collaborated on UI/UX design improvements to enhance user experience',
      'Debugged and optimized code for better performance and maintainability',
      'Worked with REST APIs and integrated third-party services',
    ],
    tech: ['React', 'JavaScript', 'CSS', 'REST APIs'],
  },
  {
    title: 'Open Source Program Coordinator',
    company: 'College Tech Community',
    period: '2024',
    location: 'On-site',
    type: 'Leadership',
    description: [
      'Led and mentored 100+ students in open source development',
      'Organized and conducted Git & GitHub workshops for beginners',
      'Coordinated open source contribution programs and hackathons',
      'Built a collaborative learning environment for aspiring developers',
    ],
    tech: ['Git', 'GitHub', 'Leadership', 'Mentoring'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="experience" className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle">
            My professional journey so far
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-cyan to-transparent lg:-translate-x-0.5" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.2 + 0.2, duration: 0.7 }}
              className={`relative mb-12 lg:mb-16 ${
                i % 2 === 0 ? 'lg:pr-[55%]' : 'lg:pl-[55%] lg:text-left'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 lg:left-1/2 top-8 w-4 h-4 -translate-x-1/2 z-10">
                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan animate-ping opacity-20" />
              </div>

              {/* Card */}
              <div className="ml-16 lg:ml-0 glass-card p-6 lg:p-8 group hover:border-neon-purple/30">
                {/* Badge */}
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-neon-purple/10 text-neon-purple border border-neon-purple/20 mb-4">
                  {exp.type}
                </span>

                <h3 className="font-heading font-bold text-xl text-white mb-1">
                  {exp.title}
                </h3>
                <p className="text-neon-cyan font-medium mb-3">{exp.company}</p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <FiCalendar size={14} /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <FiMapPin size={14} /> {exp.location}
                  </span>
                </div>

                <ul className="space-y-2 mb-5">
                  {exp.description.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-cyan/60 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map(t => (
                    <span key={t} className="px-3 py-1 text-xs rounded-full bg-dark-500 text-gray-300 border border-glass-border">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
