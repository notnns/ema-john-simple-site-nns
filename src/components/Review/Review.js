import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import happy from '../../images/giphy.gif';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/useAuth';

let thankYou;


const Review = () => {
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [cart, setCart] = useState([]);
    const auth = useAuth();


    if (orderPlaced) {
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
                {
                    !cart.length && <h1>No product in your cart. <a href="/shop" style={{textDecoration: "none", color:"blue"}}>Keep shopping</a></h1>
                }

            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to="/shipment">
                        {
                            auth.user ?
                            <button className="review-btn">Proceed to Shipment</button>
                            :
                            <button className="review-btn">Login to Proceed</button>
                        }

                    </Link>
                </Cart>
            </div>
        </div>


    );
};

export default Review;