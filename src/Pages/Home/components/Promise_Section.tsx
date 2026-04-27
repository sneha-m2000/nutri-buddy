import { useRef } from 'react';
import { Droplet, Award, Hand, Clock } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import promiseImg from '../../../assets/promiseImg2.webp';
import bgPromise from '../../../assets/bg-promise.webp';

const PromiseSection = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, amount: 0.2 });

    const features = [
        {
            icon: Droplet,
            title: 'Fresh. Handpicked. Daily.',
            description: 'Only the finest ingredients sourced daily for maximum freshness and nutrition.',
        },
        {
            icon: Award,
            title: 'Premium Quality',
            description: 'Every ingredient meets our highest standards of taste and purity.',
        },
        {
            icon: Hand,
            title: 'Hygienic Preparation',
            description: 'Prepared in a clean, chef-supervised kitchen you can trust.',
        },
        {
            icon: Clock,
            title: 'Fast & Reliable',
            description: 'Quick service without compromising freshness or quality.',
        },
    ];

    return (
        <section
            ref={ref}
            className="
                relative
                w-full
                py-14 sm:py-20 lg:py-24
                px-4 sm:px-6 lg:px-8
            "
            style={{
                backgroundImage: `url(${bgPromise})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="max-w-7xl mx-auto">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 sm:mb-14"
                >
                    <h3 className="text-[#5fb8a6] text-lg font-heading font-medium tracking-wider mb-3">OUR PROMISE</h3>

                    <h2 className="text-xs sm:text-xl md:text-xl text-[#006666] font-body font-bold italic mt-4">
                        Hygienic, Fresh & Fast
                    </h2>
                </motion.div>

                {/* MOBILE IMAGE FIRST */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6 }}
                    className="
                        mb-10
                        lg:hidden
                    "
                >
                    <img
                        src={promiseImg}
                        className="
                            w-full
                            max-w-md
                            mx-auto
                            rounded-2xl
                            shadow-xl
                        "
                    />
                </motion.div>

                {/* MAIN GRID */}
                <div
                    className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-10 lg:gap-16
                    items-center
                "
                >
                    {/* FEATURES */}
                    <div
                        className="
                        flex flex-col
                        gap-4 sm:gap-5
                    "
                    >
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: index * 0.1 }}
                                    className="
                                        flex
                                        items-start
                                        gap-4
                                        bg-white/5
                                        backdrop-blur-md
                                        border border-white/10
                                        rounded-xl
                                        p-4 sm:p-5
                                        hover:bg-white/10
                                        transition mt-4
                                    "
                                >
                                    {/* ICON */}
                                    <div
                                        className="
                                        bg-[#66b2b2]/20
                                        p-2
                                        rounded-lg
                                    "
                                    >
                                        <Icon className="w-5 h-5 text-[#66b2b2]" />
                                    </div>

                                    {/* TEXT */}
                                    <div>
                                        <h4
                                            className="
                                            font-semibold
                                            text-gray-200
                                            text-sm sm:text-base
                                        "
                                        >
                                            {feature.title}
                                        </h4>

                                        <p
                                            className="
                                            text-gray-400
                                            text-xs sm:text-sm
                                            mt-1
                                        "
                                        >
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* DESKTOP IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="
                            hidden lg:flex
                            justify-end
                        "
                    >
                        <img
                            src={promiseImg}
                            className="
                                w-full
                                max-w-lg
                                rounded-2xl
                                shadow-2xl
                            "
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PromiseSection;
