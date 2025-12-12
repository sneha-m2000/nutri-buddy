// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const BestsellerCarousel: React.FC = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const items = [
//         {
//             id: 1,
//             image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop',
//             title: 'Gourmet Salad Bowl',
//         },
//         {
//             id: 2,
//             image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&h=800&fit=crop',
//             title: 'Creamy Pasta Dish',
//         },
//         {
//             id: 3,
//             image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=800&fit=crop',
//             title: 'Mixed Protein Bowl',
//         },
//         {
//             id: 4,
//             image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=800&fit=crop',
//             title: 'Buddha Bowl Special',
//         },
//     ];

//     const nextSlide = () => {
//         setCurrentIndex((prev) => (prev + 1) % items.length);
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
//     };

//     const getVisibleItems = () => {
//         const visible = [];
//         for (let i = 0; i < 4; i++) {
//             visible.push(items[(currentIndex + i) % items.length]);
//         }
//         return visible;
//     };

//     return (
//         <div className="min-h-screen bg-[#d0e7e7] flex items-center justify-center p-8">
//             <div className="w-full max-w-7xl">
//                 <h1 className="text-5xl font-bold font-heading text-center mb-16 tracking-widest">Our Bestsellers</h1>

//                 <div className="relative flex items-center justify-center gap-6">
//                     {/* Previous Button */}
//                     <button
//                         onClick={prevSlide}
//                         className="absolute left-0 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
//                         aria-label="Previous"
//                     >
//                         <ChevronLeft className="w-6 h-6 text-teal-600" />
//                     </button>

//                     {/* Carousel Items */}
//                     <div className="grid grid-cols-4 gap-6 w-full px-16">
//                         {getVisibleItems().map((item, index) => (
//                             <div
//                                 key={`${item.id}-${index}`}
//                                 className="aspect-square rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
//                             >
//                                 <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
//                             </div>
//                         ))}
//                     </div>

//                     {/* Next Button */}
//                     <button
//                         onClick={nextSlide}
//                         className="absolute right-0 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
//                         aria-label="Next"
//                     >
//                         <ChevronRight className="w-6 h-6 text-teal-600" />
//                     </button>
//                 </div>

//                 {/* Dots Indicator */}
//                 <div className="flex justify-center gap-2 mt-8">
//                     {items.map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => setCurrentIndex(index)}
//                             className={`w-2 h-2 rounded-full transition-all ${
//                                 index === currentIndex ? 'bg-teal-600 w-8' : 'bg-gray-300'
//                             }`}
//                             aria-label={`Go to slide ${index + 1}`}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BestsellerCarousel;


// import { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const FoodCarousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const foodItems = [
//         {
//             id: 1,
//             name: 'Protein Power Bowl',
//             description: 'High protein quinoa bowl',
//             image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=400&fit=crop',
//             calories: '420 cal',
//             protein: '32g',
//         },
//         {
//             id: 2,
//             name: 'Green Detox Smoothie',
//             description: 'Kale, spinach & avocado blend',
//             image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=400&fit=crop',
//             calories: '180 cal',
//             protein: '8g',
//         },
//         {
//             id: 3,
//             name: 'Grilled Chicken Salad',
//             description: 'Fresh greens with lean protein',
//             image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop',
//             calories: '350 cal',
//             protein: '28g',
//         },
//         {
//             id: 4,
//             name: 'Salmon & Veggies',
//             description: 'Omega-3 rich grilled salmon',
//             image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=400&fit=crop',
//             calories: '480 cal',
//             protein: '35g',
//         },
//         {
//             id: 5,
//             name: 'Acai Energy Bowl',
//             description: 'Antioxidant-packed breakfast',
//             image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=400&fit=crop',
//             calories: '320 cal',
//             protein: '12g',
//         },
//         {
//             id: 6,
//             name: 'Turkey Wrap',
//             description: 'Whole grain with lean turkey',
//             image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=400&fit=crop',
//             calories: '380 cal',
//             protein: '26g',
//         },
//         {
//             id: 7,
//             name: 'Berry Protein Shake',
//             description: 'Post-workout recovery blend',
//             image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=400&fit=crop',
//             calories: '240 cal',
//             protein: '24g',
//         },
//     ];

//     const nextSlide = () => {
//         setCurrentIndex((prev) => (prev + 1) % foodItems.length);
//     };

//     const prevSlide = () => {
//         setCurrentIndex((prev) => (prev - 1 + foodItems.length) % foodItems.length);
//     };

//     const getVisibleCards = () => {
//         const cards = [];
//         for (let i = 0; i < 3; i++) {
//             const index = (currentIndex + i) % foodItems.length;
//             cards.push({ ...foodItems[index], position: i });
//         }
//         return cards;
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-8">
//             <div className="max-w-6xl w-full">
//                 <div className="flex items-center justify-between mb-16">
//                     <div>
//                         <h1 className="text-5xl font-bold text-white mb-2">Best Sellers</h1>
//                         <p className="text-slate-400 text-lg">Nutrition-packed meals for your healthy lifestyle</p>
//                     </div>
//                     <div className="text-slate-400 text-xl font-semibold">
//                         {currentIndex + 1}/{foodItems.length}
//                     </div>
//                 </div>

//                 <div className="flex items-center justify-center gap-12">
//                     {/* Stack of Cards */}
//                     <div className="relative w-96 h-96 flex items-center justify-center">
//                         {getVisibleCards().map((item) => {
//                             const zIndex = 3 - item.position;
//                             const rotation = item.position === 0 ? -8 : item.position === 1 ? 0 : 8;
//                             const scale = 1 - item.position * 0.05;
//                             const translateY = item.position * 8;
//                             const translateX = item.position === 0 ? -20 : item.position === 2 ? 20 : 0;

//                             return (
//                                 <div
//                                     key={item.id}
//                                     className="absolute w-80 h-80 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-out"
//                                     style={{
//                                         transform: `rotate(${rotation}deg) scale(${scale}) translateY(${translateY}px) translateX(${translateX}px)`,
//                                         zIndex: zIndex,
//                                     }}
//                                 >
//                                     <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//                                     {item.position === 1 && (
//                                         <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                                             <div className="flex gap-3 mb-3">
//                                                 <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
//                                                     {item.calories}
//                                                 </span>
//                                                 <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
//                                                     {item.protein}
//                                                 </span>
//                                             </div>
//                                             <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
//                                             <p className="text-slate-300 text-sm">{item.description}</p>
//                                         </div>
//                                     )}
//                                 </div>
//                             );
//                         })}
//                     </div>

//                     {/* Current Item Info */}
//                     <div className="flex flex-col items-center gap-8">
//                         <div className="text-center max-w-xs">
//                             <h2 className="text-4xl font-bold text-white mb-3">{foodItems[currentIndex].name}</h2>
//                             <p className="text-slate-400 text-lg italic mb-6">{foodItems[currentIndex].description}</p>
//                             <div className="flex gap-4 justify-center">
//                                 <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-xl px-6 py-3">
//                                     <div className="text-emerald-400 text-sm font-semibold">Calories</div>
//                                     <div className="text-white text-xl font-bold">{foodItems[currentIndex].calories}</div>
//                                 </div>
//                                 <div className="bg-blue-500/20 border border-blue-500/40 rounded-xl px-6 py-3">
//                                     <div className="text-blue-400 text-sm font-semibold">Protein</div>
//                                     <div className="text-white text-xl font-bold">{foodItems[currentIndex].protein}</div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Navigation Buttons */}
//                         <div className="flex gap-4">
//                             <button
//                                 onClick={prevSlide}
//                                 className="w-14 h-14 rounded-full bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
//                             >
//                                 <ChevronLeft className="text-white" size={28} />
//                             </button>
//                             <button
//                                 onClick={nextSlide}
//                                 className="w-14 h-14 rounded-full bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
//                             >
//                                 <ChevronRight className="text-white" size={28} />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FoodCarousel;



// import { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const FoodCarousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const foodItems = [
//         {
//             id: 1,
//             name: 'Protein Power Bowl',
//             description: 'High protein quinoa bowl',
//             image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop',
//             calories: '420 cal',
//             protein: '32g',
//         },
//         {
//             id: 2,
//             name: 'Green Detox Smoothie',
//             description: 'Kale, spinach & avocado blend',
//             image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=800&h=800&fit=crop',
//             calories: '180 cal',
//             protein: '8g',
//         },
//         {
//             id: 3,
//             name: 'Grilled Chicken Salad',
//             description: 'Fresh greens with lean protein',
//             image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=800&fit=crop',
//             calories: '350 cal',
//             protein: '28g',
//         },
//         {
//             id: 4,
//             name: 'Salmon & Veggies',
//             description: 'Omega-3 rich grilled salmon',
//             image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=800&fit=crop',
//             calories: '480 cal',
//             protein: '35g',
//         },
//         {
//             id: 5,
//             name: 'Acai Energy Bowl',
//             description: 'Antioxidant-packed breakfast',
//             image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&h=800&fit=crop',
//             calories: '320 cal',
//             protein: '12g',
//         },
//         {
//             id: 6,
//             name: 'Turkey Wrap',
//             description: 'Whole grain with lean turkey',
//             image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&h=800&fit=crop',
//             calories: '380 cal',
//             protein: '26g',
//         },
//         {
//             id: 7,
//             name: 'Berry Protein Shake',
//             description: 'Post-workout recovery blend',
//             image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&h=800&fit=crop',
//             calories: '240 cal',
//             protein: '24g',
//         },
//     ];

//     const nextSlide = () => setCurrentIndex((p) => (p + 1) % foodItems.length);
//     const prevSlide = () => setCurrentIndex((p) => (p - 1 + foodItems.length) % foodItems.length);

//     const getVisibleCards = () => {
//         const cards = [];
//         for (let i = 0; i < 3; i++) {
//             const index = (currentIndex + i) % foodItems.length;
//             cards.push({ ...foodItems[index], position: i });
//         }
//         return cards;
//     };

//     return (
//         <section className="w-full bg-black py-20">
//             <div className="max-w-7xl mx-auto px-6">
//                 <div className="text-center mb-12">
//                     <h1 className="text-6xl font-bold font-heading tracking-widest text-white">Best Sellers</h1>
//                 </div>

//                 <div className="grid grid-cols-[minmax(0,1fr)_420px]  items-start">
//                     {/* LEFT */}
//                     <div className="flex items-center justify-start">
//                         <div className="relative w-[480px] h-[480px] flex items-center justify-center">
//                             {getVisibleCards().map((item) => {
//                                 const zIndex = 3 - item.position;
//                                 const rotation = item.position === 0 ? -8 : item.position === 1 ? 0 : 8;
//                                 const scale = 1 - item.position * 0.05;
//                                 const translateY = item.position * 10;
//                                 const translateX = item.position === 0 ? -25 : item.position === 2 ? 25 : 0;

