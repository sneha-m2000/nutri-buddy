import { useEffect, useState } from 'react';
import homeVideo from '../../assets/bg-vedio-small.webm';

import HomeSlider from './components/Slider';

import WhatWeOffer from '../Home/components/whatweoffer';
import BestsellerCarousel from './components/BestsellerCarousel';
import Footer from './components/Footer';
import PromiseSection from './components/Promise_Section';
import TestimonialCarousel from './components/Review';

const Home = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <section className="relative w-full h-screen overflow-hidden">
                {isMobile ? (
                    <HomeSlider />
                ) : (
                    <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
                        <source src={homeVideo} type="video/mp4" />
                    </video>
                )}
            </section>

            <WhatWeOffer />
            <BestsellerCarousel />
            <PromiseSection />
            <TestimonialCarousel />
            <Footer />
        </>
    );
};

export default Home;
