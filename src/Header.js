import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import { useState } from 'react';
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import Product from './Product'

function Header() {



    return (
        <nav className = "header">
            {/* logo on the logo */}
            <Link to = "/"> 
            <img 
            className = "header__logo" 
            src = "http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt = "" />
            </Link>
            {/* Search box */}
            <div className="header__search">
            <input type = "text" className = "header__searchInput" />
            <SearchIcon className = "header__searchIcon" />

            </div>
            
            {/* 1 links */}
            <div className="header__nav">
                {/* 1st link  */}
                <Link className = "header__link" to ="/login" >
                    <div className = "header__option" >
                        <span className = "header__optionone">Hello</span>
                        <span className = "header__optiontwo">Sign In</span>
                    </div>
                </Link>

                {/* 2nd link  */}
                <Link className = "header__link" to ="/" >
                    <div className = "header__option" >
                        <span className = "header__optionone">Returns</span>
                        <span className = "header__optiontwo">& orders</span>
                    </div>
                </Link>

                {/* 3rd link  */}
                <Link className = "header__link" to ="/" >
                    <div className = "header__option" >
                        <span className = "header__optionone">Your</span>
                        <span className = "header__optiontwo">Prime</span>
                    </div>
                </Link>


                {/* 4th link  */}
                <Link to = "/checkout" className = "header__link">
                    <div className = "header__basket">
                        {/* shopping basket */}
                        <ShoppingBasketIcon />

                        {/* Number of items in basket */}
                        <span className = "header__optiontwo header__basketcount"> 0 </span>
                     </div>
                </Link>
            </div>
            {/* basket icon with number */}
        </nav>
    )
}
  
export default Header