//                                 return (
//                                     <div
//                                         key={item.id}
//                                         className="absolute w-[420px] h-[420px] rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-out"
//                                         style={{
//                                             transform: `rotate(${rotation}deg) scale(${scale}) translateY(${translateY}px) translateX(${translateX}px)`,
//                                             zIndex,
//                                         }}
//                                     >
//                                         <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//                                         {item.position === 1 && (
//                                             <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                                                 <div className="flex gap-3 mb-3">
//                                                     <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
//                                                         {item.calories}
//                                                     </span>
//                                                     <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
//                                                         {item.protein}
//                                                     </span>
//                                                 </div>
//                                                 <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
//                                                 <p className="text-slate-300 text-sm">{item.description}</p>
//                                             </div>
//                                         )}
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>

//                     {/* RIGHT */}
//                     {/* RIGHT: vertically centered content */}
//                     <div className="flex flex-col items-center">
//                         <div className="w-full max-w-xs h-[480px] flex flex-col justify-center gap-6">
//                             {/* Title + Description */}
//                             <div className="text-center">
//                                 <h2
//                                     className="text-3xl font-bold text-white font-body mb-2 leading-tight"
//                                     style={{ lineHeight: '1.05' }}
//                                 >
//                                     <span
//                                         className="block overflow-hidden whitespace-nowrap"
//                                         style={{ WebkitLineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical' }}
//                                     >
//                                         {foodItems[currentIndex].name}
//                                     </span>
//                                 </h2>

//                                 <p className="text-slate-400 text-lg  whitespace-nowrap italic font-body mb-2 max-h-[48px] overflow-hidden">
//                                     {foodItems[currentIndex].description}
//                                 </p>
//                             </div>

//                             {/* Nutrition */}
//                             <div className="flex gap-4 justify-center">
//                                 <div className="bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-xl px-6 py-3 min-w-[120px] text-center">
//                                     <div className="text-[#66b2b2] text-sm font-semibold">Calories</div>
//                                     <div className="text-white text-xl font-bold">{foodItems[currentIndex].calories}</div>
//                                 </div>
//                                 <div className="bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-xl px-6 py-3 min-w-[120px] text-center">
//                                     <div className="text-[#66b2b2] text-sm font-semibold">Protein</div>
//                                     <div className="text-white text-xl font-bold">{foodItems[currentIndex].protein}</div>
//                                 </div>
//                             </div>

//                             {/* Buttons */}
//                             <div className="flex gap-4 justify-center">
//                                 <button
//                                     onClick={prevSlide}
//                                     className="w-14 h-14 rounded-full bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
//                                 >
//                                     <ChevronLeft className="text-white" size={24} />
//                                 </button>
//                                 <button
//                                     onClick={nextSlide}
//                                     className="w-14 h-14 rounded-full bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
//                                 >
//                                     <ChevronRight className="text-white" size={24} />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>{' '}
//         </section>
//     );
// };

// export default FoodCarousel;


// import { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const FoodCarousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const foodItems = [
//         {
//             id: 1,
//             name: 'Protein Power Bowl',
//             description: 'High protein quinoa bowl',
//             image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop',
//             calories: '420 cal',
//             protein: '32g',
//         },
//         {
//             id: 2,
//             name: 'Green Detox Smoothie',
//             description: 'Kale, spinach & avocado blend',
//             image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=800&h=800&fit=crop',
//             calories: '180 cal',
//             protein: '8g',
//         },
//         {
//             id: 3,
//             name: 'Grilled Chicken Salad',
//             description: 'Fresh greens with lean protein',
//             image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=800&fit=crop',
//             calories: '350 cal',
//             protein: '28g',
//         },
//         {
//             id: 4,
//             name: 'Salmon & Veggies',
//             description: 'Omega-3 rich grilled salmon',
//             image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=800&fit=crop',
//             calories: '480 cal',
//             protein: '35g',
//         },
//         {
//             id: 5,
//             name: 'Acai Energy Bowl',
//             description: 'Antioxidant-packed breakfast',
//             image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&h=800&fit=crop',
//             calories: '320 cal',
//             protein: '12g',
//         },
//         {
//             id: 6,
//             name: 'Turkey Wrap',
//             description: 'Whole grain with lean turkey',
//             image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&h=800&fit=crop',
//             calories: '380 cal',
//             protein: '26g',
//         },
//         {
//             id: 7,
//             name: 'Berry Protein Shake',
//             description: 'Post-workout recovery blend',
//             image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&h=800&fit=crop',
//             calories: '240 cal',
//             protein: '24g',
//         },
//     ];

//     const nextSlide = () => setCurrentIndex((p) => (p + 1) % foodItems.length);
//     const prevSlide = () => setCurrentIndex((p) => (p - 1 + foodItems.length) % foodItems.length);

//     const getVisibleCards = () => {
//         const cards = [];
//         for (let i = 0; i < 3; i++) {
//             const index = (currentIndex + i) % foodItems.length;
//             cards.push({ ...foodItems[index], position: i });
//         }
//         return cards;
//     };

//     return (
//         <section className="w-full bg-black py-20">
//             <div className="max-w-7xl mx-auto px-6">
//                 <div className="text-center mb-16">
//                     <h1 className="text-6xl font-bold font-heading tracking-widest text-gray-400">Best Sellers</h1>
//                 </div>

//                 {/* make parent relative so the center counter can be absolutely positioned */}
//                 <div className="relative">
//                     <div className="grid grid-cols-[minmax(0,1fr)_420px] items-start">
//                         {/* LEFT */}
//                         <div className="flex items-center justify-start">
//                             <div className="relative w-[480px] h-[480px] flex items-center justify-center">
//                                 {getVisibleCards().map((item) => {
//                                     const zIndex = 3 - item.position;
//                                     const rotation = item.position === 0 ? -8 : item.position === 1 ? 0 : 8;
//                                     const scale = 1 - item.position * 0.05;
//                                     const translateY = item.position * 10;
//                                     const translateX = item.position === 0 ? -25 : item.position === 2 ? 25 : 0;

//                                     return (
//                                         <div
//                                             key={item.id}
//                                             className="absolute w-[420px] h-[420px] rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-out"
//                                             style={{
//                                                 transform: `rotate(${rotation}deg) scale(${scale}) translateY(${translateY}px) translateX(${translateX}px)`,
//                                                 zIndex,
//                                             }}
//                                         >
//                                             <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//                                             {item.position === 1 && (
//                                                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                                                     <div className="flex gap-3 mb-3">
//                                                         <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
//                                                             {item.calories}
//                                                         </span>
//                                                         <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
//                                                             {item.protein}
//                                                         </span>
//                                                     </div>
//                                                     <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
//                                                     <p className="text-slate-300 text-sm">{item.description}</p>
//                                                 </div>
//                                             )}
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                         </div>

//                         {/* RIGHT */}
//                         <div className="flex flex-col items-center">
//                             <div className="w-full max-w-xs h-[480px] flex flex-col justify-center gap-6">
//                                 {/* Title + Description */}
//                                 <div className="text-center">
//                                     <h2
//                                         className="text-3xl font-bold text-white font-body mb-2 leading-tight"
//                                         style={{ lineHeight: '1.05' }}
//                                     >
//                                         <span
//                                             className="block overflow-hidden whitespace-nowrap"
//                                             style={{
//                                                 WebkitLineClamp: 2,
//                                                 display: '-webkit-box',
//                                                 WebkitBoxOrient: 'vertical',
//                                             }}
//                                         >
//                                             {foodItems[currentIndex].name}
//                                         </span>
//                                     </h2>

//                                     <p className="text-slate-400 text-lg  whitespace-nowrap italic font-body mb-2 max-h-[48px] overflow-hidden">
//                                         {foodItems[currentIndex].description}
//                                     </p>
//                                 </div>

//                                 {/* Nutrition */}
//                                 <div className="flex gap-4 justify-center">
//                                     <div className="bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-xl px-6 py-3 min-w-[120px] text-center">
//                                         <div className="text-[#66b2b2] text-sm font-semibold">Calories</div>
//                                         <div className="text-white text-xl font-bold">
//                                             {foodItems[currentIndex].calories}
//                                         </div>
//                                     </div>
//                                     <div className="bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-xl px-6 py-3 min-w-[120px] text-center">
//                                         <div className="text-[#66b2b2] text-sm font-semibold">Protein</div>
//                                         <div className="text-white text-xl font-bold">
//                                             {foodItems[currentIndex].protein}
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Buttons */}
//                                 <div className="flex gap-16 mt-12 justify-center">
//                                     <button
//                                         onClick={prevSlide}
//                                         className="w-14 h-14 rounded-full bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
//                                     >
//                                         <ChevronLeft className="text-white" size={24} />
//                                     </button>
//                                     <button
//                                         onClick={nextSlide}
//                                         className="w-14 h-14 rounded-full bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
//                                     >
//                                         <ChevronRight className="text-white" size={24} />
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* CENTERED SLIDE COUNTER - absolutely positioned in the middle of the layout */}
//                     <div className="pointer-events-none absolute left-1/2 top-1/2 z-50 -translate-y-1/2 -translate-x">
//                         <div className="pointer-events-auto bg-white/10 backdrop-blur rounded-full px-4 py-2 flex items-center gap-3 border border-white/20">
//                             <span className="text-sm text-slate-200 font-medium">{currentIndex + 1}</span>
//                             <span className="text-sm text-slate-400">/</span>
//                             <span className="text-sm text-slate-200 font-medium">{foodItems.length}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FoodCarousel;



// import { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const FoodCarousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const foodItems = [
//         {
//             id: 1,
//             name: 'Protein Power Bowl',
//             description: 'High protein quinoa bowl',
//             image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop',
//             calories: '420 cal',
//             protein: '32g',
//         },
//         {
//             id: 2,
//             name: 'Green Detox Smoothie',
//             description: 'Kale, spinach & avocado blend',
//             image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=800&h=800&fit=crop',
//             calories: '180 cal',
//             protein: '8g',
//         },
//         {
//             id: 3,
//             name: 'Grilled Chicken Salad',
//             description: 'Fresh greens with lean protein',
//             image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=800&fit=crop',
//             calories: '350 cal',
//             protein: '28g',
//         },
//         {
//             id: 4,
//             name: 'Salmon & Veggies',
//             description: 'Omega-3 rich grilled salmon',
//             image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=800&fit=crop',
//             calories: '480 cal',
//             protein: '35g',
//         },
//         {
//             id: 5,
//             name: 'Acai Energy Bowl',
//             description: 'Antioxidant-packed breakfast',
//             image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&h=800&fit=crop',
//             calories: '320 cal',
//             protein: '12g',
//         },
//         {
//             id: 6,
//             name: 'Turkey Wrap',
//             description: 'Whole grain with lean turkey',
//             image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&h=800&fit=crop',
//             calories: '380 cal',
//             protein: '26g',
//         },
//         {
//             id: 7,
//             name: 'Berry Protein Shake',
//             description: 'Post-workout recovery blend',
//             image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&h=800&fit=crop',
//             calories: '240 cal',
//             protein: '24g',
//         },
//     ];

//     const nextSlide = () => setCurrentIndex((p) => (p + 1) % foodItems.length);
//     const prevSlide = () => setCurrentIndex((p) => (p - 1 + foodItems.length) % foodItems.length);

//     const currentItem = foodItems[currentIndex];

//     return (
//         <section className="w-full bg-black py-20">
//             <div className="max-w-7xl mx-auto px-6">
//                 <div className="text-center mb-16">
//                     <h1 className="text-6xl font-bold font-heading tracking-wide text-gray-400">BEST SELLERS</h1>
//                 </div>

