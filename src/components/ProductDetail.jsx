import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { add } from './utils/cartSlice';

function ProductDetail() {
    let { id } = useParams();
    // console.log(id);
    const [proDetail, setProDetail] = useState(null);

    useEffect(() => {
        async function calling() {
            try {
                let API = `https://dummyjson.com/products/${id}`;
                let resp = await axios.get(API);
                console.log(resp.data);

                setProDetail(resp.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        }
        calling()
    }, [id])

    const dispatch = useDispatch()
    async function handleAddItem(e, product) {
        e.preventDefault();
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
                    description: product.description, // Added
                    category: product.category        // Added
                },
                { headers: { Authorization: `JWT ${token}` } }
            )
            if (response.status === 200 || response.status === 201) {
                dispatch(add(product))
                alert("Added to atlas and redux")
            }
        } catch (error) {
            console.error("Atlas Sync Error:", error.response?.data || error.message);
            alert("login First");
        }
    };

    if (!proDetail) return <div className="p-20 text-center">Loading Product Details...</div>;
    return (
        <div>
            <div className="bg-transparent text-white">
                <div className="pt-6">
                    <nav aria-label="Breadcrumb">
                        <ol role="list" class="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                            <li>
                                <div className="flex items-center">
                                    <a href="#" className="mr-2 text-sm font-medium text-white">{proDetail.category}</a>
                                    <svg viewBox="0 0 16 20" width="16" height="20" fill="currentColor" aria-hidden="true" className="h-5 w-4 text-gray-500">
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>

                            <li class="text-sm">
                                {proDetail?.tags[1] || proDetail?.tags[0]}
                            </li>
                        </ol>
                    </nav>

                    {/* <!-- Image gallery --> */}
                    <div class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-8 lg:px-8">
                        <img src={proDetail.images?.[0] || proDetail.thumbnail} alt="Maskara pic" class="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden" />
                        <img src={proDetail.images?.[0] || proDetail.thumbnail} alt="Maskara pic" class="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden" />
                        <img src={proDetail.images?.[0] || proDetail.thumbnail} alt="Maskara pic" class="col-start-2 row-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden" />
                        <img src={proDetail.images?.[0] || proDetail.thumbnail} alt="Maskara pic" class="row-span-2 aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4" />
                    </div>

                    {/* <!-- Product info --> */}
                    <div class="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                        <div className="lg:col-span-2 lg:border-r lg:border-white/10 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{proDetail.title}</h1>
                        </div>

                        {/* <!-- Options --> */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl tracking-tight text-white">${proDetail.price}</p>

                            {/* <!-- Reviews --> */}
                            <div class="mt-6">
                                <h3 class="sr-only">Reviews</h3>
                                <div class="flex items-center">
                                    <div className="flex items-center">
                                        {/* <!-- Active: "text-yellow-500", Default: "text-gray-600" --> */}
                                        <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5 shrink-0 text-yellow-500">
                                            <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" fill-rule="evenodd" />
                                        </svg>
                                        <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5 shrink-0 text-yellow-500">
                                            <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" fill-rule="evenodd" />
                                        </svg>
                                        <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5 shrink-0 text-yellow-500">
                                            <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" fill-rule="evenodd" />
                                        </svg>
                                        <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5 shrink-0 text-yellow-500">
                                            <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" fill-rule="evenodd" />
                                        </svg>
                                        <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="size-5 shrink-0 text-gray-600">
                                            <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" fill-rule="evenodd" />
                                        </svg>
                                    </div>
                                    {/* <p className="sr-only">
                                        {proDetail.reviews && proDetail.reviews.length > 0
                                            ? (proDetail.reviews.reduce((acc, curr) => acc + curr.rating, 0) / proDetail.reviews.length).toFixed(1)
                                            : "No reviews"}
                                        out of 5 stars
                                    </p> */}
                                    <a href="#" className="ml-3 text-sm font-medium text-gray-300 hover:text-white">{proDetail.reviews && proDetail.reviews.length > 0
                                        ? proDetail.reviews.reduce((acc, curr) => acc + curr.rating, 0) / proDetail.reviews.length.toFixed(1)
                                        : "No reviews"}
                                        out of 5 stars</a>
                                </div>
                            </div>

                            <form className="mt-10">
                                <button onClick={(e) => handleAddItem(e, proDetail)} type="submit" className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-[#c10000] hover:bg-red-800 px-8 py-3 text-base font-medium text-white transition-colors">Add to bag</button>
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-white/10 lg:pt-6 lg:pr-8 lg:pb-16">
                            {/* <!-- Description and details --> */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-300">{proDetail.description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-white">Details</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-400">{proDetail.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail