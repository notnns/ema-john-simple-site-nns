import React from 'react';
import './Cart.css';
// import { useAuth } from '../Login/useAuth';
// import { useContext } from 'react';
// import { UserContext } from '../../App';

const Cart = (props) => {
    const cart = props.cart;
    // const auth = useAuth();
    // const user = useContext(UserContext);
    // console.log(user);

    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice += product.price * product.quantity;

    }

    let shipping = 0;
    if (totalPrice === 0) {
        shipping = 0;
    }
    else {
        shipping = 10.99;

        if (totalPrice >= 50) {
            shipping = 0;
        }
        else if (totalPrice >= 40) {
            shipping = 3.99;
        }
        else if (totalPrice >= 30) {
            shipping = 4.99;
        }
        else if (totalPrice >= 20) {
            shipping = 5.99;
        }
        else if (totalPrice >= 10) {
            shipping = 6.99;
        }

    }





    let tax = (totalPrice / 10);
    let grandTotal = totalPrice + shipping + tax;
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h4>Order Summary:</h4>
            <p>Items Ordered: {cart.length}</p>
            <p><small>Shipping: {shipping}</small></p>
            <p><small>VAT and Tax: {formatNumber(tax)}</small></p>
            <p>Total Price: {formatNumber(grandTotal)}</p>
            <br />
            {
                props.children
            }

           



        </div>
    );
};

export default Cart;