//                 <div className="max-w-5xl mx-auto">
//                     {/* Main Content Grid */}
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                         {/* LEFT: Image */}
//                         <div className="relative">
//                             <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
//                                 <img
//                                     src={currentItem.image}
//                                     alt={currentItem.name}
//                                     className="w-full h-full object-cover transition-all duration-500"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                             </div>

//                             {/* Slide Counter on Image */}
//                             <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/20">
//                                 <span className="text-white font-semibold text-lg">{currentIndex + 1}</span>
//                                 <span className="text-slate-400 mx-2">/</span>
//                                 <span className="text-slate-300 text-lg">{foodItems.length}</span>
//                             </div>
//                         </div>

//                         {/* RIGHT: Details */}
//                         <div className="flex flex-col justify-center space-y-8">
//                             {/* Title & Description */}
//                             <div>
//                                 <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
//                                     {currentItem.name}
//                                 </h2>
//                                 <p className="text-slate-400 text-xl italic">{currentItem.description}</p>
//                             </div>

//                             {/* Nutrition Cards */}
//                             <div className="flex gap-6">
//                                 <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-2xl p-6 text-center">
//                                     <div className="text-[#66b2b2] text-sm font-semibold uppercase tracking-wider mb-2">
//                                         Calories
//                                     </div>
//                                     <div className="text-white text-3xl font-bold">{currentItem.calories}</div>
//                                 </div>
//                                 <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-2xl p-6 text-center">
//                                     <div className="text-[#66b2b2] text-sm font-semibold uppercase tracking-wider mb-2">
//                                         Protein
//                                     </div>
//                                     <div className="text-white text-3xl font-bold">{currentItem.protein}</div>
//                                 </div>
//                             </div>

//                             {/* Navigation Buttons */}
//                             <div className="flex gap-4">
//                                 <button
//                                     onClick={prevSlide}
//                                     className="flex-1 h-14 rounded-xl bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-105 group"
//                                 >
//                                     <ChevronLeft
//                                         className="text-white group-hover:text-[#66b2b2] transition-colors"
//                                         size={28}
//                                     />
//                                 </button>
//                                 <button
//                                     onClick={nextSlide}
//                                     className="flex-1 h-14 rounded-xl bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-105 group"
//                                 >
//                                     <ChevronRight
//                                         className="text-white group-hover:text-[#66b2b2] transition-colors"
//                                         size={28}
//                                     />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Thumbnail Navigation */}
//                     <div className="mt-12 flex justify-center gap-3 flex-wrap">
//                         {foodItems.map((item, index) => (
//                             <button
//                                 key={item.id}
//                                 onClick={() => setCurrentIndex(index)}
//                                 className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
//                                     index === currentIndex
//                                         ? 'ring-4 ring-[#66b2b2] scale-110'
//                                         : 'opacity-50 hover:opacity-100 hover:scale-105'
//                                 }`}
//                             >
//                                 <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                             </button>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FoodCarousel;


// import { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const FoodCarousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const foodItems = [
//         {
//             id: 1,
//             name: 'Protein Power Bowl',
//             description: 'High protein quinoa bowl',
//             image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop',
//             calories: '420 cal',
//             protein: '32g',
//         },
//         {
//             id: 2,
//             name: 'Green Detox Smoothie',
//             description: 'Kale, spinach & avocado blend',
//             image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=800&h=800&fit=crop',
//             calories: '180 cal',
//             protein: '8g',
//         },
//         {
//             id: 3,
//             name: 'Grilled Chicken Salad',
//             description: 'Fresh greens with lean protein',
//             image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=800&fit=crop',
//             calories: '350 cal',
//             protein: '28g',
//         },
//         {
//             id: 4,
//             name: 'Salmon & Veggies',
//             description: 'Omega-3 rich grilled salmon',
//             image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=800&fit=crop',
//             calories: '480 cal',
//             protein: '35g',
//         },
//         {
//             id: 5,
//             name: 'Acai Energy Bowl',
//             description: 'Antioxidant-packed breakfast',
//             image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&h=800&fit=crop',
//             calories: '320 cal',
//             protein: '12g',
//         },
//         {
//             id: 6,
//             name: 'Turkey Wrap',
//             description: 'Whole grain with lean turkey',
//             image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&h=800&fit=crop',
//             calories: '380 cal',
//             protein: '26g',
//         },
//         {
//             id: 7,
//             name: 'Berry Protein Shake',
//             description: 'Post-workout recovery blend',
//             image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&h=800&fit=crop',
//             calories: '240 cal',
//             protein: '24g',
//         },
//     ];

//     const nextSlide = () => setCurrentIndex((p) => (p + 1) % foodItems.length);
//     const prevSlide = () => setCurrentIndex((p) => (p - 1 + foodItems.length) % foodItems.length);

//     const getVisibleCards = () => {
//         const cards = [];
//         for (let i = 0; i < 3; i++) {
//             const index = (currentIndex + i) % foodItems.length;
//             cards.push({ ...foodItems[index], position: i });
//         }
//         return cards;
//     };

//     const currentItem = foodItems[currentIndex];

//     return (
//         <section className="w-full  bg-[#b2eaea] pt-12">
//             <div className="max-w-7xl mx-auto px-6">
//                 <div className="text-center pb-4 ">
//                     <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-wide text-gray-400">
//                         BEST SELLERS
//                     </h1>
//                 </div>

//                 {/* DESKTOP VIEW - New Clean Layout */}
//                 <div className="hidden lg:block max-w-5xl mx-auto">
//                     <div className="grid grid-cols-2 gap-12 items-center">
//                         {/* LEFT: Image */}
//                         <div className="relative">
//                             <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
//                                 <img
//                                     src={currentItem.image}
//                                     alt={currentItem.name}
//                                     className="w-full h-full object-cover transition-all duration-500"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                             </div>

//                             {/* Slide Counter on Image */}
//                             <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/20">
//                                 <span className="text-white font-semibold text-lg">{currentIndex + 1}</span>
//                                 <span className="text-slate-400 mx-2">/</span>
//                                 <span className="text-slate-300 text-lg">{foodItems.length}</span>
//                             </div>
//                         </div>

//                         {/* RIGHT: Details */}
//                         <div className="flex flex-col justify-center space-y-8">
//                             <div>
//                                 <h2 className="text-5xl font-bold text-white mb-4 leading-tight">{currentItem.name}</h2>
//                                 <p className="text-slate-400 text-xl italic">{currentItem.description}</p>
//                             </div>

//                             <div className="flex gap-6">
//                                 <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-2xl p-6 text-center">
//                                     <div className="text-[#66b2b2] text-sm font-semibold uppercase tracking-wider mb-2">
//                                         Calories
//                                     </div>
//                                     <div className="text-white text-3xl font-bold">{currentItem.calories}</div>
//                                 </div>
//                                 <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-2xl p-6 text-center">
//                                     <div className="text-[#66b2b2] text-sm font-semibold uppercase tracking-wider mb-2">
//                                         Protein
//                                     </div>
//                                     <div className="text-white text-3xl font-bold">{currentItem.protein}</div>
//                                 </div>
//                             </div>

//                             <div className="flex gap-4">
//                                 <button
//                                     onClick={prevSlide}
//                                     className="flex-1 h-14 rounded-xl bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-105 group"
//                                 >
//                                     <ChevronLeft
//                                         className="text-white group-hover:text-[#66b2b2] transition-colors"
//                                         size={28}
//                                     />
//                                 </button>
//                                 <button
//                                     onClick={nextSlide}
//                                     className="flex-1 h-14 rounded-xl bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-105 group"
//                                 >
//                                     <ChevronRight
//                                         className="text-white group-hover:text-[#66b2b2] transition-colors"
//                                         size={28}
//                                     />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Thumbnail Navigation */}
//                     <div className="mt-12 flex justify-center gap-3 flex-wrap">
//                         {foodItems.map((item, index) => (
//                             <button
//                                 key={item.id}
//                                 onClick={() => setCurrentIndex(index)}
//                                 className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
//                                     index === currentIndex
//                                         ? 'ring-4 ring-[#66b2b2] scale-110'
//                                         : 'opacity-50 hover:opacity-100 hover:scale-105'
//                                 }`}
//                             >
//                                 <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* MOBILE VIEW - Original Stacked Cards Layout */}
//                 <div className="lg:hidden relative">
//                     <div className="flex flex-col items-center gap-8">
//                         {/* Stacked Cards */}
//                         <div className="relative w-full max-w-md h-[400px] flex items-center justify-center">
//                             {getVisibleCards().map((item) => {
//                                 const zIndex = 3 - item.position;
//                                 const rotation = item.position === 0 ? -8 : item.position === 1 ? 0 : 8;
//                                 const scale = 1 - item.position * 0.05;
//                                 const translateY = item.position * 10;
//                                 const translateX = item.position === 0 ? -25 : item.position === 2 ? 25 : 0;

//                                 return (
//                                     <div
//                                         key={item.id}
//                                         className="absolute w-[85%] max-w-[350px] aspect-square rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-out"
//                                         style={{
//                                             transform: `rotate(${rotation}deg) scale(${scale}) translateY(${translateY}px) translateX(${translateX}px)`,
//                                             zIndex,
//                                         }}
//                                     >
//                                         <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//                                         {item.position === 1 && (
//                                             <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                                                 <div className="flex gap-3 mb-3">
//                                                     <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
//                                                         {item.calories}
//                                                     </span>
//                                                     <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
//                                                         {item.protein}
//                                                     </span>
//                                                 </div>
//                                                 <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
//                                                 <p className="text-slate-300 text-sm">{item.description}</p>
//                                             </div>
//                                         )}
//                                     </div>
//                                 );
//                             })}
//                         </div>

//                         {/* Mobile Info Section */}
//                         <div className="w-full max-w-md flex flex-col items-center gap-6 px-4">
//                             {/* Title + Description */}
//                             <div className="text-center">
//                                 <h2 className="text-3xl font-bold text-white font-body mb-2 leading-tight">
//                                     {foodItems[currentIndex].name}
//                                 </h2>
//                                 <p className="text-slate-400 text-lg italic font-body">
//                                     {foodItems[currentIndex].description}
//                                 </p>
//                             </div>

//                             {/* Nutrition */}
//                             <div className="flex gap-4 justify-center w-full">
//                                 <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-xl px-4 py-3 text-center">
//                                     <div className="text-[#66b2b2] text-sm font-semibold">Calories</div>
//                                     <div className="text-white text-xl font-bold">{foodItems[currentIndex].calories}</div>
//                                 </div>
//                                 <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-xl px-4 py-3 text-center">
//                                     <div className="text-[#66b2b2] text-sm font-semibold">Protein</div>
//                                     <div className="text-white text-xl font-bold">{foodItems[currentIndex].protein}</div>
//                                 </div>
//                             </div>

