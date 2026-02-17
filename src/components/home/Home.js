import TechnologyStack from '../services/TecnologyStack';
import ClientSection from './ClientSection';
import ClutchReviewsSlider from './clutch-reviews-slider';
import CustomerFeedbackSection from './CustomerFeedbackSection';
import FeaturesServiceSection from './FeaturesServiceSection';
import HeroSection from './HeroSection';
import LatestNewsSection from './LatestNewsSection';
import OfferSection from './OfferSection';
import PortFolioSection from './PortFolioSection';

const Home = () => {
    return (
        <div className=''>
            {/* relative overflow-hidden */}
            <div className='absolute inset-0'>
                <div className='absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
                <div className='absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl' />
            </div>

            <div className='absolute inset-0 bg-[linear-gradient(to_right,#002a5708_1px,transparent_1px),linear-gradient(to_bottom,#002a5708_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]' />
            <HeroSection />
            <OfferSection ctaButton={true} />
            <FeaturesServiceSection />
            <TechnologyStack />
            {/* <GlobalSection /> */}
            <PortFolioSection main={false} />
            {/* <ServiceSection /> */}
            <ClientSection />
            <CustomerFeedbackSection />
            <ClutchReviewsSlider />
            <LatestNewsSection />
        </div>
    );
};

export default Home;
