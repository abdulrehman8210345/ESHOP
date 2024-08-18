import Image1 from "../../assets/earphone.png"
import Image2 from "../../assets/watch.png"
import Image3 from "../../assets/macbook.png"
import Button from "../Shared/Button"

const Category = () => {
  return (
    <div className="py-6">
        <div className="container">
            <div  className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 sm:gap-8 gap-4">
                {/* first grid column */}
                <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000" className="bg-gradient-to-br from-black/90 to-black/60 text-white rounded-3xl py-10 pl-8 sm:pl-4 h-[320px] relative flex items-end">
                    <div>
                        <div>
                            <p className="text-2xl sm:text-base text-gray-400">Enjoy</p>
                            <p className="text-4xl sm:text-2xl font-semibold">With</p>
                            <p className="text-5xl sm:text-3xl xl:text-5xl font-bold opacity-20 mb-4 relative z-10">Earphone</p>
                            <Button text="Browse" bgColor="bg-primary"
                            textColor="text-white" />
                        </div>
                        <img src={Image1} className="w-[320px] absolute  xl:bottom-14 bottom-10 right-4 sm:-right-3" alt="" />
                    </div>
                </div>
                {/* second grid column */}
                <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000"  className="bg-gradient-to-br from-brandYellow to-brandYellow/80 text-white rounded-3xl py-10 pl-8 sm:pl-4 h-[320px] relative flex items-end">
                    <div>
                        <div className="">
                            <p className="text-2xl sm:text-base text-black">Enjoy</p>
                            <p className="text-4xl sm:text-2xl font-semibold">With</p>
                            <p className="text-5xl sm:text-3xl xl:text-5xl font-bold opacity-50 mb-4 z-10 relative">Gadget</p>
                            <Button text="Browse" bgColor="bg-white"
                            textColor="text-brandYellow" />
                        </div>
                        <img src={Image2} className="w-[320px] absolute top-2 sm:left-12 -right-12" alt="" />
                    </div>
                </div>
                {/* third grid column */}
                <div data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000"  className="sm:col-span-2 col-span-1 bg-gradient-to-br from-primary to-primary/80 text-white rounded-3xl py-10 pl-8 h-[320px] relative flex items-end">
                    <div>
                        <div className="">
                            <p className="text-2xl sm:text-base text-black">Enjoy</p>
                            <p className="text-4xl sm:text-2xl font-semibold z-10 relative">With</p>
                            <p className="text-5xl sm:text-3xl xl:text-5xl font-bold z-10 relative opacity-50 mb-4 ">Laptop</p>
                            <Button text="Browse" bgColor="bg-white"
                            textColor="text-primary" />
                        </div>
                        <img src={Image3} className="sm:w-[320px] w-[280px] absolute top-0 sm:right-4 -right-4" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Category