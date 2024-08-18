import {
  FaCarSide,
  FaCheckCircle,
  FaWallet,
  FaHeadphonesAlt,
} from "react-icons/fa";
const servicesData = [
  {
    id: 1,
    icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
    title: "Free Shipping",
    description: "Free Shipping On All Order",
    aos_data:"fade-up",
    aosDelay:"400"
  },
  {
    id: 2,
    icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
    title: "Safe Money",
    description: "30 Days Money Back ",
    aos_data:"fade-up",
    aosDelay:"200"
  },
  {
    id: 3,
    icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
    title: "Secure Payment",
    description: "All Payment Secure",
    aos_data:"fade-up",
    aosDelay:"400"
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
    title: "Online Support 24/7",
    description: "Technical Support 24/7",
    aos_data:"fade-up",
    aosDelay:"200"
  },
];
const Services = () => {
  return (
    <div className="container my-16 ">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:translate-x-0 ">
        {
            servicesData.map((item)=>(
                <div data-aos={item.aos_data} data-aos-delay={item.aosDelay} data-aos-duration="1000" key={item.id} className="flex flex-col items-start sm:flex-row gap-4">
                {item.icon}
                <div>
                    <h1 className="font-bold lg:text-xl">{item.title}</h1>
                    <h1 className="text-gray-500 text-sm">{item.description}</h1>
                </div>
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Services;
