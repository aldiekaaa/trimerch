import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Gallery = () => {
    return (
        <div>
            <div class="flex items-center justify-center py-4 md:py-8 flex-wrap">
                <button type="button" class="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800">All categories</button>
                <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Shoes</button>
                <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Bags</button>
                <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Electronics</button>
                <button type="button" class="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800">Gaming</button>
            </div>
            <div class="grid md:grid-cols-3 gap-4">
                <div class="relative col-span-2">
                    <img class="w-[805px] h-[305px] rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
                    <div class="absolute w-full bottom-0">
                        <ul class="flex justify-between mx-10 my-10 items-center">
                            <li><h2 class="font-black text-start text-3xl">MINIMALIST<br/>ELEGANCE</h2></li>
                            <li><a class="absolute -translate-y-5 -translate-x-10 -mx-5 bg-white px-5 py-[17px] rounded-full text-black hover:-rotate-45 duration-300 scale-75 hover:scale-90" href=""><FontAwesomeIcon icon={faArrowRight} size="2x"/></a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img class="rounded-lg object-fill" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
                </div>
                <div>
                    <img class="rounded-lg object-fill" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
                </div>
                <div class="col-span-2">
                    <img class="w-[805px] h-[305px] rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Gallery;