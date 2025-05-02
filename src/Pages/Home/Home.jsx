import AboutUs from "./Sections/AboutUs/AboutUs"
import HeroSection from "./Sections/HeroSection/HeroSection"
import SectionDivider from "../../Components/SectionDivider"
import Features from "./Sections/Features/Features"
import Reservation from "./Sections/Reservation/Reservation"
import Testimonial from "./Testimonial/Testimonial"
import Overview from "./Sections/Overview/Overview"
import OrderWay from "./Sections/OrderWay/OrderWay"

function Home() {
  return (
    <div className="">
        {/* banner */}
        <HeroSection />


        {/* about us */}
        <SectionDivider />
        <AboutUs />


        {/* features */}
        <SectionDivider />
        <Features />

        {/* reservation */}
        <SectionDivider />
        <Reservation />

        {/* testimonial */}
        <SectionDivider />
        <Testimonial />

        {/* overview */}
        <SectionDivider />
        <Overview />

        {/* simple way to order your food */}
        <SectionDivider />
        <OrderWay />

        {/* explore our foods */}

        {/* subscribe to our newletter */}

        
    </div>
  )
}

export default Home