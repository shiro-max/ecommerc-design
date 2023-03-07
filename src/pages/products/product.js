import Image from "next/image";
import Link from "next/link";
const Product = ({product}) => {
    return (
        <Link  href={`/products/${product?.id}`} className="cursor-pointer">
            <div style={{position:"relative", width:"200px", height:"200px"}}>
                <ul>
                    {product && product.images.map(image=>(
                        <li key={image.id}>
                            <Image src={image.url} style={{position:"absolute",objectFit:"cover"}} alt="Picture of the product" width={200} height={200}/>
                        </li>
                    ))}
                </ul>
            </div>
            <h2 className=" text-red-600 p-4 text-center">{product?.name}</h2>
            <p className="text-blue-700 text-center ">{product?.price}</p>
            <div>
                <ul className="flex gap-2">
                {product && product.variants.map(size =>(
                    <li key={size.id}>{size.name}</li>
                ))}
                </ul>
            </div>
        </Link>
    );
}

export default Product;