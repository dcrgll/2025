import Container from '@/components/container'
import ContentToggle from '@/components/content-toggle'
import Footer from '@/components/footer'
import Intro from '@/components/intro'
import Separator from '@/components/separator'
import Weather from '@/components/weather'

export default function Home() {
  return (
    <Container>
      <Intro />
      <Separator />
      <ContentToggle />
      <Separator />
      <Weather />
      <Footer />
      {/* <Projects /> */}
    </Container>
  )
}
