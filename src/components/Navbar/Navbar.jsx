import {IoMdSearch} from "react-icons/io"
import {FaCaretDown, FaCartShopping} from "react-icons/fa6"
import DarkMode from "./DarkMode";
const Navbar = ({handlePopup}) => {
   
  const DropDownLinks= [
    {
      id: 1,
      name: "Trending Products",
      link: "/#",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#",
    }
  ]

  const menuLinks = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Shop",
      link: "/#shop",
    },
    {
      id: 3,
      name: "About",
      link: "/#about",
    },
    {
      id: 4,
      name: "Blogs",
      link: "/#blogs",
    },
  ];
  return (
    <div className="bg-white dark:bg-gray-700 dark:text-white relative duration-200 z-40">
      <div className="py-2">
        <div className="container flex justify-between items-center">
          {/* Navbar logo and links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold text-2xl sm:text-3xl tracking-widest uppercase "
            >
              Eshop
            </a>
            <div className="hidden lg:block">
              <ul className="flex gap-3 items-center">
                {menuLinks.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block font-semibold text-gray-500 hover:text-black px-4 dark:hover:text-white duration-200 "
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                {/* dropdown */}
                <li className="group relative cursor-pointer" >
                  <a className="flex font-semibold items-center gap-1 text-gray-500 hover:text-black dark:hover:text-white py-2" href="">Quick Links
                    <span><FaCaretDown className="group-hover:rotate-180 duration-500"/></span>
                  </a>
                  {/* dropdown links */}
                <div className="absolute z-[9999] hidden rounded-md group-hover:block bg-white shadow-md w-[200px] p-4 dark:bg-gray-900 dark:text-white">
                  <ul className="space-y-2">
                    {
                      DropDownLinks.map((item)=>( 
                        <li key={item.id}>
                          <a className="text-gray-500 dark:hover:text-white duration-300 p-2 inline-block font-semibold hover:bg-primary/20 w-full rounded-md" href={item.link}>{item.name}</a>
                        </li>
                      ))
                    }
                  </ul>

                </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Navbar right side (search/cart icon and dark moder) */}
          <div className="flex items-center gap-4">
            {/* searchbar */}
            <div className="group relative">
                <input type="text" placeholder="Search" className="search-bar" />
                <IoMdSearch className="text-xl text-gray-600 dark:text-gray-400 absolute top-1/2 right-3 -translate-y-1/2 group-hover:text-primary duration-300"/>
            </div>
            {/* shppong cart */}
            <button className="relative p-3" onClick={handlePopup} >
                <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400"/>
                <div className="w-4 h-4 absolute top-0 bg-primary rounded-full text-white right-0 flex items-center justify-center text-xs">6</div>
            </button>
            {/* dark mode toggle */}
                <DarkMode/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
