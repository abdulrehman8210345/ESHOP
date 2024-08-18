import Slider from "react-slick";
import Image1 from "../../assets/headphone.png";
import Image2 from "../../assets/macbook.png";
import Image3 from "../../assets/vr.png";
import Button from "../Shared/Button";

const HeroSectionData = [
  {
    id: 1,
    img: Image1,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Headphone",
  },
  {
    id: 2,
    img: Image2,
    subtitle: "Beats Solo",
    title: "Branded",
    title2: "Laptops",
  },
  {
    id: 3,
    img: Image3,
    subtitle: "Beats Solo",
    title: "Wireless",
    title2: "Virtual",
  },
];

const Hero = ({ handlePopup }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "ease-in-out",
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="container">
      <div className="hero-bg-color rounded-3xl overflow-hidden">
        {/* Hero section */}
        <div className="container pb-8 sm:pb-0 min-h-[550px]">
          <Slider {...settings}>
            {HeroSectionData.map((item) => (
              <div key={item.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2 ">
                  {/* text content */}
                  <div className="flex flex-col gap-4 sm:pt-0 justify-center sm:pl-3 pt-12 text-center sm:text-left order-2 sm:order-1">
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="1000"
                      data-aos-once="false"
                      className="text-2xl font-bold sm:text-6xl lg:text-2xl"
                    >
                      {item.subtitle}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="1000"
                      data-aos-once="false"
                      className="text-5xl font-bold sm:text-6xl lg:text-7xl"
                    >
                      {item.title}
                    </h1>
                    <h1
                      data-aos="zoom-out"
                      data-aos-duration="1000"
                      data-aos-once="false"
                      className="text-5xl text-white dark:text-white/5 font-bold uppercase md:text-[100px] xl:text-[120px] sm:text-[80px]"
                    >
                      {item.title2}
                    </h1>
                    <div
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-delay="500"
                    >
                      <Button
                        text="Shop by Category"
                        handler={handlePopup}
                        bgColor="bg-primary"
                        textColor="text-white"
                      />
                    </div>
                  </div>
                  {/* image section */}
                  <div className="order-1 sm:order-2 flex justify-center sm:inline">
                    <div data-aos="zoom-in" data-aos-once="true">
                      <img
                        className="-translate-x-4 w-[300px] h-[300px] sm:h-[450px] sm:scale-150 mx-auto object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]"
                        src={item.img}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
