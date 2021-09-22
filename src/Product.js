import React from 'react';
import { useState } from "react";
import './Product.css';
import Header from './Header'
import StarRateIcon from "@material-ui/icons/StarRate";

function Product( { id, title, price, rating, image} ) {

    const [num, setNum] =  useState(0);

    const incNum = () => {
        setNum(num+1);
    }
    


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
                            <p><StarRateIcon / ></p> 
                        ) )
                    }
                </div>    
            </div>
            
            <img src = {image}
                alt = ""
            />
            
            <button onClick = {incNum} >  Add to Basket</button>
            <p> {num} </p>
                    
        </div>
        
    )
}

export default Product
