export interface LanyardData {
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

export async function fetchLanyardData(userId: string): Promise<LanyardData> {
  if (!userId) {
    throw new Error('User ID is required to fetch Lanyard data.')
  }

  try {
    const response = await fetch(
      `https://api.lanyard.rest/v1/users/${userId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    if (!response.ok) {
      throw new Error(
        `Failed to fetch data from Lanyard API. Status: ${response.status}`
      )
    }

    const json = await response.json()
    if (!json.data) {
      throw new Error('Invalid response structure from Lanyard API.')
    }

    return json.data
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'An unexpected error occurred while fetching Lanyard data.'
    )
  }
}

export function formatTime(ms: number): string {
  const seconds = Math.floor(ms / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  return hours > 0
    ? `${hours}:${minutes % 60}:${seconds % 60}`
    : `${minutes}:${(seconds % 60).toString().padStart(2, '0')}`
}
