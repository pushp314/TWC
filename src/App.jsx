import Dream from './components/Dream'
import Footer from './components/Footer'
import MeetOurTeam from './components/MeetOurTeam';
import Navbar from './components/Navbar';
// import HeroSection from './components/HeroSection';
import TestimonialSlider from './components/TestimonialSlider';
import EventPlanning from './components/EventPlanning';
import EventExperience from './components/EventExperience';
import Hero from './components/Hero';
import Carousel from './components/Carousel';

function App() {
  return (
    <>
      <Navbar />
      <Carousel/>
      <Hero/>
      {/* <HeroSection /> */}
      <EventExperience/>
      <EventPlanning/>
      <MeetOurTeam/>
      <TestimonialSlider/>
      <Dream/>
      <Footer/>
    </>
  )
}

export default App
