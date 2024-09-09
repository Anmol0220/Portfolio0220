import Nav from './nav';
import Hero from './hero';
import Footer from './footer';
import Testimonial from './testimonial';
import Project from './project';
import Contact from './contact';
const main = () => {
  return (
    <div className='bg-purple-600'>
        <Nav/>
        <Hero/>
        <Project/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        

    </div>
  )
}

export default main
