import React, { useEffect } from "react";
import { gsap } from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Gallery = () => {
    useEffect(() => {
        const marquee = document.querySelector('.marquee');
        const textMarquee = marquee.querySelectorAll('div');

        // clone untuk membuat continues looping
        textMarquee.forEach(div => {
            const clone = div.cloneNode(true);
            marquee.appendChild(clone);
        });

        const totalWidth = marquee.scrollWidth / 2;

        gsap.to(marquee, {
            x: -totalWidth,
            duration: 60,
            ease: 'linear',
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % totalWidth) // melakkukan reset posisis
        },
      });
    }, []);
    
    return (
        <div class="relative">
            <div class="relative w-full overflow-hidden marquee-container my-10 border-y-2 border-gray-300">
                <div class="marquee flex gap-40 whitespace-nowrap py-4">
                    <div class="flex justify-center gap-6 text-black text-center items-center px-14 py-3 whitespace-nowrap text-xl font-semibold"><img class="w-full h-[50px] object-cover rounded-lg" src="https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1441&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /><h3> Summer Collection</h3></div>
                    <div class="flex justify-center gap-6 text-black text-center items-center px-14 py-3 whitespace-nowrap text-xl font-semibold"><img class="w-full h-[50px] object-cover rounded-lg" src="https://thumb.tvonenews.com/thumbnail/2023/11/24/65601215140a5-dua-personel-jkt48-freya-jayawardana-dan-angelina-christy_1265_711.jpg" alt="" />New Release</div>
                    <div class="flex justify-center gap-6 text-black text-center items-center px-14 py-3 whitespace-nowrap text-xl font-semibold"><img class="w-full h-[50px] object-cover rounded-lg" src="https://akcdn.detik.net.id/visual/2023/11/07/erigo_169.png?w=1200" alt="" />Woman Collection</div>
                    <div class="flex justify-center gap-6 text-black text-center items-center px-14 py-3 whitespace-nowrap text-xl font-semibold"><img class="w-full h-[50px] object-cover rounded-lg" src="https://plus.unsplash.com/premium_photo-1688497830977-f9ab9f958ca7?q=80&w=1351&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />Men Style</div>
                    <div class="flex justify-center gap-6 text-black text-center items-center px-14 py-3 whitespace-nowrap text-xl font-semibold"><img class="w-full h-[50px] object-cover rounded-lg" src="https://images.unsplash.com/photo-1471119017026-179f1bb0a70e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbiUyMHN0eWxlfGVufDB8MHwwfHx8MA%3D%3D" alt="" />Haji Nawi</div>
                </div>
            </div>
            <div class="mx-auto grid md:grid-cols-3 gap-4">
                <div class="relative col-span-2">
                    <img class="rounded-lg object-cover w-full h-[322px]" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt=""/>
                    <div class="absolute w-full bottom-0">
                        <ul class="flex justify-between mx-10 my-10 items-center">
                            <li><h2 class="font-black text-start text-3xl">MINIMALIST<br/>ELEGANCE</h2></li>
                            <li><a class="absolute -translate-y-5 -translate-x-10 -mx-5 bg-white px-5 py-[17px] rounded-full text-black hover:-rotate-45 duration-300 scale-75 hover:scale-90" href=""><FontAwesomeIcon icon={faArrowRight} size="2x"/></a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <img class="rounded-lg object-fill w-[416px] h-[322px]" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt=""/>
                </div>
                <div>
                    <img class="rounded-lg object-fill w-[416px] h-[322px]" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg" alt=""/>
                </div>
                <div class="col-span-2">
                    <img class="w-full h-[322px] rounded-lg object-cover" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Gallery;