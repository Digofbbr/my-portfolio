import Navbar from "../../components/Navbar"
import About from "./sections/About/About"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects"

const Home = () => {
  
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Projects />
    </div>
  )
}

export default Home