//                             {/* Buttons */}
//                             <div className="flex gap-4 justify-center">
//                                 <button
//                                     onClick={prevSlide}
//                                     className="w-14 h-14 rounded-full bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
//                                 >
//                                     <ChevronLeft className="text-white" size={24} />
//                                 </button>
//                                 <button
//                                     onClick={nextSlide}
//                                     className="w-14 h-14 rounded-full bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
//                                 >
//                                     <ChevronRight className="text-white" size={24} />
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Slide Counter - Mobile */}
//                         <div className="bg-white/10 backdrop-blur rounded-full px-4 py-2 flex items-center gap-3 border border-white/20">
//                             <span className="text-sm text-slate-200 font-medium">{currentIndex + 1}</span>
//                             <span className="text-sm text-slate-400">/</span>
//                             <span className="text-sm text-slate-200 font-medium">{foodItems.length}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FoodCarousel;

// import { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const FoodCarousel = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     const foodItems = [
//         {
//             id: 1,
//             name: 'Protein Power Bowl',
//             description: 'High protein quinoa bowl',
//             image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop',
//             calories: '420 cal',
//             protein: '32g',
//         },
//         {
//             id: 2,
//             name: 'Green Detox Smoothie',
//             description: 'Kale, spinach & avocado blend',
//             image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=800&h=800&fit=crop',
//             calories: '180 cal',
//             protein: '8g',
//         },
//         {
//             id: 3,
//             name: 'Grilled Chicken Salad',
//             description: 'Fresh greens with lean protein',
//             image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=800&fit=crop',
//             calories: '350 cal',
//             protein: '28g',
//         },
//         {
//             id: 4,
//             name: 'Salmon & Veggies',
//             description: 'Omega-3 rich grilled salmon',
//             image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=800&fit=crop',
//             calories: '480 cal',
//             protein: '35g',
//         },
//         {
//             id: 5,
//             name: 'Acai Energy Bowl',
//             description: 'Antioxidant-packed breakfast',
//             image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&h=800&fit=crop',
//             calories: '320 cal',
//             protein: '12g',
//         },
//         {
//             id: 6,
//             name: 'Turkey Wrap',
//             description: 'Whole grain with lean turkey',
//             image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&h=800&fit=crop',
//             calories: '380 cal',
//             protein: '26g',
//         },
//         {
//             id: 7,
//             name: 'Berry Protein Shake',
//             description: 'Post-workout recovery blend',
//             image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&h=800&fit=crop',
//             calories: '240 cal',
//             protein: '24g',
//         },
//     ];

//     const nextSlide = () => setCurrentIndex((p) => (p + 1) % foodItems.length);
//     const prevSlide = () => setCurrentIndex((p) => (p - 1 + foodItems.length) % foodItems.length);

//     const getVisibleCards = () => {
//         const cards = [];
//         for (let i = 0; i < 3; i++) {
//             const index = (currentIndex + i) % foodItems.length;
//             cards.push({ ...foodItems[index], position: i });
//         }
//         return cards;
//     };

//     const currentItem = foodItems[currentIndex];

//     return (
//         <section className="w-full bg-[#b2eaea] py-12">
//             <div className="max-w-7xl mx-auto px-6">
//                 {/* Heading */}
//                 <div className="text-center mb-10">
//                     <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-wide text-Black">BEST SELLERS</h1>
//                 </div>

//                 {/* DESKTOP VIEW */}
//                 <div className="hidden lg:block max-w-6xl mx-auto">
//                     <div className="grid grid-cols-2 gap-16 items-center">
//                         {/* LEFT: Image (smaller) */}
//                         <div className="relative flex justify-center">
//                             <div className="relative w-full  aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
//                                 <img
//                                     src={currentItem.image}
//                                     alt={currentItem.name}
//                                     className="w-full h-full object-cover transition-all duration-500"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                             </div>

//                             {/* Slide Counter on Image (more transparent) */}
//                             <div className="absolute top-6 right-6 bg-black/25 backdrop-blur-md rounded-full px-2 py-2.5 border border-white/30">
//                                 <span className="text-black font-body font-semibold text-lg">{currentIndex + 1}</span>
//                                 <span className="text-[#66b2b2] mx-2">/</span>
//                                 <span className="text-black font-body text-lg">{foodItems.length}</span>
//                             </div>
//                         </div>

//                         {/* RIGHT: Details */}
//                         <div className="flex flex-col justify-center space-y-8 pl-4">
//                             <div>
//                                 <h2 className="text-5xl font-bold font-body text-black mb-4 leading-tight">
//                                     {currentItem.name}
//                                 </h2>
//                                 <p className="text-slate-400 font-body text-xl italic">{currentItem.description}</p>
//                             </div>

//                             <div className="flex gap-6">
//                                 <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-2xl p-6 text-center">
//                                     <div className="text-[#66b2b2] text-sm font-semibold uppercase tracking-wider mb-2">
//                                         Calories
//                                     </div>
//                                     <div className="text-[#18786F]  font-heading text-3xl font-bold">
//                                         {currentItem.calories}
//                                     </div>
//                                 </div>
//                                 <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-2xl p-6 text-center">
//                                     <div className="text-[#66b2b2] text-sm font-semibold uppercase tracking-wider mb-2">
//                                         Protein
//                                     </div>
//                                     <div className="text-[#18786F]  font-heading text-3xl font-bold">
//                                         {currentItem.protein}
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="flex gap-4 pt-2 justify-center">
//                                 {/* Prev Button */}
//                                 <button
//                                     onClick={prevSlide}
//                                     className="w-14 h-14 rounded-full bg-slate-700/50 hover:bg-slate-600/50 
//                                     border border-slate-600 flex items-center justify-center 
//                                     transition-all duration-300 hover:scale-110 group"
//                                 >
//                                     <ChevronLeft
//                                         className="text-white group-hover:text-[#66b2b2] transition-colors"
//                                         size={28}
//                                     />
//                                 </button>

//                                 {/* Next Button */}
//                                 <button
//                                     onClick={nextSlide}
//                                     className="w-14 h-14 rounded-full bg-slate-700/50 hover:bg-slate-600/50 
//                                     border border-slate-600 flex items-center justify-center 
//                                     transition-all duration-300 hover:scale-110 group"
//                                 >
//                                     <ChevronRight
//                                         className="text-white group-hover:text-[#66b2b2] transition-colors"
//                                         size={28}
//                                     />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Thumbnail Navigation */}
//                     <div className="mt-12 flex justify-center gap-3 flex-wrap">
//                         {foodItems.map((item, index) => (
//                             <button
//                                 key={item.id}
//                                 onClick={() => setCurrentIndex(index)}
//                                 className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
//                                     index === currentIndex
//                                         ? 'ring-4 ring-[#18786F] scale-110'
//                                         : 'opacity-50 hover:opacity-100 hover:scale-105'
//                                 }`}
//                             >
//                                 <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* MOBILE VIEW - stacked cards */}
//                 <div className="lg:hidden relative">
//                     <div className="flex flex-col items-center gap-8">
//                         {/* Stacked Cards */}
//                         <div className="relative w-full max-w-md h-[320px] md:h-[400px] flex items-center justify-center">
//                             {getVisibleCards().map((item) => {
//                                 const zIndex = 3 - item.position;
//                                 const rotation = item.position === 0 ? -8 : item.position === 1 ? 0 : 8;
//                                 const scale = 1 - item.position * 0.05;
//                                 const translateY = item.position * 10;
//                                 const translateX = item.position === 0 ? -25 : item.position === 2 ? 25 : 0;

//                                 return (
//                                     <div
//                                         key={item.id}
//                                         className="absolute w-[85%] max-w-[350px] aspect-square rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-out"
//                                         style={{
//                                             transform: `rotate(${rotation}deg) scale(${scale}) translateY(${translateY}px) translateX(${translateX}px)`,
//                                             zIndex,
//                                         }}
//                                     >
//                                         <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//                                         {item.position === 1 && (
//                                             <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                                                 <div className="flex gap-3 mb-3">
//                                                     <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
//                                                         {item.calories}
//                                                     </span>
//                                                     <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
//                                                         {item.protein}
//                                                     </span>
//                                                 </div>
//                                                 <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
//                                                 <p className="text-slate-300 text-sm">{item.description}</p>
//                                             </div>
//                                         )}
//                                     </div>
//                                 );
//                             })}
//                         </div>

//                         {/* Mobile Info Section */}
//                         <div className="w-full max-w-md flex flex-col items-center gap-6 px-4">
//                             <div className="text-center">
//                                 <h2 className="text-3xl font-bold text-white font-body mb-2 leading-tight">
//                                     {foodItems[currentIndex].name}
//                                 </h2>
//                                 <p className="text-slate-400 text-lg italic font-body">
//                                     {foodItems[currentIndex].description}
//                                 </p>
//                             </div>

//                             <div className="flex gap-4 justify-center w-full">
//                                 <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-xl px-4 py-3 text-center">
//                                     <div className="text-[#66b2b2] text-sm font-semibold">Calories</div>
//                                     <div className="text-white text-xl font-bold">{foodItems[currentIndex].calories}</div>
//                                 </div>
//                                 <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-xl px-4 py-3 text-center">
//                                     <div className="text-[#66b2b2] text-sm font-semibold">Protein</div>
//                                     <div className="text-white text-xl font-bold">{foodItems[currentIndex].protein}</div>
//                                 </div>
//                             </div>

//                             <div className="flex gap-4 justify-center">
//                                 <button
//                                     onClick={prevSlide}
//                                     className="w-14 h-14 rounded-full bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
//                                 >
//                                     <ChevronLeft className="text-white" size={24} />
//                                 </button>
//                                 <button
//                                     onClick={nextSlide}
//                                     className="w-14 h-14 rounded-full bg-slate-700/50 hover:bg-slate-600/50 border border-slate-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
//                                 >
//                                     <ChevronRight className="text-white" size={24} />
//                                 </button>
//                             </div>
//                         </div>

//                         {/* Slide Counter - Mobile */}
//                         <div className="bg-white/10 backdrop-blur rounded-full px-4 py-2 flex items-center gap-3 border border-white/20">
//                             <span className="text-sm text-slate-200 font-medium">{currentIndex + 1}</span>
//                             <span className="text-sm text-slate-400">/</span>
//                             <span className="text-sm text-slate-200 font-medium">{foodItems.length}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FoodCarousel;



// import React, { useEffect, useRef, useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// type FoodItem = {
//     id: number;
//     name: string;
//     description: string;
//     image: string;
//     calories: string;
//     protein: string;
// };

// const FoodCarousel: React.FC = () => {
//     const [currentIndex, setCurrentIndex] = useState<number>(0);

//     const foodItems: FoodItem[] = [
//         {
//             id: 1,
//             name: 'Protein Power Bowl',
//             description: 'High protein quinoa bowl',
//             image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop',
//             calories: '420 cal',
//             protein: '32g',
//         },
//         {
//             id: 2,
//             name: 'Green Detox Smoothie',
//             description: 'Kale, spinach & avocado blend',
//             image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=800&h=800&fit=crop',
//             calories: '180 cal',
//             protein: '8g',
//         },
//         {
//             id: 3,
//             name: 'Grilled Chicken Salad',
//             description: 'Fresh greens with lean protein',
//             image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=800&fit=crop',
//             calories: '350 cal',
//             protein: '28g',
//         },
//         {
//             id: 4,
//             name: 'Salmon & Veggies',
//             description: 'Omega-3 rich grilled salmon',
//             image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=800&fit=crop',
//             calories: '480 cal',
//             protein: '35g',
//         },
//         {
//             id: 5,
//             name: 'Acai Energy Bowl',
//             description: 'Antioxidant-packed breakfast',
//             image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&h=800&fit=crop',
//             calories: '320 cal',
//             protein: '12g',
//         },
//         {
//             id: 6,
//             name: 'Turkey Wrap',
//             description: 'Whole grain with lean turkey',
//             image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&h=800&fit=crop',
//             calories: '380 cal',
//             protein: '26g',
//         },
//         {
//             id: 7,
//             name: 'Berry Protein Shake',
//             description: 'Post-workout recovery blend',
//             image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&h=800&fit=crop',
//             calories: '240 cal',
//             protein: '24g',
//         },
//     ];

