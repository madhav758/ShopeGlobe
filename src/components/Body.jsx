import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem';
import ProductList from './ProductList';

function Body() {
    let productItems = ProductList();
    // console.log(productItems);
    const [allProductItems, setAllProductItems] = useState(productItems)
    useEffect(() => {
        if (productItems && productItems.length) {
            setAllProductItems(productItems)
        }
    }, [productItems])

    return (
        <div>
            <div>

                <ProductItem productItems={allProductItems} />

            </div>
        </div>
    )
}

export default Body