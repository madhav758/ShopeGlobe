import React, { useEffect, useState } from 'react'
import axios from 'axios';

import { useDispatch } from 'react-redux';
import { setProduct } from './utils/productSlice';

function ProductList() {
    const [items, setItems] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        async function calling() {
            try {
                const API = 'https://shopeglobe-backend-1.onrender.com/api/products';
                let resp = await axios.get(API);
                // console.log(resp.data.products);
                const products = resp.data
                setItems(products);

                dispatch(setProduct(products));
            }
            catch (err) {
                console.log("api fetch error");

            }

        }
        calling();

    }, [dispatch])
    return items;
}

export default ProductList