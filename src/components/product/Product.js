import React from 'react';
import { useState } from "react";
import './Product.css';
import StarRateIcon from "@material-ui/icons/StarRate";
import { useSelector, useDispatch  } from 'react-redux'
// import { useStateValue } from '../reducer/StateProvider';

function Product( { id, title, price, rating, image, quantity} ) {

    const [num, setNum] =  useState(0);

    // const incNum = () => {
    //     setNum(num+1);
    // }

const counter = useSelector (state => state.counter);
const dispatch = useDispatch();


// just try
    // const [{}, dispatch] =useStateValue();
    // const addtobasket = () =>
    // {
     
    //     dispatch({
    //         type: "ADD_TO_BASKET",
    //         item :{
    //             id:id,
    //             title:title,
    //             price:price,
    //             rating:rating,
    //         },
    //     });

    // }



 const increment = (id) => {
        console.log(id);
        return dispatch({
            type: "INCREMENT",
            payload:id,
        });
    };

    return (
        
        <div className = "product">
            <div className="product__info">
                <p> {id} </p>
                <p>{title}</p>
                <p className = "product__price">
                    <small> $ </small>
                    <strong> {price} </strong>
                </p>
                <div className ="product__rating">
                    {
                        Array(rating)
                        .fill().map( (_) => (
                            <p><StarRateIcon /></p> 
                        ) )
                    }
                </div>    
            </div>
            
            <img src = {image}
                alt = ""
            />

            <input type="text" placeholder = {quantity} />

            {/* <button onClick = { addtobasket } >  Add to Basket</button> */}

                {/* Try on increment function */}
                <button onClick = { () => increment(id) } > Add to increment </button>

            {/* <button onClick = { () => dispatch({type:"INCREMENT"}) } >  Add to Basket</button> */}
            <button onClick = { (() => dispatch({type:"DECREMENT"})) } >  Delete to Basket</button>
            <p> {counter} </p>
            {/* <p> {num} </p> */}
                    
        </div>
        
    )
}

export default Product
