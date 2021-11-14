import React from 'react'

function ProductItem({product}) {
    return (
        <div className="product">
            <div className="product-image">
                <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
                <h3>{product.title}</h3>
                <h4>{product.price}</h4>
                <button>Buy now</button>
            </div>
        </div>
    )
}

export default ProductItem
