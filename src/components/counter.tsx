export default async function Counter() {
  if (!process.env.COUNTER_URL) {
    return
  }

  const response = await fetch(process.env.COUNTER_URL).then(response =>
    response.json()
  )

  const visitCount = response.value

  const formatNumber = (num: number) =>
    num >= 1e6
      ? `${(num / 1e6).toFixed(1)}m`
      : num >= 1e3
        ? `${(num / 1e3).toFixed(1)}k`
        : num.toString()

  return (
    <div className='flex items-center gap-1'>
      <span className='relative flex h-2 w-2'>
        <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75' />
        <span className='relative inline-flex h-2 w-2 rounded-full bg-green-500' />
      </span>
      <p>{formatNumber(visitCount)} visitors</p>
    </div>
  )
}
