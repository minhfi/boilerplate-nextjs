import { FC, useEffect, useState } from 'react'
import style from './style.module.scss'

interface IReadingProgressBarProps {
  targetElementId: string
}

export const ReadingProgressBar: FC<IReadingProgressBarProps> = ({ targetElementId }) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const targetElement = document.getElementById(targetElementId)

    const calculateScrollProgress = () => {
      if (!targetElement) return
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const totalScrollableDistance = documentHeight - windowHeight
      const currentScrollDistance = scrollTop
      const currentProgress = (currentScrollDistance / totalScrollableDistance) * 100
      setProgress(currentProgress)
    }

    const handleScroll = () => {
      requestAnimationFrame(calculateScrollProgress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [targetElementId])

  useEffect(() => {
    if(progress <= 0) {
      setProgress(0)
    }
  }, [progress])

  return (
    <div className={style.progressBarcontainer}>
      <div
        className={style.progressBar}
        style={{ width: `${progress}%`, backgroundColor: '#F2F92F' }}
      />
    </div>
  )
}
