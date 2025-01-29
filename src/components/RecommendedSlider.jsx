import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import Link from "next/link";
import { ConnectFriends, ConnectNew, ConnectNow, PhoneFriend, ResourcesBg } from "@/utils";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const RecommendedSlider = () => {
    const slides = [
        { image: ConnectNew, title: "Connect with friends", description: "Connect with friends or peers in real-time...", link: "/" },
        { image: ConnectFriends, title: "Connect with friends", description: "Connect with friends or peers in real-time...", link: "/" },
        { image: ConnectNow, title: "Connect with friends", description: "Connect with friends or peers in real-time...", link: "/" },
        { image: PhoneFriend, title: "Connect with friends", description: "Connect with friends or peers in real-time...", link: "/" },
        { image: ConnectNew, title: "Connect with friends", description: "Connect with friends or peers in real-time...", link: "/" },
        { image: ConnectFriends, title: "Connect with friends", description: "Connect with friends or peers in real-time...", link: "/" },
        { image: ConnectNow, title: "Connect with friends", description: "Connect with friends or peers in real-time...", link: "/" },
        { image: PhoneFriend, title: "Connect with friends", description: "Connect with friends or peers in real-time...", link: "/" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (slides.length - 3)); 
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length - 3) % (slides.length - 3));
    };

    const slideOffset = -(currentIndex * 282);

    const isFirstSlide = currentIndex === 0;
    const isLastSlide = currentIndex === slides.length - 4;
    return (
        <section className="pb-[62px]">
            <Image className="absolute right-0" src={ResourcesBg} />
            <Container>
                <div className="header-container flex items-center justify-between pb-[32px]">
                    <h1 className="text-[#4A4A4A] text-[32px] font-bold">Recommended Reading</h1>
                    <div className="chevrons flex gap-4">
                        <button className={`chevron left ${isFirstSlide ? 'chevron-disable' : 'chevron-active'}`}  onClick={prevSlide} disabled={isFirstSlide} > <FaChevronLeft className="text-[16px] transition-all duration-300 ease-in-out"/></button>
                        <button className={`chevron right ${isLastSlide ? 'chevron-disable' : 'chevron-active'}`} onClick={nextSlide} disabled={isLastSlide}> <FaChevronRight className="text-[16px] transition-all duration-300 ease-in-out" />
                        </button>
                    </div>
                </div>
                <div className="auto_slider_container flex gap-4 pb-[60px] relative">
                    <div className="auto_slider flex gap-4" style={{ transform: `translateX(${slideOffset}px)`, transition: 'transform 0.5s ease-in-out' }}>
                        {slides.map((slide, index) => (
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
