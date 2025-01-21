import Container from '@/components/container'
import ContentToggle from '@/components/content-toggle'
import Intro from '@/components/intro'
// import Projects from '@/components/projects'
import Separator from '@/components/separator'

export default function Home() {
  return (
    <Container>
      <Intro />
      <Separator />
      <ContentToggle />
      <Separator />
      {/* <Projects /> */}
    </Container>
  )
}
