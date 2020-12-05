import React from 'react';
import './CheckoutProduct.css';
import StarRate from "@material-ui/icons/StarRate";
import { useStateValue } from './StateProvider';
function CheckoutProduct({id,image,title,price,rating}) {
    const [{cart},dispatch] = useStateValue();
    const removeFromCart = ()=>{
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }
    return (
        <div className="checkoutproduct">
            <img className="checkoutproduct_image" src={image} alt=""/>
            <div className="checkoutproduct_info">
                <p className="checkoutproduct_title">{title}</p>
                <p>
                    <small>$</small>
                   <strong>{price}</strong>
                </p>
                <div className="checkoutproduct_rating">
                    {Array(rating).fill().map((_,i)=>( 
                        <StarRate></StarRate>
                    ))}
                </div>
                <button onClick={removeFromCart}>Remove From Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
