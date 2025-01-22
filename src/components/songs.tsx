import { lastfm_config } from '@/lib/songs'

export default async function Songs() {
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=${lastfm_config.user}&period=${lastfm_config.period.overall}&limit=${lastfm_config.limit}&api_key=${lastfm_config.api_key}&format=json`,
    {}
  )

  const data = await res.json()

  return (
    <p className="pb-8 text-sm text-foreground/80">
      My current most played album is: <br />
      <b className="text-foreground">{data.topalbums.album[7].name}</b> by{' '}
      <b className="text-foreground">{data.topalbums.album[7].artist.name}</b>.
    </p>
  )
}
