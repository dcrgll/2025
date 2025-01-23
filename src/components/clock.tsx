'use client'

import { useEffect, useState } from 'react'

export default function Clock() {
  const [time, setTime] = useState(
    () =>
      new Date(
        new Date().toLocaleString('en-US', { timeZone: 'Europe/London' })
      )
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date(
          new Date().toLocaleString('en-US', { timeZone: 'Europe/London' })
        )
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  })
}
