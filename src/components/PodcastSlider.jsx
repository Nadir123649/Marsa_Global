import { BlogFour, BlogOne, BlogThree, BlogTwo, PodFour, PodOne, PodThree, PodTwo } from "@/utils";
import Image from 'next/image';
import Link from "next/link";
import { Container } from 'react-bootstrap';

const PodcastSlider = () => {
    const slides = [
        {
            image:PodOne,

        },
        {
            image: PodTwo,

        },
        {
            image: PodThree,

        },
        {
            image: PodFour,

        },
    ];
    const slidesTwo = [
        {
            image:PodOne,

        },
        {
            image: PodTwo,

        },
        {
            image: PodThree,

        },
        {
            image: PodFour,

        },
    ];

    return (
        <section className="py-[30px]">
            <Container >
                <h1 className="text-[#4A4A4A] text-[32px] pb-[40px] font-bold">Recommended Podcasts</h1>
                <div class="auto_slider_container flex gap-4 pb-[80px]">
                    <div class="auto_slider flex gap-4">
                        {slides.map((slide, index) => (
                            <div key={index} className="slide flex flex-col gap-[10px] min-w-[282px]">
                                <Image src={slide.image} alt={slide.title} />

                            </div>
                        ))}
                    </div>
                    <div class="auto_slider flex gap-4">
                        {slidesTwo.map((slide, index) => (
                            <div key={index} className="slide flex flex-col gap-[10px] min-w-[282px]">
                                <Image src={slide.image} alt={slide.title} />

                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default PodcastSlider;
