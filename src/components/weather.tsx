import { weather } from '@/lib/weather'

export default async function Weather() {
  const response = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=51.700329&longitude=-0.108655&current=temperature_2m,weather_code'
  )

  const data = await response.json()

  const weatherCode = data.current.weather_code
  const temperature = data.current.temperature_2m

  const getClock = function () {
    const time = new Date(
      new Date().toLocaleString('en-US', { timeZone: 'Europe/London' })
    )

    return time.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    })
  }

  return (
    <p className="text-sm text-foreground/80">
      It&apos;s currently <b className="text-foreground">{getClock()}</b> in
      London.
      <br />
      <span
        dangerouslySetInnerHTML={{
          __html: weather[weatherCode as keyof typeof weather]
        }}
      />{' '}
      and <b className="text-foreground">{temperature}°C</b>.
    </p>
  )
}
