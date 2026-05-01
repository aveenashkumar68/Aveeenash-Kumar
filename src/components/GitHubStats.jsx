import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiUsers, FiBook, FiCode } from 'react-icons/fi'
import GitHubCalendar from 'react-github-calendar'

export default function GitHubStats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [githubData, setGithubData] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/aveenashkumar68')
      .then(res => res.json())
      .then(data => setGithubData(data))
      .catch(err => console.error("Error fetching GitHub data:", err))
  }, [])

  const stats = [
    { icon: FiBook, label: 'Public Repos', value: githubData?.public_repos || '-', color: 'text-neon-cyan' },
    { icon: FiUsers, label: 'Followers', value: githubData?.followers || '-', color: 'text-neon-purple' },
    { icon: FiGithub, label: 'Following', value: githubData?.following || '-', color: 'text-yellow-400' },
    { icon: FiCode, label: 'Public Gists', value: githubData?.public_gists || '-', color: 'text-neon-pink' },
  ]

  return (
    <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[150px]" />

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-heading">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <p className="section-subtitle">
            A real-time snapshot of my coding journey
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="glass-card p-5 text-center group"
            >
              <stat.icon className={`mx-auto mb-2 ${stat.color} group-hover:scale-110 transition-transform`} size={24} />
              <p className="text-2xl font-bold font-heading text-white">{stat.value}</p>
              <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="glass-card p-6 lg:p-8 overflow-x-auto flex flex-col items-center justify-center"
        >
          <div className="flex items-center gap-2 mb-6 w-full justify-start">
            <FiGithub className="text-gray-400" size={18} />
            <span className="text-sm text-gray-400 font-medium">Real-time Contribution Graph</span>
          </div>

          <div className="w-full overflow-x-auto pb-4 flex justify-center text-gray-300">
            {inView && (
              <GitHubCalendar
                username="aveenashkumar68"
                colorScheme="dark"
                blockSize={14}
                blockMargin={4}
                fontSize={14}
                theme={{
                  dark: ['#1e1e2e', '#047857', '#059669', '#10b981', '#34d399']
                }}
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
