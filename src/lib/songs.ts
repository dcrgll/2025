import { Album, Track } from '@/types/songs'

export const lastfm_config = {
  api_key: process.env.LASTFM_API_KEY,
  user: 'dancargill',
  period: {
    overall: 'overall',
    sevenDays: '7day',
    oneMonth: '1month',
    threeMonths: '3month',
    sixMonths: '6month',
    twelveMonths: '12month'
  },
  limit: 30
}

export const sortByArtist = (data: Album[] | Track[]) => {
  const tracks = removeDuplicateArtists(data as Track[])

  return tracks.sort((a, b) => {
    if (a.artist.name < b.artist.name) {
      return -1
    }
    if (a.artist.name > b.artist.name) {
      return 1
    }
    return 0
  })
}

function removeDuplicateArtists(tracks: Track[]) {
  const uniqueTracks = [] as Track[]
  const seenArtists = new Set()

  tracks.forEach((track) => {
    if (!seenArtists.has(track.artist.name)) {
      seenArtists.add(track.artist.name)
      uniqueTracks.push(track)
    }
  })

  return uniqueTracks
}
