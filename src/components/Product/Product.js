import React from 'react'
import './Product.css'
function Product() {
    return (
        <div className="product">
            <div className="product__info">
                <p>The Product</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>☆</p>
                    <p>☆</p>
                    <p>☆</p>
                </div>
    
            </div>
            <img
                className=""
                src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt="product 1"/>
               <button>Add to Basket</button>
        </div>
    )
}

export default Product
