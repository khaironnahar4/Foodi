import SectionHeading from "../../../Components/SectionHeading";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

function Testimonial() {
  const reviews = [
    {
      name: "John",
      role: "Business Man",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse aliquet tellus adipiscing condimentum donec blandit. Dignissim nunc facilisi pretium id molestie lectus duis.",
    },
    {
      name: "John",
      role: "Student",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse aliquet tellus adipiscing condimentum donec blandit. Dignissim nunc facilisi pretium id molestie lectus duis.",
    },
    {
      name: "John",
      role: "Manager",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse aliquet tellus adipiscing condimentum donec blandit. Dignissim nunc facilisi pretium id molestie lectus duis.",
    },
    {
      name: "John",
      role: "Job Holder",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse aliquet tellus adipiscing condimentum donec blandit. Dignissim nunc facilisi pretium id molestie lectus duis.",
    },
    {
      name: "John",
      role: "Business Man",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse aliquet tellus adipiscing condimentum donec blandit. Dignissim nunc facilisi pretium id molestie lectus duis.",
    },
    {
      name: "John",
      role: "Business Man",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet consectetur. Suspendisse aliquet tellus adipiscing condimentum donec blandit. Dignissim nunc facilisi pretium id molestie lectus duis.",
    },
  ];


  return (
    <section className="px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
      <SectionHeading
        heading={"features"}
        subHeading={"Why people choose us?"}
      />
      {/* testimonials in carosel */}

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            key={index}
            className="bg-base-200 p-10 text-center rounded-xl"
          >
            <div>
              <p className="mb-4">"{review?.review}"</p>
              {/* ratings */}
              <div></div>
              <h4 className="text-xl">{review?.name}</h4>
              <p>{review?.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}

export default Testimonial;
