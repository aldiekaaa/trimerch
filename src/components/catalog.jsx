import React, { useEffect } from "react";
import { initializeScrollable } from "../anim/scrollable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Catalog = () => {

    useEffect(() => {
        console.log("Catalog component is loaded!");
        initializeScrollable();
      }, []);
    

    return (
        <div className="container mx-auto" id="product">
            <div className="flex flex-nowrap justify-between gap-28 items-center text-start mt-10 border-t-2 border-gray-300">
                <div className="my-10">
                    <h1 className="text-5xl uppercase text-gray-800 font-black">Catalog</h1>
                    <p className="w-3/5">Explore our curated collection of fashion essentials. From timeless pieces to the latest trends, find the perfect items to enhance your personal style.</p>
                </div>
                <button className="text-nowrap py-2 px-5 border border-gray-800 rounded-md">View All <FontAwesomeIcon className="-rotate-45 ml-3" icon={faArrowRight}/></button>
            </div>
            <div className="flex flex-nowrap gap-10 overflow-x-auto" id="scrollable">
                {/* PRODUCT CARD */}
                <div className="relative w-80 h-96 group duration-300">
                    <img className="min-w-80 h-96 object-cover rounded-xl" src="https://i.pinimg.com/736x/b3/51/f7/b351f77dc0a980be32903a3bcc4ab938.jpg" alt="" />
                    <div className="absolute top-0 left-0 -translate-x-0 w-80 h-96 group-hover:bg-gray-800 bg-opacity-0 group-hover:bg-opacity-70 duration-300 rounded-xl">
                        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white opacity-0 py-2 px-5 group-hover:opacity-100 duration-300 rounded-lg text-white">Buy Now</button>
                        <div className="absolute left-5 bottom-0 translate-y-0 overflow-hidden text-start items-center opacity-0 group-hover:-translate-y-5 group-hover:opacity-100 duration-300">
                            <div className="text-nowrap text-white">
                                <h3>T-Shirt JKT48 X Erigo</h3>
                                <p className="text-2xl font-semibold">Rp. 129.999</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* PRODUCT CARD */}
                <div className="relative w-80 h-96 group duration-300">
                    <img className="min-w-80 h-96 object-cover rounded-xl" src="https://i.pinimg.com/736x/8c/11/d7/8c11d7b06f062e2a13a8b2ecd650487e.jpg" alt="" />
                    <div className="absolute top-0 left-0 -translate-x-0 w-80 h-96 group-hover:bg-gray-800 bg-opacity-0 group-hover:bg-opacity-70 duration-300 rounded-xl">
                        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white opacity-0 py-2 px-5 group-hover:opacity-100 duration-300 rounded-lg text-white">Buy Now</button>
                        <div className="absolute left-5 bottom-0 translate-y-0 overflow-hidden text-start items-center opacity-0 group-hover:-translate-y-5 group-hover:opacity-100 duration-300">
                            <div className="text-nowrap text-white">
                                <h3>Jacket JKT48 X Erigo</h3>
                                <p className="text-2xl font-semibold">Rp. 299.999</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* PRODUCT CARD */}
                <div className="relative w-80 h-96 group duration-300">
                    <img className="min-w-80 h-96 object-cover rounded-xl" src="https://i.pinimg.com/736x/70/3d/a5/703da585f17dd662edab35776ed18af5.jpg" alt="" />
                    <div className="absolute top-0 left-0 -translate-x-0 w-80 h-96 group-hover:bg-gray-800 bg-opacity-0 group-hover:bg-opacity-70 duration-300 rounded-xl">
                        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white opacity-0 py-2 px-5 group-hover:opacity-100 duration-300 rounded-lg text-white">Buy Now</button>
                        <div className="absolute left-5 bottom-0 translate-y-0 overflow-hidden text-start items-center opacity-0 group-hover:-translate-y-5 group-hover:opacity-100 duration-300">
                            <div className="text-nowrap text-white">
                                <h3>T-Shirt JKT48 X Erigo</h3>
                                <p className="text-2xl font-semibold">Rp. 99.999</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* PRODUCT CARD */}
                <div className="relative w-80 h-96 group duration-300">
                    <img className="min-w-80 h-96 object-cover rounded-xl" src="https://i.pinimg.com/736x/77/4a/d5/774ad566309fa4609021eae5ed27cd79.jpg" alt="" />
                    <div className="absolute top-0 left-0 -translate-x-0 w-80 h-96 group-hover:bg-gray-800 bg-opacity-0 group-hover:bg-opacity-70 duration-300 rounded-xl">
                        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white opacity-0 py-2 px-5 group-hover:opacity-100 duration-300 rounded-lg text-white">Buy Now</button>
                        <div className="absolute left-5 bottom-0 translate-y-0 overflow-hidden text-start items-center opacity-0 group-hover:-translate-y-5 group-hover:opacity-100 duration-300">
                            <div className="text-nowrap text-white">
                                <h3>T-Shirt JKT48 X Erigo</h3>
                                <p className="text-2xl font-semibold">Rp. 99.999</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* PRODUCT CARD */}
                <div className="relative w-80 h-96 group duration-300">
                    <img className="min-w-80 h-96 object-cover rounded-xl" src="https://i.pinimg.com/736x/de/1d/1c/de1d1c8e70aa5bd34a719a6fad28764c.jpg" alt="" />
                    <div className="absolute top-0 left-0 -translate-x-0 w-80 h-96 group-hover:bg-gray-800 bg-opacity-0 group-hover:bg-opacity-70 duration-300 rounded-xl">
                        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white opacity-0 py-2 px-5 group-hover:opacity-100 duration-300 rounded-lg text-white">Buy Now</button>
                        <div className="absolute left-5 bottom-0 translate-y-0 overflow-hidden text-start items-center opacity-0 group-hover:-translate-y-5 group-hover:opacity-100 duration-300">
                            <div className="text-nowrap text-white">
                                <h3>T-Shirt JKT48 X Erigo</h3>
                                <p className="text-2xl font-semibold">Rp. 99.999</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* PRODUCT CARD */}
                <div className="relative w-80 h-96 group duration-300">
                    <img className="min-w-80 h-96 object-cover rounded-xl" src="https://i.pinimg.com/736x/ea/2c/04/ea2c04e6b3287330384aa2a0e09a14bd.jpg" alt="" />
                    <div className="absolute top-0 left-0 -translate-x-0 w-80 h-96 group-hover:bg-gray-800 bg-opacity-0 group-hover:bg-opacity-70 duration-300 rounded-xl">
                        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white opacity-0 py-2 px-5 group-hover:opacity-100 duration-300 rounded-lg text-white">Buy Now</button>
                        <div className="absolute left-5 bottom-0 translate-y-0 overflow-hidden text-start items-center opacity-0 group-hover:-translate-y-5 group-hover:opacity-100 duration-300">
                            <div className="text-nowrap text-white">
                                <h3>T-Shirt JKT48 X Erigo</h3>
                                <p className="text-2xl font-semibold">Rp. 99.999</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;