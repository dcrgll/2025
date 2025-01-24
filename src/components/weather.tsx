'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

import { weather } from '@/lib/weather'

import Clock from './clock'

export default function Weather() {
  const [weatherCode, setWeatherCode] = useState<number | null>(null)
  const [temperature, setTemperature] = useState<number | null>(null)

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=51.700329&longitude=-0.108655&current=temperature_2m,weather_code'
        )
        const data = await response.json()
        setWeatherCode(data.current.weather_code)
        setTemperature(data.current.temperature_2m)
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
    }

    fetchWeather()
  }, [])

  if (weatherCode === null || temperature === null) {
    return <p className="text-foreground/80 text-sm">Loading weather...</p>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }} // Add delay here
      className="text-foreground/80 text-sm"
    >
      It&apos;s currently{' '}
      <b className="text-foreground">
        <Clock />
      </b>{' '}
      in London.
      <br />
      <span
        dangerouslySetInnerHTML={{
          __html: weather[weatherCode as keyof typeof weather]
        }}
      />{' '}
      and <b className="text-foreground">{temperature}°C</b>.
    </motion.div>
  )
}
