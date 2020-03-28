import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happy from '../../images/giphy.gif';

let thankYou;


const Review = () => {
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [cart, setCart] = useState([]);
    

    if (!cart.length && orderPlaced) {
        thankYou = <div style={{ textAlign: "center" }}> <h1>First add something to cart</h1> </div>;
    }

    else if (orderPlaced) {
        thankYou = <div style={{ textAlign: "center" }}><br /> <br /> <img src={happy} alt="" /> </div>;
    }


    const handlePlaceOrder = () => {
        setOrderPlaced(true);
        setCart([]);
        processOrder();

    };

    const removeProduct = (productKey) => {

        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    };

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });

        setCart(cartProducts);

    }, []);


    return (


        <div className="twin-container">
            {

            }

            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem
                        key={pd.key}
                        removeProduct={removeProduct}
                        product={pd}></ReviewItem>)
                }
                {
                    thankYou
                }

            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handlePlaceOrder} className="review-btn">Place Order</button>
                </Cart>
            </div>
        </div>


    );
};

export default Review;