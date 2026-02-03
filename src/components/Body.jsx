import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem';
import ProductList from './ProductList';
import { useDispatch, useSelector } from 'react-redux'
import { setProduct } from './utils/productSlice';

function Body() {
    let productItems = ProductList();
    // console.log(productItems);
    const dispatch = useDispatch()

    const [allProductItems, setAllProductItems] = useState(productItems)
    useEffect(() => {
        if (productItems && productItems.length) {
            setAllProductItems(productItems)
            dispatch(setProduct(productItems))
        }
    }, [productItems, dispatch])




    return (
        <div>
            <div>

                <ProductItem productItems={allProductItems} />

            </div>
        </div>
    )
}

export default Body