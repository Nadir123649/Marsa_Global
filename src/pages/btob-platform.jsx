import BannerLanding from '@/components/BannerLanding';
import CorporateLeft from '@/components/CorporateLeft';
import Layout from '@/components/layout';
import React from 'react';

const BtwobPlatform = () => {
    return (
        <Layout showContactForm={true}>
            <BannerLanding title="Corporate" subtitle="Care" />

            <CorporateLeft
                title="Peer-to-Peer"
                subtitle="Messaging"
                description="Foster safe and real-time connections among team members to build a supportive work environment."
                boldDescription="Boost Productivity:"
                simpleDescription="A mentally healthy workforce is more focused, creative, and productive." />
            <CorporateLeft
                title="Guided"
                subtitle="Journaling"
                description="Encourage self-discovery and emotional expression with structured journaling prompts."
                boldDescription="Strengthen Culture: "
                simpleDescription="Show your team that you care about their well-being, fostering loyalty and engagement." />


        </Layout>
    );
}

export default BtwobPlatform;
