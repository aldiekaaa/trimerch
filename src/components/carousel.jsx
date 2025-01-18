import React from "react";

const Carousel = () => {
    return (
<div id="animation-carousel" class="relative w-full z-0 mt-20" data-carousel="slide">
    <div class="relative w-full h-[30rem] rounded-lg overflow-hidden">
        <div class="hidden duration-700 ease-linear" data-carousel-item>
            <img src="https://cdn.pixabay.com/photo/2022/10/10/08/32/woman-7511233_1280.jpg" class="absolute block w-full -translate-x-1/2 h-[30rem] -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-linear" data-carousel-item>
            <img src="https://erigostore.co.id/cdn/shop/files/New_Coach.jpg?v=1733987353&width=3840" class="absolute block w-full -translate-x-1/2 h-[30rem] -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-linear" data-carousel-item="active">
            <img src="https://cdn.pixabay.com/photo/2021/09/06/12/43/fashion-6601610_960_720.jpg" class="absolute block w-full -translate-x-1/2 h-[30rem] -translate-y-1/2 top-1/2 left-1/2 object-cover scale-[1.14]" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-linear" data-carousel-item>
            <img src="https://erigostore.co.id/cdn/shop/files/New_Tshirt.jpg?v=1733987182&width=3840" class="absolute block w-full -translate-x-1/2 h-[30rem] -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="..."/>
        </div>
        <div class="hidden duration-700 ease-linear" data-carousel-item>
            <img src="https://images.unsplash.com/photo-1485125639709-a60c3a500bf1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="absolute block w-full -translate-x-1/2 h-[30rem] -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="..."/>
        </div>
    </div>
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
    );
};

export default Carousel;