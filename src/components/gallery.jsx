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
        <div class="relative" id="collection">
            <div class="relative w-full overflow-hidden marquee-container my-10 border-y-2 border-gray-300 bg-gray-800">
                <div class="marquee flex gap-40 whitespace-nowrap py-4">
                    <div class="flex justify-center gap-6 text-white text-center items-center px-14 py-3 whitespace-nowrap text-xl font-bold italic uppercase"><img class="w-full h-[50px] object-cover rounded-lg" src="https://images.pexels.com/photos/1247526/pexels-photo-1247526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /><h3> Summer Collection</h3></div>
                    <div class="flex justify-center gap-6 text-white text-center items-center px-14 py-3 whitespace-nowrap text-xl font-bold italic uppercase"><img class="w-full h-[50px] object-cover rounded-lg" src="https://images.pexels.com/photos/28484982/pexels-photo-28484982/free-photo-of-trendy-urban-fashion-portrait-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />New Release</div>
                    <div class="flex justify-center gap-6 text-white text-center items-center px-14 py-3 whitespace-nowrap text-xl font-bold italic uppercase"><img class="w-full h-[50px] object-cover rounded-lg" src="https://akcdn.detik.net.id/visual/2023/11/07/erigo_169.png?w=1200" alt="" />Woman Collection</div>
                    <div class="flex justify-center gap-6 text-white text-center items-center px-14 py-3 whitespace-nowrap text-xl font-bold italic uppercase"><img class="w-full h-[50px] object-cover rounded-lg" src="https://plus.unsplash.com/premium_photo-1688497830977-f9ab9f958ca7?q=80&w=1351&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />Men Style</div>
                    <div class="flex justify-center gap-6 text-white text-center items-center px-14 py-3 whitespace-nowrap text-xl font-bold italic uppercase"><img class="w-full h-[50px] object-cover rounded-lg" src="https://images.pexels.com/photos/1735559/pexels-photo-1735559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />Streetwear</div>
                </div>
            </div>
            <div class="mx-auto grid md:grid-cols-3 gap-4">
                <div class="relative col-span-2">
                    <img class="rounded-lg object-cover w-full h-[322px] brightness-50" src="https://cdn.pixabay.com/photo/2016/06/21/03/09/wedding-1470330_960_720.jpg" alt=""/>
                    <div class="absolute w-full bottom-0">
                        <ul class="flex justify-between mx-10 my-10 items-center">
                            <li><h2 class="font-black text-start text-3xl text-white">EFFORTLESS<br/>STREET STYLE</h2></li>
                            <li><a class="absolute -translate-y-5 -translate-x-10 -mx-5 bg-white px-5 py-[17px] rounded-full text-black hover:-rotate-45 duration-300 scale-75 hover:scale-90" href=""><FontAwesomeIcon icon={faArrowRight} size="2x"/></a></li>
                        </ul>
                    </div>
                </div>
                <div className="relative">
                    <img class="rounded-lg object-cover w-full h-[322px] brightness-50" src="https://images.pexels.com/photos/30156819/pexels-photo-30156819/free-photo-of-stylish-hiking-boots-in-rustic-indoor-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                    <p className="absolute text-2xl top-3 left-5 text-white font-black w- text-start">UTILITY <br /> MEETS COMFORT</p>
                </div>
                <div className="relative">
                    <img class="rounded-lg object-cover w-full h-[322px] brightness-50" src="https://cdn.pixabay.com/photo/2019/08/26/15/42/headband-4432090_960_720.jpg" alt=""/>
                    <div className="absolute bottom-5 left-5">
                        <p className="text-3xl text-white font-black text-start">Elevate <br /> Your Style</p>
                        <p className="text-sm text-white mt-2 text-start">Smart accessories for an active <br />and dynamic lifestyle.</p>
                    </div>
                </div>
                <div class="col-span-2">
                    <img class="w-full h-[322px] rounded-lg object-cover" src="https://images.pexels.com/photos/1670770/pexels-photo-1670770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Gallery;