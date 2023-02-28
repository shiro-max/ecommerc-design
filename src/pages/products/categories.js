import Image from "next/image";
import Link from "next/link";

const Categories = ({products}) => {
    return (
        <div>
            <Link href={`/products/${products.id}`}>{products.name}</Link>
        </div>
    );
}

export default Categories;