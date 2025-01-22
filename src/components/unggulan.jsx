import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Unggulan = () => {
    return (
        <section className="my-16" id="blog">
            <div className="container mx-auto">
                <p className="text-center text-xl md:text-4xl text-gray-800 md:w-2/3 mx-auto font-medium">Elevate your everyday hustle with streetwear that blends comfort and edge. Wear your vibe.</p>
                <div className="md:grid grid-cols-3 gap-3 my-10">
                    <div className="col-span-2 h-96 relative mb-5 md:mb-0">
                        <img className="w-full h-96 object-cover rounded-2xl brightness-50" src="https://cdn.pixabay.com/photo/2022/08/22/11/03/skateboard-7403428_1280.jpg" alt="" />
                        <div className="absolute text-start bottom-10 left-10">
                            <h5 className="w-4/6 text-start text-3xl font-black uppercase text-white drop-shadow-2xl">Walk with style, live with freedom</h5>
                            <button className="px-8 py-2 border-2 rounded-full mt-5 mr-5 text-white hover:bg-white hover:text-gray-900 duration-200">Our Blog</button>
                            <button className="bg-white px-8 py-2 rounded-full mt-5 items-center">Shop Now <FontAwesomeIcon className="-rotate-45 ml-3" icon={faArrowRight}/></button>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="w-full h-96 object-cover rounded-2xl polygon-card brightness-50" src="https://cdn.pixabay.com/photo/2022/10/10/08/32/woman-7511233_960_720.jpg" alt="" />
                        <p className="absolute bottom-5 text-start left-5 text-xs w-10/12 text-white">Our streetwear is crafted to express your authentic spirit and individuality. Discover the perfect blend of comfort, modern design, and urban culture in every piece</p>
                        <div className="leaf-btn hidden md:block">
                            <div className="absolute top-0 w-1/4 h-[17px] left-[px] rounded-tr-full rounded-tl-lg box z-10"></div>
                            <div className="absolute top-9 right-0 h-4 w-1/4 rounded-tr-3xl box-2 z-10"></div>
                            <button className="absolute top-0 bg-white right-0 w-3/4 h-9 polygon-btn polygon-btn rounded-tr-lg rounded-bl-3xl">Discover the Latest Streetwear</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Unggulan;