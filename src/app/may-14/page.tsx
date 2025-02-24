'use client'

import Container from '@/components/container'
import { useEffect, useState } from 'react'

export default function May14Page() {
  const targetDate = new Date('2025-05-14T09:00:00').getTime()
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate - Date.now())
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  const formatTime = (ms: number) => {
    if (ms <= 0) {
      return '00:00:00:00'
    }

    const days = Math.floor(ms / (1000 * 60 * 60 * 24))
    const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((ms % (1000 * 60)) / 1000)
    return `${days}d ${hours}h ${minutes}m ${seconds}s`
  }

  return (
    <Container>
      <div className='text-center p-4 font-serif font-bold text-foreground justify-center items-center h-full'>
        <p className='text-4xl mt-40' suppressHydrationWarning>
          {formatTime(timeLeft)}
        </p>

        <p className='text-foreground/40 text-sm'>But who&apos;s counting?</p>
      </div>
    </Container>
  )
}
