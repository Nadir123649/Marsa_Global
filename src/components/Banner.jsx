import { HeroBG, ImagesBanner, UserBox } from '@/utils';
import Image from 'next/image';
import React from 'react';
import { Container } from 'react-bootstrap';

const Banner = () => {
    return (
        <section className='banner mt-[115px]'>
            <Container style={{
                backgroundImage: `url(${HeroBG.src})`}} className='p-0 banner-image min-h-[65vh]  md:min-h-[85vh] rounded-[0px] md:rounded-[29px] flex items-center'>
                <div className='banner-content pl-[20px] md:pl-[56px]'>
                    <h1 className='text-white text-[40px] md:text-[64px] not-italic font-[700] leading-[50px] md:leading-[88px] max-w-[571px] w-full mb-[16px]'>
                        Cigma: Connect, Thrive, Be Well.
                    </h1>
                    <p className='text-white text-[24px] font-[400] leading-[51px] not-italic'>
                        Chat freely. Prioritize your mental health.
                    </p>
                    <div className='flex flex-col md:flex-row items-center gap-[16px] mt-[40px]'>
                        <div style={{backgroundImage: `url(${UserBox.src})` }} className='flex items-center gap-[10px] user-box justify-center'>
                            <Image src={ImagesBanner} alt="user-images" />
                            <div className='flex flex-col items-start gap-0'>
                                <span className='text-white text-[24px] not-italic font-[700]'>
                                    10M+
                                </span>
                                <span className='text-white text-[18px] not-italic font-[500]'>
                                    USERS
                                </span>
                            </div>
                        </div>
                        <button className='text-white text-[16px] not-italic leading-normal font-[500]  border-[#FFF] border-[1px] max-w-[180px] w-full h-[64px] rounded-[50px]  hover:bg-[#8BC34A] transition-all duration-300 ease-in-out  hover:border-[#8BC34A] hover:border-[1px]'>
                            Learn More
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Banner;
