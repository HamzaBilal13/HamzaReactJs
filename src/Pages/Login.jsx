import { Link, Routes, Route } from "react-router-dom";
import Home from './Home';
import React, { useState, useEffect } from 'react';


const Login = ({isVisible , onClose}) => {
    if (!isVisible) return null;

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm">
                <div className="flex justify-center items-center h-screen">
                    <div className="mt-2 bg-white w-[40%] p-10 rounded">
                        <form>
                            <div onClick={()=>onClose()} className="flex justify-end">
                                <button className="border-2 border-[black] text-black font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
                                    X
                                </button>
                            </div>
                            <div className="w-full">
                                <h1 className="font-bold text-3xl text-center">Contact us</h1>
                                <hr className="mt-4" />
                                <form className="px-8 pt-6 pb-8 mb-4">
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                                            Email
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" required />
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                                            Password
                                        </label>
                                        <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" required />
                                        <p className="text-red-600 text-xs italic">Please choose a password.</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                            Sign In
                                        </button>

                                        {/* onClick={() => showContactModal(false)} */}
                                        <a className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800" href="#">
                                            Forgot Password?
                                        </a>
                                    </div>

                                </form>

                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Login;