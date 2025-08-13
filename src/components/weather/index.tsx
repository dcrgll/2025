'use client'

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

import { weather } from '@/lib/weather'
import { fetchWeatherData, type WeatherData } from './helpers'

import Clock from '@/components/clock'

export default function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadWeather() {
      try {
        const data = await fetchWeatherData(52.25, -0.8833)
        setWeatherData(data)
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : 'An error occurred while fetching weather data.'
        )
      }
    }

    loadWeather()
  }, [])

  if (error) {
    return <div className='text-red-500'>Error: {error}</div>
  }

  if (!weatherData) {
    return null // Render nothing while loading
  }

  const { weather_code, temperature_2m } = weatherData

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className='text-foreground/80 text-sm'
    >
      It&apos;s currently{' '}
      <b className='text-foreground'>
        <Clock />
      </b>{' '}
      in Northampton.
      <br />
      <span
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <Rendering emojis for each weather code>
        dangerouslySetInnerHTML={{
          __html: weather[weather_code as keyof typeof weather]
        }}
      />{' '}
      and <b className='text-foreground'>{temperature_2m}°C</b>.
    </motion.div>
  )
}
