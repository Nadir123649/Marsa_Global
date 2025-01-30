import { slidesData } from '@/constants';
import Image from 'next/image';
import React from 'react';
import { Container } from 'react-bootstrap';
import Slider from "react-slick";

const CommunitySlider = () => {

    const leftToRightSettings = {
        infinite: true,
        slidesToShow: 2.85,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        dots: false,
        arrows: false,
        autoplaySpeed: 2000,
        cssEase: 'ease-in-out',
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2.3, slidesToScroll: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };

    const rightToLeftSettings = {
        ...leftToRightSettings,
        rtl: true,
    };


    return (
        <section className='mt-[0px] overflow-hidden'>
            <Container className='mb-[60px]'>
                <h1 className='text-[#1E1E25] text-[28px] md:text-[40px] not-italic font-[700] leading-normal'>
                    Feedback by <span className='text-[#8BC34A]'>Our Community</span>
                </h1>
            </Container>

            <Slider {...leftToRightSettings}>
                {slidesData.map((slide) => (
                    <div key={slide.id} className="p-2">
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            className='w-full'
                        />
                    </div>
                ))}
            </Slider>

            <Slider {...rightToLeftSettings}>
                {slidesData.map((slide) => (
                    <div key={slide.id} className="p-2">
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            className='w-full'
                        />
                    </div>
                ))}
            </Slider>
        </section>
    );
}

export default CommunitySlider;
