import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add } from "./utils/cartSlice";




export default function ProductItem({ productItems }) {
    console.log(productItems);
    const dispatch = useDispatch()
    function handleAdd(e, product) {
        e.preventDefault();
        e.stopPropagation();
        dispatch(add(product))
    }


    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {productItems.map((product) => (
                        <Link to={`/products/${product.id}`}>
                            <img
                                alt=''
                                src={product.thumbnail || product.images[0]}
                                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                            />
                            <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                            <div className="flex justify-between my-2">
                                <div>
                                    <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                                </div>
                                <div>
                                    <button onClick={(e) => handleAdd(e, product)}
                                        type="button"
                                        className="inline-flex items-center text-white bg-indigo-500 hover:bg-indigo-700 transition-colors duration-200 font-medium rounded-lg text-sm px-4 py-2"
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
