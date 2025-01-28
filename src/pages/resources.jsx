import BlogsSlider from '@/components/BlogsSlider';
import FAQ from '@/components/FAQ';
import Layout from '@/components/layout';
import PodcastSlider from '@/components/PodcastSlider';
import RecommendedSlider from '@/components/RecommendedSlider';
import ResourcesHead from '@/components/ResourcesHead';

const Resources = () => {

    return (
        <Layout showContactForm={true}>
            <ResourcesHead/>
            <RecommendedSlider/>
            <PodcastSlider/>
            <BlogsSlider/>
            <FAQ/>
        </Layout>
    );
}
export default Resources;