//     const nextSlide = () => setCurrentIndex((p) => (p + 1) % foodItems.length);
//     const prevSlide = () => setCurrentIndex((p) => (p - 1 + foodItems.length) % foodItems.length);

//     const getVisibleCards = () => {
//         const cards: Array<FoodItem & { position: number }> = [];
//         for (let i = 0; i < 3; i++) {
//             const index = (currentIndex + i) % foodItems.length;
//             cards.push({ ...foodItems[index], position: i });
//         }
//         return cards;
//     };

//     const currentItem = foodItems[currentIndex];

//     // ---------- Swipe / Drag logic (pointer events) ----------
//     const containerRef = useRef<HTMLDivElement | null>(null);
//     const innerRef = useRef<HTMLDivElement | null>(null);
//     const draggingRef = useRef<boolean>(false);
//     const startXRef = useRef<number>(0);
//     const deltaXRef = useRef<number>(0);
//     const SWIPE_THRESHOLD = 60; // px
//     const TRANSITION = 'transform 300ms ease';

//     useEffect(() => {
//         if (innerRef.current) {
//             innerRef.current.style.transition = TRANSITION;
//             innerRef.current.style.transform = '';
//             const t = window.setTimeout(() => {
//                 if (innerRef.current) innerRef.current.style.transition = 'none';
//             }, 300);
//             return () => window.clearTimeout(t);
//         }
//     }, [currentIndex]);

//     const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
//         // Only respond to primary mouse button + touch + pen
//         if (e.pointerType === 'mouse' && (e).button !== 0) return;
//         draggingRef.current = true;
//         startXRef.current = e.clientX;
//         deltaXRef.current = 0;

//         try {
//             // capture pointer so we continue to get events
//             (e.currentTarget as HTMLDivElement).setPointerCapture?.(e.pointerId);
//         } catch (captureErr) {
//             // log capture error but don't break behaviour// eslint-disable-next-line no-console
//             console.warn('pointer capture not supported', captureErr);
//         }

//         if (innerRef.current) innerRef.current.style.transition = 'none';
//     };

//     const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
//         if (!draggingRef.current) return;
//         const currentX = e.clientX;
//         deltaXRef.current = currentX - startXRef.current;

//         const dampened = Math.abs(deltaXRef.current) > 120 ? deltaXRef.current * 0.35 : deltaXRef.current;

//         if (innerRef.current) {
//             innerRef.current.style.transform = `translateX(${dampened}px)`;
//         }
//     };

//     const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
//         if (!draggingRef.current) return;
//         draggingRef.current = false;

//         try {
//             (e.currentTarget as HTMLDivElement).releasePointerCapture?.(e.pointerId);
//         } catch (releaseErr) {
//             console.warn('pointer release not supported', releaseErr);
//         }

//         const delta = deltaXRef.current;

//         if (innerRef.current) {
//             innerRef.current.style.transition = TRANSITION;
//             innerRef.current.style.transform = ''; // snap back
//         }

//         if (Math.abs(delta) > SWIPE_THRESHOLD) {
//             if (delta < 0) {
//                 setCurrentIndex((p) => (p + 1) % foodItems.length);
//             } else {
//                 setCurrentIndex((p) => (p - 1 + foodItems.length) % foodItems.length);
//             }
//         }

//         startXRef.current = 0;
//         deltaXRef.current = 0;
//     };

//     useEffect(() => {
//         const handler = (e: Event) => {
//             if (draggingRef.current) {
//                 e.preventDefault();
//             }
//         };
//         document.addEventListener('dragstart', handler);
//         return () => document.removeEventListener('dragstart', handler);
//     }, []);

//     // ---------- JSX ----------
//     return (
//         <section className="w-full bg-[#b2eaea] py-12">
//             <div className="max-w-7xl mx-auto px-6">
//                 {/* Heading */}
//                 <div className="text-center mb-10">
//                     <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-wide text-black">BEST SELLERS</h1>
//                 </div>

//                 {/* DESKTOP VIEW */}
//                 <div className="hidden lg:block max-w-6xl mx-auto">
//                     <div className="grid grid-cols-2 gap-16 items-center">
//                         {/* LEFT: Image (smaller) */}
//                         <div className="relative flex justify-center">
//                             <div className="relative w-full  aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
//                                 <img
//                                     src={currentItem.image}
//                                     alt={currentItem.name}
//                                     className="w-full h-full object-cover transition-all duration-500"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                             </div>

//                             {/* Slide Counter on Image */}
//                             <div className="absolute top-6 right-6 bg-black/25 backdrop-blur-md rounded-full px-2 py-2.5 border border-white/30">
//                                 <span className="text-black font-body font-semibold text-lg">{currentIndex + 1}</span>
//                                 <span className="text-[#66b2b2] mx-2">/</span>
//                                 <span className="text-black font-body text-lg">{foodItems.length}</span>
//                             </div>
//                         </div>

//                         {/* RIGHT: Details */}
//                         <div className="flex flex-col justify-center space-y-8 pl-4">
//                             <div>
//                                 <h2 className="text-5xl font-bold font-body text-black mb-4 leading-tight">
//                                     {currentItem.name}
//                                 </h2>
//                                 <p className="text-slate-400 font-body text-xl italic">{currentItem.description}</p>
//                             </div>

//                             <div className="flex gap-6">
//                                 <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-2xl p-6 text-center">
//                                     <div className="text-[#66b2b2] text-sm font-semibold uppercase tracking-wider mb-2">
//                                         Calories
//                                     </div>
//                                     <div className="text-[#18786F]  font-heading text-3xl font-bold">
//                                         {currentItem.calories}
//                                     </div>
//                                 </div>
//                                 <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-2xl p-6 text-center">
//                                     <div className="text-[#66b2b2] text-sm font-semibold uppercase tracking-wider mb-2">
//                                         Protein
//                                     </div>
//                                     <div className="text-[#18786F]  font-heading text-3xl font-bold">
//                                         {currentItem.protein}
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="flex gap-4 pt-2 justify-center">
//                                 {/* Prev Button - Desktop */}
//                                 <button
//                                     onClick={prevSlide}
//                                     className="w-14 h-14 rounded-full bg-slate-700/50 hover:bg-slate-600/50 
//                                     border border-slate-600 flex items-center justify-center 
//                                     transition-all duration-300 hover:scale-110 group"
//                                 >
//                                     <ChevronLeft
//                                         className="text-white group-hover:text-[#66b2b2] transition-colors"
//                                         size={28}
//                                     />
//                                 </button>

//                                 {/* Next Button - Desktop */}
//                                 <button
//                                     onClick={nextSlide}
//                                     className="w-14 h-14 rounded-full bg-slate-700/50 hover:bg-slate-600/50 
//                                     border border-slate-600 flex items-center justify-center 
//                                     transition-all duration-300 hover:scale-110 group"
//                                 >
//                                     <ChevronRight
//                                         className="text-white group-hover:text-[#66b2b2] transition-colors"
//                                         size={28}
//                                     />
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Thumbnail Navigation */}
//                     <div className="mt-12 flex justify-center gap-3 flex-wrap">
//                         {foodItems.map((item, index) => (
//                             <button
//                                 key={item.id}
//                                 onClick={() => setCurrentIndex(index)}
//                                 className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
//                                     index === currentIndex
//                                         ? 'ring-4 ring-[#66b2b2] scale-110'
//                                         : 'opacity-50 hover:opacity-100 hover:scale-105'
//                                 }`}
//                             >
//                                 <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* MOBILE VIEW - stacked cards with swipe/drag */}
//                 <div className="lg:hidden relative">
//                     <div className="flex flex-col items-center gap-6">
//                         {/* Stacked Cards */}
//                         <div
//                             className="relative w-full max-w-md h-[320px] md:h-[400px] flex items-center justify-center"
//                             ref={containerRef}
//                             onPointerDown={onPointerDown}
//                             onPointerMove={onPointerMove}
//                             onPointerUp={onPointerUp}
//                             onPointerCancel={onPointerUp}
//                             style={{ touchAction: 'pan-y' }}
//                         >
//                             <div ref={innerRef} className="w-full flex items-center justify-center relative">
//                                 {getVisibleCards().map((item) => {
//                                     const zIndex = 3 - item.position;
//                                     const rotation = item.position === 0 ? -8 : item.position === 1 ? 0 : 8;
//                                     const scale = 1 - item.position * 0.05;
//                                     const translateY = item.position * 10;
//                                     const translateX = item.position === 0 ? -25 : item.position === 2 ? 25 : 0;

//                                     return (
//                                         <div
//                                             key={item.id}
//                                             className="absolute w-[85%] max-w-[350px] aspect-square rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-out"
//                                             style={{
//                                                 transform: `rotate(${rotation}deg) scale(${scale}) translateY(${translateY}px) translateX(${translateX}px)`,
//                                                 zIndex,
//                                             }}
//                                         >
//                                             <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//                                             {item.position === 1 && (
//                                                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                                                     <div className="flex gap-3 mb-3">
//                                                         <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
//                                                             {item.calories}
//                                                         </span>
//                                                         <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
//                                                             {item.protein}
//                                                         </span>
//                                                     </div>
//                                                     <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
//                                                     <p className="text-slate-300 text-sm">{item.description}</p>
//                                                 </div>
//                                             )}
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                         </div>

//                         {/* Mobile Info Section */}
//                         <div className="w-full max-w-md flex flex-col items-center gap-6 px-4">
//                             <div className="text-center">
//                                 <h2 className="text-3xl font-bold text-black font-body mb-2 leading-tight">
//                                     {foodItems[currentIndex].name}
//                                 </h2>
//                                 <p className="text-slate-400 text-lg italic font-body">
//                                     {foodItems[currentIndex].description}
//                                 </p>
//                             </div>

//                             <div className="flex gap-4 justify-center w-full">
//                                 <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-xl px-4 py-3 text-center">
//                                     <div className="text-[#66b2b2] font-body text-sm font-semibold">Calories</div>
//                                     <div className="text-[#18786F]  font-heading text-l font-bold">
//                                         {foodItems[currentIndex].calories}
//                                     </div>
//                                 </div>
//                                 <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-xl px-4 py-3 text-center">
//                                     <div className="text-[#66b2b2] font-body text-sm font-semibold">Protein</div>
//                                     <div className="text-[#18786F]  font-heading text-l font-bold">
//                                         {foodItems[currentIndex].protein}
//                                     </div>
//                                 </div>
//                             </div>
//                             {/* Chevrons removed on mobile — swipe to change slides */}
//                         </div>

