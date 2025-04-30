import AboutUs from "./Sections/AboutUs/AboutUs"
import HeroSection from "./Sections/HeroSection/HeroSection"
import SectionDivider from "../../Components/SectionDivider"

function Home() {
  return (
    <div className="px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-28">
        {/* banner */}
        <HeroSection />

        <SectionDivider />

        {/* about us */}
        <AboutUs />

        {/* features */}

        {/* testimonial */}

        {/* simple way to order your food */}

        {/* explore our foods */}

        {/* subscribe to our newletter */}

        
    </div>
  )
}

export default Home