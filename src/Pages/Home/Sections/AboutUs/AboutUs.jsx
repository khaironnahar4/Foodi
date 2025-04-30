import MainButton from "../../../../Components/MainButton";
import img1 from "../../../../assets/img (1).png";
import img2 from "../../../../assets/img (2).png";
import img3 from "../../../../assets/img (3).png";

function AboutUs() {
  return (
    <section className="">
      {/* about us menu */}
      <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6 md:gap-8 lg:gap-12">
        <div className="w-sm">
          <div>
            <h2 className="text-sm tracking-widest">ABOUT US</h2>
            <div className="bg-[#d48f1e] h-0.5 w-14 mb-6"></div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            We Invite You To Visit Our Coffee House
          </h1>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc
            varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at
            ac eu donec ut. Sagittis vestibulum at quis non massa netus.
          </p>
          <MainButton text="READ MORE" />
        </div>
        <div className="min-w-sm max-w-1/2">
          <img
            src={img1}
            alt="retaurant image"
            className="w-full overflow-hidden"
          />
        </div>
      </div>

      {/* coffee menu */}
      <div className="w-full flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center gap-6 md:gap-8 lg:gap-12 mt-6 md:mt-8 lg:mt-0">
        <div className="min-w-sm max-w-1/2">
          <img
            src={img2}
            alt="retaurant image"
            className="w-full overflow-hidden"
          />
        </div>
        <div className="w-sm mx-auto">
          <div>
            <h2 className="text-sm tracking-widest">COFFEE MENU</h2>
            <div className="bg-[#d48f1e] h-0.5 w-14 mb-6"></div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Quality Kava Beans
          </h1>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc
            varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at
            ac eu donec ut. Sagittis vestibulum at quis non massa netus.
          </p>
          <MainButton text="READ MORE" />
        </div>
      </div>

      {/* our team */}
      <div className="w-full flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6 md:gap-8 lg:gap-12 mt-6 md:mt-8 lg:mt-0">
        <div className="w-sm">
          <div>
            <h2 className="text-sm tracking-widest">OUR TEAM</h2>
            <div className="bg-[#d48f1e] h-0.5 w-14 mb-6"></div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Use the Tips & Recipes of Our Barista
          </h1>
          <p className="mb-6">
            Lorem ipsum dolor sit amet consectetur. Dolor elit vitae nunc
            varius. Facilisis eget cras sit semper sit enim. Turpis aliquet at
            ac eu donec ut. Sagittis vestibulum at quis non massa netus.
          </p>
          <MainButton text="READ MORE" />
        </div>
        <div className="min-w-sm max-w-1/2">
          <img
            src={img3}
            alt="retaurant image"
            className="w-full overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