//                         {/* Slide Counter - Mobile */}
//                         {/* <div className="bg-white/10 backdrop-blur rounded-full px-4 py-2 flex items-center gap-3 border border-white/20">
//                             <span className="text-sm text-slate-200 font-medium">{currentIndex + 1}</span>
//                             <span className="text-sm text-slate-400">/</span>
//                             <span className="text-sm text-slate-200 font-medium">{foodItems.length}</span>
//                         </div> */}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FoodCarousel;


// import React, { useEffect, useRef, useState } from 'react';

// type FoodItem = {
//     id: number;
//     name: string;
//     description: string;
//     image: string;
//     calories: string;
//     protein: string;
// };

// const AUTOPLAY_INTERVAL = 3500; // ms

// const FoodCarousel: React.FC = () => {
//     const [currentIndex, setCurrentIndex] = useState<number>(0);
//     const [isPaused, setIsPaused] = useState<boolean>(false); // pause autoplay when hovering or interacting

//     const foodItems: FoodItem[] = [
//         {
//             id: 1,
//             name: 'Protein Power Bowl',
//             description: 'High protein quinoa bowl',
//             image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop',
//             calories: '420 cal',
//             protein: '32g',
//         },
//         {
//             id: 2,
//             name: 'Green Detox Smoothie',
//             description: 'Kale, spinach & avocado blend',
//             image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=800&h=800&fit=crop',
//             calories: '180 cal',
//             protein: '8g',
//         },
//         {
//             id: 3,
//             name: 'Grilled Chicken Salad',
//             description: 'Fresh greens with lean protein',
//             image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=800&fit=crop',
//             calories: '350 cal',
//             protein: '28g',
//         },
//         {
//             id: 4,
//             name: 'Salmon & Veggies',
//             description: 'Omega-3 rich grilled salmon',
//             image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=800&fit=crop',
//             calories: '480 cal',
//             protein: '35g',
//         },
//         {
//             id: 5,
//             name: 'Acai Energy Bowl',
//             description: 'Antioxidant-packed breakfast',
//             image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&h=800&fit=crop',
//             calories: '320 cal',
//             protein: '12g',
//         },
//         {
//             id: 6,
//             name: 'Turkey Wrap',
//             description: 'Whole grain with lean turkey',
//             image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&h=800&fit=crop',
//             calories: '380 cal',
//             protein: '26g',
//         },
//         {
//             id: 7,
//             name: 'Berry Protein Shake',
//             description: 'Post-workout recovery blend',
//             image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&h=800&fit=crop',
//             calories: '240 cal',
//             protein: '24g',
//         },
//     ];

//     const nextSlide = () => setCurrentIndex((p) => (p + 1) % foodItems.length);
//     const prevSlide = () => setCurrentIndex((p) => (p - 1 + foodItems.length) % foodItems.length);

//     const getVisibleCards = () => {
//         const cards: Array<FoodItem & { position: number }> = [];
//         for (let i = 0; i < 3; i++) {
//             const index = (currentIndex + i) % foodItems.length;
//             cards.push({ ...foodItems[index], position: i });
//         }
//         return cards;
//     };

//     const currentItem = foodItems[currentIndex];

//     // ---------- Swipe / Drag logic (pointer events) ----------
//     const containerRef = useRef<HTMLDivElement | null>(null);
//     const innerRef = useRef<HTMLDivElement | null>(null);
//     const draggingRef = useRef<boolean>(false);
//     const startXRef = useRef<number>(0);
//     const deltaXRef = useRef<number>(0);
//     const SWIPE_THRESHOLD = 60; // px
//     const TRANSITION = 'transform 300ms ease';

//     // Pause autoplay while interacting (dragging), or when user hovers desktop
//     useEffect(() => {
//         if (draggingRef.current) setIsPaused(true);
//     }, []);

//     useEffect(() => {
//         // autoplay effect
//         if (isPaused) return undefined;
//         const id = window.setInterval(() => {
//             setCurrentIndex((p) => (p + 1) % foodItems.length);
//         }, AUTOPLAY_INTERVAL);
//         return () => window.clearInterval(id);
//     }, [isPaused, currentIndex, foodItems.length]);

//     // Keep inner ref transition behavior on index change (snap effect)
//     useEffect(() => {
//         if (innerRef.current) {
//             innerRef.current.style.transition = TRANSITION;
//             innerRef.current.style.transform = '';
//             const t = window.setTimeout(() => {
//                 if (innerRef.current) innerRef.current.style.transition = 'none';
//             }, 300);
//             return () => window.clearTimeout(t);
//         }
//     }, [currentIndex]);

//     const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
//         // Only respond to primary mouse button + touch + pen
//         // Note: React's PointerEvent doesn't expose .button on the event typed as PointerEvent, so cast when needed.
//         if ((e as unknown as PointerEvent).pointerType === 'mouse' && (e as any).button !== 0) return;
//         draggingRef.current = true;
//         setIsPaused(true); // pause autoplay while dragging
//         startXRef.current = e.clientX;
//         deltaXRef.current = 0;

//         try {
//             (e.currentTarget as HTMLDivElement).setPointerCapture?.(e.pointerId);
//         } catch (captureErr) {
//             console.warn('pointer capture not supported', captureErr);
//         }

//         if (innerRef.current) innerRef.current.style.transition = 'none';
//     };

//     const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
//         if (!draggingRef.current) return;
//         const currentX = e.clientX;
//         deltaXRef.current = currentX - startXRef.current;

//         const dampened = Math.abs(deltaXRef.current) > 120 ? deltaXRef.current * 0.35 : deltaXRef.current;

//         if (innerRef.current) {
//             innerRef.current.style.transform = `translateX(${dampened}px)`;
//         }
//     };

//     const endDragging = (e?: React.PointerEvent<HTMLDivElement>) => {
//         if (!draggingRef.current) return;
//         draggingRef.current = false;

//         try {
//             if (e) (e.currentTarget as HTMLDivElement).releasePointerCapture?.(e.pointerId);
//         } catch (releaseErr) {
//             console.warn('pointer release not supported', releaseErr);
//         }

//         const delta = deltaXRef.current;

//         if (innerRef.current) {
//             innerRef.current.style.transition = TRANSITION;
//             innerRef.current.style.transform = ''; // snap back
//         }

//         if (Math.abs(delta) > SWIPE_THRESHOLD) {
//             if (delta < 0) {
//                 setCurrentIndex((p) => (p + 1) % foodItems.length);
//             } else {
//                 setCurrentIndex((p) => (p - 1 + foodItems.length) % foodItems.length);
//             }
//         }

//         startXRef.current = 0;
//         deltaXRef.current = 0;

//         // allow autoplay to resume after a short delay so user sees the effect
//         window.setTimeout(() => setIsPaused(false), 900);
//     };

//     const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => endDragging(e);
//     const onPointerCancel = (e: React.PointerEvent<HTMLDivElement>) => endDragging(e);

//     useEffect(() => {
//         const handler = (e: Event) => {
//             if (draggingRef.current) e.preventDefault();
//         };
//         document.addEventListener('dragstart', handler);
//         return () => document.removeEventListener('dragstart', handler);
//     }, []);

//     // Thumbnail click: jump and temporarily pause autoplay
//     const onThumbnailClick = (index: number) => {
//         setCurrentIndex(index);
//         setIsPaused(true);
//         // resume after short delay
//         window.setTimeout(() => setIsPaused(false), 1800);
//     };

//     // Hover handlers for desktop area (pause on hover)
//     const onMouseEnterDesktop = () => setIsPaused(true);
//     const onMouseLeaveDesktop = () => {
//         // resume with a slight delay for nicer UX
//         window.setTimeout(() => setIsPaused(false), 600);
//     };

//     // ---------- JSX ----------
//     return (
//         <section className="w-full bg-[#b2eaea] py-12">
//             <div className="max-w-7xl mx-auto px-6">
//                 {/* Heading */}
//                 <div className="text-center mb-10">
//                     <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-wide text-black">BEST SELLERS</h1>
//                 </div>

//                 {/* DESKTOP VIEW */}
//                 <div
//                     className="hidden lg:block max-w-6xl mx-auto"
//                     onMouseEnter={onMouseEnterDesktop}
//                     onMouseLeave={onMouseLeaveDesktop}
//                 >
//                     <div className="grid grid-cols-2 gap-16 items-center">
//                         {/* LEFT: Image (smaller) */}
//                         <div className="relative flex justify-center">
//                             <div className="relative w-full  aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
//                                 <img
//                                     src={currentItem.image}
//                                     alt={currentItem.name}
//                                     className="w-full h-full object-cover transition-all duration-500"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                             </div>

//                             {/* Slide Counter on Image */}
//                             <div className="absolute top-6 right-6 bg-black/25 backdrop-blur-md rounded-full px-2 py-2.5 border border-white/30">
//                                 <span className="text-black font-body font-semibold text-lg">{currentIndex + 1}</span>
//                                 <span className="text-[#66b2b2] mx-2">/</span>
//                                 <span className="text-black font-body text-lg">{foodItems.length}</span>
//                             </div>
//                         </div>

//                         {/* RIGHT: Details */}
//                         <div className="flex flex-col justify-center space-y-8 pl-4">
//                             <div>
//                                 <h2 className="text-5xl font-bold font-body text-black mb-4 leading-tight">
//                                     {currentItem.name}
//                                 </h2>
//                                 <p className="text-slate-400 font-body text-xl italic">{currentItem.description}</p>
//                             </div>

//                             <div className="flex gap-6">
//                                 <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-2xl p-6 text-center">
//                                     <div className="text-[#66b2b2] text-sm font-semibold uppercase tracking-wider mb-2">
//                                         Calories
//                                     </div>
//                                     <div className="text-[#18786F]  font-heading text-3xl font-bold">
//                                         {currentItem.calories}
//                                     </div>
//                                 </div>
//                                 <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-2xl p-6 text-center">
//                                     <div className="text-[#66b2b2] text-sm font-semibold uppercase tracking-wider mb-2">
//                                         Protein
//                                     </div>
//                                     <div className="text-[#18786F]  font-heading text-3xl font-bold">
//                                         {currentItem.protein}
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="flex gap-4 pt-2 justify-center">
//                                 {/* Previously nav chevrons — removed per request; autoplay handles changing slides.
//                                     If you'd like small hidden controls for testing, you can uncomment and use them. */}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Thumbnail Navigation */}
//                     <div className="mt-12 flex justify-center gap-3 flex-wrap">
//                         {foodItems.map((item, index) => (
//                             <button
//                                 key={item.id}
//                                 onClick={() => onThumbnailClick(index)}
//                                 className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
//                                     index === currentIndex
//                                         ? 'ring-4 ring-[#66b2b2] scale-110'
//                                         : 'opacity-50 hover:opacity-100 hover:scale-105'
//                                 }`}
//                             >
//                                 <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* MOBILE VIEW - stacked cards with swipe/drag */}
//                 <div className="lg:hidden relative">
//                     <div className="flex flex-col items-center gap-6">
//                         {/* Stacked Cards */}
//                         <div
//                             className="relative w-full max-w-md h-[320px] md:h-[400px] flex items-center justify-center"
//                             ref={containerRef}
//                             onPointerDown={onPointerDown}
//                             onPointerMove={onPointerMove}
//                             onPointerUp={onPointerUp}
//                             onPointerCancel={onPointerCancel}
//                             style={{ touchAction: 'pan-y' }}
//                         >
//                             <div ref={innerRef} className="w-full flex items-center justify-center relative">
//                                 {getVisibleCards().map((item) => {
//                                     const zIndex = 3 - item.position;
//                                     const rotation = item.position === 0 ? -8 : item.position === 1 ? 0 : 8;
//                                     const scale = 1 - item.position * 0.05;
//                                     const translateY = item.position * 10;
//                                     const translateX = item.position === 0 ? -25 : item.position === 2 ? 25 : 0;

