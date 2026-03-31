import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiGitCommit, FiStar, FiGitPullRequest } from 'react-icons/fi'

const stats = [
  { icon: FiGithub, label: 'Repositories', value: '15+', color: 'text-neon-cyan' },
  { icon: FiGitCommit, label: 'Commits', value: '500+', color: 'text-neon-purple' },
  { icon: FiStar, label: 'Stars Earned', value: '10+', color: 'text-yellow-400' },
  { icon: FiGitPullRequest, label: 'Pull Requests', value: '25+', color: 'text-neon-pink' },
]

// Generate mock contribution data
const generateContributions = () => {
  const weeks = 52
  const days = 7
  const data = []
  for (let w = 0; w < weeks; w++) {
    const week = []
    for (let d = 0; d < days; d++) {
      const rand = Math.random()
      let level = 0
      if (rand > 0.6) level = 1
      if (rand > 0.75) level = 2
      if (rand > 0.88) level = 3
      if (rand > 0.95) level = 4
      week.push(level)
    }
    data.push(week)
  }
  return data
}

const contributions = generateContributions()

const levelColors = [
  'bg-dark-500',
  'bg-emerald-900/60',
  'bg-emerald-700/60',
  'bg-emerald-500/60',
  'bg-emerald-400/80',
]

export default function GitHubStats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

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
            A snapshot of my coding journey
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
          className="glass-card p-6 lg:p-8 overflow-x-auto"
        >
          <div className="flex items-center gap-2 mb-4">
            <FiGithub className="text-gray-400" size={18} />
            <span className="text-sm text-gray-400 font-medium">Contribution Graph</span>
          </div>

          <div className="flex gap-[3px] min-w-[680px]">
            {contributions.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((level, di) => (
                  <motion.div
                    key={`${wi}-${di}`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: wi * 0.01 + di * 0.01 + 0.6, duration: 0.2 }}
                    className={`w-[11px] h-[11px] rounded-[2px] ${levelColors[level]} hover:ring-1 hover:ring-white/30 transition-all cursor-pointer`}
                    title={`Level: ${level}`}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 mt-4 text-xs text-gray-500">
            <span>Less</span>
            {levelColors.map((c, i) => (
              <div key={i} className={`w-[11px] h-[11px] rounded-[2px] ${c}`} />
            ))}
            <span>More</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
