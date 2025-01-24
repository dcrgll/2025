'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AnimatePresence, motion } from 'framer-motion'
import { Music } from 'lucide-react'

interface LanyardData {
  spotify: {
    song: string
    artist: string
    album_art_url: string
    timestamps: {
      start: number
      end: number
    }
  } | null
  discord_user: {
    username: string
    avatar: string
  }
  discord_status: 'online' | 'idle' | 'dnd' | 'offline'
  activities: Array<{
    name: string
    type: number
    state: string
    details: string
    timestamps?: {
      start?: number
      end?: number
    }
  }>
}

function formatTime(ms: number): string {
  const seconds = Math.floor(ms / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  return hours > 0
    ? `${hours}:${minutes % 60}:${seconds % 60}`
    : `${minutes}:${(seconds % 60).toString().padStart(2, '0')}`
}

export default function Lanyard() {
  const [data, setData] = useState<LanyardData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [currentTime, setCurrentTime] = useState<number>(Date.now())

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null

    const fetchData = async () => {
      try {
        const userId = process.env.NEXT_PUBLIC_DISCORD_USER_ID
        if (!userId) {
          throw new Error('Discord user ID not found in environment variables')
        }
        const response = await fetch(
          `https://api.lanyard.rest/v1/users/${userId}`
        )
        if (!response.ok) {
          throw new Error('Failed to fetch data from Lanyard API')
        }
        const json = await response.json()
        setData(json.data)

        // Schedule next fetch
        if (json.data.spotify && json.data.spotify.timestamps) {
          const { end } = json.data.spotify.timestamps
          const remainingTime = end - Date.now()
          timer = setTimeout(fetchData, remainingTime)
        } else {
          timer = setTimeout(fetchData, 60000) // Refresh every minute if no song
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'An unknown error occurred'
        )
      }
    }

    fetchData()

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(Date.now()), 1000)
    return () => clearInterval(timer)
  }, [])

  if (error) {
    return <div className="text-red-500">Error: {error}</div>
  }

  if (!data) {
    return <div className="text-gray-500">Loading...</div>
  }

  const statusColor = {
    online: 'bg-green-500',
    idle: 'bg-yellow-500',
    dnd: 'bg-red-500',
    offline: 'bg-gray-500'
  }[data.discord_status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="mb-8 w-full max-w-md space-y-4"
    >
      <div className="flex items-center space-x-4">
        <Image
          src={`https://cdn.discordapp.com/avatars/${process.env.NEXT_PUBLIC_DISCORD_USER_ID}/${data.discord_user.avatar}.png`}
          alt={data.discord_user.username}
          width={30}
          height={30}
          className="rounded-full"
        />
        <div>
          <Link
            href={`https://discord.gg/U62sVUWc`}
            className="text-sm font-bold"
          >
            {data.discord_user.username}
          </Link>

          <div className="flex items-center space-x-2">
            <div className={`h-2 w-2 rounded-full ${statusColor}`} />
            <span className="text-foreground/60 text-xs capitalize">
              {data.discord_status}
            </span>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {data.spotify && (
          <motion.div
            key={data.spotify.song} // Use song as the unique key
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-2"
          >
            <h3 className="flex items-center text-sm font-semibold">
              <Music className="mr-2 h-4 w-4" />
              Listening to Spotify
            </h3>
            <div className="flex items-center space-x-4">
              <Image
                src={data.spotify.album_art_url || '/placeholder.svg'}
                alt={`${data.spotify.song} album art`}
                width={40}
                height={40}
                className="rounded"
              />
              <div>
                <div className="text-sm font-semibold">{data.spotify.song}</div>
                <div className="text-xs text-gray-500">
                  {data.spotify.artist}
                </div>
                {data.spotify.timestamps && (
                  <div className="text-[10px] text-gray-500">
                    {formatTime(currentTime - data.spotify.timestamps.start)} /{' '}
                    {formatTime(
                      data.spotify.timestamps.end -
                        data.spotify.timestamps.start
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
