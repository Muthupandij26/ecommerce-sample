import React from 'react';
import { useState } from "react";
import './Product.css';
import StarRateIcon from "@material-ui/icons/StarRate";
import { useSelector, useDispatch  } from 'react-redux'

function Product( { id, title, price, rating, image} ) {

//     const [num, setNum] =  useState(0);

//     const incNum = () => {
//         setNum(num+1);
//     }

const counter = useSelector (state => state.counter);
const dispatch = useDispatch();
    


    return (
        
        <div className = "product">
            <div className="product__info">
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
            
            <button onClick = { (() => dispatch({type:"INCREMENT"})) } >  Add to Basket</button>
            <button onClick = { (() => dispatch({type:"DECREMENT"})) } >  Delete to Basket</button>
            <p> {counter} </p>
                    
        </div>
        
    )
}

export default Product
