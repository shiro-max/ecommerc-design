
import React, { createContext } from 'react';
import { useEffect, useState } from 'react';
export const AppContext = createContext();

export const AppProvider = (props) => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        const query = `
        {
            categories {
                name
                id
                products {
                    id
                    name
                    images {
                        url
                        id
                    }
                    price
                    variants {
                    ... on ProductSizeColorVariant {
                        id
                        name
                        }
                    }
                }
            }
        }
        `

        fetch('/api/products', {
            method: 'POST',
            headers: {
               'Content-Type':'application/json'
            },
            body: JSON.stringify({ query })
        })
            .then(e => e.json())
            .then(res => {
                setCategories(res.data)
            })

    }, []);

    return (
        <AppContext.Provider value={{ categories, setCategories }}>
            {props.children}
        </AppContext.Provider>
    )
}