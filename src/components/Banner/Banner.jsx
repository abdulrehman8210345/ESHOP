const Banner = ({ data }) => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
      <div className="container">
        <div
          style={{ backgroundColor: data.bgColor }}
          className="rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-5 items-center text-white"
        >
          {/* first col */}
          <div className="p-6 sm:p-8">
            <p data-aos="slide-right" data-aos-duration="1000" className="text-sm">{data.discount}</p>
            <h1 data-aos="zoom-out" data-aos-duration="1000" className="font-bold text-4xl lg:text-7xl uppercase">{data.title}</h1>
            <h1 data-aos="fade-up" data-aos-duration="1000" className="text-sm">{data.date}</h1>
          </div>
          {/* second col */}
          <div data-aos="zoom-in" data-aos-duration="1000" className="h-full flex items-center"><img src={data.image} alt="" className="scale-125 drop-shadow-2xl mx-auto w-[250px] md:w-[320px] object-cover" /></div>
          {/* third col */}
          <div className="flex flex-col justify-center gap-3 p-6 sm:p-10">
            <p data-aos="zoom-out" data-aos-duration="1000" className="font-bold text-xl">{data.title2}</p>
            <p data-aos="fade-up" data-aos-duration="1000" className="text-3xl sm:text-5xl font-bold">{data.title3}</p>
            <p data-aos="fade-up" data-aos-duration="1000" className="text-sm tracking-wide leading-6">{data.title4}</p>
            <div data-aos="fade-up" data-aos-duration="1500">
                <button style={{color:data.bgColor}} className="bg-white px-4 py-2 rounded-full hover:scale-110 duration-500" >Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
