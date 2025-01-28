import { BlogFour, BlogOne, BlogThree, BlogTwo, ResourcesBg } from "@/utils";
import Image from 'next/image';
import Link from "next/link";
import { Container } from 'react-bootstrap';

const BlogsSlider = () => {
    const slides = [
        {
            image: BlogOne,
            title: "Connect with friends",
            description: "Connect with friends or peers in real-time...",
            link: "/"
        },
        {
            image: BlogTwo,
            title: "Connect with friends",
            description: "Connect with friends or peers in real-time...",
            link: "/"
        },
        {
            image: BlogThree,
            title: "Connect with friends",
            description: "Connect with friends or peers in real-time...",
            link: "/"
        },
        
        {
            image: BlogFour,
            title: "Connect with friends",
            description: "Connect with friends or peers in real-time...",
            link: "/"
        },
    ];
    const slidesTwo = [
        {
            image: BlogOne,
            title: "Connect with friends",
            description: "Connect with friends or peers in real-time...",
            link: "/"
        },
        {
            image: BlogTwo,
            title: "Connect with friends",
            description: "Connect with friends or peers in real-time...",
            link: "/"
        },
        {
            image: BlogThree,
            title: "Connect with friends",
            description: "Connect with friends or peers in real-time...",
            link: "/"
        },
        
        {
            image: BlogFour,
            title: "Connect with friends",
            description: "Connect with friends or peers in real-time...",
            link: "/"
        },
    ];

    return (
        <section className="pb-[50px]"> 
           <Image className="absolute right-0" src={ResourcesBg} /> 
            <Container >
                <h1 className="text-[#4A4A4A] text-[32px] pb-[40px] font-bold">Recommended Blogs</h1>
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

export default BlogsSlider;
