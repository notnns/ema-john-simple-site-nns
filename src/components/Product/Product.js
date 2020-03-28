import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { img, name, seller, price, stock, key } = props.product;

    return (< div className="product" >

        <div>
            <img src={img} alt=""></img>
        </div>
        <div className="productName" >
            <h4> <Link to={"/product/"+key}>{name}</Link> </h4>
            <br />
            <p><small>by: {seller}</small></p>
            <p><small>$ {price}</small></p>
            <p><small>Only {stock} left in stock. Order Soon</small></p>
            { props.showAddToCart && <button className="cart-button" onClick={() => props.handleAddProduct(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>}
        </div>
    </div>
    );
};

export default Product;