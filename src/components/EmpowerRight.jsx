import { RightGroup } from '@/utils';
import Image from 'next/image';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const EmpowerRight = () => {
    return (
        <section className='py-[10px] md:py-[100px] relative'>
            <Image src={RightGroup} alt='mood' className='laptop-img absolute right-0 top-0 z-10' />
            <Container>
                <div className='feature-card min-h-[488px] mt-[24px] flex flex-col justify-center'>
                    <Row className='feature-row justify-start items-center pr-[20px]'>
                        <Col lg={8} md={12} xs={12} className='p-0'>
                            <h1 className='text-[#1E1E25]  text-[26px] md:text-[32px] not-italic font-[700] leading-[55px] mb-[0px]'>
                                Empower Teams with &nbsp;<span className='text-[#8BC34A]'>Wellness Analytics</span>
                            </h1>
                            <p className='text-[#8BC34A] text-[22px] font-[400] leading-normal not-italic mb-[18px]'>
                                For Businesses (B2B)
                            </p>

                            <p className='text-[#4F4F4F] text-[20px] font-[400] leading-[35px] not-italic mb-[24px]'>
                                Track mental health trends, access actionable insights, and foster a positive workplace culture with secure, data-driven tools.
                            </p>

                            <h2 className='text-[#8BC34A] text-[20px] leading-[35px] font-[600] not-italic mb-[12px]'>
                                What You’ll Get:
                            </h2>
                            <ul className='info-listed flex flex-col gap-[8px] list-disc '>
                                <li className='text-[#4F4F4F] text-[16px] font-[500] leading-normal not-italic'>
                                    Wellness Analytics: Monitor employee well-being trends with real-time data.
                                </li>
                                <li className='text-[#4F4F4F] text-[16px] font-[500] leading-normal not-italic'>
                                    Customizable Insights: Generate tailored reports to identify areas needing support.
                                </li>
                                <li className='text-[#4F4F4F] text-[16px] font-[500] leading-normal not-italic'>
                                    Resource Management: Provide employees with curated mental health resources.
                                </li>
                                <li className='text-[#4F4F4F] text-[16px] font-[500] leading-normal not-italic'>
                                    Privacy First: Maintain confidentiality while building trust within your organization.
                                </li>
                            </ul>

                        </Col>
                    </Row>
                </div>
            </Container>
        </section>
    );
}

export default EmpowerRight;
