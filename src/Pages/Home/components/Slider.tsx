import { useEffect, useState } from 'react';

// import your images
import ProteinPowerBowl from '../../../assets/protien power bowl.webp';
import greendetox from '../../../assets/green-detox.webp';
import grilledchickensalad from '../../../assets/grilled chicken salad.webp';
import salmon from '../../../assets/grilled-salmon-with-asparagus-greek-salad.webp';
import acai from '../../../assets/acai-dessert.webp';
import turkeywrap from '../../../assets/turkey wrap.webp';
import paneertandoori from '../../../assets/tandoori-paneer.webp';

const slides = [
    {
        image: ProteinPowerBowl,
        title: 'Fuel Your Body Right',
        desc: 'Healthy meals crafted for your lifestyle',
    },
    {
        image: greendetox,
        title: 'Detox & Refresh',
        desc: 'Clean eating starts here',
    },
    {
        image: grilledchickensalad,
        title: 'Protein Packed Meals',
        desc: 'Stay strong, stay energized',
    },
    {
        image: salmon,
        title: 'Premium Nutrition',
        desc: 'Fresh & balanced diet plans',
    },
    {
        image: acai,
        title: 'Guilt-Free Desserts',
        desc: 'Healthy can be tasty too',
    },
    {
        image: turkeywrap,
        title: 'Quick & Healthy',
        desc: 'Perfect meals on the go',
    },
    {
        image: paneertandoori,
        title: 'Desi Meets Healthy',
        desc: 'Traditional taste, modern nutrition',
    },
];

const HomeSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* SLIDES */}
            {slides.map((slide, index) => (
                <img
                    key={index}
                    src={slide.image}
                    alt="slide"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === current ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            ))}

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* INTRO CONTENT */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white z-10">
                <h1 className="text-3xl md:text-5xl font-bold mb-4">{slides[current].title}</h1>

                <p className="text-sm md:text-lg mb-6 max-w-xl">{slides[current].desc}</p>

                <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition">
                    Explore Menu
                </button>
            </div>

            {/* DOTS */}
            <div className="absolute bottom-5 w-full flex justify-center gap-2 z-10">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === current ? 'bg-white' : 'bg-gray-400'}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default HomeSlider;
