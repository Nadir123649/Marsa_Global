import { BgLeft, BgRight } from '@/utils'
import { Container } from 'react-bootstrap'
import Image from 'next/image'

const TermsServices = () => {
    return (
        <section>
            <Image src={BgLeft} alt='privacy' className='absolute left-0 top-[950px]' width={407} height={326} />
            <Image src={BgRight} alt='privacy' className='absolute right-0 top-[1700px]' width={407} height={326} />
            <Container>
                <h1 className='title-main  text-[#8BC34A] text-[48px] font-bold py-[32px]'>CIGMA<span className='text-[#494949]'>Terms of Service</span></h1>
                <div className='py-[32px]'>
                    <p className='text-[24px] text-[#494949] leading-[35px]'>These Terms of Service ("Terms") govern your access to and use of the CIGMA mobile application ("App") provided by CIGMA, a global mental health service provider ("we,"our," or "us"). By downloading, accessing, or using the CIGMA App, you agree to comply with these Terms. If you do not agree with these Terms, you may not use the App.</p>
                </div>

                {/* 1- Eligibility*/}
                <div className='custom-border py-[30px]  '>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] mb-[24px]'>1- Eligibility</h2>
                    <p className='text-[#4E4E4E] text-[24px]  leading-[37px]'>To use the CIGMA App, you must be at least 13 years of age or have the legal capacity to form a binding contract in your jurisdiction. By using the App, you confirm that you meet this age requirement and are legally eligible to use the App.
                    </p>
                </div>
                {/* 2- User Account*/}
                <div className='custom-border py-[32px]'>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] mb-[24px]'>2- User Account</h2>
                    <p className='text-[#4E4E4E] text-[24px] leading-[37px]'>To access certain features of the CIGMA App, you may be required to create an account. You are responsible for maintaining the confidentiality of your login information and for all activities under your account. You agree to provide accurate, current, and complete information when registering and to update it as necessary to keep it accurate.
                    </p>
                </div>
                {/* 3- Use of the CIGMA App*/}
                <div className='custom-border py-[32px]'>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] mb-[24px]'>3- Use of the CIGMA App</h2>
                    <p className='text-[#4E4E4E] text-[24px] leading-[37px]'>The CIGMA App is designed to provide mental health resources, including tools for self-assessment, stress management, emotional well-being, and AI-driven insights based on a rigorous medical knowledge base. You agree to use the App solely for personal and non-commercial purposes. You are prohibited from using the App for any unlawful or harmful activities, including but not limited to harassment, fraud, or any activities that violate local laws
                    </p>
                </div>
                {/* 4- Privacy and Safeguards*/}
                <div className='custom-border py-[32px]'>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] mb-[24px]'>4- Privacy and Safeguards</h2>
                    <p className='text-[#4E4E4E] text-[24px] leading-[37px]'>Your use of the CIGMA App is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal data. The App includes safeguards to ensure the security of sensitive health data and complies with relevant data protection laws (e.g., GDPR, HIPAA). By using the App, you consent to our data practices as described in the Privacy Policy.                    </p>
                </div>
                {/* 5- Intellectual Property*/}
                <div className='custom-border py-[32px]  '>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] mb-[24px]'>5- Intellectual Property</h2>
                    <p className='text-[#4E4E4E] text-[24px] leading-[37px]'>All content, features, and functionality within the CIGMA App, including text, graphics, logos, images, and software, are owned by CIGMA or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute any content without our prior written permission.</p>
                </div>

                {/* 6- User Content*/}
                <div className='custom-border py-[32px]'>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] mb-[24px]'>6- User Content</h2>
                    <p className='text-[#4E4E4E] text-[24px] leading-[37px]'>You may have the ability to submit content, including feedback, suggestions, and other communications, through the App. By submitting such content, you grant us a non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and distribute the content as we see fit, while respecting user privacy
                        and anonymity</p>
                </div>
                {/*7- Medical Disclaimer and AI Support*/}
                <div className='custom-border py-[32px]'>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] mb-[24px]'>7- Medical Disclaimer and AI Support</h2>
                    <p className='text-[#4E4E4E] text-[24px] leading-[37px]'>The CIGMA App is intended for informational and supportive purposes only and is not a substitute for professional medical or psychological advice. The AI-driven insights provided by the App are based on a medical knowledge base but are not intended to diagnose or treat medical conditions. Always seek
                        the advice of your doctor or a qualified mental health professional for any mental health concerns. We do not guarantee the accuracy or completeness of the content provided.</p>
                </div>
                {/*8- Limitation of Liability*/}
                <div className='custom-border py-[32px]'>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] mb-[24px]'>8- Limitation of Liability</h2>
                    <p className='text-[#4E4E4E] text-[24px] leading-[37px]'>To the maximum extent permitted by law, CIGMA shall not be liable for any damages arising from your use or inability to use the CIGMA App, including but not limited to direct, indirect, incidental, or consequential damages. Your use of the App is at your own risk. Safeguards are in place to minimize the risk of harm, including escalation to human moderators in critical cases.</p>
                </div>
                {/*9- Termination*/}
                <div className='custom-border py-[32px]'>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] mb-[24px]'>9- Termination</h2>
                    <p className='text-[#4E4E4E] text-[24px] leading-[37px]'>We reserve the right to suspend or terminate your access to the CIGMA App at our discretion, without notice, for any reason, including if you violate these Terms. Upon termination, you must cease all use of the App and delete any copies of the App from your devices</p>
                </div>
                {/*10- Modifications*/}
                <div className='custom-border py-[32px]'>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] mb-[24px]'>10- Modifications</h2>
                    <p className='text-[#4E4E4E] text-[24px] leading-[37px]'>We may update these Terms at any time. Any changes will be posted on this page, and the revised Terms will become effective when posted. We encourage you to review this page periodically to stay informed of any updates.</p>
                </div>
                {/*11- Governing Law*/}
                <div className='custom-border py-[32px]'>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] mb-[24px]'>11- Governing Law</h2>
                    <p className='text-[#4E4E4E] text-[24px] leading-[37px]'>These Terms will be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law principles</p>
                </div>
                {/*12- Contact Information*/}
                <div className='custom-border py-[32px]'>
                    <h2 className='font-bold text-[24px] text-[#8BC34A] mb-[24px]'>12- Contact Information</h2>
                    <p className='text-[#4E4E4E] text-[24px] leading-[37px]'>If you have any questions about these Terms or the CIGMA App, please contact us at lifecigma@gmail.com.</p>
                </div>
                {/*condition*/}
                <div className='py-[32px] mb-[100px]'>
                    <h2 className='font-bold text-[24px] text-[#4E4E4E] leading-[37px]'>By using the CIGMA App, you acknowledge that you have read, understood, and agree to these Terms of Service.</h2>
                </div>
            </Container>
        </section>
    )
}
export default TermsServices