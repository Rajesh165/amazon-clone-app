import React from 'react';
import "./Product.css";
import StarRate from "@material-ui/icons/StarRate";
import { useStateValue } from './StateProvider';

function Product({id,title,price,rating,image}) {
    const [{ cart },dispatch] = useStateValue();
    // console.log("this is a basket>>>>", cart);
    const AddToCart=()=>{
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        });
    };
    return (
        <div className="product">
            <div className="product_container">
                <p className="product_info"> {title}
                </p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p className="product_rating">
                {Array(rating).fill().map((_,i)=>(
                    <StarRate></StarRate>
                ))}
                </p>
            </div>
            <img src={image} alt=""></img>
            <button onClick={AddToCart}> Add to cart</button>
            
        </div>
    )
}

export default Product
