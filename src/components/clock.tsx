'use client'

import { useEffect, useState } from 'react'

/**
 * A clock component that displays the current time in London.
 */

export default function Clock() {
  const [time, setTime] = useState(() => new Date())

  useEffect(() => {
    const updateClock = () => {
      const londonTime = new Date().toLocaleString('en-US', {
        timeZone: 'Europe/London'
      })
      setTime(new Date(londonTime))
    }

    updateClock()
    const interval = setInterval(updateClock, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <span>
      {time.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      })}
    </span>
  )
}
