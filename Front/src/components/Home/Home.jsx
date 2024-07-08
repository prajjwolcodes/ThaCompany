import React from 'react'
import heroSectionImage from "../../assets/images/heroSectionImage.jpg"
import bags from "../../assets/images/products/Bags.jpg"
import Clients from './Clients'
import Fashion from './Fashion'
import FeaturedProducts from './FeaturedProducts'
import Footer from './Footer'
import Services from './Services'

const Home = () => {
    return (
        <div>
            <img src={heroSectionImage} className="w-full h-screen" />
            <FeaturedProducts
                image={bags}
                name="Sample Product"
                price="29.99"
            />
            <Fashion />
            <Clients />
            <Services />
            <Footer />
        </div>
    )
}

export default Home