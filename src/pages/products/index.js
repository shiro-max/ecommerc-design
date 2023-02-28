import Link from "next/link";
import { useEffect, useState } from "react";
import Loading from "../components/loading";
import Categories from "./categories";
import ProductsList from "./categories";

const Data = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        const query = `
        {
            categories {
                name
                id
                products {
                    id
                    name
                    price
                    variants {
                    ... on ProductSizeColorVariant {
                        name
                        }
                    }
                }
            }
        }
        `

        fetch('https://api-ap-northeast-1.hygraph.com/v2/cleldjsiq1gzw01ta2x1713cl/master', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2Nzc0MTQ5NTIsImF1ZCI6WyJodHRwczovL2FwaS1hcC1ub3J0aGVhc3QtMS5oeWdyYXBoLmNvbS92Mi9jbGVsZGpzaXExZ3p3MDF0YTJ4MTcxM2NsL21hc3RlciIsIm1hbmFnZW1lbnQtbmV4dC5ncmFwaGNtcy5jb20iXSwiaXNzIjoiaHR0cHM6Ly9tYW5hZ2VtZW50LmdyYXBoY21zLmNvbS8iLCJzdWIiOiJkNmI5NWViOC05OWRiLTRlZmQtYWE3OC0zMzBkMWEwMzMwZWEiLCJqdGkiOiJja2c4MzVvYXByNGZpMDF3ZTk4amw3ODB0In0.Dr1OJvHjkxNzIai7lbnygvbikNavngZnY_sofmHr8tGVPFRjNiaHUcTv1V9ndj4M_d6fgN36IfHwO1lFDJdLvTNT_8h02noZUsZrOQlZncLBzHnWm8iokG3pOATtM9l7xHYsfd2TnVJb0nsoaZpBC-kCA--6rXbc3ZXtJd6iCfYrtEJS5bnUa3pW83o2L1Bp6HLCcFVL4Ot_rR_I4DtSKGeaSgXqnEZRoOdhMaLmHOCu5W_0qIg7c1BipVOZ5bgXu_ODhj4P1kABgK0upHTHYPW0QjSC3-sf7AnF5bq3lnKsYMk-4uje0bqUzeHWcVX_qRviQDcHdl0nSy6496g_v6fgugkdqhNYlnAOoWu-E822_1yzaCa9tkwUXJa6vfZjhjABL1LzWikUWwOIS8BM4GsndUnbqQw4SZ0uJ4Iau_GapvFuE8FmC_ADiVR1LwUfwHl2t4jetTf8UcKo-C-RuKlohalAWI3YEFgLL44MqkE13huUXQSlOEh__r3HxiD_JQE02D7cAYPhJmgQ-GcLDvrFPuVbfQIsIIUZg50cWrQbRsObGls8BN7OQvsmuAkbPVMopJx0-sjSYkjUDBgoZPwyn2Vd7ysQHepErtNKFFxJrkyTeTYTB3-i756ox1T3HffVSPl-V08Gf5wj2vpeanVU74NPWVMRDnEMiFjmbrE'
            },
            body: JSON.stringify({ query })
        })
            .then(e => e.json())
            .then(res => {
                const { data } = res
                setCategories(data.categories)
            })
    }, [])

    return (
        <div>
            {categories.length === 0 ? <Loading/> : null}
            {categories && categories.map(products => <Categories products={products} key={products.id} />)}
        </div>
    );
}

export default Data;