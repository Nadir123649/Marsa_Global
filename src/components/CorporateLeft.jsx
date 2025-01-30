import { FullLaptop, LeftGroup } from '@/utils';
import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CorporateLeft = ({ title, subtitle, description, boldDescription, simpleDescription }) => {
    return (
        <section className='py-[10px] md:py-[100px] relative '>
            <Image src={LeftGroup} alt='mood' className='hidden md:block corporate-laptop-left absolute left-0 top-0 z-10' />
            <Image src={FullLaptop} alt='mood' className=' block md:hidden' />
            <Container>
                <div className='feature-card min-h-[485px] mt-[24px] flex flex-col justify-center'>
                    <Row className='justify-end items-center md:pl-[40px] pr-[20px]'>
                        <Col lg={8} md={12} xs={12}>
                            <h1 className='text-[#1E1E25] text-[26px] md:text-[32px] not-italic font-[700] leading-[61px] mb-[24px]'>
                                {title}&nbsp;<span className='text-[#8BC34A]'>{subtitle}</span>
                            </h1>

                            <p className='text-[#4F4F4F] text-[20px] font-[400] leading-[35px] not-italic mb-[32px]'>
                                {description}
                            </p>

                            <h2 className='text-[#8BC34A] text-[20px] leading-[35px] font-[600] not-italic mb-[16px]'>
                                Why It Is a Must-Have for Enterprises
                            </h2>
                            <p className='text-[#4F4F4F] text-[16px] not-italic font-[500] leading-[35px]'>
                                <b className='font-[600]'>
                                    {boldDescription}
                                </b>&nbsp;{simpleDescription}
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}

export default CorporateLeft;
