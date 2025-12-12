// import React, { useEffect, useRef, useState } from 'react';
// import bgImg from '../../../assets/home_bg.jpg';
// import plateImg from '../../../assets/plate.png';
// import PrimaryButton from '../../../components/ui/Button1/Button1';

// const WhatWeOffer: React.FC = () => {
//     const [isVisible, setIsVisible] = useState<boolean>(false);
//     const sectionRef = useRef<HTMLElement>(null);
//     const observerRef = useRef<IntersectionObserver | null>(null);

//     useEffect(() => {
//         observerRef.current = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     // Trigger animation when section enters viewport
//                     if (entry.isIntersecting && !isVisible) {
//                         setIsVisible(true);
//                     }
//                 });
//             },
//             {
//                 threshold: 0.3, // Trigger when 30% of section is visible
//             }
//         );

//         if (sectionRef.current) {
//             observerRef.current.observe(sectionRef.current);
//         }

//         return () => {
//             if (observerRef.current) {
//                 observerRef.current.disconnect();
//             }
//         };
//     }, [isVisible]);

//     return (
//         <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
//             {/* Background image */}
//             <div
//                 className="absolute inset-0 w-full h-full bg-cover bg-center"
//                 style={{ backgroundImage: `url(${bgImg})`, zIndex: 0 }}
//             />

//             {/* Dark overlay */}
//             <div className="absolute inset-0 bg-black/45 z-5" />

//             {/* PLATE IMAGE — suddenly appears with springy jump */}
//             <div
//                 className="absolute left-0 bottom-0 z-10"
//                 style={{
//                     opacity: isVisible ? 1 : 0,
//                     transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(200px) scale(0.7)',
//                     transition: 'all 1.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
//                 }}
//             >
//                 <img src={plateImg} alt="Healthy Plate" className="h-[90vh] w-auto object-contain drop-shadow-2xl" />
//             </div>

//             {/* CONTENT */}
//             <div className="relative z-20 flex items-center h-full">
//                 <div className="hidden lg:block w-[48vw]" />

//                 <div className="px-8 lg:px-20 w-full lg:w-[50%] text-[#306c6c]">
//                     <h1 className=" font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg">
//                         What We <br /> Offer
//                     </h1>

//                     <p className=" font-body text-gray-200 mt-6 text-base md:text-lg leading-relaxed font-light drop-shadow-md max-w-2xl">
//                         We bring <strong>premium nutrition meals</strong> crafted for gym-goers, fitness lovers, and anyone
//                         who values a strong, healthy lifestyle...
//                     </p>

//                     <p className=" font-body text-gray-300 font-bold mt-4 text-sm md:text-base opacity-90">
//                         Fuel your workout. Recharge your body. <span className="font-bold">Own your health.</span>
//                     </p>

//                     <div className="mt-6 ml-[-12px]">
//                         <PrimaryButton onClick={() => console.log('clicked')} variant="v12">
//                             Explore Nutrition Plans
//                         </PrimaryButton>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default WhatWeOffer;


import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import bgImg from '../../../assets/home_bg.jpg';
import plateImg from '../../../assets/plate.png';
import PrimaryButton from '../../../components/ui/Button1/Button1';

const plateVariants: Variants = {
    hidden: { opacity: 0, y: 200, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 110,
            damping: 14,
            mass: 1,
        },
    },
    exit: { opacity: 0, y: 120, scale: 0.95, transition: { duration: 0.5 } },
};

const contentVariants: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { opacity: 0, x: 40, transition: { duration: 0.4 } },
};

const WhatWeOffer: React.FC = () => {
    // observe the whole section just like your PromiseSection
    const sectionRef = useRef<HTMLElement | null>(null);
    // amount ~0.45 means ~45% of the section must be in view to trigger
    const inView = useInView(sectionRef, { once: false, amount: 0.45 });

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-screen overflow-hidden"
            aria-label="What we offer"
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* overlay */}
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.45)', zIndex: 0 }} aria-hidden />

            {/* Plate image (left) - motion.img can be used but motion.div wrapping <img> keeps semantics */}
            <motion.div
                variants={plateVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'exit'}
                className="absolute left-0 bottom-0 z-10"
                style={{ willChange: 'transform, opacity' }}
            >
                <img src={plateImg} alt="Healthy Plate" className="h-[90vh] w-auto object-contain drop-shadow-2xl" />
            </motion.div>

            {/* Content (right) */}
            <div className="relative z-20 flex items-center min-h-screen">
                <div className="hidden lg:block w-[48vw]" />

                <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'exit'}
                    className="px-8 lg:px-20 w-full lg:w-[50%] text-[#306c6c]"
                    style={{ willChange: 'transform, opacity' }}
                >
                    <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg">
                        What We <br /> Offer
                    </h1>

                    <p className="font-body text-gray-200 mt-6 text-base md:text-lg leading-relaxed font-light drop-shadow-md max-w-2xl">
                        We bring <strong>premium nutrition meals</strong> crafted for gym-goers, fitness lovers, and anyone
                        who values a strong, healthy lifestyle...
                    </p>

                    <p className="font-body text-gray-300 font-bold mt-4 text-sm md:text-base opacity-90">
                        Fuel your workout. Recharge your body. <span className="font-bold">Own your health.</span>
                    </p>

                    <div className="mt-6 ml-[-12px]">
                        <PrimaryButton onClick={() => console.log('clicked')} variant="v12">
                            Explore Nutrition Plans
                        </PrimaryButton>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatWeOffer;
