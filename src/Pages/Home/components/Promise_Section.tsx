// import { Droplet, Award, Hand, Clock } from 'lucide-react';
// import promiseImg from '../../../assets/promiseImg3.jpg';

// const PromiseSection = () => {
//     const features = [
//         {
//             icon: <Droplet className="w-8 h-8" />,
//             title: 'Fresh. Handpicked. Daily.',
//             description:
//                 'We bring you only the finest quality ingredients—sourced daily to nourish your body with pure flavors and essential nutrients.',
//         },
//         {
//             icon: <Award className="w-8 h-8" />,
//             title: 'Premium Goodness In Every Bite',
//             description:
//                 'From farm-fresh veggies to nutrient-rich superfoods, we ensure top-notch quality that satisfies your taste buds, nourishes your body, and delights with every mouthful.',
//         },
//         {
//             icon: <Hand className="w-8 h-8" />,
//             title: 'Clean, Fresh & Fast',
//             description:
//                 'Crafted in a hygienic, chef-supervised kitchen, every meal combines wholesome ingredients with vibrant flavors—showing that clean eating and great taste go hand in hand.',
//         },
//         {
//             icon: <Clock className="w-8 h-8" />,
//             title: 'Quick, Wholesome, Delicious',
//             description:
//                 'Enjoy speedy service without sacrificing flavor or nutrition—because eating well should never mean waiting long.',
//         },
//     ];

//     return (
//         <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 <div className="grid lg:grid-cols-2 gap-12 items-center">
//                     {/* Left side - Content */}
//                     <div className="ml-12">
//                         <h3 className="text-[#66b2b2] text-sm font-semibold tracking-wider uppercase mb-4">OUR PROMISE</h3>
//                         <h2 className="text-4xl md:text-5xl font-bold mb-12">Hygienic, Fresh & Fast</h2>

//                         <div className="grid sm:grid-cols-2 gap-8">
//                             {features.map((feature, index) => (
//                                 <div key={index} className="space-y-3">
//                                     <div className="text-[#66b2b2]">{feature.icon}</div>
//                                     <h4 className="text-lg font-semibold">{feature.title}</h4>
//                                     <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                     {/* Right side - Image */}
//                     <div className="flex justify-center lg:justify-end">
//                         <img
//                             src={promiseImg}
//                             alt="Promise Section Image"
//                             className="w-full max-w-md rounded-2xl object-cover shadow-xl"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PromiseSection;


// import { Droplet, Award, Hand, Clock } from 'lucide-react';
// import { motion } from 'framer-motion';
// import promiseImg from '../../../assets/promiseImg2.jpg';

// const PromiseSection = () => {
//     const features = [
//         {
//             icon: <Droplet className="w-8 h-8" />,
//             title: 'Fresh. Handpicked. Daily.',
//             description:
//                 'We bring you only the finest quality ingredients—sourced daily to nourish your body with pure flavors and essential nutrients.',
//         },
//         {
//             icon: <Award className="w-8 h-8" />,
//             title: 'Premium Goodness In Every Bite',
//             description:
//                 'From farm-fresh veggies to nutrient-rich superfoods, we ensure top-notch quality that satisfies your taste buds, nourishes your body, and delights with every mouthful.',
//         },
//         {
//             icon: <Hand className="w-8 h-8" />,
//             title: 'Clean, Fresh & Fast',
//             description:
//                 'Crafted in a hygienic, chef-supervised kitchen, every meal combines wholesome ingredients with vibrant flavors—showing that clean eating and great taste go hand in hand.',
//         },
//         {
//             icon: <Clock className="w-8 h-8" />,
//             title: 'Quick, Wholesome, Delicious',
//             description:
//                 'Enjoy speedy service without sacrificing flavor or nutrition—because eating well should never mean waiting long.',
//         },
//     ];

