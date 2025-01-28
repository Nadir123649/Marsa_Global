import BlogsSlider from '@/components/BlogsSlider';
import FAQ from '@/components/FAQ';
import Layout from '@/components/layout';
import PodcastSlider from '@/components/PodcastSlider';
import RecommendedSlider from '@/components/RecommendedSlider';
import ResourcesHead from '@/components/ResourcesHead';
import BannerLanding from '@/components/BannerLanding';
const Resources = () => {

    return (
        <Layout showContactForm={true}>
            <BannerLanding
                title="Resources"
            />
            <ResourcesHead />
            <RecommendedSlider />
            <PodcastSlider />
            <BlogsSlider />
            <FAQ />
        </Layout>
    );
}
export default Resources;