import { AppContext } from "@/context";
import { useContext } from "react";
import Loading from "../components/loading";
import Categories from "./categories";

const Data = () => {

    const {categories, setCategories} = useContext(AppContext)

    return (
        <div>
            {categories.length === 0 ? <Loading/> : null}
            {categories && categories.map(products => <Categories products={products} key={products.id} />)}
        </div>
    );
}

export default Data;