import React from "react";

const Footer = () => {
    return (
        <footer class="">
            <div class="relative mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0 text-start text-gray-500">
                    <a href="#" class="flex items-center">
                        <span class="self-center text-3xl whitespace-nowrap font-black text-gray-800 italic">TRIMERCH</span>
                    </a>
                    <p className="mt-5 w-1/2 drop-shadow-xl">Margaluyu Street, No.193, Sukamukti, Pataruman District, Sukakamu City, West Java 46326</p>
                </div>
                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Navigation</h2>
                        <ul class="text-gray-500 font-medium">
                            <li class="mb-4">
                                <a href="" class="hover:underline">Blog</a>
                            </li>
                            <li className="mb-4">
                                <a href="" class="hover:underline">Collection</a>
                            </li>
                            <li>
                                <a href="" class="hover:underline">Product</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                        <ul class="text-gray-500 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline ">Instagram</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Facebook</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                        <ul class="text-gray-500 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <h1 className="absolute -z-10 bottom-14 left-1/2 -translate-x-1/2 text-9xl text-center font-black tracking-widest text-gray-300 text-wrap">TRIMERCH</h1>
                <div className="absolute h-8 w-full bg-white bottom-14"></div>
            </div>
            <hr class="my-6 border-gray-300 border-2 sm:mx-auto lg:my-" />
            <div class="sm:flex sm:items-center sm:justify-between bg-white z-10">
                <span class="text-sm text-gray-500 sm:text-center mx-auto">© 2025 <a href="#" class="hover:underline">Trimerch</a>. All Rights Reserved.
                </span>
            </div>
            </div>
        </footer>
    )
}

export default Footer;