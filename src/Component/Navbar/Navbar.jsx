import React, { useState, useEffect } from 'react';
import Home from '../../Pages/Home';
import Portfolio from '../../Pages/Portfolio';
import Services from '../../Pages/Services';
import Testimonials from '../../Pages/Testimonials';
import { Routes, Route, Link } from 'react-router-dom';
import Contact from '../../Pages/Contact';
import Login from '../../Pages/Login';
import { FiAlignJustify } from "react-icons/fi";
import { FiXCircle } from "react-icons/fi";



const Navbar = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    const ActiveMobileNav = () => (
        

        <>
            <div className="w-full">
                <div className="shadow-sm ">
                    <div className="px-5 py-2 md:hidden  bg-black">
                        <ul className="font-medium text-center text-white">
                            <li onClick={() => setMobileNav(false)} className="px-4 text-2xl">
                                <FiXCircle />
                            </li>
                            <li className="px-4">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="px-4">
                                <Link to="/Services">Services</Link>
                            </li>
                            <li className="px-4">
                                <Link to="/Portfolio">Portfolio</Link>

                            </li>
                            <li className="px-4">
                                <Link to="/Testimonials">Testimonials</Link>

                            </li>
                            <li className="px-4">
                                <Link to="/Contact">Contact</Link>

                            </li>

                        </ul>

                    </div>
                </div>
            </div>

        </>
    )

    return (
        <div className="w-full fixed top-0">
            <div className="bg-white shadow-sm ">
                <div className="flex justify-between md:hidden">
                    <div className="px-5 py-2">
                        <h1>Logo</h1>
                    </div>
                    <div className="px-5 py-2">
                        <button onClick={() => setMobileNav(true)} className="text-2xl">
                            <FiAlignJustify />
                        </button>

                    </div>

                </div>
                <div className="mx-10">


                    {mobileNav && <ActiveMobileNav />}

                    <div className="hidden md:flex md:justify-between p-4">
                        <div className="px-5 py-2">
                            <h1>Logo</h1>
                        </div>
                        <div className="px-5 py-2">
                            <ul className="flex justify-center font-medium">
                                <li className="px-4">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="px-4">
                                    <Link to="/Services">Services</Link>
                                </li>
                                <li className="px-4">
                                    <Link to="/Portfolio">Portfolio</Link>

                                </li>
                                <li className="px-4">
                                    <Link to="/Testimonials">Testimonials</Link>

                                </li>
                                <li className="px-4">
                                    <Link to="/Contact">Contact</Link>

                                </li>

                            </ul>

                        </div>
                        <div>
                            <button onClick={() => setShowLogin(true)} className="btn bg-blue-600 rounded px-5 py-2 text-white font-medium">

                                Login


                            </button>
                            {/* {showLogin && <Login />} */}

                            <Login isVisible={showLogin} onClose={() => setShowLogin(false)} />

                        </div>
                    </div>

                </div>



            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Home />}>Home</Route>
                    <Route path="/Services" element={<Services />}>Services</Route>
                    <Route path="/Portfolio" element={<Portfolio />}>Portfolio</Route>
                    <Route path="/Testimonials" element={<Testimonials />}>Testimonials</Route>
                    <Route path="/Contact" element={<Contact />}>Contact</Route>

                </Routes>
            </div>
        </div>
    )
}

export default Navbar
