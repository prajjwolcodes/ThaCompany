import React from 'react'
import heroSectionImage from "../../assets/images/heroSectionImage.jpg"
import bags from "../../assets/images/products/Bags.jpg"
import FeaturedProducts from './FeaturedProducts'

const Home = () => {
    return (
        <div>
            <img src={heroSectionImage} className="w-full h-screen" />
            <FeaturedProducts
                image={bags}
                name="Sample Product"
                price="29.99"
            />
        </div>
    )
}

export default Home