import { Flowbite } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
Link

const Navbar = () => {

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    };

    return (
    <div className="relative w-full group overflow-hidden">
        <nav class="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 w-full">
                <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <span class="self-center text-4xl font-black whitespace-nowrap text-gray-800 italic">TRIMERCH</span>
                </a>
                <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <ul class="flex justify-start gap-5">
                        <li><a href="">Cart(0)</a></li>
                        <li><button className="account-btn" onClick={togglePopup}>Account</button></li>
                    </ul>
                    <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>


                {isPopupVisible && (
                <div class="fixed flex justify-center items-center w-full h-full top-0 left-0 bg-black bg-opacity-90     z-40 group">
                    <div class="flex justify-between items-center relative p-2 w-[60rem] rounded-xl bg-white z-50">
                        <div className="absolute text-end right-1/2 pr-5 top-5">
                            <h1 className="text-3xl font-black italic text-gray-300">TRIMERCH</h1>
                        </div>
                        <div class="relative w-1/2 mt-10">
                            <div class="flex flex-col p-4 md:p-5">
                                <h3 class="text-xl  font-semibold text-gray-800 mb-2">
                                    Log in to Your Account
                                </h3>
                                <span className="text-sm">Access exclusive deals and your personalized shopping experience.</span>
                            </div>
                            <div class="p-4 md:p-5">
                                <form class="space-y-4 text-start" action="#">
                                    <div>
                                        <label for="email" class="block mb-2 text-sm font-medium text-gray-800">Email Address</label>
                                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" placeholder="example@example.com" required />
                                    </div>
                                    <div>
                                        <label for="password" class="block mb-2 text-sm font-medium text-gray-800">Password</label>
                                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" required />
                                    </div>
                                    <div class="flex justify-end">
                                        <a href="#" class="text-sm text-indigo-700 hover:underline">Forgot Password ?</a>
                                    </div>
                                    <button type="submit" class="w-full text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Login to your account</button>
                                    <div class="text-sm font-medium text-gray-500">
                                    Don’t have an account? <a href="#" class="text-indigo-700 hover:underline">Create account</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="relative w-1/2">
                            <img className="w-full h-[35rem] object-cover rounded-lg brightness-75" src="https://images.unsplash.com/photo-1574388628724-c8319d449336?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            <div className="absolute flex flex-col bottom-5 left-5 text-wrap w-[24rem] text-white">
                                <span className="text-3xl text-white linden-hill-regular">Every act of creation is first an act of destruction.</span>
                                <span className="text-lg font-semibold mt-5">Pablo Picasso</span>
                                <span className="italic text-sm font-light ">Artist</span>
                            </div>
                            <button type="button" class="absolute right-1 top-1 text-white bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" onClick={togglePopup}>
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                    </svg>
                                </button>
                        </div>
                    </div>
                </div> )}

                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <a href="#gallery" class="block py-2 px-3 text-gray-800 bg-indigo-700 rounded md:bg-transparent md:text-indigo-700 md:p-0">Collection</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-600 md:p-0 duration-300">Product</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 px-3 text-gray-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-indigo-600 md:p-0 duration-300">Blog</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    );
};

export default Navbar;