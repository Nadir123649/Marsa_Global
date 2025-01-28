import FAQ from '@/components/FAQ';
import Layout from '@/components/layout';
import RecommendedSlider from '@/components/RecommendedSlider';

const Resources = () => {

    return (
        <Layout showContactForm={true}>
            <RecommendedSlider/>
            <FAQ/>
        </Layout>
    );
}
export default Resources;