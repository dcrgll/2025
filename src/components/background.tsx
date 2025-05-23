/**
 * A background component that displays a rain gif.
 */

export default function Background() {
  return (
    <div className='pointer-events-none fixed inset-0 -z-30 bg-background/10'>
      <div
        className='pointer-events-none fixed inset-0 -z-20'
        style={{
          backgroundImage: 'url(/images/rain.gif)',
          imageRendering: 'pixelated',
          mixBlendMode: 'overlay',
          objectFit: 'contain',
          backgroundRepeat: 'repeat',
          backgroundSize: '6.25rem 6.25rem',
          filter: 'brightness(0.15)'
        }}
      />
    </div>
  )
}
