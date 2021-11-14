import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Store } from '../store/store';
import ProductItem from './ProductItem';

function ProductsList() {
    const [products, setProducts] = useState([]);
    const { state: { filters, sortBy }, dispatch } = useContext(Store);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setProducts(res.data)
            }).catch((error) => {
                console.log(error)
            })

    }, [])

    return (
        <div className="products-list">
            {products.filter(product => {
                if (filters.length) {
                    return filters.includes(product.category)
                }else{
                    return product
                }
            }).sort((a, b) => {
                if(sortBy === 'lowest'){
                    return a.price - b.price
                }else if(sortBy === 'highest'){
                    return b.price - a.price
                }
            }).map((product, index) => (
                <ProductItem product={product} key={index} />
            ))}
        </div>
    )
}

export default ProductsList
