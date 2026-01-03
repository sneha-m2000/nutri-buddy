// import React, { useRef } from 'react';
// import { motion, useInView, type Variants } from 'framer-motion';
// import bgImg from '../../../assets/home_bg.jpg';
// import plateImg from '../../../assets/plate.png';
// import PrimaryButton from '../../../components/ui/Button1/Button1';

// const plateVariants: Variants = {
//     hidden: { opacity: 0, y: 200, scale: 0.9 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: {
//             type: 'spring',
//             stiffness: 110,
//             damping: 14,
//             mass: 1,
//         },
//     },
//     exit: { opacity: 0, y: 120, scale: 0.95, transition: { duration: 0.5 } },
// };

// const contentVariants: Variants = {
//     hidden: { opacity: 0, x: 60 },
//     visible: {
//         opacity: 1,
//         x: 0,
//         transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
//     },
//     exit: { opacity: 0, x: 40, transition: { duration: 0.4 } },
// };

// const WhatWeOffer: React.FC = () => {
//     // observe the whole section just like your PromiseSection
//     const sectionRef = useRef<HTMLElement | null>(null);
//     // amount ~0.45 means ~45% of the section must be in view to trigger
//     const inView = useInView(sectionRef, { once: false, amount: 0.45 });

//     return (
//         <section
//             ref={sectionRef}
//             className="relative w-full min-h-screen overflow-hidden"
//             aria-label="What we offer"
//             style={{
//                 backgroundImage: `url(${bgImg})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 backgroundRepeat: 'no-repeat',
//             }}
//         >
//             {/* overlay */}
//             <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.45)', zIndex: 0 }} aria-hidden />

//             {/* Plate image (left) - motion.img can be used but motion.div wrapping <img> keeps semantics */}
//             <motion.div
//                 variants={plateVariants}
//                 initial="hidden"
//                 animate={inView ? 'visible' : 'exit'}
//                 className="absolute left-0 bottom-0 z-10"
//                 style={{ willChange: 'transform, opacity' }}
//             >
//                 <img src={plateImg} alt="Healthy Plate" className="h-[90vh] w-auto object-contain drop-shadow-2xl" />
//             </motion.div>

//             {/* Content (right) */}
//             <div className="relative z-20 flex items-center min-h-screen">
//                 <div className="hidden lg:block w-[48vw]" />

//                 <motion.div
//                     variants={contentVariants}
//                     initial="hidden"
//                     animate={inView ? 'visible' : 'exit'}
//                     className="px-8 lg:px-20 w-full lg:w-[50%] text-[#306c6c]"
//                     style={{ willChange: 'transform, opacity' }}
//                 >
//                     <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg">
//                         What We <br /> Offer
//                     </h1>

//                     <p className="font-body text-gray-200 mt-6 text-base md:text-lg leading-relaxed font-light drop-shadow-md max-w-2xl">
//                         We bring <strong>premium nutrition meals</strong> crafted for gym-goers, fitness lovers, and anyone
//                         who values a strong, healthy lifestyle...
//                     </p>

//                     <p className="font-body text-gray-300 font-bold mt-4 text-sm md:text-base opacity-90">
//                         Fuel your workout. Recharge your body. <span className="font-bold">Own your health.</span>
//                     </p>

//                     <div className="mt-6 ml-[-12px]">
//                         <PrimaryButton onClick={() => console.log('clicked')} variant="v12">
//                             Explore Nutrition Plans
//                         </PrimaryButton>
//                     </div>
//                 </motion.div>
//             </div>
//         </section>
//     );
// };

// export default WhatWeOffer;

// import React, { useRef } from 'react';
// import { motion, useInView, type Variants } from 'framer-motion';
// import bgImg from '../../../assets/home_bg.jpg';
// import plateImg from '../../../assets/plate.png';
// import PrimaryButton from '../../../components/ui/Button1/Button1';

// const plateVariants: Variants = {
//     hidden: { opacity: 0, y: 120, scale: 0.9 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         transition: {
//             type: 'spring',
//             stiffness: 100,
//             damping: 16,
//         },
//     },
//     exit: { opacity: 0, y: 80, scale: 0.95 },
// };

// const contentVariants: Variants = {
//     hidden: { opacity: 0, y: 40 },
//     visible: {
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.6, ease: 'easeOut' },
//     },
//     exit: { opacity: 0, y: 30 },
// };

// const WhatWeOffer: React.FC = () => {
//     const sectionRef = useRef<HTMLElement | null>(null);
//     const inView = useInView(sectionRef, { once: false, amount: 0.4 });

//     return (
//         <section
//             ref={sectionRef}
//             className="relative w-full min-h-screen overflow-hidden"
//             style={{
//                 backgroundImage: `url(${bgImg})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//             }}
//         >
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/50 z-0" />

