export interface WeatherData {
  weather_code: number
  temperature_2m: number
}

export async function fetchWeatherData(
  latitude: number,
  longitude: number
): Promise<WeatherData> {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })

    if (!response.ok) {
      throw new Error(
        `Failed to fetch weather data. Status: ${response.status}`
      )
    }

    const data = await response.json()
    if (!data.current) {
      throw new Error('Invalid weather data structure.')
    }

    return {
      weather_code: data.current.weather_code,
      temperature_2m: data.current.temperature_2m
    }
  } catch (error) {
    throw new Error(
      error instanceof Error
        ? error.message
        : 'An unexpected error occurred while fetching weather data.'
    )
  }
}
