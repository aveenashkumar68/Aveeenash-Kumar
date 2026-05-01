import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'

const projects = [
  {
    title: 'College Marketplace',
    description:
      'A full-stack MERN marketplace exclusive to college students. Features college-based authentication, real-time image uploads from camera/gallery, optimized MongoDB aggregation pipelines, and a seamless buying/selling experience.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Multer'],
    github: 'https://github.com/aveenashkumar68/College-Market-Place',
    live: 'https://college-market-place.vercel.app/',
    highlights: [
      'College-based authentication system',
      'Camera/gallery image upload',
      'Optimized MongoDB queries',
      'Real-time updates',
    ],
    color: 'from-neon-purple to-neon-blue',
  },
  {
    title: 'MERN Todo Notes App',
    description:
      'A clean, secure todo and notes application with JWT authentication, user-specific data isolation, and a responsive interface. Built with RESTful APIs using Express.js and deployed for production.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Vercel'],
    github: 'https://github.com/aveenashkumar68/Note-App',
    live: 'https://note-app-gamma-two.vercel.app',
    highlights: [
      'JWT-based authentication',
      'User-specific todos',
      'REST APIs with Express',
      'Deployed on Vercel & Render',
    ],
    color: 'from-neon-cyan to-neon-blue',
  },
  {
    title: 'Project Mayaa',
    description:
      'Role-Based Consultancy Management System with controlled onboarding and workflow management. Implemented structured reporting and centralized data management to streamline consultancy operations.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/aveenashkumar68/academia-connect',
    live: 'https://academia-connect-three.vercel.app/',
    highlights: [
      'Role-based access (Super Admin, Admin, Experts)',
      'Workflows for assigning experts',
      'Structured reporting',
      'Centralized data management',
    ],
    color: 'from-neon-purple to-neon-pink',
  },
]

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.12, duration: 0.5 }}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="glass-card overflow-hidden group relative"
        style={{
          transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          boxShadow: isHovered ? '0 8px 30px rgba(0,0,0,0.3)' : 'none',
        }}
      >
        {/* Top gradient bar */}
        <div className={`h-1 bg-gradient-to-r ${project.color}`} />

        {/* Hover glow */}
        {isHovered && (
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 pointer-events-none`} />
        )}

        <div className="p-6 lg:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 flex items-center justify-center">
              <FiFolder className="text-neon-cyan" size={22} />
            </div>
            <div className="flex items-center gap-3 relative z-10">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-cyan transition-colors p-2 rounded-lg hover:bg-white/5"
                aria-label={`${project.title} GitHub`}
              >
                <FiGithub size={20} />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-cyan transition-colors p-2 rounded-lg hover:bg-white/5"
                aria-label={`${project.title} Live Demo`}
              >
                <FiExternalLink size={20} />
              </a>
            </div>
          </div>

          {/* Title & Description */}
          <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-neon-cyan transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="mb-5 space-y-2">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan/60" />
                {h}
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs rounded-full bg-dark-500 text-gray-300 border border-glass-border
                           group-hover:border-neon-cyan/20 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 relative z-10">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-neon-purple to-neon-cyan text-white text-sm font-medium text-center
                         hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <FiExternalLink size={14} /> Live Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 rounded-lg border border-glass-border bg-glass text-white text-sm font-medium text-center
                         hover:border-neon-cyan/50 transition-colors flex items-center justify-center gap-2"
            >
              <FiGithub size={14} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })

  return (
    <section id="projects" className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="absolute top-0 left-0 w-96 h-96 bg-neon-blue/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Real-world applications I've built from the ground up
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/aveenashkumar68"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-glass-border bg-glass text-gray-300
                       hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300"
          >
            <FiGithub size={18} />
            View more on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
