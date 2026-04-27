import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import bgImg from '../../../assets/home_bg.webp';
import plateImg from '../../../assets/plate.webp';
import PrimaryButton from '../../../components/ui/Button1/Button1';

const plateVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 120,
        scale: 0.9,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: 'spring',
            stiffness: 120,
            damping: 16,
        },
    },
    exit: {
        opacity: 0,
        y: 80,
        scale: 0.95,
        transition: { duration: 0.4 },
    },
};

const contentVariants: Variants = {
    hidden: {
        opacity: 0,
        x: 60,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
    exit: {
        opacity: 0,
        x: 40,
        transition: { duration: 0.4 },
    },
};

const WhatWeOffer: React.FC = () => {
    const sectionRef = useRef<HTMLElement | null>(null);

    const inView = useInView(sectionRef, {
        once: false,
        amount: 0.4,
    });

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden py-16 lg:min-h-screen lg:py-0"
            aria-label="What we offer"
            style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* ================= MOBILE PROFESSIONAL ANIMATION ================= */}
            <div className="lg:hidden absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                {/* Glow Orb */}
                <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{
                        scale: [0.8, 1.1, 0.9, 1],
                        opacity: [0.3, 0.6, 0.4, 0.5],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="
                        w-[260px]
                        h-[260px]
                        rounded-full
                        bg-gradient-to-r
                        from-teal-400
                        via-cyan-500
                        to-emerald-500
                        blur-3xl
                    "
                />

                {/* Ring */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.15, 0.35, 0.15],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="
                        absolute
                        w-[320px]
                        h-[320px]
                        rounded-full
                        border
                        border-teal-400/30
                    "
                />
            </div>

            {/* ================= DESKTOP PLATE IMAGE ================= */}
            <motion.div
                variants={plateVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'exit'}
                className="
                    hidden lg:block
                    absolute
                    left-0
                    bottom-0
                    z-10
                "
            >
                <img
                    src={plateImg}
                    alt="Healthy Plate"
                    className="
                        lg:h-[90vh]
                        w-auto
                        object-contain
                        drop-shadow-2xl
                    "
                />
            </motion.div>

            {/* ================= MAIN CONTENT ================= */}
            <div className="relative z-20 flex items-center justify-center lg:min-h-screen">
                {/* Spacer for desktop image */}
                <div className="hidden lg:block w-1/2" />

                {/* Content */}
                <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'exit'}
                    className="
                        w-full
                        lg:w-1/2
                        px-6
                        sm:px-10
                        lg:px-20
                        text-center
                        lg:text-left
                    "
                >
                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="
                            font-heading
                            font-extrabold
                            text-4xl
                            sm:text-5xl
                            md:text-6xl
                            lg:text-7xl
                            leading-tight
                            bg-gradient-to-r
                            from-[#1c6363]
                            via-teal-400
                            to-gray-400
                            bg-clip-text
                            text-transparent
                        "
                    >
                        What We <br /> Offer
                    </motion.h1>

                    {/* Description */}
                    <div className="mt-6">
                        <p
                            className="
                            font-body
                            text-gray-200
                            text-base
                            sm:text-lg
                            md:text-xl
                        "
                        >
                            We bring <strong>premium nutrition meals</strong> crafted for gym-goers, fitness lovers, and
                            anyone who values a strong, healthy lifestyle.
                        </p>

                        <p
                            className="
                            font-body
                            text-gray-300
                            font-semibold
                            mt-4
                            text-sm
                            md:text-base
                        "
                        >
                            Fuel your workout. Recharge your body.
                            <span className="font-bold"> Own your health.</span>
                        </p>
                    </div>

                    {/* Button */}
                    <div
                        className="
                        mt-8
                        lg:mt-12
                        flex
                        justify-center
                        lg:justify-start
                    "
                    >
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
