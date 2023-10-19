import { useEffect, useState } from 'react'

export const useWindowSize = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [size, setSize] = useState([
    typeof window !== 'undefined' && window.innerWidth,
    typeof window !== 'undefined' && window.innerHeight
  ])

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768)

    const handler = () => {
      setSize([window.innerWidth, window.innerHeight])
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener('resize', handler)

    return () => {
      window.removeEventListener('resize', handler)
    }
  }, [])

  return { size, isMobile }
}
