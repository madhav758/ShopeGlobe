import React, { useEffect, useState } from 'react'
import axios from 'axios';

function ProductList() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        async function calling() {
            const API = 'https://dummyjson.com/products';
            let resp = await axios.get(API);
            // console.log(resp.data.products);
            setItems(resp.data.products);

        }
        calling();

    }, [])
    return items;
}

export default ProductList