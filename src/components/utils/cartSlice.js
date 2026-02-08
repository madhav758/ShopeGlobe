import { createSlice } from '@reduxjs/toolkit'



export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        add: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            const existingItem = state.items.find((item => item.id === action.payload.id))
            if (existingItem) {
                console.log("item already in cart ");

            }
            else {
                state.items.push(action.payload)

            }
        },
        remove: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
})

// Action creators are generated for each case reducer function
export const { add, remove, clearCart } = cartSlice.actions

export default cartSlice.reducer