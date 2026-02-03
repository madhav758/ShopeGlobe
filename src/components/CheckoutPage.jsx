import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function CheckoutPage() {
    const cartItems = useSelector((state) => state.cart.items)
    const subtotal = cartItems.reduce((acc, curr) => acc + curr.price, 0);
    const estTax = subtotal * 0.1;
    const shipping = cartItems.length > 0 ? 5.00 : 0;
    const orderTotal = subtotal + shipping + estTax;
    return (
        <div>

            <div><h2 id="summary-heading" className="text-lg font-medium text-gray-900">Order summary</h2>

                <dl className="mt-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <dt className="text-sm text-gray-600">Subtotal</dt>
                        <dd className="text-sm font-medium text-gray-900">${subtotal.toFixed(2)}</dd>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                        <dt className="text-sm text-gray-600">Shipping</dt>
                        <dd className="text-sm font-medium text-gray-900">${shipping.toFixed(2)}</dd>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                        <dt className="text-sm text-gray-600">Tax estimate</dt>
                        <dd className="text-sm font-medium text-gray-900">${estTax.toFixed(2)}</dd>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                        <dt className="text-base font-medium text-gray-900">Order total</dt>
                        <dd className="text-base font-medium text-gray-900">${orderTotal.toFixed(2)}</dd>
                    </div>
                </dl>

                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Checkout
                    </button>
                </div></div>


        </div>
    )
}

export default CheckoutPage