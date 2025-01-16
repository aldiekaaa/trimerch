import React, { useEffect } from "react";
import { initializeScrollable } from "../anim/scrollable";

const Catalog = () => {

    useEffect(() => {
        console.log("Catalog component is loaded!");
        initializeScrollable();
      }, []);
    

    return (
        <div className="container mx-auto">
            <div className="flex flex-nowrap justify-between gap-28 items-center text-start mt-10 border-t-2 border-gray-300">
                <div className="flex gap-10 my-10">
                    <h1 className="text-5xl">Catalog</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, aliquam maxime voluptate alias veritatis, dolore aspernatur excepturi nisi ipsam iusto exercitationem quaerat, et similique. Asperiores harum atque quibusdam expedita!</p>
                </div>
                <button className="text-nowrap py-2 px-5 border border-gray-800 rounded-md">View All</button>
            </div>
            <div className="flex flex-nowrap gap-10 overflow-x-auto" id="scrollable">
                {/* PRODUCT CARD */}
                <div className="relative w-80 h-96 group duration-300">
                    <img className="min-w-80 h-96 object-cover rounded-xl" src="https://i.pinimg.com/originals/f4/3c/45/f43c4565f5c88eb0275217d3df1a5c6f.jpg" alt="" />
                    <div className="absolute top-0 left-0 -translate-x-0 w-80 h-96 group-hover:backdrop-blur-sm bg-opacity-0 group-hover:bg-opacity-40 duration-300 rounded-xl">
                        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-800 text-gray-800 opacity-0 py-2 px-5 group-hover:opacity-100 duration-300 rounded-lg">Buy Now</button>
                        <div className="absolute left-5 bottom-0 translate-y-0 overflow-hidden text-start items-center opacity-0 group-hover:-translate-y-5 group-hover:opacity-100 duration-300">
                            <div className="text-nowrap text-gray-800">
                                <h3>Lorem, ipsum dolor.</h3>
                                <p>Rp. 99.999</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* PRODUCT CARD */}
                <div className="relative w-80 h-96 group duration-300">
                    <img className="min-w-80 h-96 object-cover rounded-xl" src="https://i.pinimg.com/originals/f4/3c/45/f43c4565f5c88eb0275217d3df1a5c6f.jpg" alt="" />
                    <div className="absolute top-0 left-0 -translate-x-0 w-80 h-96 group-hover:backdrop-blur-sm bg-opacity-0 group-hover:bg-opacity-40 duration-300 rounded-xl">
                        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-800 text-gray-800 opacity-0 py-2 px-5 group-hover:opacity-100 duration-300 rounded-lg">Buy Now</button>
                        <div className="absolute left-5 bottom-0 translate-y-0 overflow-hidden text-start items-center opacity-0 group-hover:-translate-y-5 group-hover:opacity-100 duration-300">
                            <div className="text-nowrap text-gray-800">
                                <h3>Lorem, ipsum dolor.</h3>
                                <p>Rp. 99.999</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* PRODUCT CARD */}
                <div className="relative w-80 h-96 group duration-300">
                    <img className="min-w-80 h-96 object-cover rounded-xl" src="https://i.pinimg.com/originals/f4/3c/45/f43c4565f5c88eb0275217d3df1a5c6f.jpg" alt="" />
                    <div className="absolute top-0 left-0 -translate-x-0 w-80 h-96 group-hover:backdrop-blur-sm bg-opacity-0 group-hover:bg-opacity-40 duration-300 rounded-xl">
                        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-800 text-gray-800 opacity-0 py-2 px-5 group-hover:opacity-100 duration-300 rounded-lg">Buy Now</button>
                        <div className="absolute left-5 bottom-0 translate-y-0 overflow-hidden text-start items-center opacity-0 group-hover:-translate-y-5 group-hover:opacity-100 duration-300">
                            <div className="text-nowrap text-gray-800">
                                <h3>Lorem, ipsum dolor.</h3>
                                <p>Rp. 99.999</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* PRODUCT CARD */}
                <div className="relative w-80 h-96 group duration-300">
                    <img className="min-w-80 h-96 object-cover rounded-xl" src="https://i.pinimg.com/originals/f4/3c/45/f43c4565f5c88eb0275217d3df1a5c6f.jpg" alt="" />
                    <div className="absolute top-0 left-0 -translate-x-0 w-80 h-96 group-hover:backdrop-blur-sm bg-opacity-0 group-hover:bg-opacity-40 duration-300 rounded-xl">
                        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-800 text-gray-800 opacity-0 py-2 px-5 group-hover:opacity-100 duration-300 rounded-lg">Buy Now</button>
                        <div className="absolute left-5 bottom-0 translate-y-0 overflow-hidden text-start items-center opacity-0 group-hover:-translate-y-5 group-hover:opacity-100 duration-300">
                            <div className="text-nowrap text-gray-800">
                                <h3>Lorem, ipsum dolor.</h3>
                                <p>Rp. 99.999</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* PRODUCT CARD */}
                <div className="relative w-80 h-96 group duration-300">
                    <img className="min-w-80 h-96 object-cover rounded-xl" src="https://i.pinimg.com/originals/f4/3c/45/f43c4565f5c88eb0275217d3df1a5c6f.jpg" alt="" />
                    <div className="absolute top-0 left-0 -translate-x-0 w-80 h-96 group-hover:backdrop-blur-sm bg-opacity-0 group-hover:bg-opacity-40 duration-300 rounded-xl">
                        <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-800 text-gray-800 opacity-0 py-2 px-5 group-hover:opacity-100 duration-300 rounded-lg">Buy Now</button>
                        <div className="absolute left-5 bottom-0 translate-y-0 overflow-hidden text-start items-center opacity-0 group-hover:-translate-y-5 group-hover:opacity-100 duration-300">
                            <div className="text-nowrap text-gray-800">
                                <h3>Lorem, ipsum dolor.</h3>
                                <p>Rp. 99.999</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;