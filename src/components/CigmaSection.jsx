import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CigmaSection = () => {
    return (
        <section>
            <Container className='cigma-container feature-card'>
                <Row>
                    <Col lg={6} md={12} xs={12}>
                        <div>
                            <h1 className='text-[#4F4F4F] text-[40px] not-italic font-[700]'>
                                How Cigma Helps You Stay&nbsp;
                                <span className='text-[#8BC34A]'>
                                    Connected
                                </span>
                                &nbsp;and&nbsp;
                                <span className='text-[#8BC34A]'>
                                    Healthy
                                </span>
                            </h1>
                            <div className='cigma-card'>
                                <div>
                                    <p>
                                        How It Works
                                    </p>
                                </div>
                                <h3>
                                    Your Path to Wellness
                                </h3>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={12} xs={12}>
                        <p>
                            Our features are built around fostering better mental health for all.
                        </p>
                        <div>
                            <ul>
                                <li>
                                    <div>
                                        01
                                    </div>
                                    <img src="" alt="" />
                                    <span>
                                        Create an Account
                                    </span>
                                </li>
                                <li>
                                    <div>
                                        02
                                    </div>
                                    <img src="" alt="" />
                                    <span>
                                        Start Conversations With AI
                                    </span>
                                </li>
                                <li>
                                    <div>
                                        03
                                    </div>
                                    <img src="" alt="" />
                                    <span>
                                        Track Your Wellness
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default CigmaSection;
