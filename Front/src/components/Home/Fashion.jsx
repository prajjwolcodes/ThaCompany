import React from 'react'
import FashionImage from "../../assets/images/Fashion.jpg"

const Fashion = () => {
    return (
        <div>
            <div className='w-full h-screen flex items-center justify-center bg-cover bg-center' style={{ backgroundImage: `url(${FashionImage})` }}>
                <div className='text-white flex flex-col items-center justify-center gap-10 p-10 w-[60%]'>
                    <h1 className='text-6xl font-bold'>Fashion</h1>
                    <p className='text-xl leading-relaxed'>Fashion is a dynamic and ever-evolving expression of personal style and cultural identity. It encompasses a wide range of elements, from clothing and accessories to footwear and hairstyles, allowing individuals to showcase their unique tastes and creativity. Fashion not only reflects current trends and societal influences but also serves as a powerful form of self-expression and communication</p>
                    <button className='w-[40%] text-xl border border-white py-2 rounded-lg'>Explore Now</button>
                </div>
            </div>
        </div >
    )
}

export default Fashion