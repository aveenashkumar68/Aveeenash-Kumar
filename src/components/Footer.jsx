import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/aveenashkumar68', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/aveenash-kumar-47a4502aa', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:aveenashkumar68@gmail.com', label: 'Email' },
]

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative z-10 border-t border-glass-border bg-dark-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="text-2xl font-heading font-bold gradient-text"
            >
              &lt;AK /&gt;
            </a>
            <p className="text-sm text-gray-500 mt-2 max-w-xs">
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm text-gray-400 hover:text-neon-cyan transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-end gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 rounded-xl border border-glass-border bg-glass flex items-center justify-center
                           text-gray-400 hover:text-neon-cyan hover:border-neon-cyan/50 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-glass-border mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-1.5">
            © {new Date().getFullYear()} Aveenash Kumar. Built with
            <FiHeart className="text-neon-pink inline" size={14} />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
