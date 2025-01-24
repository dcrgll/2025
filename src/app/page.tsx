import Container from '@/components/container'
import Footer from '@/components/footer'
import Intro from '@/components/intro'
import Lanyard from '@/components/lanyard'
import ProjectList from '@/components/project-list'
import Separator from '@/components/separator'
import Weather from '@/components/weather'

export default function Home() {
  return (
    <Container>
      <Intro />
      <Separator />
      <ProjectList />
      <Separator />
      <Weather />
      <Separator />
      <Lanyard />
      <Footer />
    </Container>
  )
}
