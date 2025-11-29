import AllServices from "../components/AllServices"
import Brands from "../components/Brands"
import CarruselHero from "../components/CarruselHero"
import Contact from "../components/Contact"
import Featured from "../components/Featured"

const Home = () => {
  return (
    <main>
      <CarruselHero />
      <Featured />
      <Brands />
      <AllServices />
      <Contact />
    </main>
  )
}
export default Home