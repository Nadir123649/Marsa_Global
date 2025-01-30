import { featureData } from '@/constants';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FeatureCard from './FeatureCard';

const CoreFeatures = () => {
    return (
        <section className='my-[60px]'>
            <Container className='p-0'>
                <Row className='p-0 m-0 w-[100%]' >
                    {featureData.map((features) => (
                        <Col key={features.id} lg={4} md={6} sm={12} xs={12}
                            className={`cardfeature ${features.id === 3 ? 'benefit-card' : ''}`}
                        >
                            <FeatureCard features={features} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default CoreFeatures;
