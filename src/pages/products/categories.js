import Image from "next/image";
import Link from "next/link";

const Categories = ({products}) => {
    return (
        <div className="m-8">
            <Link href={`/products/${products.id}`}>
                <p className=" hover:cursor-pointer m-4 p-2 border rounded-md text-center font-extrabold text-transparent text-3xl bg-clip-text bg-gradient-to-r hover:from-green-400 hover:to-blue-600 hover:bg-gradient-to-r from-purple-400 to-pink-600 hover:border-pink-400 hover:bg-pink-300 bg-slate-800">
                    {products.name}
                </p>
            </Link>
        </div>
    );
}

export default Categories;