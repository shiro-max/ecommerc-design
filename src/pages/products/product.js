import Image from "next/image";
import Link from "next/link";
const Product = ({product}) => {
    return (
        <Link  href={`/products/${product?.id}`} className="cursor-pointer flex flex-col gap-2 justify-center items-center mb-10">
            <h2 className=" text-blue-300 text-xl">{product?.name}</h2>
            <div style={{position:"relative", width:"200px", height:"200px"}}>
                <ul>
                    {product && product.images.map(image=>(
                        <li key={image.id}>
                            <Image src={image.url} style={{position:"absolute",objectFit:"cover"}} alt="Picture of the product" width={200} height={200}/>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
            <ul className="flex gap-2 text-purple-400">
                {product && product.variants.map(size =>(
                    <li key={size.id}>{size.name}</li>
                ))}
            </ul>
            <p className="text-blue-700 text-center ">{product?.price}</p>
            </div>
        </Link>
    );
}

export default Product;