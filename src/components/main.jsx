import Nav from './nav';
import Hero from './hero';
import Footer from './footer';
//import Testimonial from './testimonial';
import Project from './project';
import Contact from './contact';
import Skills from './skills';
const main = () => {
  return (
    <div className='bg-purple-600'>
        <Nav/>
        <Hero/>
        <Skills/>
        <Project/>
        
        <Contact/>
        <Footer/>
        

    </div>
  )
}

export default main
