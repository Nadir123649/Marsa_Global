import { Container } from 'react-bootstrap'

const PatientConsent = () => {
    return (
        <section className='mt-[110px]'>
            <Container>
                <h1 className='text-[#8BC34A] text-[48px] font-bold mt-[32px] mb-[32px]'>Patient Consent <span className='text-[#494949]'>Disclaimer</span></h1>
                <div className='custom-border py-[32px]'>
                    <h2 className='font-semibold text-[24px]'>Effective Date: <span className='text-[#8BC34A] font-medium'> January 23, 2025</span> </h2>
                </div>
                <div className='py-[32px]'>
                    <p className='text-[24px] text-[#494949] leading-[35px]'>Welcome to Cigma! Your privacy is important to us. This Privacy Policy and Patient Consent Disclaimer outlines how we collect, use, disclose, and protect your information while using our mobile application (“App”) or website (“Services”). By using our Services, you consent to the practices described in this Privacy Policy.</p>
                </div>

                {/* 1- Use of AI-Powered Services */}
                <div className='custom-border py-[32px]'>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] mb-[24px]'>1- Use of AI-Powered Services</h2>
                    <p className='text-[#4E4E4E] text-[24px] leading-[37px] pb-0'>By using this app, you acknowledge that its primary features are powered by artificial
                        intelligence (AI). The AI provides tools, resources, and insights to support mental well-being but
                        is not a substitute for professional medical advice or therapy.
                    </p>
                </div>
                {/* 2- Community Support */}
                <div className='custom-border py-[32px]  '>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] mb-[24px]'>2- Community Support</h2>
                    <p className='text-[#4E4E4E] text-[24px]  leading-[37px] pb-0'>The app includes a community support feature designed to foster peer engagement. While we
                        moderate content, user interactions are not monitored in real time and should not be considered a
                        professional service
                    </p>
                </div>
                {/* 3- Escalation to Licensed Professionals*/}
                <div className='custom-border py-[32px]'>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] mb-[24px]'>3- Escalation to Licensed Professionals</h2>
                    <p className='text-[#4E4E4E] text-[24px] font-medium '>The app has defined escalation policies:</p>
                    <ul className='info-list flex flex-col gap-[14px] list-disc '>
                        <li className=''>
                            <p className='text-[#4E4E4E] text-[24px]  leading-[35px]'>In cases where AI algorithms detect risk signals (e.g., potential harm to self or others), the case may be escalated to a licensed professional.
                            </p>
                        </li>
                        <li>
                            <p className='text-[#4E4E4E] text-[24px]  leading-[30px]'>You may also manually request escalation if you feel additional support is needed
                            </p>
                        </li>
                    </ul>
                </div>
                {/*4- Limitations and Responsibilities*/}
                <div className='custom-border py-[32px]  '>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] mb-[24px]'>4- Limitations and Responsibilities</h2>
                    <p className='text-[#4E4E4E] text-[24px] font-medium'>The app has defined escalation policies:</p>
                    <ul className='info-list flex flex-col gap-[14px] list-disc'>
                        <li className=''>
                            <p className='text-[#4E4E4E] text-[24px] leading-[35px]'>He app does not diagnose conditions, provide medical treatment, or replace the need for consultations with licensed professionals
                            </p>
                        </li>
                        <li>
                            <p className='text-[#4E4E4E] text-[24px] leading-[30px]'>You are responsible for providing accurate and complete information to ensure appropriate support                            </p>
                        </li>
                    </ul>
                </div>
                {/* 5- Emergency Situations */}
                <div className='custom-border py-[32px]  '>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] mb-[24px]'>5- Emergency Situations</h2>
                    <p className='text-[#4E4E4E] text-[24px] pt-[0px] leading-[37px]'>The app is not intended for use in emergency situations. If you are in crisis or need immediate
                        assistance, please contact local emergency services or a crisis hotline in your area.
                    </p>
                </div>
                {/*6- Consent to Participate*/}
                <div className='custom-border py-[32px] mb-[100px]'>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] mb-[24px]'>6- Consent to Participate</h2>
                    <p className='text-[#4E4E4E] text-[24px] font-medium pt-[0px]'>By creating an account and using the app, you consent to:</p>
                    <ul className='info-list flex flex-col gap-[14px] list-disc'>
                        <li className=''>
                            <p className='text-[#4E4E4E] text-[24px] leading-[35px]'>The collection, use, and sharing of your data as described in this Privacy Policy.</p>
                        </li>
                        <li>
                            <p className='text-[#4E4E4E] text-[24px] leading-[30px]'>AI analysis of your input data to deliver personalized mental health support.</p>
                        </li>
                        <li>
                            <p className='text-[#4E4E4E] text-[24px] leading-[30px]'>Potential escalation to licensed professionals if deemed necessary.</p>
                        </li>
                    </ul>
                </div>
            </Container>
        </section>
    )
}
export default PatientConsent