import React from 'react'
import { useSelector } from 'react-redux'


function Search() {
    const product = useSelector((state) => (state.product.allProducts))

    return (
        <div>

            <input type="text " placeholder='Search ' className='border border-black bg-amber-50 rounded-2xl w-auto box-content p-1 outline-none focus:ring-2 focus:ring-gray-400' onChange={(e) => handleSearch(e.target.value)} />

        </div>
    )
}

export default Search