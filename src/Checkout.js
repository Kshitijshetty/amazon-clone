import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";


function Checkout() {
    const [{basket}]=useStateValue(); 


    return (
        <div className="checkout">
           <div className="checkout__left">
            <img className="checkout__ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Tablets/Work_From_Home_Tablets_Creative_1500x200.jpg" />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Cart is empty!</h2>
                    <p>  You have no item in your cart. 
                    Click "add to basket" next to the item. </p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Cart</h2>
                    {basket.map(item =>(
                        <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        />
                    ))}
                </div>
            )}
           </div>
           {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
           )}
        </div>
    );
}

export default Checkout
