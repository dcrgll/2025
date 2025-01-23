import { Track } from '@/types/songs'
import { lastfm_config, sortByArtist } from '@/lib/songs'

export default async function Songs() {
  const SevenDays = 60 * 60 * 24
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${lastfm_config.user}&period=${lastfm_config.period.sevenDays}&limit=${lastfm_config.limit}&api_key=${lastfm_config.api_key}&format=json`,
    {
      next: {
        revalidate: SevenDays
      }
    }
  )

  const data = (await res.json()) as { toptracks: { track: Track[] } }

  const sortedData = sortByArtist(data.toptracks.track)

  return (
    <div className="pb-8 text-sm text-foreground">
      I&apos;m currently listening to: <br />
      <ul className="mt-2">
        {sortedData.map((album: { name: string; artist: { name: string } }) => {
          return (
            <li
              key={album.name}
              className="flex items-center gap-1 truncate text-foreground/80"
            >
              <b>{album.name} </b> by
              <b className="text-foreground"> {album.artist.name}</b>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
