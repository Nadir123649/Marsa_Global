import { Applestore, Appstore, ImagesBanner, Moodimg } from '@/utils';
import Image from 'next/image';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const MoodSection = () => {
    return (
        <section className='pt-[40px]'>
            <Container className='pt-[60px]'>
                <Row>
                    <Col lg={12} md={12} xs={12} className='flex flex-col relative description-part  gap-3    '>
                        <Image src={Moodimg} alt='mood' className='mood-img hover:scale-105 transition-all ease-in-300' />
                        <div className='mood-description flex flex-col  justify-center  gap-3 rounded-[18px]  bg-[rgba(217,_217,_217,_0.10)] [box-shadow:26.233px_-26.233px_26.233px_0px_rgba(165,_165,_165,_0.10)_inset,_-26.233px_26.233px_26.233px_0px_rgba(255,_255,_255,_0.10)_inset] backdrop-filter backdrop-blur-[26.233333587646484px]'>
                            <h1 className='text-[#1E1E25] text-[32px] font-bold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]'>Your Journey with<span className='text-[#8BC34A]'> Mood Tracking & Insights</span></h1>
                            <h2 className='text-[#8BC34A] text-[22px] font-normal'>(For Individuals (B2C)</h2>
                            <p className='card-text text-[#4F4F4F] text-[20px] '>Monitor your emotions, explore personalized resources, and stay connected to a supportive community for a fulfilling wellness journey.</p>
                            <h2 className='text-[#8BC34A] text-[22px] font-normal'>What You’ll Get:</h2>
                            <ul className='mood-list card-text text-[#4F4F4F] text-[16px] '>
                                <li>Mood Tracking: Easily log your emotions and visualize your mental health progress.</li>
                                <li>Guided Resources: Access articles, videos, and exercises tailored to your needs.</li>
                                <li>Community Support: Engage with groups and connect with others who understand you.</li>
                                <li>Personal Growth: Track progress over time and celebrate milestones on your journey.</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4} md={4} xs={12} className='flex flex-row justify-center pt-[60px]'>
                        <Image src={Appstore} alt='mood' className='apple-img' />
                        <Image src={Applestore} alt='mood' className='play-img' />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default MoodSection;
