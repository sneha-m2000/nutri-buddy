import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight,Star } from 'lucide-react';

export default function TestimonialCarousel() {
    const [offset, setOffset] = useState<number>(0);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    // requestAnimationFrame returns a number id — type the ref accordingly
    const animationRef = useRef<number | null>(null);

    const testimonials = [
        {
            name: 'Anurag Kv',
            text: 'Absolutely loved the food! I had requested a small customization—replacing the usual carrot and beans with sweet potatoes—and they followed it perfectly.',
            rating: 5,
        },
        {
            name: 'Manjima Manoj',
            text: 'Healthy food, especially its good for people who takes diet plan and their quality and presentation of food is just amazing. calm ambience with feel good tracks ❤️ ✨',
            rating: 5,
        },
        {
            name: 'Sreekanthan Kn',
            text: 'We had our lunch from this newly started nutri-buddy restaurant. We liked and enjoyed the healthy food they supplied. They do not use processed items like maida.',
            rating: 5,
        },
        {
            name: 'Priya Sharma',
            text: 'The attention to detail in every dish is remarkable. Fresh ingredients, perfectly balanced flavors, and excellent service. Highly recommend!',
            rating: 5,
        },
        {
            name: 'Rahul Menon',
            text: "Best healthy food option in town! The staff is friendly and knowledgeable about nutrition. Every meal feels like it's made with care.",
            rating: 5,
        },
        {
            name: 'Anjali Nair',
            text: 'A wonderful dining experience! The food is not only healthy but also delicious. The ambiance is perfect for a relaxed meal.',
            rating: 5,
        },
    ];

    // Triple the testimonials for seamless loop
    const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

    useEffect(() => {
        let lastTimestamp = performance.now();

        const animate = (time: number) => {
            // Use time delta for smoother movement and frame-rate independence
            const delta = time - lastTimestamp;
            lastTimestamp = time;

            if (!isPaused) {
                setOffset((prev) => {
                    // move by 0.12 px per millisecond (approx 0.3 per frame at 60fps)
                    const increment = 0.12 * delta;
                    const newOffset = prev + increment;

                    // Reset when we've scrolled through one full set
                    const resetAfter = testimonials.length * 400;
                    if (newOffset >= resetAfter) {
                        return 0;
                    }
                    return newOffset;
                });
            }

            // store id
            animationRef.current = requestAnimationFrame(animate);
        };

        // start animation
        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current !== null) {
                cancelAnimationFrame(animationRef.current);
            }
            animationRef.current = null;
        };
        // include testimonials.length and isPaused as deps
    }, [isPaused, testimonials.length]);

    const handlePrevious = () => {
        setOffset((prev) => Math.max(0, prev - 400));
    };

    const handleNext = () => {
        setOffset((prev) => prev + 400);
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
            <div className="max-w-7xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-16">
                    <h3 className="text-[#5fb8a6] text-lg font-heading font-medium tracking-wider mb-3">
                        CUSTOMER TESTIMONIALS
                    </h3>
                    <h2 className="text-white font-body text-5xl font-bold">What our Customers Say?</h2>
                </div>

                {/* Carousel */}
                <div className="relative flex items-center gap-6">
                    {/* Left Arrow */}
                    <button
                        onClick={handlePrevious}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-[#5fb8a6] flex items-center justify-center text-[#5fb8a6] hover:bg-[#306c6c] hover:border-[#306c6c] hover:text-white transition-all duration-300 z-10"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Testimonial Cards Container */}
                    <div className="flex-1 overflow-hidden">
                        <div
                            className="flex gap-6 transition-transform duration-100 ease-linear"
                            style={{ transform: `translateX(-${offset}px)` }}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            {extendedTestimonials.map((testimonial, index) => (
                                <div
                                    key={index}
                                    className="bg-[#306c6c] rounded-2xl p-8 flex flex-col items-center text-center min-h-[320px] flex-shrink-0"
                                    style={{ width: '384px' }}
                                >
                                    <h4 className="text-black font-name text-2xl font-semibold mb-6">{testimonial.name}</h4>

                                    <p className="text-white font-body text-base leading-relaxed mb-6 flex-grow">
                                        {testimonial.text}
                                    </p>

                                    <div className="flex gap-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={handleNext}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-[#5fb8a6] flex items-center justify-center text-[#5fb8a6] hover:bg-[#306c6c] hover:border-[#306c6c] hover:text-white transition-all duration-300 z-10"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Info Text */}
                <div className="text-center mt-8">
                    <p className="text-gray-400 text-xs">Hover over cards to pause • Click arrows to navigate</p>
                </div>
            </div>
        </div>
    );
}
