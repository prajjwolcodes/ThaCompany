import React, { useState } from 'react';
import Logo from "../../assets/images/Logo.jpg"
import heroSectionImage from "../../assets/images/heroSectionImage.jpg"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';


function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    async function handleSubmit(e) {
        e.preventDefault()
        setIsLoading(true)
        try {
            const res = await axios.post("http://localhost:3000/auth/login", { email, password })
            toast.success(res.data.message)
            console.log(res.data);
            res.data.user.role == "customer" ? navigate("/") : navigate("/dashboard")
            dispatch(login({ user: res.data.user, token: res.data.token }))
        } catch (error) {
            toast.error(error.response.data.message);
        }

        setIsLoading(false)


    }

    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${heroSectionImage})` }}>
                <div className="bg-white p-10 rounded-lg shadow-xl flex w-full gap-10 max-w-2xl ">

                    <div className="w-full">
                        <h1 className="text-2xl font-bold mb-8">ThaCompany</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-black text-md mb-2" htmlFor="email">
                                    Email:
                                </label>
                                <input
                                    className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    onChange={(e) => setPassword(e.target.value)}

                                />
                            </div>
                            <div className="flex flex-col gap-4 items-center justify-between">
                                <button
                                    className="w-full bg-[#3e2dfdd8] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    {isLoading ? "..." : "Login"}
                                </button>
                                <Link to="/signup" className='text-sm hover:underline'>Don't have an account?</Link>
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

export default LoginPage;
