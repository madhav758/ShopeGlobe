import React from 'react'

import { Link } from 'react-router-dom'
import CartItems from './CartItems'
import CheckoutPage from './CheckoutPage'


function Cart() {

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
                                <CartItems />

                                {/* End of Single Item */}
                            </ul>
                        </section>

                        {/* Order Summary Section */}
                        <section aria-labelledby="summary-heading" className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
                            <CheckoutPage />

                            <div className="mt-6 text-center text-sm">
                                <p>
                                    or{' '}
                                    <Link to={'/'}>
                                        <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Continue Shopping <span aria-hidden="true"> &rarr;</span>
                                        </button>
                                    </Link>

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