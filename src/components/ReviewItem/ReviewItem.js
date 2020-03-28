import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { name, quantity, key, price } = props.product;
    return (
        <div className="anotherStyle">
            <h4 className="productName">{name}</h4>
            <h4>Quantity: {quantity}</h4>
            <p><small>$ {price}</small></p>
            <button
                onClick={() => props.removeProduct(key)}
                className="cart-button">Remove Item</button>

        </div>
    );
};

export default ReviewItem;