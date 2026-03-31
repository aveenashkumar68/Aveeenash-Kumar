import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDatabase
} from 'react-icons/fa'
import {
  SiExpress, SiMongodb, SiMysql, SiPostman, SiTailwindcss
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'

const skillCategories = [
  {
    title: 'Languages',
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Java', icon: FaJava, level: 85 },
      { name: 'JavaScript', icon: FaJs, level: 90 },
    ],
  },
  {
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'HTML5', icon: FaHtml5, level: 95 },
      { name: 'CSS3', icon: FaCss3Alt, level: 90 },
      { name: 'React', icon: FaReact, level: 88 },
      { name: 'Tailwind', icon: SiTailwindcss, level: 85 },
    ],
  },
  {
    title: 'Backend',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, level: 85 },
      { name: 'Express.js', icon: SiExpress, level: 82 },
    ],
  },
  {
    title: 'Database',
    color: 'from-purple-500 to-violet-500',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, level: 85 },
      { name: 'MySQL', icon: SiMysql, level: 78 },
    ],
  },
  {
    title: 'Tools',
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 88 },
      { name: 'GitHub', icon: FaGithub, level: 90 },
      { name: 'Postman', icon: SiPostman, level: 80 },
      { name: 'VS Code', icon: VscCode, level: 92 },
    ],
  },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="skills" className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIdx * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 group"
            >
              <h3 className={`font-heading font-semibold text-lg mb-5 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <skill.icon className="text-gray-400 group-hover:text-white transition-colors" size={18} />
                        <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-dark-500 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1.2, delay: catIdx * 0.1 + i * 0.1 + 0.3, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
