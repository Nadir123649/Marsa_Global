import BannerLanding from '@/components/BannerLanding';
import HelpsCard from '@/components/HelpsCard';
import Layout from '@/components/layout';
import MobileLeft from '@/components/MobileLeft';
import MobileRight from '@/components/MobileRight';
import { BannerYourself, JournalingMobile, LibraryMobile, MobileSideLeft, ModelMobile, PeerMobile, PlatformFive, PlatformFour, PlatformOne, PlatformThree, PlatformTwo } from '@/utils';
import React from 'react';

const BtowoCPlatform = () => {
  return (
    <Layout showContactForm={true}>
      <BannerLanding style={BannerYourself} title="Empower" subtitle="Yourself" className="banner-btob flex flex-col justify-end" />
      <section className='pt-[60px] overflow-hidden '>
        <HelpsCard
          className="btoc-card"
          title="Why settle for"
          spantitle=" “just okay”"
          moretitle="when your mind can thrive?"
          description="Not every struggle is visible...but every struggle matters. At CIGMA, we understand that 
          well-being is personal, and sometimes, the biggest challenges are the ones we carry within. CIGMA is here to walk alongside you."
        />

        <MobileLeft
          mobileImg={PlatformOne}
          mobileTitle="AI-powered"
          mobleTitlespan="Chatbot"
          mobiledescription="Get instant support and information from our CIGMA AI chatbot, available 24/7 to answer your queries and guide you on your mental health journey. By continuously learning and adapting to user interactions, this state-of-the-art model ensures that users receive compassionate, relevant, and actionable advice on their well-being journey."
        />
        <MobileRight
          mobileImg={PlatformTwo}
          mobileTitle="Peer-to-Peer"
          mobleTitlespan="Communication Messaging"
          mobiledescription="Connect with friends or peers in real-time through secure connecting, fostering safe conversations and support. This feature fosters meaningful conversations in a safe space, promoting empathy, understanding, and shared experiences. Whether users seek advice, emotional support, or simply a listening ear, this messaging tool ensures they can reach out anytime without fear of judgment."
        />

        <MobileLeft
          mobileImg={PlatformThree}
          mobileTitle="Mood"
          mobleTitlespan="Tracking"
          mobiledescription="Monitor your emotions with easy-to-use mood tracking tools, helping you to recognize patterns and triggers for better mental health. By logging daily moods, users gain personalized insights into their cognitive state and emotional well-being. With consistent use, mood tracking helps build self-awareness and improve emotional regulation."
        />
        <MobileRight
          mobileImg={PlatformFour}
          mobileTitle="Guided "
          mobleTitlespan="Journaling"
          mobiledescription="Encourage self-discovery and emotional expression with structured journaling prompts. By engaging in regular journaling, users can gain deeper insights into their mental state, recognize behavioral patterns, and track personal growth. This guided approach ensures that even beginners can journal with ease, creating a safe space for self-reflection."
        />
        <MobileLeft
          mobileImg={PlatformFive}
          mobileTitle="Resource "
          mobleTitlespan="Library"
          mobiledescription="Access a wealth of mental health resources, including articles, videos, and tools to help you navigate your personal growth. From stress management and mindfulness, to coping strategies and emotional resilience; users can explore these resources at their own pace, gaining valuable insights to navigate personal growth and overcome mental health challenges. "
        />
      </section>
    </Layout>
  );
}

export default BtowoCPlatform;
