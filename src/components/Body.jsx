import React from 'react'
import ProductItem from './ProductItem';
import ProductList from './ProductList';

function Body() {
    let productItems = ProductList();
    // console.log(productItems);

    return (
        <div>
            <div>

                <ProductItem productItems={productItems} />

            </div>
        </div>
    )
}

export default Body