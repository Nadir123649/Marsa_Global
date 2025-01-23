import { featureData } from '@/constants';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FeatureCard from './FeatureCard';

const CoreFeatures = () => {
    return (
        <section className='my-[60px]'>
            <Container className='p-0'>
                <Row>
                    {featureData.map((features) => (
                        <Col key={features.id} lg={4} md={6} sm={6} xs={6}
                            className={features.id === 3 ? 'benefit-card' : ''}>
                            <FeatureCard features={features} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default CoreFeatures;
