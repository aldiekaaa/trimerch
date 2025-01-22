import React from "react";

const Carousel = () => {
    return (
        <div id="animation-carousel" class="relative w-full z-0 mt-20 duration-1000" data-carousel="static">
            <div class="relative w-full h-[30rem] rounded-lg overflow-hidden">
                <div class="hidden duration-1000 ease-in-out" data-carousel-item="active">
                    <img src="https://cdn.pixabay.com/photo/2022/10/10/08/32/woman-7511233_1280.jpg" class="absolute block w-full -translate-x-1/2 h-[30rem] -translate-y-1/2 top-1/2 left-1/2 object-cover brightness-50" alt="..."/>
                    <div className="absolute flex flex-col items-center text-center gap-3 top-1/2 w-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <span className="text-white">Casual Never Looked This Good</span>
                        <span className="text-white text-4xl font-semibold">Perfect Fit, Perfect Vibe, Perfect You.</span>
                    </div>
                </div>
                <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                    <img src="https://erigostore.co.id/cdn/shop/files/New_Coach.jpg?v=1733987353&width=3840" class="absolute block w-full -translate-x-1/2 h-[30rem] -translate-y-1/2 top-1/2 left-1/2 object-cover brightness-50" alt="..."/>
                    <div className="absolute flex flex-col items-center text-center gap-3 top-1/2 w-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <span className="text-white text-4xl font-semibold">Shades On, Game On</span>
                        <button className="px-10 py-2 rounded-lg font-semibold border border-transparent mt-5 text-white duration-300 border-white">Shop Now</button>
                    </div>
                </div>
                <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                    <img src="https://cdn.pixabay.com/photo/2021/09/06/12/43/fashion-6601610_960_720.jpg" class="absolute block w-full -translate-x-1/2 h-[30rem] -translate-y-1/2 top-1/2 left-1/2 object-cover brightness-50" alt="..."/>
                    <div className="absolute flex flex-col items-start gap-3 bottom-24 w-1/3 left-20">
                        <span className="text-white">Accessorize with Confidence</span>
                        <span className="text-white text-4xl font-semibold">Find the perfect piece for any occasion.</span>
                        <button className="bg-white px-10 py-2 rounded-lg font-semibold border border-transparent text-gray-800 mt-5 hover:bg-transparent hover:text-white duration-300 hover:border-white">Discovery Now</button>
                    </div>
                </div>
                <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                    <img src="https://erigostore.co.id/cdn/shop/files/New_Tshirt.jpg?v=1733987182&width=3840" class="absolute block w-full -translate-x-1/2 h-[30rem] -translate-y-1/2 top-1/2 left-1/2 object-cover brightness-75" alt="..."/>
                    <div className="absolute flex flex-col items-center text-end gap-3 top-1/2 w-[20%] left-[45%] -translate-x-1/2 -translate-y-1/2">
                        <span className="text-gray-800 text-4xl font-bold">Make a Statement <br /> in Black</span>
                    </div>
                </div>
            </div>
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full">
                    <svg class="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full">
                    <svg class="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Carousel;