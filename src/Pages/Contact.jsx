import React, { useState } from 'react';
import Home from '../Pages/Home';
import Portfolio from '../Pages/Portfolio';
import Services from '../Pages/Services';
import Testimonials from '../Pages/Testimonials';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Learning from '../Hooks/Learning'
import Props from '../Props/Props'



const Contact = () => {
    const [contactModal, showContactModal] = useState(false);
    // const ShowContact = () => {
    //     return (
    //         <>
    //             <div className="fixed inset-0 bg-black bg-opacity-25">
    //                 <div className='flex justify-center items-center h-screen'>
    //                     <div className="bg-white shadow-sm w-[40%] p-10 text-center">
    //                         <div className="mt-2">
    //                             <form>
    //                                 <div className="w-full">
    //                                     <h1 className="font-bold text-3xl">Contact us</h1>
    //                                     <hr className="mt-4" />
    //                                     <form className="px-8 pt-6 pb-8 mb-4">
    //                                         <div className="mb-4">
    //                                             <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
    //                                                 Email
    //                                             </label>
    //                                             <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Username" />
    //                                         </div>
    //                                         <div className="mb-6">
    //                                             <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
    //                                                 Password
    //                                             </label>
    //                                             <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
    //                                             <p className="text-red-600 text-xs italic">Please choose a password.</p>
    //                                         </div>
    //                                         <div className="flex items-center justify-between">
    //                                             <button onClick={() => showContactModal(false)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
    //                                                 Sign In
    //                                             </button>
    //                                             <a className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800" href="#">
    //                                                 Forgot Password?
    //                                             </a>
    //                                         </div>

    //                                     </form>

    //                                 </div>
    //                             </form>
    //                         </div>





    //                     </div>
    //                 </div>

    //             </div>
    //         </>
    //     );
    // }
    // const ShowContact = () => {
    //     return <Login />
    // }

    return (
        // <div className="flex justify-center items-center h-screen">
        //     <div>
        //         <button onClick={() => showContactModal(true)} className="btn bg-blue-600 rounded px-5 py-2 text-white font-medium">
        //             {/* <Link to="/Contact">Contact</Link> */}
        //             Testing...



        //         </button>
        //         {contactModal && <Login />}

        //     </div>
        //     <Routes>
        //         <Route path="/Contact" element={<Contact />}>Contact</Route>

        //     </Routes>
        // </div>

        <div className="mt-10 container mx-auto">
            <Learning />

            <div className="flex gap-2">
                <Props />
            </div>

        </div>


    )

}

export default Contact
