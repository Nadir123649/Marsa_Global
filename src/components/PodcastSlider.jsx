import { PodFour, PodOne, PodThree, PodTwo, ResourcesBg } from "@/utils";
import Image from 'next/image';
import { useState } from "react";
import { Container } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const PodcastSlider = () => {
    const slides = [
        {title: "Connect with friends", image: PodOne},
        {title: "Connect with friends", image: PodTwo },
        {title: "Connect with friends", image: PodThree },
        {title: "Connect with friends", image: PodFour},
        {title: "Connect with friends", image: PodOne },
        {title: "Connect with friends", image: PodTwo},
        {title: "Connect with friends", image: PodThree},
        {title: "Connect with friends", image: PodFour},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % (slides.length - 3));
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length - 3) % (slides.length - 3));
    };

    const slideOffset = -(currentIndex * 282); 

    return (
        <section className="pb-[60px]">
            <Image className="absolute right-0" src={ResourcesBg} />
            <Container>
                <div className="header-container flex items-center justify-between pb-[32px]">
                    <h1 className="text-[#4A4A4A] text-[32px] font-bold">Recommended Podcasts</h1>
                    <div className="chevrons flex gap-4">
                        <button className="chevron left" onClick={prevSlide}> <FaChevronLeft className="text-[16px] transition-all duration-300 ease-in-out"/></button>
                        <button className="chevron right " onClick={nextSlide}> <FaChevronRight className="text-[16px] transition-all duration-300 ease-in-out" />
                        </button>
                    </div>
                </div>
                <div className="auto_slider_container flex gap-4 pb-[60px] relative">
                    <div className="auto_slider flex gap-4" style={{ transform: `translateX(${slideOffset}px)`, transition: 'transform 0.5s ease-in-out' }}>
                        {slides.map((slide, index) => (
                            <div key={index} className="slide flex flex-col gap-[10px] min-w-[282px]">
                                <Image src={slide.image} alt={slide.title} />
                                <h2 className="text-[#4F4F4F] text-[20px] font-semibold">{slide.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PodcastSlider;
