import React from 'react';
import Logo from "../../assets/images/Logo.jpg"
import heroSectionImage from "../../assets/images/heroSectionImage.jpg"
import { Link } from 'react-router-dom';

function SignupPage() {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${heroSectionImage})` }}>
                <div className="bg-white p-10 rounded-lg shadow-xl flex w-full gap-10 max-w-2xl ">

                    <div className="w-full">
                        <h1 className="text-2xl font-bold mb-8">ThaCompany</h1>
                        <form>
                            <div className="mb-4">
                                <label className="block text-black text-md mb-2" htmlFor="email">
                                    Name:
                                </label>
                                <input
                                    className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                    id="username"
                                    type="username"
                                    placeholder="Username"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-black text-md mb-2" htmlFor="email">
                                    Email:
                                </label>
                                <input
                                    className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-black text-md mb-2" htmlFor="password">
                                    Password:
                                </label>
                                <input
                                    className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="*******"
                                />
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-between">
                                <button
                                    className="w-full bg-[#3e2dfdd8] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Sign Up
                                </button>
                                <Link to="/login" className='text-sm hover:underline'>Already have an account?</Link>
                            </div>
                        </form>
                    </div>
                    <div className="w-full">
                        <img
                            className="object-cover object-center h-full w-full"
                            src={Logo}
                            alt="Company Logo"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;
