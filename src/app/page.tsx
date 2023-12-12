import Card from './components/card'
import Intro from './components/intro'
import TechStackList from './components/TechStackList'

export default function Home() {
  return (
    <>
      <Intro></Intro>
      <TechStackList></TechStackList>
      <Card></Card>
    </>
  )
}
