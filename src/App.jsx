
import Banner from './components/Banner/Banner'
import Category from './components/Category/Category'
import Category2 from './components/Category/Category2'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import headphone from "./assets/headphone.png"
import smartWatch from "./assets/smartwatch2-removebg-preview.png" 
import Products from './components/Products/Products'
import Blogs from "./components/Blogs/Blogs"
import Partners from './components/Partners/Partners'
import Footer from "./components/Footer/Footer"
import { useEffect, useState } from 'react'
import Popup from './components/Popup/Popup'
import AOS from "aos"
import "aos/dist/aos.css"


const BannerData = {
  discount:"30% OFF",
  title:"Fine Smile",
  date:"10 Jan to 28 Jan",
  image:headphone,
  title2:"Air Solo Bass",
  title3: "Winter Sale",
  title4:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam temporibus dolore, modi eaque impedit ab?",
  bgColor:"#f42c37"

}

const BannerData2 = {
  discount:"30% OFF",
  title:"Happy Hours",
  date:"05 July to 13 July",
  image:smartWatch,
  title2:"Smart Solo",
  title3: "Winter Sale",
  title4:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam temporibus dolore, modi eaque impedit ab?",
  bgColor:"#2dcc6f"

}
 
const App = () => {
  const [popup, setPopup] = useState(false)

  useEffect(() => {
    AOS.init({
      duration:800,
      easing:"ease-in-sine",
      delay:100,
      offset:100
    });
    AOS.refresh();
  }, [])
  

  const handlePopup = ()=>{
    setPopup(!popup);
  }
  return (
    <div className='dark:bg-gray-600 dark:text-white bg-white duration-1000'>
      <Navbar handlePopup={handlePopup}/>
      <Hero handlePopup={handlePopup}/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner data={BannerData}/>
      <Products/>
      <Banner data={BannerData2}/>
      <Blogs/>
      <Partners/>
      <Footer/>
      <Popup popup={popup} handlePopup={handlePopup}/>
    </div>
  )
}

export default App