import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiExternalLink } from 'react-icons/fi'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-72 h-72 bg-neon-purple/20 rounded-full blur-[120px] animate-[pulse-glow_4s_ease-in-out_infinite]" />
      <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-neon-cyan/20 rounded-full blur-[120px] animate-[pulse-glow_4s_ease-in-out_infinite_1s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-neon-blue/10 rounded-full blur-[150px]" />

      {/* Floating geometric shapes */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 90, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-[15%] w-16 h-16 border border-neon-purple/20 rounded-lg hidden lg:block"
      />
      <motion.div
        animate={{ y: [20, -20, 20], rotate: [0, -60, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-32 left-[10%] w-12 h-12 border border-neon-cyan/20 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ y: [-15, 25, -15], x: [-10, 10, -10] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[40%] left-[8%] w-4 h-4 bg-neon-blue/30 rounded-full hidden lg:block"
      />
      <motion.div
        animate={{ y: [10, -30, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[30%] right-[8%] w-3 h-3 bg-neon-pink/30 rounded-full hidden lg:block"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-glass-border bg-glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-gray-400">Available for opportunities</span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg sm:text-xl text-neon-cyan font-medium mb-4 font-heading"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-heading font-bold mb-6 leading-tight"
        >
          <span className="gradient-text">Aveenash</span>{' '}
          <span className="text-white">Kumar</span>
        </motion.h1>

        {/* Typing Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl sm:text-2xl lg:text-3xl text-gray-400 mb-8 h-10 font-heading"
        >
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'MERN Stack Enthusiast',
              2000,
              'Problem Solver',
              2000,
              'Open Source Contributor',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="gradient-text-alt font-semibold"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building elegant, high-performance web applications with modern technologies.
          Passionate about clean code, great user experiences, and solving real-world problems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="group relative px-8 py-3.5 rounded-full bg-gradient-to-r from-neon-purple to-neon-cyan text-white font-medium
                       hover:shadow-lg hover:shadow-neon-purple/30 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            id="view-projects-btn"
          >
            <FiExternalLink className="group-hover:rotate-12 transition-transform" />
            View Projects
          </a>
          <a
            href="/Aveenash_Kumar_Resume.pdf"
            download
            className="group px-8 py-3.5 rounded-full border border-glass-border bg-glass text-white font-medium
                       hover:border-neon-cyan/50 hover:bg-glass-hover transition-all duration-300 hover:scale-105 flex items-center gap-2"
            id="download-resume-btn"
          >
            <FiDownload className="group-hover:translate-y-0.5 transition-transform" />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          {[
            { icon: FiGithub, href: 'https://github.com/aveenashkumar68', label: 'GitHub' },
            { icon: FiLinkedin, href: 'https://linkedin.com/in/aveenash-kumar-47a4502aa', label: 'LinkedIn' },
            { icon: FiMail, href: 'mailto:aveenashkumar68@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.2, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full border border-glass-border bg-glass flex items-center justify-center
                         text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-colors duration-300"
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [1, 0], y: [0, 12] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-neon-cyan"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
