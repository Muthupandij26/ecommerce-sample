import React from 'react'
import './Home.css'
import product from './Product'
import Product from './Product'
function Home() {
    const products = [ {
        id : "123412",
        title : "Echo Dot (4th Gen, 2020 release)| #1 smart spe… AmazonAmazon",
        price : 4500 ,
        rating : 5,
        image : "https://techcrunch.com/wp-content/uploads/2016/09/alexa-family-shot.jpg?w=730&crop=1"
    },
    {
        id : "123412",
        title : "Redmi 9A (Nature Green, 2GB RAM, 32GB Storage) | 2GHz Octa-core Helio G25 Processor | 5000 mAh Battery",
        price : 10000,
        rating : 5,
        image : "https://m.media-amazon.com/images/I/71sxlhYhKWL._SY606_.jpg"
    },
]
    const products2 = [ {
        id : "123412",
        title : "Sample images",
        price : 4500 ,
        rating : 5,
        image : "https://cdn.pixabay.com/photo/2014/05/02/21/49/laptop-336373__340.jpg"
    },
    {
        id : "123412",
        title : "Sample images",
        price : 10000,
        rating : 5,
        image : "https://techcrunch.com/wp-content/uploads/2016/09/alexa-family-shot.jpg?w=730&crop=1"
    },
    {
        id : "123412",
        title : "Sample images",
        price : 10000,
        rating : 5,
        image : "https://techcrunch.com/wp-content/uploads/2016/09/alexa-family-shot.jpg?w=730&crop=1"
    }
]

    return (
        <div className ="home" >
            <img 
            className = "home__image"
            src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt = ""
            />

            {/* product id, title, price, rating, image */}
            <div className="home__row">
                {/* loop over product array using map function and pass object to product component using props} */}
                {
                    products.map( product1 =>
                        (
                        <Product title = {product1.title} price = {product1.price} image = {product1.image} />
                        ))
                }
            </div>
            <div className="home__row">
                {/* loop over product array using map function and pass object to product component using props} */}
                {
                    products2.map( product2 =>
                        (
                        <Product title = {product2.title}  price = {product2.price} image = {product2.image} />
                        ))
                }
            </div>


            
            {/* products */}
        </div>
    )
}

export default Home
