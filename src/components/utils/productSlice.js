import { createSlice } from '@reduxjs/toolkit'



export const productSlice = createSlice({
    name: 'product',
    initialState: {
        allProducts: [],
        filteredProducts: [],
    },
    reducers: {
        setProduct: (state, action) => {

            state.allProducts = action.payload
        },
        setFilteredProduct: (state, action) => {

            state.filteredProducts = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setProduct, setFilteredProduct } = productSlice.actions

export default productSlice.reducer