//             {/* Layout Wrapper */}
//             <div className="relative z-10 flex flex-col lg:flex-row min-h-screen items-center">
//                 {/* Plate Image */}
//                 <motion.div
//                     variants={plateVariants}
//                     initial="hidden"
//                     animate={inView ? 'visible' : 'exit'}
//                     className="
//                         w-full lg:w-1/2 
//                         flex justify-center lg:justify-start 
//                         items-end lg:items-center
//                         px-6 lg:px-0
//                         mt-16 lg:mt-0
//                     "
//                 >
//                     <img
//                         src={plateImg}
//                         alt="Healthy Plate"
//                         className="
//                             w-[70%] sm:w-[60%] md:w-[50%]
//                             lg:w-auto lg:h-[85vh]
//                             object-contain
//                             drop-shadow-2xl
//                         "
//                     />
//                 </motion.div>

//                 {/* Content */}
//                 <motion.div
//                     variants={contentVariants}
//                     initial="hidden"
//                     animate={inView ? 'visible' : 'exit'}
//                     className="
//                         w-full lg:w-1/2
//                         px-6 sm:px-10 lg:px-20
//                         text-center lg:text-left
//                         pb-16 lg:pb-0
//                     "
//                 >
//                     <h1
//                         className="
//                         font-heading font-extrabold
//                         text-4xl sm:text-5xl md:text-6xl lg:text-7xl
//                         leading-tight
//                         text-[#9ee3e3]
//                         drop-shadow-lg
//                     "
//                     >
//                         What We <br className="hidden sm:block" /> Offer
//                     </h1>

//                     <p
//                         className="
//                         mt-6
//                         text-sm sm:text-base md:text-lg
//                         text-gray-200
//                         leading-relaxed
//                         max-w-xl mx-auto lg:mx-0
//                     "
//                     >
//                         We bring <strong>premium nutrition meals</strong> crafted for gym-goers, fitness lovers, and anyone
//                         who values a strong, healthy lifestyle.
//                     </p>

//                     <p className="mt-4 text-sm sm:text-base font-semibold text-gray-300">
//                         Fuel your workout. Recharge your body. <br className="sm:hidden" />
//                         <span className="text-white">Own your health.</span>
//                     </p>

//                     <div className="mt-8 flex justify-center lg:justify-start">
//                         <PrimaryButton onClick={() => console.log('clicked')} variant="v12">
//                             Explore Nutrition Plans
//                         </PrimaryButton>
//                     </div>
//                 </motion.div>
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
    hidden: { opacity: 0, y: 120, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 110,
            damping: 14,
        },
    },
    exit: { opacity: 0, y: 80, scale: 0.95 },
};

const contentVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
    },
    exit: { opacity: 0, x: 30 },
};

const WhatWeOffer: React.FC = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const inView = useInView(sectionRef, { once: false, amount: 0.45 });

    return (
        <section
            ref={sectionRef}
            className="relative w-full  overflow-hidden"
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-0" />

            {/* Plate – ALWAYS bottom-left */}
            <motion.div
                variants={plateVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'exit'}
                className="
                    absolute bottom-0 left-0 z-10
                    pointer-events-none
                "
            >
                <img
                    src={plateImg}
                    alt="Healthy Plate"
                    className="
                        object-contain drop-shadow-2xl
                        h-[45vh]
                        sm:h-[55vh]
                        md:h-[65vh]
                        lg:h-[85vh]
                    "
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 flex items-start min-h-[100vh] lg:min-h-screen">
                {/* Spacer so text never overlaps plate */}
                {/* <div className="w-[35vw] hidden lg:block" /> */}

                <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'exit'}
                    className="
                        w-full lg:w-[55%]
                        px-6 sm:px-10 lg:px-20
                        text-center lg:text-left
                    "
                >
                    <h1
                        className="
                        font-heading font-extrabold
                        text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                        leading-tight
                        pt-12
                        bg-gradient-to-r
                        from-gray-400
                        to-gray-400
                        via-[#1c6363]
                        bg-clip-text
                        text-transparent
                        drop-shadow-lg
                    "
                    >
                        What We <br /> Offer
                    </h1>

                    <p
                        className="
                        mt-6
                        text-sm sm:text-lg md:text-lg
                        text-gray-200
                        leading-relaxed font-body
                        max-w-xl mx-auto lg:mx-0
                    "
                    >
                        We bring <span className="text-gray-300  text-lg font-bold font-body">premium nutrition meals</span>{' '}
                        crafted for gym-goers, fitness lovers, and anyone who values a strong, healthy lifestyle.
                    </p>

                    <p className="mt-4 text-sm sm:text-base font-semibold text-gray-300 italic">
                        Fuel your workout. Recharge your body. <span className="text-gray-300">Own your health.</span>
                    </p>

                    <div className="flex justify-center lg:justify-start">
                        <div className="scale-75 sm:scale-85 md:scale-90 lg:scale-100">
                            <PrimaryButton onClick={() => console.log('clicked')} variant="v12">
                                Explore Nutrition Plans
                            </PrimaryButton>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatWeOffer;
