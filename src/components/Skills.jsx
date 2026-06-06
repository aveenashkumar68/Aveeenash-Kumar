import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub
} from 'react-icons/fa'
import {
  SiExpress, SiMongodb, SiMysql, SiPostman, SiTailwindcss
} from 'react-icons/si'
import { VscCode } from 'react-icons/vsc'
import { FiCpu, FiLayers, FiZap, FiTerminal } from 'react-icons/fi'

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
    title: 'Generative AI & Agents',
    color: 'from-purple-500 to-indigo-500',
    skills: [
      { name: 'Gen AI & Agentic AI', icon: FiCpu, level: 88 },
      { name: 'RAG Systems', icon: FiLayers, level: 82 },
      { name: 'Google AI Studio', icon: FiZap, level: 90 },
      { name: 'Claude & Deepseek', icon: FiTerminal, level: 85 },
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
    color: 'from-cyan-500 to-blue-500',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, level: 85 },
      { name: 'MySQL', icon: SiMysql, level: 78 },
    ],
  },
  {
    title: 'Tools & Vibe Coding',
    color: 'from-pink-500 to-rose-500',
    skills: [
      { name: 'Git & GitHub', icon: FaGithub, level: 90 },
      { name: 'Postman', icon: SiPostman, level: 80 },
      { name: 'VS Code', icon: VscCode, level: 92 },
    ],
  },
]

const marqueeSkills = [
  { name: 'Java', icon: FaJava, color: 'text-orange-500' },
  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500' },
  { name: 'React', icon: FaReact, color: 'text-cyan-400' },
  { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
  { name: 'Express', icon: SiExpress, color: 'text-gray-300' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-emerald-500' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
  { name: 'GitHub', icon: FaGithub, color: 'text-white' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300' },
  { name: 'Gen AI & Agentic AI', icon: FiCpu, color: 'text-purple-400' },
  { name: 'RAG Systems', icon: FiLayers, color: 'text-indigo-400' },
  { name: 'Google AI Studio', icon: FiZap, color: 'text-yellow-400' },
  { name: 'Claude & Deepseek', icon: FiTerminal, color: 'text-pink-400' },
]

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="skills" className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[150px] pointer-events-none" />

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

        {/* Tech language moving scene from left to right */}
        <div className="w-full overflow-hidden mb-16 relative py-5 bg-glass/20 border-y border-glass-border">
          {/* Side Gradients for fading effect */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee-lr flex gap-6 whitespace-nowrap">
            {/* Render items twice to build a seamless infinite loop */}
            {[...marqueeSkills, ...marqueeSkills].map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-3 px-5 py-2.5 rounded-xl border border-glass-border bg-glass-hover text-white hover:border-neon-cyan/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 group cursor-pointer"
              >
                <skill.icon className={`${skill.color} group-hover:scale-110 transition-transform`} size={20} />
                <span className="font-heading font-medium text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

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
