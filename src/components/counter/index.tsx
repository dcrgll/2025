import { fetchCounterData, formatNumber } from './helpers'

export default async function Counter() {
  const visitCount = await fetchCounterData()

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
