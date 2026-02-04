import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Search() {
    // 1. Define local state for the input value
    const [searchTerm, setSearchTerm] = useState("");

    // 2. Access products from your productSlice
    const allProducts = useSelector((state) => state.product.allProducts);

    // 3. Define the handleSearch function
    const handleSearch = (value) => {
        setSearchTerm(value);

        // Example filtering logic:
        const filtered = allProducts.filter(item =>
            item.title.toLowerCase().includes(value.toLowerCase())
        );
        console.log("Filtered Results:", filtered);
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
                        className="block w-full p-2.5 ps-10 text-sm text-gray-200 bg-gray-800 border border-gray-700 rounded-full focus:ring-purple-500 focus:border-purple-500 placeholder-gray-500 outline-none transition-all"
                        placeholder="Search"
                        // Now searchTerm is defined via useState
                        value={searchTerm}
                        // Now handleSearch is defined as a function
                        onChange={(e) => handleSearch(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="button"
                    className="px-6 py-2.5 text-sm font-semibold text-white bg-purple-700 hover:bg-purple-600 rounded-full transition-colors shadow-lg active:scale-95"
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default Search