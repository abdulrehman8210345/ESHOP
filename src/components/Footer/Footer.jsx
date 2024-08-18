import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    <div className="dark:bg-gray-900 overflow-x-hidden">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details  */}
          <div className="py-8 px-2 sm:px-4">
            <a
              href="#"
              target="_blank"
              className="text-primary font-semibold text-2xl sm:text-3xl tracking-widest uppercase "
            >
              Eshop
            </a>
            <p data-aos="slide-right" data-aos-delay="1000" data-aos-duration="1000" className="text-gray-600 pt-3 lg:pr-24 dark:text-gray-300">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              itaque tempora fugiat!
            </p>
            <p data-aos="slide-right" data-aos-delay="1500" data-aos-duration="1000" className="text-gray-500 mt-4 mb-4">
              Made with 💖 by Abdul Rehman
            </p>
            <a
              href="https://github.com/abdulrehman8210345"
              className="bg-primary/80 p-2 px-2 text-sm rounded-md text-white"
            >
              Visit my Github
            </a>
          </div>

          {/* social links  */}
          <div className=" col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 data-aos="fade-down" data-aos-delay="1000" data-aos-duration="1000" className="mb-3 font-bold text-xl sm:text-left">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((link) => (
                  <li data-aos="fade-up" data-aos-delay="1500" data-aos-duration="1000" key={link.title}>
                    <a
                      className="text-gray-500 hover:text-black dark:hover:text-white duration-500"
                      href={link.link}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-8 px-4">
              <h1 data-aos="fade-down" data-aos-delay="1000" data-aos-duration="1000" className="mb-3 font-bold text-xl sm:text-left">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((link) => (
                  <li data-aos="fade-up" data-aos-delay="1500" data-aos-duration="1000" key={link.title}>
                    <a
                      className="text-gray-500 hover:text-black dark:hover:text-white duration-500"
                      href={link.link}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* company address  */}
            <div className="py-8 px-4 sm:col-auto">
              <h1 data-aos="fade-down" data-aos-delay="1000" data-aos-duration="1000" className="mb-3 font-bold text-xl sm:text-left">Address</h1>
              <div className="">
                <div  data-aos="zoom-in" data-aos-delay="1500" data-aos-duration="1000" className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Karachi, Pakistan</p>
                </div>
                <div data-aos="zoom-in" data-aos-delay="1500" data-aos-duration="1000"  className="flex items-center gap-3 mt-4">
                  <FaMobileAlt />
                  <p className="">+92 3347368510</p>
                </div>
                <div  data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000" className="mt-5 flex items-center gap-3">
                  <a href="https://www.linkedin.com/in/abdul-rehman-882315271/">
                    <FaLinkedin className="text-3xl duration-300 hover:text-primary" />
                  </a>
                  <a href="#">
                    <FaInstagram className="text-3xl duration-300 hover:text-primary" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl duration-300 hover:text-primary" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
