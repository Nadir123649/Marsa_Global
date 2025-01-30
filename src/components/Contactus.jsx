
import { ContactBanner, GradientOne, GradientTwo } from '@/utils';
import Image from 'next/image';
import { Col, Container, Form, Row } from 'react-bootstrap';

const Contactus = () => {

    return (
        <section className="contact-form-section mb-[60px] mt-[60px] bg-center bg-no-repeat bg-cover">
            <div id='contact-us-form'>
                <Container className='contact-form bg-[#EEEEEE] rounded-[16px]'>
                    <Row>
                        <Col lg={6} md={12} xs={12}>
                            <div className="contact-form-content mt-[20px] md:mt-[30px]">
                                <h1 className='text-[40px] text-[#2D2D2D] font-bold not-italic capitalize mb-[20px]'>Let’s Reach New <span className='text-[#8BC34A]'>Heights</span>!</h1>
                                <p className='text-[24px] text-[#4C4C4C] not-italic font-normal max-w-full md:max-w-[532px] w-full leading-[34px] '>
                                    Book a call today and see
                                    where we can take you.
                                </p>
                                <div className='contact-details flex flex-col px-[10px] md:px-[0px] gap-4 mt-[30px] md:mt-[90px]'>
                                    <div className='contact-details-item relative flex gap-3 items-center text-[#2776EA]'>
                                        <Image className='gradient-img-two' src={GradientTwo} width={520} />
                                        <Image src={ContactBanner} width={520} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={12} xs={12}>
                            <Form className='contact-form-column'>
                                <Row className='space-y-5'>
                                    <Col lg={12} md={12} xs={12}>
                                        <Form.Group className='flex flex-col gap-1'>
                                            <Form.Label htmlFor='help' className='text-[#645555] text-[16px] md:text-[18px] font-medium not-italic'>
                                                How We Can Help You?
                                            </Form.Label>
                                            <input
                                                id='help'
                                                type="text"
                                                className='form-input placeholder:text-[#D2D2D2] rounded-[16px] border border-solid border-[#B7B7B7] bg-white  text-black p-[14px] text-[16px] md:text-[18px] not-italic font-normal'
                                                placeholder="Enter Text"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12} xs={12}>
                                        <Form.Group className='flex flex-col gap-1'>
                                            <Form.Label htmlFor='full-name' className='text-[#645555] text-[16px] md:text-[18px] font-medium not-italic'>First Name</Form.Label>
                                            <input
                                                id='full-name'
                                                type="text"
                                                className='form-input placeholder:text-[#D2D2D2] rounded-[16px] border border-solid border-[#B7B7B7] bg-white text-black p-[14px] text-[16px] md:text-[18px] not-italic font-normal'
                                                placeholder="Alexa David"
                                                maxLength={50}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12} xs={12}>
                                        <Form.Group className='flex flex-col gap-1'>
                                            <Form.Label htmlFor='email' className='text-[#645555] text-[16px] md:text-[18px] font-medium not-italic'>Last Name</Form.Label>
                                            <input
                                                id='email'
                                                type="text"
                                                className='form-input placeholder:text-[#D2D2D2] rounded-[16px] border border-solid bg-white  text-black border-[#B7B7B7] p-[14px] text-[16px] md:text-[18px] not-italic font-normal'
                                                placeholder="Alexadavid@email.com"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12} xs={12}>
                                        <Form.Group className='flex flex-col gap-1'>
                                            <Form.Label htmlFor='full-name' className='text-[#645555] text-[16px] md:text-[18px] font-medium not-italic'>Country</Form.Label>
                                            <input
                                                id='full-name'
                                                type="text"
                                                className='form-input placeholder:text-[#D2D2D2] rounded-[16px] border border-solid border-[#B7B7B7] bg-white text-black p-[14px] text-[16px] md:text-[18px] not-italic font-normal'
                                                placeholder="United States"
                                                maxLength={50}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6} md={12} xs={12}>
                                        <Form.Group className='flex flex-col gap-1'>
                                            <Form.Label htmlFor='full-name' className='text-[#645555] text-[16px] md:text-[18px] font-medium not-italic'>Phone<span className='text-[#FF9494]'>*</span> </Form.Label>
                                            <input
                                                id='full-name'
                                                type="phone"
                                                className='bg-[#FFFFFF59] placeholder:text-[#D2D2D2]  form-input rounded-[16px] border border-solid border-[#B7B7B7] bg-white text-black p-[14px] text-[16px] md:text-[18px] not-italic font-normal'
                                                placeholder="+00 111 2222222"
                                                maxLength={50}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} md={12} xs={12}>
                                        <Form.Group className='flex flex-col gap-1'>
                                            <Form.Label htmlFor='Message' className='form-input text-[#645555] text-[16px] md:text-[18px] font-medium not-italic'>Message</Form.Label>
                                            <textarea
                                                id="Message"
                                                className='form-input placeholder:text-[#D2D2D2] rounded-[16px] border border-solid border-[#B7B7B7] bg-white  text-black p-[14px] min-h-[140px] text-[16px] md:text-[18px] not-italic font-normal '
                                                placeholder='Message'></textarea>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} md={12} xs={12}>
                                        <Form.Group controlId="subscribe" className='gradient-parent flex  gap-3 items-center'>
                                            <Form.Check
                                                id='subscribe'
                                                type="checkbox"
                                                className="my-1 text-[#645555] text-[16px] md:text-[18px] font-medium not-italic custom-checkbox "
                                            />
                                            <label
                                                htmlFor="subscribe"
                                                className="mt-2 text-[#645555] text-[16px] md:text-[18px] font-medium not-italic "
                                            >
                                                Check here to subscribe for updates.
                                            </label>
                                            <Image className='gradient-img' src={GradientOne} width={520} />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={12} md={12} xs={12} className='flex justify-end mt-4'>
                                        <button aria-label="Load More" className='btn-submit text-white text-[16px] md:text-[18px] font-normal not-italic bg-[#8BC34A] max-w-[180px] w-full rounded-[16px] py-[13px] md:py-[16px] px-[10px] md:px-[24px] md:max-w-[180px] border border-solid border-[#B7B7B7]' type='submit'>
                                            Submit
                                        </button>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
}

export default Contactus;
