import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove, updateQuantity } from './utils/cartSlice'
import { lazy } from 'react'
import axios from 'axios'
function CartItems() {
    const cartItems = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()
    async function HandleRemove(id) {
        // dispatch(remove(id))
        try {
            const token = localStorage.getItem("token")
            if (!token) {
                alert("Please login to manage your cart.");
                return;
            }
            const response = await fetch('https://shopeglobe-backend-1.onrender.com/api/cart',
                {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `JWT ${token}`
                    },
                    body: JSON.stringify({ id: id })
                })
            if (response.ok) {
                dispatch(remove(id))
                console.log("Item removed successfully");
            }
        } catch (error) {
            console.error("Failed to remove item:", error.response?.data || error.message);
            alert("Could not remove item. Please check if you are logged in.");
        }


    }
    async function HandleQuantityChange(productId, newQuantity) {
        try {
            const token = localStorage.getItem("token");


            const response = await axios.patch('https://shopeglobe-backend-1.onrender.com/api/cart',
                {
                    id: productId,
                    quantity: Number(newQuantity)
                },
                {
                    headers: { Authorization: `JWT ${token}` }
                }
            );

            if (response.status === 200) {
                // 2. Update Redux locally 
                // You might need to create an 'updateQuantity' action in your slice
                dispatch(updateQuantity({ id: productId, quantity: Number(newQuantity) }));
                console.log("Quantity synced with database");
            }
        } catch (error) {
            console.error("Failed to sync quantity:", error);
        }
    }

    return (
        <div>
            {cartItems.map((product) => {
                console.log(product, 'resp');

                return (
                    <li key={product.id} className="flex py-6 sm:py-10">
                        <div className="shrink-0">
                            <img
                                src={product.thumbnail}
                                alt={product.title} loading="lazy"
                                className="size-24 rounded-md object-cover sm:size-48"
                            />
                        </div>

                        <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                <div>
                                    <div className="flex justify-between">
                                        <h3 className="text-sm">
                                            <a href="#" className="font-medium text-gray-700 hover:text-gray-800">
                                                {product.title}
                                            </a>
                                        </h3>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                                    <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                                </div>

                                <div className="mt-4 sm:mt-0 sm:pr-9">
                                    <select value={product.quantity}
                                        onChange={(e) => HandleQuantityChange(product.id, e.target.value)} className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                        {[1, 2, 3, 4, 5].map(num => (
                                            <option key={num} value={num}>{num}</option>
                                        ))}
                                    </select>

                                    <div className='absolute top-0 right-0'>
                                        <button onClick={() => HandleRemove(product.id)} type="button" className="-m-2 inline-flex p-2 text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                                            Remove
                                        </button>
                                    </div>


                                </div>
                            </div>

                            <p className="mt-4 flex space-x-2 text-sm text-gray-700">
                                <span className="text-green-500">✓</span>
                                <span>In stock</span>
                            </p>
                        </div>
                    </li>
                )
            })}
        </div>
    )
}

export default CartItems