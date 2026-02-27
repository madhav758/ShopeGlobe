import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add } from "./utils/cartSlice";
import { lazy } from "react";
import axios from 'axios';


export default function ProductItem({ productItems }) {
    console.log(productItems);
    const dispatch = useDispatch()
    async function handleAdd(e, product) {
        e.preventDefault();
        e.stopPropagation();
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Please login First")
            return;
        }
        try {
            const response = await axios.post('https://shopeglobe-backend-1.onrender.com/api/cart',
                {
                    id: product.id,
                    quantity: 1,
                    title: product.title,
                    price: product.price,
                    thumbnail: product.thumbnail,

                },
                { headers: { Authorization: `JWT ${token}` } }
            )
            if (response.status === 200 || response.status === 201) {
                dispatch(add(product))
                alert("Added to atlas and redux")
            }
        } catch (error) {
            console.error("Atlas Sync Error:", error.response?.data || error.message);
            alert("Login First");
        }
    }


    return (
        <div >
            <div className="mx-auto max-w-2xl px-4 py-5 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {productItems.map((product) => (
                        <Link key={productItems.id} to={`/products/${product.id}`} className="group block rounded-xl bg-neutral-900 p-4 border border-white/5 shadow-lg transition-all hover:border-white/20">
                            <img
                                alt='' loading="lazy"
                                src={product.thumbnail || product.images[0]}
                                className="aspect-square w-full rounded-lg bg-neutral-800 object-cover group-hover:opacity-75 xl:aspect-7/8"
                            />
                            <h3 className="mt-4 text-sm text-gray-300">{product.title}</h3>
                            <div className="flex justify-between my-2">
                                <div>
                                    <p className="mt-1 text-lg font-medium text-white">${product.price}</p>
                                </div>
                                <div>
                                    <button onClick={(e) => handleAdd(e, product)}
                                        type="button"
                                        className="inline-flex items-center text-white bg-[#c10000] hover:bg-red-800 transition-colors duration-200 font-medium rounded-lg text-sm px-4 py-2"
                                    >
                                        <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312" />
                                        </svg>
                                        Cart
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
