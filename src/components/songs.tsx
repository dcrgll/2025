import { Track } from '@/types/songs'
import { lastfm_config } from '@/lib/songs'

export default async function Songs() {
  const SevenDays = 60 * 60 * 24
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${lastfm_config.user}&api_key=${lastfm_config.api_key}&format=json`,
    {
      next: {
        revalidate: SevenDays
      }
    }
  )

  const data = (await res.json()) as { recenttracks: { track: Track[] } }

  console.log(data.recenttracks.track[0])
  return (
    <div className="pb-8 text-sm text-foreground/80">
      I&apos;m currently listening to: <br />
      <ul className="mt-2">
        <li
          key={data.recenttracks.track[0].name}
          className="flex flex-col gap-1 truncate text-foreground/80"
        >
          <b>{data.recenttracks.track[0].name} </b>
          <div className="flex gap-1">
            by
            <b className="text-foreground">
              {data.recenttracks.track[0].artist['#text']}
            </b>
          </div>
        </li>
      </ul>
    </div>
  )
}