//                                     return (
//                                         <div
//                                             key={item.id}
//                                             className="absolute w-[85%] max-w-[350px] aspect-square rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-out"
//                                             style={{
//                                                 transform: `rotate(${rotation}deg) scale(${scale}) translateY(${translateY}px) translateX(${translateX}px)`,
//                                                 zIndex,
//                                             }}
//                                         >
//                                             <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//                                             {item.position === 1 && (
//                                                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                                                     <div className="flex gap-3 mb-3">
//                                                         <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
//                                                             {item.calories}
//                                                         </span>
//                                                         <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
//                                                             {item.protein}
//                                                         </span>
//                                                     </div>
//                                                     <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
//                                                     <p className="text-slate-300 text-sm">{item.description}</p>
//                                                 </div>
//                                             )}
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                         </div>

//                         {/* Mobile Info Section */}
//                         <div className="w-full max-w-md flex flex-col items-center gap-6 px-4">
//                             <div className="text-center">
//                                 <h2 className="text-3xl font-bold text-black font-body mb-2 leading-tight">
//                                     {foodItems[currentIndex].name}
//                                 </h2>
//                                 <p className="text-slate-400 text-lg italic font-body">
//                                     {foodItems[currentIndex].description}
//                                 </p>
//                             </div>

//                             <div className="flex gap-4 justify-center w-full">
//                                 <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-xl px-4 py-3 text-center">
//                                     <div className="text-[#66b2b2] font-body text-sm font-semibold">Calories</div>
//                                     <div className="text-[#18786F]  font-heading text-l font-bold">
//                                         {foodItems[currentIndex].calories}
//                                     </div>
//                                 </div>
//                                 <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-xl px-4 py-3 text-center">
//                                     <div className="text-[#66b2b2] font-body text-sm font-semibold">Protein</div>
//                                     <div className="text-[#18786F]  font-heading text-l font-bold">
//                                         {foodItems[currentIndex].protein}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Slide Counter - Mobile (optional; uncomment if you want) */}
//                         {/* <div className="bg-white/10 backdrop-blur rounded-full px-4 py-2 flex items-center gap-3 border border-white/20">
//                             <span className="text-sm text-slate-200 font-medium">{currentIndex + 1}</span>
//                             <span className="text-sm text-slate-400">/</span>
//                             <span className="text-sm text-slate-200 font-medium">{foodItems.length}</span>
//                         </div> */}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FoodCarousel;



// import React, { useEffect, useRef, useState } from 'react';

// type FoodItem = {
//     id: number;
//     name: string;
//     description: string;
//     image: string;
//     calories: string;
//     protein: string;
// };

// const AUTOPLAY_INTERVAL = 3500; // ms
// const SWIPE_THRESHOLD = 60; // px
// const TRANSITION = 'transform 300ms ease';

// const FoodCarousel: React.FC = () => {
//     const [currentIndex, setCurrentIndex] = useState<number>(0);
//     const [isPaused, setIsPaused] = useState<boolean>(false);

//     const foodItems: FoodItem[] = [
//         {
//             id: 1,
//             name: 'Protein Power Bowl',
//             description: 'High protein quinoa bowl',
//             image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=800&fit=crop',
//             calories: '420 cal',
//             protein: '32g',
//         },
//         {
//             id: 2,
//             name: 'Green Detox Smoothie',
//             description: 'Kale, spinach & avocado blend',
//             image: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=800&h=800&fit=crop',
//             calories: '180 cal',
//             protein: '8g',
//         },
//         {
//             id: 3,
//             name: 'Grilled Chicken Salad',
//             description: 'Fresh greens with lean protein',
//             image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=800&fit=crop',
//             calories: '350 cal',
//             protein: '28g',
//         },
//         {
//             id: 4,
//             name: 'Salmon & Veggies',
//             description: 'Omega-3 rich grilled salmon',
//             image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&h=800&fit=crop',
//             calories: '480 cal',
//             protein: '35g',
//         },
//         {
//             id: 5,
//             name: 'Acai Energy Bowl',
//             description: 'Antioxidant-packed breakfast',
//             image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800&h=800&fit=crop',
//             calories: '320 cal',
//             protein: '12g',
//         },
//         {
//             id: 6,
//             name: 'Turkey Wrap',
//             description: 'Whole grain with lean turkey',
//             image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&h=800&fit=crop',
//             calories: '380 cal',
//             protein: '26g',
//         },
//         {
//             id: 7,
//             name: 'Berry Protein Shake',
//             description: 'Post-workout recovery blend',
//             image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=800&h=800&fit=crop',
//             calories: '240 cal',
//             protein: '24g',
//         },
//     ];

//     // helper to compute visible stacked cards for mobile
//     const getVisibleCards = () => {
//         const cards: Array<FoodItem & { position: number }> = [];
//         for (let i = 0; i < 3; i++) {
//             const index = (currentIndex + i) % foodItems.length;
//             cards.push({ ...foodItems[index], position: i });
//         }
//         return cards;
//     };

//     const currentItem = foodItems[currentIndex];

//     // pointer/drag state
//     const containerRef = useRef<HTMLDivElement | null>(null);
//     const innerRef = useRef<HTMLDivElement | null>(null);
//     const draggingRef = useRef<boolean>(false);
//     const startXRef = useRef<number>(0);
//     const deltaXRef = useRef<number>(0);

//     // AUTOPLAY: run when not paused
//     useEffect(() => {
//         if (isPaused) return;
//         const id = window.setInterval(() => {
//             setCurrentIndex((p) => (p + 1) % foodItems.length);
//         }, AUTOPLAY_INTERVAL);

//         return () => {
//             clearInterval(id);
//         };
//         // include only values that require restarting the interval
//     }, [isPaused, foodItems.length]);

//     // keep innerRef transition behavior on index change
//     useEffect(() => {
//         if (!innerRef.current) return;
//         innerRef.current.style.transition = TRANSITION;
//         innerRef.current.style.transform = '';
//         const t = window.setTimeout(() => {
//             if (innerRef.current) innerRef.current.style.transition = 'none';
//         }, 300);
//         return () => clearTimeout(t);
//     }, [currentIndex]);

//     // pointer handlers (typed correctly)
//     const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
//         // ignore non-primary mouse buttons: buttons === 1 means primary pressed
//         if (e.pointerType === 'mouse' && e.buttons !== 1) return;
//         draggingRef.current = true;
//         setIsPaused(true);
//         startXRef.current = e.clientX;
//         deltaXRef.current = 0;

//         try {
//             (e.currentTarget as HTMLDivElement).setPointerCapture?.(e.pointerId);
//         } catch (err) {
//             // pointer capture may not be supported in all browsers
//             console.warn('pointer capture not supported', err);
//         }

//         if (innerRef.current) innerRef.current.style.transition = 'none';
//     };

//     const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
//         if (!draggingRef.current) return;
//         const currentX = e.clientX;
//         deltaXRef.current = currentX - startXRef.current;

//         const dampened = Math.abs(deltaXRef.current) > 120 ? deltaXRef.current * 0.35 : deltaXRef.current;

//         if (innerRef.current) {
//             innerRef.current.style.transform = `translateX(${dampened}px)`;
//         }
//     };

//     const finishDrag = (e?: React.PointerEvent<HTMLDivElement>) => {
//         if (!draggingRef.current) return;
//         draggingRef.current = false;

//         try {
//             if (e) (e.currentTarget as HTMLDivElement).releasePointerCapture?.(e.pointerId);
//         } catch (err) {
//             console.warn('pointer release not supported', err);
//         }

//         const delta = deltaXRef.current;

//         if (innerRef.current) {
//             innerRef.current.style.transition = TRANSITION;
//             innerRef.current.style.transform = ''; // snap back
//         }

//         if (Math.abs(delta) > SWIPE_THRESHOLD) {
//             if (delta < 0) {
//                 setCurrentIndex((p) => (p + 1) % foodItems.length);
//             } else {
//                 setCurrentIndex((p) => (p - 1 + foodItems.length) % foodItems.length);
//             }
//         }

//         startXRef.current = 0;
//         deltaXRef.current = 0;

//         // resume autoplay after a small delay for nicer UX
//         // window.setTimeout(() => setIsPaused(false), 900);
//     };

//     const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => finishDrag(e);
//     const onPointerCancel = (e: React.PointerEvent<HTMLDivElement>) => finishDrag(e);

//     // prevent native dragstart during dragging
//     useEffect(() => {
//         const handler = (ev: Event) => {
//             if (draggingRef.current) ev.preventDefault();
//         };
//         document.addEventListener('dragstart', handler);
//         return () => document.removeEventListener('dragstart', handler);
//     }, []);

//     // thumbnail click: jump and temporarily pause autoplay
//     const onThumbnailClick = (index: number) => {
//         setCurrentIndex(index);
//         setIsPaused(true);
//         window.setTimeout(() => setIsPaused(false), 1000);
//     };

//     // hover pause/resume (desktop)
//     // const onMouseEnterDesktop = () => setIsPaused(true);
//     // const onMouseLeaveDesktop = () => setTimeout(() => setIsPaused(false), 600);

//     return (
//         <section className="w-full bg-[#b2eaea] py-12">
//             <div className="max-w-7xl mx-auto px-6">
//                 {/* Heading */}
//                 <div className="text-center mb-10">
//                     <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-wide text-black">BEST SELLERS</h1>
//                 </div>

//                 {/* DESKTOP VIEW */}
//                 <div
//                     className="hidden lg:block max-w-6xl mx-auto"
//                     // onMouseEnter={onMouseEnterDesktop}
//                     // onMouseLeave={onMouseLeaveDesktop}
//                 >
//                     <div className="grid grid-cols-2 gap-16 items-center">
//                         {/* LEFT: Image */}
//                         <div className="relative flex justify-center">
//                             <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
//                                 <img
//                                     src={currentItem.image}
//                                     alt={currentItem.name}
//                                     className="w-full h-full object-cover transition-all duration-500"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                             </div>

//                             {/* Slide Counter on Image */}
//                             {/* <div className="absolute top-6 right-6 bg-black/25 backdrop-blur-md rounded-full px-2 py-2.5 border border-white/30">
//                                 <span className="text-black font-body font-semibold text-lg">{currentIndex + 1}</span>
//                                 <span className="text-[#66b2b2] mx-2">/</span>
//                                 <span className="text-black font-body text-lg">{foodItems.length}</span>
//                             </div> */}
//                         </div>

