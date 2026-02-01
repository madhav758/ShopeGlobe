import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from './utils/cartSlice'


function Cart() {
    const cartItems = useSelector((state) => state.cart.items)
    const dispatch = useDispatch()
    function HandleRemove(product) {
        dispatch(remove(product))
    }
    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>

                    <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                        {/* Product List Section */}
                        <section aria-labelledby="cart-heading" className="lg:col-span-7">
                            <h2 id="cart-heading" className="sr-only">Items in your shopping cart</h2>

                            <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
                                {/* Start of Single Item */}
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
                                                            <button onClick={() => HandleRemove(product)} type="button" className="-m-2 inline-flex p-2 text-indigo-600 hover:text-indigo-500 text-sm font-medium">
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

                                {/* End of Single Item */}
                            </ul>
                        </section>

                        {/* Order Summary Section */}
                        <section aria-labelledby="summary-heading" className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
                            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">Order summary</h2>

                            <dl className="mt-6 space-y-4">
                                <div className="flex items-center justify-between">
                                    <dt className="text-sm text-gray-600">Subtotal</dt>
                                    <dd className="text-sm font-medium text-gray-900">$99.00</dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                    <dt className="text-sm text-gray-600">Shipping</dt>
                                    <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                    <dt className="text-sm text-gray-600">Tax estimate</dt>
                                    <dd className="text-sm font-medium text-gray-900">$8.32</dd>
                                </div>
                                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                    <dt className="text-base font-medium text-gray-900">Order total</dt>
                                    <dd className="text-base font-medium text-gray-900">$112.32</dd>
                                </div>
                            </dl>

                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Checkout
                                </button>
                            </div>

                            <div className="mt-6 text-center text-sm">
                                <p>
                                    or{' '}
                                    <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Continue Shopping <span aria-hidden="true"> &rarr;</span>
                                    </button>
                                </p>
                            </div>
                        </section>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Cart