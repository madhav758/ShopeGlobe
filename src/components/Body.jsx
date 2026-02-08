import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem';
import ProductList from './ProductList';
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredProduct, setProduct } from './utils/productSlice';

function Body() {
    let productItems = ProductList(); //make sure the product list API doesnt rerun and ony runs once i.e has no dependenmcy array int he useEffect in the productList.jsx or it will creatae an infinite re render of the body we can also add a setLoading (false) inside the useEffect and make it true outside if the p
    const dispatch = useDispatch();

    const displayedProducts = useSelector((state) => state.product.filteredProducts);

    useEffect(() => {
        if (productItems && productItems.length) {
            dispatch(setProduct(productItems))
            dispatch(setFilteredProduct(productItems))
        }
    }, [productItems, dispatch])



    return (
        <div>
            <div>

                <ProductItem productItems={displayedProducts} />

            </div>
        </div>
    )
}

export default Body