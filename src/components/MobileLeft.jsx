import { MobileEllipsLeft } from '@/utils';
import Image from 'next/image';
import { Col, Container, Row } from 'react-bootstrap';

const MobileLeft = ({ mobileTitle, mobleTitlespan, mobiledescription, mobileImg }) => {
    return (
        <section className='py-[80px] relative'>
            <Image src={MobileEllipsLeft} alt='mood' className='ellipsleft-img' />
            <Container className='py-[60px]'>
                <Row >
                    <Col lg={12} md={12} xs={12} className='flex flex-col relative description-part gap-3'>
                        <Image src={mobileImg} alt='mood' className='mobileleft-img hover:scale-105 transition-all ease-in-3s' />
                        <div className='mble-left-description flex flex-col py-[60px] justify-center gap-3 rounded-[18px] bg-[rgba(217,_217,_217,_0.10)] [box-shadow:26.233px_-26.233px_26.233px_0px_rgba(165,_165,_165,_0.10)_inset,_-26.233px_26.233px_26.233px_0px_rgba(255,_255,_255,_0.10)_inset] backdrop-filter backdrop-blur-[26.233333587646484px]'>
                            <h1 className='text-[#1E1E25] text-[32px] font-bold'>
                                {mobileTitle} <span className='text-[#8BC34A]'>{mobleTitlespan}</span>
                            </h1>
                            <p className='text-[#4F4F4F] text-[20px] leading-[35px]'>
                                {mobiledescription}
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default MobileLeft;
