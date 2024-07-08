import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { LuShieldCheck } from "react-icons/lu";
import { FaHeadset } from "react-icons/fa6";

const Services = () => {
    const services = [
        {
            icon: <TbTruckDelivery size={30} />,
            title: "FREE AND FAST DELIVERY",
            description: "Free delivery for all orders over $200",
        },
        {
            icon: <LuShieldCheck size={30} />,
            title: "SECURE PAYMENT",
            description: "100% secure payment",
        },
        {
            icon: <FaHeadset size={30} />,
            title: "24/7 SUPPORT",
            description: "Get support 24/7",
        },
    ];

    return (
        <div className='flex flex-col items-center my-10'>
            <h1 className='text-4xl font-semi-bold tracking-wider my-16'>OUR SERVICES</h1>
            <div className='flex px-36 justify-around w-full'>
                {services.map((service, i) => (
                    <div key={i} className='w-1/3 flex flex-col items-center gap-5 px-4'>
                        <div className='w-20 h-20 flex bg-black rounded-full items-center justify-center'>
                            <span className='text-white'>{service.icon}</span>
                        </div>
                        <div className='text-center'>
                            <h1 className='text-2xl font-semibold'>{service.title}</h1>
                            <p className='text-lg'>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
