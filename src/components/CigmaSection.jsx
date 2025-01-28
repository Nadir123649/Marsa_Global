import { CigmaCard, Curve, ImageLineOne, ImageLineTwo, MobileOne, MobileThree, MobileTwo } from '@/utils';
import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CigmaSection = () => {
    return (
        <section>
            <Container className='cigma-container feature-card'>
                <Row>
                    <Col lg={6} md={12} xs={12}>
                        <div>
                            <h1 className='text-[#4F4F4F] text-[40px] not-italic font-[700] mb-[48px]'>
                                How Cigma Helps You Stay&nbsp;
                                <span className='text-[#8BC34A]'>
                                    Connected
                                </span>
                                &nbsp;and&nbsp;
                                <span className='text-[#8BC34A]'>
                                    Healthy
                                </span>
                            </h1>
                            <div style={{backgroundImage: `url(${CigmaCard.src})` }} className='cigma-card flex flex-col justify-between hover:scale-105 transition-all duration-300 ease-in-out'>
                                <div className='flex items-center gap-2 bg-[#5C5C5C] rounded-[46px] max-w-[158px] w-full p-2'>
                                    <Image src={Curve} alt='curve' />
                                    <p className='text-white text-[16px] not-italic font-[500] mb-0'>
                                        How It Works
                                    </p>
                                </div>
                                <h3 className='text-white text-[32px] font-[600] not-italic leading-normal'>
                                    Your Path to Wellness
                                </h3>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12} xs={12}>
                        <div className='pl-[60px]'>
                            <p className='text-[#4F4F4F] text-[22px] not-italic font-[300] leading-[38px] pt-[10px]'>
                                Our features are built around fostering better mental health for all.
                            </p>
                            <div className='mt-[86px]'>
                                <ul className='flex flex-col gap-[60px] relative'>
                                    <Image src={ImageLineOne} alt="line-one" className='absolute top-[62px] left-[-26px]' />
                                    <Image src={ImageLineTwo} alt="line-two" className='absolute bottom-[62px] left-[80px]' />
                                    <li className='flex items-center gap-[16px] flex-row'>
                                        <div className='mr-[23px] bg-[#8BC34A] w-[83px] h-[83px] rounded-[50%] flex justify-center items-center'>
                                            <span className='bg-[#8EBA5B] w-[69px] h-[69px] rounded-[50%] flex justify-center items-center text-[30px] text-white font-[700] leading-normal not-italic'>
                                                01
                                            </span>
                                        </div>
                                        <Image src={MobileOne} alt="mobile" />
                                        <span className='text-[#464646] text-[24px] not-italic font-[500] leading-normal'>
                                            Create an Account
                                        </span>
                                    </li>
                                    <li className='flex items-center gap-[16px] flex-row'>
                                        <div className='mr-[23px] bg-[#8BC34A] w-[83px] h-[83px] rounded-[50%] flex justify-center items-center'>
                                            <span className='bg-[#8EBA5B] w-[69px] h-[69px] rounded-[50%] flex justify-center items-center text-[30px] text-white font-[700] leading-normal not-italic'>
                                                02
                                            </span>
                                        </div>
                                        <Image src={MobileTwo} alt="mobile" />
                                        <span className='text-[#464646] text-[24px] not-italic font-[500] leading-normal'>
                                            Start Conversations With AI
                                        </span>
                                    </li>
                                    <li className='flex items-center gap-[16px] flex-row'>
                                        <div className='mr-[23px] bg-[#8BC34A] w-[83px] h-[83px] rounded-[50%] flex justify-center items-center'>
                                            <span className='bg-[#8EBA5B] w-[69px] h-[69px] rounded-[50%] flex justify-center items-center text-[30px] text-white font-[700] leading-normal not-italic'>
                                                03
                                            </span>
                                        </div>
                                        <Image src={MobileThree} alt="mobile" />
                                        <span className='text-[#464646] text-[24px] not-italic font-[500] leading-normal'>
                                            Track Your Wellness
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default CigmaSection;
