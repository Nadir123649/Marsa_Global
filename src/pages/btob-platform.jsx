import BannerLanding from '@/components/BannerLanding';
import CorporateLeft from '@/components/CorporateLeft';
import CorporateRight from '@/components/CorporateRight';
import HelpsCard from '@/components/HelpsCard';
import Layout from '@/components/layout';
import { BannerYourself, CareYourself } from '@/utils';
import React from 'react';

const BtwobPlatform = () => {
    return (
        <Layout showContactForm={true}>
            <BannerLanding style={CareYourself} title="Corporate" subtitle="Care" />
            <HelpsCard 
            className="btob-card"
                title="A"
                spantitle="healthy mind"
                moretitle="is a"
                morespan="healthy business"
                description="Prioritizing your wellbeing is not a weakness, it's a necessity for success. A healthy workforce is a productive workforce. CIGMA empowers your employees to thrive, leading to increased engagement and better business outcomes."
            />
            <CorporateLeft
                title="Peer-to-Peer"
                subtitle="Messaging"
                description="Foster safe and real-time connections among team members to build a supportive work environment."
                boldDescription="Boost Productivity:"
                simpleDescription="A mentally healthy workforce is more focused, creative, and productive." />
            <CorporateRight
                title="Mood"
                subtitle="Tracking"
                description="Empower employees to monitor their emotional well-being, recognize patterns, and take proactive steps to improve."
                simpleDescription="Prevent burnout and stress-related absenteeism by giving employees the tools they need to thrive." />
            <CorporateLeft
                title="Guided"
                subtitle="Journaling"
                description="Encourage self-discovery and emotional expression with structured journaling prompts."
                boldDescription="Strengthen Culture:"
                simpleDescription="Show your team that you care about their well-being, fostering loyalty and engagement." />
            <CorporateRight
                title="Resource"
                subtitle="Library"
                description="Equip your teams with expert articles, videos, and tools to support their personal growth."
                boldDescription="Personalized, Scalable, and Confidential Support:"
                simpleDescription="Our AI-driven platform tailors resources to individual needs, from stress management to guided therapy, ensuring support is accessible and stigma-free." />
        </Layout>
    );
}

export default BtwobPlatform;
