import MainButton from "../../../../Components/MainButton"
import SecondaryButton from "../../../../Components/SecondaryButton"


function HeroSection() {
  return (
    <section className="hero-bg max:h-[870px] h-screen flex items-center justify-center text-center text-white relative px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <div className="bg-[#d48f1e] h-0.5 w-14  mx-auto mb-2"></div>
          <h2 className="text-sm tracking-widest mb-2">HELLO, NEW FRIEND</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">RESERVE YOUR TABLE</h1>
          <div className="flex justify-center gap-4">
           <MainButton text="BOOK A TABLE" />
            <SecondaryButton text="VIEW MENU" />
          </div>
        </div>
      </section>
  )
}

export default HeroSection