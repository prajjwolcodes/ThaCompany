import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaCartArrowDown, FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { LuLogIn } from "react-icons/lu";

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false)
    const [isSearchClicked, setIsSearchClicked] = useState(false)

    function handleScroll() {
        const offset = window.scrollY
        offset > 0 ? setScrolling(true) : setScrolling(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={`${scrolling ? "bg-[#5c4dfdd8]" : "bg-transparent"} transition-colors duration-300 fixed top-0 left-0 w-full p-4`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-lg font-bold">
                    <Link to="/"> Company Name </Link>
                </div>
                <div className="flex items-center space-x-6">
                    <Link to="/products" className="text-white hover:underline">
                        All Products
                    </Link>
                    <Link to="/cart" className="text-white hover:text-gray-300">
                        <FaCartArrowDown size={20} />
                    </Link>
                    <div className="relative flex gap-3">
                        <input
                            type="text"
                            placeholder="Search"
                            className={`rounded-lg p-1 px-2 bg-gray-700 text-white placeholder-gray-400 transition-all duration-300 ${!isSearchClicked && "hidden"}`}
                        />
                        <button className='text-white' onClick={() => setIsSearchClicked(true)}>
                            <FaSearch size={20} />
                        </button>
                    </div>
                    <div className='text-white'>
                        <Link to="/login"><LuLogIn size={20} /></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
