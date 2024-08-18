import Brand1 from "../../assets/br-1.png"
import Brand2 from "../../assets/br-2.png"
import Brand3 from "../../assets/br-3.png"
import Brand4 from "../../assets/br-4.png"
import Brand5 from "../../assets/br-5.png"

const Partners = () => {
  return (
    <div  className="py-8 mt-24 bg-gray-200 dark:bg-white/10">
        <div className="container mx-auto">
            <div className="grid grid-cols-5 gap-5 place-items-center opacity-50">
            <img data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000" src={Brand1} alt="brand" className="md:w-[80px] w-[40px] dark:invert" />
            <img data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000" src={Brand2} alt="brand" className="md:w-[80px] w-[40px] dark:invert" />
            <img data-aos="zoom-out" data-aos-delay="1000" data-aos-duration="1000" src={Brand3} alt="brand" className="md:w-[80px] w-[40px] dark:invert" />
            <img data-aos="fade-down" data-aos-delay="900" data-aos-duration="1000" src={Brand4} alt="brand" className="md:w-[80px] w-[40px] dark:invert" />
            <img data-aos="fade-down" data-aos-delay="1000" data-aos-duration="1000" src={Brand5} alt="brand" className="md:w-[80px] w-[40px] dark:invert" />
            </div>
        </div>
    </div>
  )
}

export default Partners