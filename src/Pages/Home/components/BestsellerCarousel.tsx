import React, { useEffect, useRef, useState } from 'react';
import bgImg from '../../../assets/bg.jpg';
import ProteinPowerBowl from '../../../assets/protien power bowl.jpg'
import greendetox from '../../../assets/green-detox.jpg'
import grilledchickensalad from '../../../assets/grilled chicken salad.jpg'
import salmon from '../../../assets/grilled-salmon-with-asparagus-greek-salad.jpg'
import acai from '../../../assets/acai-dessert.jpg'
import turkeywrap from '../../../assets/turkey wrap.jpg';
import paneertandoori from '../../../assets/tandoori-paneer.jpeg';

type FoodItem = {
    id: number;
    name: string;
    description: string;
    image: string;
    calories: string;
    protein: string;
};

const AUTOPLAY_INTERVAL = 3500;
const SWIPE_THRESHOLD = 60;
const TRANSITION = 'transform 300ms ease';

const FoodCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const [fadeDown, setFadeDown] = useState<boolean>(false); // For slide change animation
    const [isVisible, setIsVisible] = useState<boolean>(false); // For scroll/refresh animation
    const [loaded, setLoaded] = useState<boolean>(false); // Track initial load
    const sectionRef = useRef<HTMLDivElement>(null);

    const foodItems: FoodItem[] = [
        {
            id: 1,
            name: 'Protein Power Bowl',
            description: 'High protein quinoa bowl',
            image: ProteinPowerBowl,
            calories: '420 cal',
            protein: '32g',
        },
        {
            id: 2,
            name: 'Green Detox Smoothie',
            description: 'Kiwi, Green apple & Avocado blend',
            image: greendetox,
            calories: '180 cal',
            protein: '8g',
        },
        {
            id: 3,
            name: 'Grilled Chicken Salad',
            description: 'Fresh greens with lean protein',
            image: grilledchickensalad,
            calories: '350 cal',
            protein: '28g',
        },
        {
            id: 4,
            name: 'Salmon & Veggies',
            description: 'Omega-3 rich grilled salmon',
            image: salmon,
            calories: '480 cal',
            protein: '35g',
        },
        {
            id: 5,
            name: 'Acai Energy Bowl',
            description: 'Antioxidant-packed breakfast',
            image: acai,
            calories: '320 cal',
            protein: '12g',
        },
        {
            id: 6,
            name: 'Turkey Wrap',
            description: 'Whole grain with lean turkey',
            image: turkeywrap,
            calories: '380 cal',
            protein: '26g',
        },
        {
            id: 7,
            name: 'Tandoori-Paneer Platter',
            description: 'Fat Loss/Lean Meals',
            image: paneertandoori,
            calories: '240 cal',
            protein: '24g',
        },
    ];

    const getVisibleCards = () => {
        const cards: Array<FoodItem & { position: number }> = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % foodItems.length;
            cards.push({ ...foodItems[index], position: i });
        }
        return cards;
    };

    const currentItem = foodItems[currentIndex];

    const containerRef = useRef<HTMLDivElement | null>(null);
    const innerRef = useRef<HTMLDivElement | null>(null);
    const draggingRef = useRef<boolean>(false);
    const startXRef = useRef<number>(0);
    const deltaXRef = useRef<number>(0);

    // Intersection Observer for scroll animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Initial load animation
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    // Auto-play with fade-down animation
    useEffect(() => {
        if (isPaused) return;

        const id = window.setInterval(() => {
            setFadeDown(true);
            setTimeout(() => {
                setCurrentIndex((p) => (p + 1) % foodItems.length);
                setFadeDown(false);
            }, 300);
        }, AUTOPLAY_INTERVAL);

        return () => {
            clearInterval(id);
        };
    }, [isPaused, foodItems.length]);

    // Reset fade-down animation after slide change
    useEffect(() => {
        if (fadeDown) {
            const timer = setTimeout(() => {
                setFadeDown(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [fadeDown]);

    // Transition management for swipe
    useEffect(() => {
        if (!innerRef.current) return;
        innerRef.current.style.transition = TRANSITION;
        innerRef.current.style.transform = '';
        const t = window.setTimeout(() => {
            if (innerRef.current) innerRef.current.style.transition = 'none';
        }, 300);
        return () => clearTimeout(t);
    }, [currentIndex]);

    const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
        if (e.pointerType === 'mouse' && e.buttons !== 1) return;
        draggingRef.current = true;
        setIsPaused(true);
        startXRef.current = e.clientX;
        deltaXRef.current = 0;

        try {
            (e.currentTarget as HTMLDivElement).setPointerCapture?.(e.pointerId);
        } catch (err) {
            console.warn('pointer capture not supported', err);
        }

        if (innerRef.current) innerRef.current.style.transition = 'none';
    };

    const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
        if (!draggingRef.current) return;
        const currentX = e.clientX;
        deltaXRef.current = currentX - startXRef.current;

        const dampened = Math.abs(deltaXRef.current) > 120 ? deltaXRef.current * 0.35 : deltaXRef.current;

        if (innerRef.current) {
            innerRef.current.style.transform = `translateX(${dampened}px)`;
        }
    };

    const finishDrag = (e?: React.PointerEvent<HTMLDivElement>) => {
        if (!draggingRef.current) return;
        draggingRef.current = false;

        try {
            if (e) (e.currentTarget as HTMLDivElement).releasePointerCapture?.(e.pointerId);
        } catch (err) {
            console.warn('pointer release not supported', err);
        }

        const delta = deltaXRef.current;

        if (innerRef.current) {
            innerRef.current.style.transition = TRANSITION;
            innerRef.current.style.transform = '';
        }

        if (Math.abs(delta) > SWIPE_THRESHOLD) {
            setFadeDown(true);
            setTimeout(() => {
                if (delta < 0) {
                    setCurrentIndex((p) => (p + 1) % foodItems.length);
                } else {
                    setCurrentIndex((p) => (p - 1 + foodItems.length) % foodItems.length);
                }
                setFadeDown(false);
            }, 300);
        }

        startXRef.current = 0;
        deltaXRef.current = 0;
    };

    const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => finishDrag(e);
    const onPointerCancel = (e: React.PointerEvent<HTMLDivElement>) => finishDrag(e);

    useEffect(() => {
        const handler = (ev: Event) => {
            if (draggingRef.current) ev.preventDefault();
        };
        document.addEventListener('dragstart', handler);
        return () => document.removeEventListener('dragstart', handler);
    }, []);

    const onThumbnailClick = (index: number) => {
        setFadeDown(true);
        setTimeout(() => {
            setCurrentIndex(index);
            setIsPaused(true);
            setFadeDown(false);
            window.setTimeout(() => setIsPaused(false), 1000);
        }, 300);
    };

    return (
        // <section ref={sectionRef} className="w-full bg-[#b2eaea] py-12">
        <section
            ref={sectionRef}
            className="w-full max-w-full overflow-x-hidden py-10 sm:py-12 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div
                    className={`text-center mb-8 sm:mb-10 transition-all duration-700 ${
                        loaded && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold font-heading tracking-wide leading-tight text-[#5fb8a6]">
                        BEST SELLERS
                    </h1>
                </div>

                {/* ================= DESKTOP VIEW ================= */}
                <div className="hidden lg:block max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 gap-12 xl:gap-16 items-center">
                        {/* Image */}
                        <div className="flex justify-center">
                            <div className="relative w-full max-w-[520px] xl:max-w-[620px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src={currentItem.image}
                                    alt={currentItem.name}
                                    className={`w-full h-full object-cover transition-all duration-500 ${
                                        fadeDown ? 'opacity-80' : 'opacity-100'
                                    }`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>
                        </div>

                        {/* Details */}
                        <div className="flex flex-col justify-center space-y-6 xl:space-y-8">
                            <div
                                className={`transition-all duration-500 ${
                                    !loaded || !isVisible
                                        ? 'opacity-0 translate-y-10'
                                        : fadeDown
                                        ? 'opacity-0 translate-y-6'
                                        : 'opacity-100 translate-y-0'
                                }`}
                            >
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-body text-gray-400 mb-3 leading-snug">
                                    {currentItem.name}
                                </h2>
                                <p className="text-base sm:text-lg md:text-xl italic text-slate-400">
                                    {currentItem.description}
                                </p>
                            </div>

                            {/* Calories & Protein */}
                            <div
                                className={`flex gap-4 xl:gap-6 transition-all duration-500 delay-200 ${
                                    !loaded || !isVisible
                                        ? 'opacity-0 translate-y-10'
                                        : fadeDown
                                        ? 'opacity-0 translate-y-6'
                                        : 'opacity-100 translate-y-0'
                                }`}
                            >
                                <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-2xl p-4 sm:p-5 md:p-6 text-center">
                                    <div className="text-[#66b2b2] text-xs sm:text-sm font-semibold uppercase mb-2">
                                        Calories
                                    </div>
                                    <div className="text-[#18786F] font-heading text-xl sm:text-2xl md:text-3xl font-bold">
                                        {currentItem.calories}
                                    </div>
                                </div>

                                <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-2xl p-4 sm:p-5 md:p-6 text-center">
                                    <div className="text-[#66b2b2] text-xs sm:text-sm font-semibold uppercase mb-2">
                                        Protein
                                    </div>
                                    <div className="text-[#18786F] font-heading text-xl sm:text-2xl md:text-3xl font-bold">
                                        {currentItem.protein}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnails */}
                    <div
                        className={`mt-10 flex justify-center gap-3 flex-wrap transition-all duration-700 delay-300 ${
                            loaded && isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}
                    >
                        {foodItems.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => onThumbnailClick(index)}
                                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'ring-4 ring-[#66b2b2] scale-110'
                                        : 'opacity-60 hover:opacity-100 hover:scale-105'
                                }`}
                            >
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* ================= MOBILE VIEW ================= */}
                <div className="lg:hidden">
                    <div className="flex flex-col items-center gap-6">
                        {/* Cards */}
                        <div
                            className="relative w-full max-w-md min-h-[360px] sm:min-h-[420px]
                            flex items-center justify-center overflow-hidden"
                            ref={containerRef}
                            onPointerDown={onPointerDown}
                            onPointerMove={onPointerMove}
                            onPointerUp={onPointerUp}
                            onPointerCancel={onPointerCancel}
                            style={{ touchAction: 'pan-y' }}
                        >
                            <div
                                ref={innerRef}
                                className="w-full flex items-center justify-center relative overflow-hidden max-w-full"
                            >
                                {getVisibleCards().map((item) => {
                                    const zIndex = 3 - item.position;
                                    const rotation = item.position === 0 ? -5 : item.position === 2 ? 5 : 0;
                                    const scale = 1 - item.position * 0.05;

                                    return (
                                        <div
                                            key={item.id}
                                            className="absolute w-[90%] sm:w-[85%] max-w-[350px] aspect-square rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-out"
                                            style={{
                                                transform: `rotate(${rotation}deg) scale(${scale})`,
                                                zIndex,
                                            }}
                                        >
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Mobile Info */}
                        <div className="w-full max-w-md px-4 text-center">
                            <h2 className="text-xl sm:text-2xl font-bold mb-2 leading-tight text-slate-400">
                                {foodItems[currentIndex].name}
                            </h2>
                            <p className="text-sm sm:text-base italic text-slate-400">
                                {foodItems[currentIndex].description}
                            </p>

                            <div className="flex gap-4 mt-4">
                                <div className="flex-1 border-2 border-[#66b2b2] rounded-xl py-2">
                                    <div className="text-xs sm:text-sm font-semibold text-[#66b2b2]">Calories</div>
                                    <div className="font-bold text-[#18786F] text-sm sm:text-base">
                                        {foodItems[currentIndex].calories}
                                    </div>
                                </div>
                                <div className="flex-1 border-2 border-[#66b2b2] rounded-xl py-2">
                                    <div className="text-xs sm:text-sm font-semibold text-[#66b2b2]">Protein</div>
                                    <div className="font-bold text-[#18786F] text-sm sm:text-base">
                                        {foodItems[currentIndex].protein}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodCarousel;