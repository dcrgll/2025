export default function Background() {
  return (
    <>
      <div
        className="pointer-events-none fixed bottom-10 left-10 right-10 top-10 -z-20"
        style={{
          backgroundImage: 'url(/images/rain.gif)',
          imageRendering: 'pixelated',
          mixBlendMode: 'overlay',
          objectFit: 'contain',
          backgroundRepeat: 'repeat',
          backgroundSize: '6.25rem 6.25rem'
        }}
      />

      <div className="pointer-events-none fixed bottom-0 left-0 right-0 top-0 -z-10 bg-background/10" />
    </>
  )
}
