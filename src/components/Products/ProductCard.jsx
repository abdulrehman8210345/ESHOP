import Button from "../Shared/Button"


const ProductCard = ({products}) => {
  return (
    <div className="mb-10">
        <div className="grid grid-cols-2  lg:grid-cols-4 gap-4 place-items-center">
            {
                products.map((product)=>(
                    <div data-aos="fade-up" data-aos-delay={product.aosDelay} data-aos-duration="1000" className="group" key={product.id}>
                        <div className="relative">
                            <img src={product.img} alt=""/>
                            <div className="hidden group-hover:flex absolute xl:-translate-y-56  sm:-translate-y-44 -translate-y-32 -translate-x-1/2 left-1/2 text-center h-full w-full group-hover:backdrop-blur-sm justify-center items-center rounded-md duration-1000">
                                <Button text={"Add To Cart"}
                                bgColor={"bg-primary"} textColor={"text-white"}
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="font-semibold">{product.title}</h2>
                            <h2 className="font-bold">$ {product.price}</h2>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ProductCard