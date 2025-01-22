import Container from '@/components/container'
import Footer from '@/components/footer'
import Intro from '@/components/intro'
import ProjectList from '@/components/project-list'
import Separator from '@/components/separator'
import Songs from '@/components/songs'
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
      <Songs />
      <Footer />
    </Container>
  )
}
