import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilteredProduct } from './utils/productSlice';

function Search() {
    // 2. Access products from your productSlice
    const allProducts = useSelector((state) => state.product.allProducts);
    const filteredProducts = useSelector((state) => state.product.filteredProducts);
    const dispatch = useDispatch();
    // 3. Define the handleSearch function
    function handleSearch(searchedText) {

        const filteredData = allProducts.filter((products) => {
            return products.title.toLowerCase().includes(searchedText.toLowerCase())
        })
        dispatch(setFilteredProduct(filteredData))


    };

    return (
        <div className="w-full max-w-sm">
            <form className="relative flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>

                    <input
                        type="search"
                        className="block w-full p-2.5 ps-10 text-sm text-gray-200 bg-neutral-900 border border-white/10 rounded-full focus:ring-red-500 focus:border-red-500 placeholder-gray-500 outline-none transition-all"
                        placeholder="Search"
                        // Now searchTerm is defined via useState
                        // Now handleSearch is defined as a function
                        onChange={(e) => handleSearch(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="button"
                    className="px-6 py-2.5 text-sm font-semibold text-white bg-[#c10000] hover:bg-red-800 rounded-full transition-colors shadow-lg active:scale-95"
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default Search