//                         {/* RIGHT: Details */}
//                         <div className="flex flex-col justify-center space-y-8 pl-4">
//                             <div>
//                                 <h2 className="text-5xl font-bold font-body text-black mb-4 leading-tight">
//                                     {currentItem.name}
//                                 </h2>
//                                 <p className="text-slate-400 font-body text-xl italic">{currentItem.description}</p>
//                             </div>

//                             <div className="flex gap-6">
//                                 <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-2xl p-6 text-center">
//                                     <div className="text-[#66b2b2] text-sm font-semibold uppercase tracking-wider mb-2">
//                                         Calories
//                                     </div>
//                                     <div className="text-[#18786F]  font-heading text-3xl font-bold">
//                                         {currentItem.calories}
//                                     </div>
//                                 </div>
//                                 <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-2xl p-6 text-center">
//                                     <div className="text-[#66b2b2] text-sm font-semibold uppercase tracking-wider mb-2">
//                                         Protein
//                                     </div>
//                                     <div className="text-[#18786F]  font-heading text-3xl font-bold">
//                                         {currentItem.protein}
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="flex gap-4 pt-2 justify-center">
//                                 {/* No chevrons per request; autoplay handles navigation */}
//                             </div>
//                         </div>
//                     </div>

//                     {/* Thumbnail Navigation */}
//                     <div className="mt-12 flex justify-center gap-3 flex-wrap">
//                         {foodItems.map((item, index) => (
//                             <button
//                                 key={item.id}
//                                 onClick={() => onThumbnailClick(index)}
//                                 className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
//                                     index === currentIndex
//                                         ? 'ring-4 ring-[#66b2b2] scale-110'
//                                         : 'opacity-50 hover:opacity-100 hover:scale-105'
//                                 }`}
//                             >
//                                 <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* MOBILE VIEW - stacked cards with swipe/drag */}
//                 <div className="lg:hidden relative">
//                     <div className="flex flex-col items-center gap-6">
//                         {/* Stacked Cards */}
//                         <div
//                             className="relative w-full max-w-md h-[320px] md:h-[400px] flex items-center justify-center"
//                             ref={containerRef}
//                             onPointerDown={onPointerDown}
//                             onPointerMove={onPointerMove}
//                             onPointerUp={onPointerUp}
//                             onPointerCancel={onPointerCancel}
//                             style={{ touchAction: 'pan-y' }}
//                         >
//                             <div ref={innerRef} className="w-full flex items-center justify-center relative">
//                                 {getVisibleCards().map((item) => {
//                                     const zIndex = 3 - item.position;
//                                     const rotation = item.position === 0 ? -8 : item.position === 1 ? 0 : 8;
//                                     const scale = 1 - item.position * 0.05;
//                                     const translateY = item.position * 10;
//                                     const translateX = item.position === 0 ? -25 : item.position === 2 ? 25 : 0;

//                                     return (
//                                         <div
//                                             key={item.id}
//                                             className="absolute w-[85%] max-w-[350px] aspect-square rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-out"
//                                             style={{
//                                                 transform: `rotate(${rotation}deg) scale(${scale}) translateY(${translateY}px) translateX(${translateX}px)`,
//                                                 zIndex,
//                                             }}
//                                         >
//                                             <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                                             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//                                             {item.position === 1 && (
//                                                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                                                     <div className="flex gap-3 mb-3">
//                                                         <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
//                                                             {item.calories}
//                                                         </span>
//                                                         <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
//                                                             {item.protein}
//                                                         </span>
//                                                     </div>
//                                                     <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
//                                                     <p className="text-slate-300 text-sm">{item.description}</p>
//                                                 </div>
//                                             )}
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                         </div>

//                         {/* Mobile Info Section */}
//                         <div className="w-full max-w-md flex flex-col items-center gap-6 px-4">
//                             <div className="text-center">
//                                 <h2 className="text-3xl font-bold text-black font-body mb-2 leading-tight">
//                                     {foodItems[currentIndex].name}
//                                 </h2>
//                                 <p className="text-slate-400 text-lg italic font-body">
//                                     {foodItems[currentIndex].description}
//                                 </p>
//                             </div>

//                             <div className="flex gap-4 justify-center w-full">
//                                 <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-xl px-4 py-3 text-center">
//                                     <div className="text-[#66b2b2] font-body text-sm font-semibold">Calories</div>
//                                     <div className="text-[#18786F]  font-heading text-l font-bold">
//                                         {foodItems[currentIndex].calories}
//                                     </div>
//                                 </div>
//                                 <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-xl px-4 py-3 text-center">
//                                     <div className="text-[#66b2b2] font-body text-sm font-semibold">Protein</div>
//                                     <div className="text-[#18786F]  font-heading text-l font-bold">
//                                         {foodItems[currentIndex].protein}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default FoodCarousel;



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
            className="w-full py-12 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading with fade-up animation */}
                <div
                    className={`text-center mb-10 transition-all duration-700 ${
                        loaded && isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
                    }`}
                >
                    <h1 className="text-4xl md:text-6xl font-bold font-heading tracking-wide text-[#5fb8a6] ">
                        BEST SELLERS
                    </h1>
                </div>

                {/* DESKTOP VIEW */}
                <div className="hidden lg:block max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 gap-16 items-center">
                        {/* LEFT: Image */}
                        <div className="relative flex justify-center">
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
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

                        {/* RIGHT: Details with fade-up (initial) and fade-down (slide change) */}
                        <div className="flex flex-col justify-center space-y-8 pl-4">
                            {/* Title and Description */}
                            <div
                                className={`transition-all duration-500 ${
                                    // Initial load: fade-up from bottom
                                    !loaded || !isVisible
                                        ? 'opacity-0 transform translate-y-10'
                                        : // Slide change: fade-down
                                        fadeDown
                                        ? 'opacity-0 transform translate-y-6'
                                        : // Normal state
                                          'opacity-100 transform translate-y-0'
                                }`}
                            >
                                <h2 className="text-5xl font-bold font-body text-gray-400 mb-4 leading-tight">
                                    {currentItem.name}
                                </h2>
                                <p className="text-slate-400 font-body text-xl italic">{currentItem.description}</p>
                            </div>

                            {/* Calories and Protein Boxes with fade-up animation */}
                            <div
                                className={`flex gap-6 transition-all duration-500 delay-200 ${
                                    // Initial load: fade-up from bottom with delay
                                    !loaded || !isVisible
                                        ? 'opacity-0 transform translate-y-10'
                                        : // Slide change: fade-down
                                        fadeDown
                                        ? 'opacity-0 transform translate-y-6'
                                        : // Normal state
                                          'opacity-100 transform translate-y-0'
                                }`}
                            >
                                {/* Calories Box */}
                                <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-2xl p-6 text-center">
                                    <div className="text-[#66b2b2] text-sm font-semibold uppercase tracking-wider mb-2">
                                        Calories
                                    </div>
                                    <div className="text-[#18786F] font-heading text-3xl font-bold">
                                        {currentItem.calories}
                                    </div>
                                </div>

                                {/* Protein Box */}
                                <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-2xl p-6 text-center">
                                    <div className="text-[#66b2b2] text-sm font-semibold uppercase tracking-wider mb-2">
                                        Protein
                                    </div>
                                    <div className="text-[#18786F] font-heading text-3xl font-bold">
                                        {currentItem.protein}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Thumbnail Navigation */}
                    <div
                        className={`mt-12 flex justify-center gap-3 flex-wrap transition-all duration-700 delay-300 ${
                            loaded && isVisible
                                ? 'opacity-100 transform translate-y-0'
                                : 'opacity-0 transform translate-y-10'
                        }`}
                    >
                        {foodItems.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => onThumbnailClick(index)}
                                className={`w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'ring-4 ring-[#66b2b2] scale-110'
                                        : 'opacity-50 hover:opacity-100 hover:scale-105'
                                }`}
                            >
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* MOBILE VIEW */}
                <div className="lg:hidden relative">
                    <div className="flex flex-col items-center gap-6">
                        {/* Stacked Cards */}
                        <div
                            className="relative w-full max-w-md h-[320px] md:h-[400px] flex items-center justify-center"
                            ref={containerRef}
                            onPointerDown={onPointerDown}
                            onPointerMove={onPointerMove}
                            onPointerUp={onPointerUp}
                            onPointerCancel={onPointerCancel}
                            style={{ touchAction: 'pan-y' }}
                        >
                            <div ref={innerRef} className="w-full flex items-center justify-center relative">
                                {getVisibleCards().map((item) => {
                                    const zIndex = 3 - item.position;
                                    const rotation = item.position === 0 ? -8 : item.position === 1 ? 0 : 8;
                                    const scale = 1 - item.position * 0.05;
                                    const translateY = item.position * 10;
                                    const translateX = item.position === 0 ? -25 : item.position === 2 ? 25 : 0;

                                    return (
                                        <div
                                            key={item.id}
                                            className="absolute w-[85%] max-w-[350px] aspect-square rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 ease-out"
                                            style={{
                                                transform: `rotate(${rotation}deg) scale(${scale}) translateY(${translateY}px) translateX(${translateX}px)`,
                                                zIndex,
                                            }}
                                        >
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                            {item.position === 1 && (
                                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                                    <div className="flex gap-3 mb-3">
                                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
                                                            {item.calories}
                                                        </span>
                                                        <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium">
                                                            {item.protein}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-2xl font-bold mb-1">{item.name}</h3>
                                                    <p className="text-slate-300 text-sm">{item.description}</p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Mobile Info Section with fade-up animation */}
                        <div className="w-full max-w-md flex flex-col items-center gap-6 px-4">
                            {/* Title and Description with fade-up */}
                            <div
                                className={`text-center transition-all duration-500 ${
                                    !loaded || !isVisible
                                        ? 'opacity-0 transform translate-y-8'
                                        : fadeDown
                                        ? 'opacity-0 transform translate-y-4'
                                        : 'opacity-100 transform translate-y-0'
                                }`}
                            >
                                <h2 className="text-3xl font-bold text-black font-body mb-2 leading-tight">
                                    {foodItems[currentIndex].name}
                                </h2>
                                <p className="text-slate-400 text-lg italic font-body">
                                    {foodItems[currentIndex].description}
                                </p>
                            </div>

                            {/* Calories and Protein Boxes with fade-up animation and delay */}
                            <div
                                className={`flex gap-4 justify-center w-full transition-all duration-500 delay-200 ${
                                    !loaded || !isVisible
                                        ? 'opacity-0 transform translate-y-8'
                                        : fadeDown
                                        ? 'opacity-0 transform translate-y-4'
                                        : 'opacity-100 transform translate-y-0'
                                }`}
                            >
                                <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-xl px-4 py-3 text-center">
                                    <div className="text-[#66b2b2] font-body text-sm font-semibold">Calories</div>
                                    <div className="text-[#18786F] font-heading text-l font-bold">
                                        {foodItems[currentIndex].calories}
                                    </div>
                                </div>
                                <div className="flex-1 bg-[#66b2b2]/20 border-2 border-[#66b2b2] rounded-xl px-4 py-3 text-center">
                                    <div className="text-[#66b2b2] font-body text-sm font-semibold">Protein</div>
                                    <div className="text-[#18786F] font-heading text-l font-bold">
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