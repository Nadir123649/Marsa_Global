import React from 'react';
import { Container } from 'react-bootstrap';

const BannerLanding = ({ title, subtitle, className, style }) => {
    return (
        <section className='mt-[115px]'>
            <Container style={{ backgroundImage: `url(${style.src})` }} className={className ? className : 'banner-container flex flex-col justify-end'}>
                <div className='pl-[60px] mb-[46px]'>
                    <h1 className='text-white text-[64px] font-[700] leading-normal not-italic'>
                        {title}&nbsp;{subtitle && <span className='text-[#8BC34A]'>{subtitle}</span>}
                    </h1>
                </div>
            </Container>
        </section>
    );
}

export default BannerLanding;
