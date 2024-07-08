import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white mt-32 py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-10 md:mb-0">
                        <h1 className="text-3xl font-semibold">ThaCompany</h1>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
                        <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn size={24} /></a>
                    </div>
                </div>
                <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                        <a href="#" className="hover:underline">Terms of Service</a>
                        <a href="#" className="hover:underline">Contact Us</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
