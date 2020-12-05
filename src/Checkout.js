import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
function Checkout() {
    const [{cart,user},dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="ads" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB4323492_.jpg" alt=""></img>
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2>Your Items</h2>
                    <hr/>
                    {cart.map(item=>(
                        <CheckoutProduct
                        id={item.id}
                        image={item.image}
                        title = {item.title}
                        rating={item.rating}
                        price={item.price}

                        />
                    ))}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal/>
                <h2>this is subtotal</h2>
            </div>
        </div>
    )
}

export default Checkout
