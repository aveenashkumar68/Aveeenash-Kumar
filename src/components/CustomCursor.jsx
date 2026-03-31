import { useEffect, useState } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [isHover, setIsHover] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show custom cursor on desktop
    if (window.matchMedia('(pointer: coarse)').matches) return

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseOver = (e) => {
      const tag = e.target.tagName.toLowerCase()
      if (tag === 'a' || tag === 'button' || e.target.closest('a') || e.target.closest('button') || e.target.classList.contains('cursor-hover')) {
        setIsHover(true)
      }
    }

    const handleMouseOut = () => setIsHover(false)
    const handleLeave = () => setIsVisible(false)

    document.addEventListener('mousemove', move)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    document.addEventListener('mouseleave', handleLeave)

    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.removeEventListener('mouseleave', handleLeave)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`custom-cursor ${isHover ? 'hover' : ''}`}
      style={{
        left: pos.x - 10,
        top: pos.y - 10,
      }}
    />
  )
}
