

const Heading = ({title,subTitle}) => {
  return (
    <div className="text-center mb-10 space-y-2">
        <h1 data-aos="fade-down"  data-aos-duration="1000" className="font-bold text-3xl lg:text-4xl">{title}</h1>
        <p data-aos="fade-up"  data-aos-duration="1000"  className="text-xs text-gray-500">{subTitle}</p>
    </div>
  )
}

export default Heading