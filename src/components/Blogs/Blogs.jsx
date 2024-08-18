import Heading from "../Shared/Heading"
import img1 from "../../assets/blog-1.jpg"
import img2 from "../../assets/blog-2.jpg"
import img3 from "../../assets/blog-3.jpg"

const BlogData= [
    {
        id:1,
        title:"How to choose perfect smartwatch",
        subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam temporibus dolore, modi eaque impedit ab?",
        published:"July 05,2024 by Abdul Rehman",
        image:img1,
        aosDelay:"400"
    },
    {
        id:2,
        title:"How to choose perfect gadget",
        subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam temporibus dolore, modi eaque impedit ab?",
        published:"Jan 25,2024 by Abdullah",
        image:img2,
        aosDelay:"600"
    },
    {
        id:3,
        title:"How to choose perfect VR headset",
        subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam temporibus dolore, modi eaque impedit ab?",
        published:"April 06,2024 by Bilal",
        image:img3,
        aosDelay:"800"
    },
]
const Blogs = () => {
  return (
    <div className="container my-12">
        <Heading title={"Recent News"} subTitle={"Explore Our Blogs"}/>
        {/* blog section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  gap-y-16 p-8">
            {
                BlogData.map((blog)=>(
                    <div data-aos="fade-up" data-aos-delay={blog.aosDelay} data-aos-duration="1000" key={blog.id} className="bg-white dark:bg-gray-600 duration-1000">
                        {/* image */}
                        <div className="mb-4">
                    <img src={blog.image} alt="" className="w-full h-[220px] object-cover hover:scale-110 duration-700 rounded-2xl" />
                        </div>
                        {/* content */}
                    <div className="space-y-2">
                    <p className="text-xs text-gray-500">{blog.published}</p>
                    <p className="font-bold line-clamp-1">{blog.title}</p>
                    <p className="line-clamp-2 text-sm text-gray-400">{blog.subtitle}</p>
                    </div>
                    </div>
                ))
            }
        </div>

    </div>
  )
}

export default Blogs