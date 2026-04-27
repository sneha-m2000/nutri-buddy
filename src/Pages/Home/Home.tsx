import homeVideo from '../../assets/bg-vedio.webm';
import WhatWeOffer from '../Home/components/whatweoffer';
import BestsellerCarousel from './components/BestsellerCarousel';
import Footer from './components/Footer';
import PromiseSection from './components/Promise_Section';
import TestimonialCarousel from './components/Review';
const Home = () => {
    return (
        <>
            {/* HOME SECTION */}
            <section className="relative w-full h-screen overflow-hidden" style={{ zIndex: 1 }}>
                {/* BACKGROUND VIDEO */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ zIndex: 0 }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                >
                    <source src={homeVideo} type="video/mp4" />
                </video>
            </section>
            {/* CALLING THE WHAT WE OFFER SECTION */}
            <WhatWeOffer />
            {/* CALLING THE BEST SELLER CAROUSEL SECTION */}
            <BestsellerCarousel />
            <PromiseSection />
            <TestimonialCarousel />
            <Footer />
        </>
    );
};

export default Home;
