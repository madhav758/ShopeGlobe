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
            <div className='bg-[#fef8ef] '>
                {/* <h1 className='text-xl'>{user ? `Welcome to ShopeGlobe, ${user.fullName}!` : "Welcome to ShopGlobe, please login to access cart!"}</h1> */}
                <div className=" max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 ">
                    <h1 className="mb-1 ml-1.5 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-5xl mt-6">

                        Welcome to <mark className="px-2 pb-0.5 text-white bg-[#c10000] rounded-md">ShopeGlobe</mark>

                    </h1>

                    <p className="ml-2 mt-2 text-gray-500 text-lg">
                        Explore our latest collection of premium products.
                    </p>
                </div>

                <ProductItem productItems={displayedProducts} />

            </div>
        </div>
    )
}

export default Body