
import './App.css'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Portofolio from './pages/Portofolio'
import Skills from './pages/Skills'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Portofolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
