import React from 'react';
import { useNavigate } from 'react-router-dom';


const FeaturedProducts = ({ image, name, price }) => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col gap-10 px-10 mb-16'>
            <div className="relative flex items-center">
                <h1 className='text-4xl font-semibold mx-auto'>Featured Products</h1>
                <button onClick={() => navigate("/products")} className='absolute right-0'>View More</button>
            </div>

            <div className='flex justify-between'>
                <div className="max-w-[300px] rounded overflow-hidden shadow-lg bg-white">
                    <img className="w-full" src={image} alt={name} />
                    <div className="px-6 py-4">
                        <div className="flex justify-between items-center">
                            <div className="font-bold text-xl mb-2">{name}</div>
                            <div className="text-gray-900 font-bold text-xl">${price}</div>
                        </div>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <button className="bg-[#5c4dfd] hover:bg-blue-700 text-white w-full  font-bold py-2 px-4 rounded-lg">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="max-w-[300px] rounded overflow-hidden shadow-lg bg-white">
                    <img className="w-full" src={image} alt={name} />
                    <div className="px-6 py-4">
                        <div className="flex justify-between items-center">
                            <div className="font-bold text-xl mb-2">{name}</div>
                            <div className="text-gray-900 font-bold text-xl">${price}</div>
                        </div>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <button className="bg-[#5c4dfd] hover:bg-blue-700 text-white w-full  font-bold py-2 px-4 rounded-lg">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="max-w-[300px] rounded overflow-hidden shadow-lg bg-white">
                    <img className="w-full" src={image} alt={name} />
                    <div className="px-6 py-4">
                        <div className="flex justify-between items-center">
                            <div className="font-bold text-xl mb-2">{name}</div>
                            <div className="text-gray-900 font-bold text-xl">${price}</div>
                        </div>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <button className="bg-[#5c4dfd] hover:bg-blue-700 text-white w-full  font-bold py-2 px-4 rounded-lg">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="max-w-[300px] rounded overflow-hidden shadow-lg bg-white">
                    <img className="w-full" src={image} alt={name} />
                    <div className="px-6 py-4">
                        <div className="flex justify-between items-center">
                            <div className="font-bold text-xl mb-2">{name}</div>
                            <div className="text-gray-900 font-bold text-xl">${price}</div>
                        </div>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <button className="bg-[#5c4dfd] hover:bg-blue-700 text-white w-full  font-bold py-2 px-4 rounded-lg">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProducts;
