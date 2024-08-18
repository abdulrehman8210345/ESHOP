import Image1 from "../../assets/gaming.png"
import Image2 from "../../assets/vr.png"
import Image3 from "../../assets/speaker.png"
import Button from "../Shared/Button"

const Category2 = () => {
  return (
    <div className="py-2">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 sm:gap-8 gap-4">
                {/* first grid column */}
                <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000"  className="sm:col-span-2 col-span-1 bg-gradient-to-br from-gray-500 to-gray-300 text-white rounded-3xl py-10 pl-8 h-[320px] relative flex items-end">
                    <div>
                        <div className="">
                            <p className="text-2xl sm:text-base text-black">Enjoy</p>
                            <p className="text-4xl sm:text-2xl font-semibold z-10 relative">With</p>
                            <p className="text-5xl sm:text-3xl xl:text-5xl font-bold opacity-50 z-10 relative mb-4 ">Gaming</p>
                            <Button text="Browse" bgColor="bg-gray-500"
                            textColor="text-white" />
                        </div>
                        <img src={Image1} className="sm:w-[280px] w-[240px] absolute sm:top-4 top-10 sm:right-4 -right-0" alt="" />
                    </div>
                </div>
               
                {/* second grid column */}
                <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000"  className="bg-gradient-to-br from-brandGreen to-brandGreen/50 text-white rounded-3xl py-10 pl-8 sm:pl-4 h-[320px] relative flex items-start">
                    <div>
                        <div className="">
                            <p className="text-2xl sm:text-base text-black">Enjoy</p>
                            <p className="text-4xl sm:text-2xl font-semibold z-10 relative">With</p>
                            <p className="text-5xl sm:text-3xl xl:text-5xl font-bold opacity-50 mb-4 z-10 relative">VR</p>
                            <Button text="Browse" bgColor="bg-white"
                            textColor="text-brandGreen" />
                        </div>
                        <img src={Image2} className="sm:w-[200px] w-[280px]  absolute bottom-7 right-10 sm:bottom-16 sm:right-0 xl:bottom-10 xl:right-2" alt="" />
                    </div>
                </div>
                {/* third grid column */}
                <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000"  className="bg-gradient-to-br from-brandBlue to-brandBlue/50 text-white rounded-3xl py-10 pl-8 sm:pl-4 h-[320px] relative flex items-start">
                    <div>
                        <div className="">
                            <p className="text-2xl sm:text-base text-black">Enjoy</p>
                            <p className="text-5xl sm:text-2xl font-semibold">With</p>
                            <p className="text-6xl sm:text-3xl xl:text-5xl font-bold opacity-20 mb-4 z-10 relative">Speaker</p>
                            <Button text="Browse" bgColor="bg-white"
                            textColor="text-brandBlue" />
                        </div>
                        <img src={Image3} className="w-[320px] absolute bottom-0 -right-2" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category2