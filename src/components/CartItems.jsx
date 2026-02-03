import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from './utils/cartSlice'

function CartItems() {
    const cartItems = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()
    function HandleRemove(id) {
        dispatch(remove(id))
    }
    return (
        <div>
            {cartItems.map((product) => {
                console.log(product, 'resp');

                return (
                    <li className="flex py-6 sm:py-10">
                        <div className="shrink-0">
                            <img
                                src={product.images?.[0]}
                                alt={product.title}
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
                                    <select className="max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>

                                    <div className="absolute top-0 right-0">
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