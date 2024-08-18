import Heading from "../Shared/Heading"
import ProductCard from "./ProductCard"
import img1 from "../../assets/p-1.jpg"
import img2 from "../../assets/p-2.jpg"
import img3 from "../../assets/p-3.jpg"
import img4 from "../../assets/p-4.jpg"
import img5 from "../../assets/p-5.jpg"
import img6 from "../../assets/p-9.jpg"
import img7 from "../../assets/p-7.jpg"

const productsData = [
    {
        id:1,
        img:img1,
        title:"Boot Headphone",
        price:"150",
        aosDelay:"200"
    },
    {
        id:2,
        img:img2,
        title:"Rocky Mountain",
        price:"420",
        aosDealy:"400"
    },
    {
        id:3,
        img:img3,
        title:"Googles",
        price:"480",
        aosDelay:"600"
    },
    {
        id:4,
        img:img4,
        title:"Printed",
        price:"390",
        aosDelay:"800"
    },
]

const productsData2 = [
    {
        id:1,
        img:img7,
        title:"Boot Headphone",
        price:"150",
        aosDelay:"200"
    },
    {
        id:2,
        img:img5,
        title:"Rocky Mountain",
        price:"420",
        aosDelay:"400"
    },
    {
        id:3,
        img:img6,
        title:"Googles",
        price:"480",
        aosDelay:"600"
    },
    {
        id:4,
        img:img2,
        title:"Printed",
        price:"390",
        aosDelay:"800"
    },
]

const Products = () => {
  return (
    <div className="container">
        {/* heading section */}
        <Heading title={"Our Products"} subTitle={"Explore Our Products"}/>
        {/* product section */}
        <ProductCard products={productsData}/>
        <ProductCard products={productsData2}/>
    </div>
  )
}

export default Products