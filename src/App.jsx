import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Project from "./components/Project"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import  { Toaster } from 'react-hot-toast';


function App() {

  return (
 <> 
    <div>
      <Navbar />
      <Home />
      <About/>
      <Project />
      <Experience/>
      <Contact />
      <Footer/>
   </div>
   <Toaster/>
 </>
   
  )
}

export default App
