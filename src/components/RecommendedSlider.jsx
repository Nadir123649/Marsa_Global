import React, { useEffect, useRef } from "react";
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import Link from "next/link";
import { ConnectFriends, ConnectNew, ConnectNow, PhoneFriend } from "@/utils";

const RecommendedSlider = () => {
    const slides = [
        {
            image: ConnectNew,
            title: "Connect with friends",
            description: "Connect with friends or peers in real-time...",
            link: "/"
        },
        {
            image: ConnectFriends,
            title: "Connect with friends",
            description: "Connect with friends or peers in real-time...",
            link: "/"
        },
        {
            image: ConnectNow,
            title: "Connect with friends",
            description: "Connect with friends or peers in real-time...",
            link: "/"
        },
        
        {
            image: PhoneFriend,
            title: "Connect with friends",
            description: "Connect with friends or peers in real-time...",
            link: "/"
        },
    ];
    const slidesTwo = [
        {
            image: ConnectNew,
            title: "Connect with friends",
            description: "Connect with friends or peers in real-time...",
            link: "/"
        },
        {
            image: ConnectFriends,
            title: "Connect with friends",
            description: "Connect with friends or peers in real-time...",
            link: "/"
        },
        {
            image: ConnectNow,
            title: "Connect with friends",
            description: "Connect with friends or peers in real-time...",
            link: "/"
        },
       
        {
            image: PhoneFriend,
            title: "Connect with friends",
            description: "Connect with friends or peers in real-time...",
            link: "/"
        },
    ];

    return (
        <section > 
            <Container >
                <h1 className="text-[#4A4A4A] text-[32px] pb-[40px] font-bold">Recommended Reading</h1>
                <div class="auto_slider_container flex gap-4 pb-[80px]">
                    <div class="auto_slider flex gap-4">
                        {slides.map((slide, index) => (
                            <div key={index} className="slide flex flex-col gap-[10px] min-w-[282px]">
                                <Image src={slide.image} alt={slide.title} />
                                <h2 className="text-[#4F4F4F] text-[20px] font-semibold">{slide.title}</h2>
                                <p className="text-[20px] font-light">{slide.description}</p>
                                <Link href={slide.link} className="text-[#A8D5BA] text-[20px] font-medium underline">Read More</Link>
                            </div>
                        ))}
                    </div>
                    <div class="auto_slider flex gap-4">
                    {slidesTwo.map((slide, index) => (
                            <div key={index} className="slide flex flex-col gap-[10px] min-w-[282px]">
                                <Image src={slide.image} alt={slide.title} />
                                <h2 className="text-[#4F4F4F] text-[20px] font-semibold">{slide.title}</h2>
                                <p className="text-[20px] font-light">{slide.description}</p>
                                <Link href={slide.link} className="text-[#A8D5BA] text-[20px] font-medium underline">Read More</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default RecommendedSlider;