//     return (
//         <div className="min-h-screen bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-7xl mx-auto">
//                 <div className="grid lg:grid-cols-2 gap-12 items-center">
//                     {/* LEFT CONTENT - Fade from Left */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -60 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8, ease: 'easeOut' }}
//                         viewport={{ once: true }}
//                         className="ml-12 h-full"
//                     >
//                         <h3 className="text-[#66b2b2] text-sm font-semibold tracking-wider uppercase mb-4">OUR PROMISE</h3>
//                         <h2 className="text-4xl md:text-5xl font-bold mb-12">Hygienic, Fresh & Fast</h2>

//                         <div className="grid sm:grid-cols-2 gap-8">
//                             {features.map((feature, index) => (
//                                 <div key={index} className="space-y-3">
//                                     <div className="text-[#66b2b2]">{feature.icon}</div>
//                                     <h4 className="text-lg font-semibold">{feature.title}</h4>
//                                     <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
//                                 </div>
//                             ))}
//                         </div>
//                     </motion.div>

//                     {/* RIGHT IMAGE - Fade from Right */}
//                     <motion.div
//                         initial={{ opacity: 0, x: 60 }}
//                         whileInView={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.8, ease: 'easeOut' }}
//                         viewport={{ once: true }}
//                         className="flex justify-center lg:justify-end h-full"
//                     >
//                         <img
//                             src={promiseImg}
//                             alt="Promise Section Image"
//                             className="w-full h-full max-w-md rounded-2xl object-cover shadow-xl"
//                         />
//                     </motion.div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default PromiseSection;

import { useRef } from 'react';
import { Droplet, Award, Hand, Clock } from 'lucide-react';
import { motion, useInView, type Variants } from 'framer-motion';
import promiseImg from '../../../assets/promiseImg2.jpg';
import bgPromise from '../../../assets/bg-promise.png';

const leftVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { opacity: 0, x: -30 },
};

const rightVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    exit: { opacity: 0, x: 30 },
};

const PromiseSection = () => {
    const sectionRef = useRef<HTMLElement | null>(null);
    const inView = useInView(sectionRef, { once: false, amount: 0.5 });

    const features = [
        {
            icon: <Droplet className="w-8 h-8" />,
            title: 'Fresh. Handpicked. Daily.',
            description:
                'We bring you only the finest quality ingredients—sourced daily to nourish your body with pure flavors and essential nutrients.',
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: 'Premium Goodness In Every Bite',
            description:
                'From farm-fresh veggies to nutrient-rich superfoods, we ensure top-notch quality that satisfies your taste buds.',
        },
        {
            icon: <Hand className="w-8 h-8" />,
            title: 'Clean, Fresh & Fast',
            description: 'Crafted in a hygienic, chef-supervised kitchen with wholesome ingredients and vibrant flavors.',
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: 'Quick, Wholesome, Delicious',
            description: 'Enjoy speedy service without sacrificing flavor or nutrition.',
        },
    ];

    return (
        <section
            ref={sectionRef}
            className="w-full max-w-full overflow-x-hidden py-16 px-4 sm:px-6 lg:px-8"
            style={{
                backgroundImage: `url(${bgPromise})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            aria-label="Our promise"
        >
            <div className="max-w-7xl mx-auto overflow-x-hidden">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT CONTENT */}
                    <div className="overflow-hidden">
                        <motion.div
                            variants={leftVariants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'exit'}
                            className="text-center lg:text-left"
                        >
                            <h3 className="text-[#5fb8a6] font-heading text-lg font-semibold tracking-wider uppercase mb-4">
                                OUR PROMISE
                            </h3>

                            <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#006666] font-body font-bold mb-12">
                                Hygienic, Fresh & Fast
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-8">
                                {features.map((feature, index) => (
                                    <div key={index} className="space-y-3">
                                        <div className="text-[#66b2b2]">{feature.icon}</div>
                                        <h4 className="text-lg font-semibold">{feature.title}</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="overflow-hidden flex justify-center lg:justify-end">
                        <motion.img
                            variants={rightVariants}
                            initial="hidden"
                            animate={inView ? 'visible' : 'exit'}
                            src={promiseImg}
                            alt="Promise Section Image"
                            className="w-full max-w-md rounded-2xl object-contain shadow-xl"
                            whileHover={{ scale: 1.02 }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromiseSection;
