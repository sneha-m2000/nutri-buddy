// // import plateImg from '../assets/plate.png';
// import homeVideo from "../assets/bg-vedio.mp4";   // VIDEO COMMENTED
// import WhatWeOffer from "./WhatWeOffer"; 
// // import bgImg from '../assets/home_bg.jpg'

// const Home = () => {
//     return (
//         <section className="relative w-full h-screen overflow-hidden">
//             {/* ---------------------- VIDEO (COMMENTED) ---------------------- */}
            
//       <video
//         className="absolute inset-0 w-full h-full object-cover z-0"
//         autoPlay
//         loop
//         muted
//         playsInline
//         preload="auto"
//       >
//         <source src={homeVideo} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
     
//             {/* -------------------------------------------------------------- */}

//             {/* FULL-SECTION BACKGROUND IMAGE */}
//             {/* <div
//                 className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
//                 style={{ backgroundImage: `url(${bgImg})` }}
//             ></div> */}

//             {/* CONTENT ON TOP */}
//             {/* <div className="relative z-10 flex h-full"> */}
//                 {/* IMAGE LEFT */}
//                 {/* <div className="w-1/2 flex items-end">
//                     <img src={plateImg} alt="plate" className="h-[80%] w-auto object-contain drop-shadow-2xl" />
//                 </div>
//             </div> */}
//         </section>
//     );
// };

// export default Home;


import homeVideo from '../../assets/bg-vedio.mp4';
import WhatWeOffer from '../Home/components/whatweoffer';
import BestsellerCarousel from './components/BestsellerCarousel';
import Footer from './components/Footer';
import PromiseSection from './components/Promise_Section';
import TestimonialCarousel from './components/Review';

const Home = () => {
    return (
        <>
            {/* HOME SECTION */}
            <section className="relative w-full h-screen overflow-hidden" style={{ zIndex: 1 }}>
                {/* BACKGROUND VIDEO */}
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ zIndex: 0 }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                >
                    <source src={homeVideo} type="video/mp4" />
                </video>
            </section>
            {/* CALLING THE WHAT WE OFFER SECTION */}
            <WhatWeOffer />
            {/* CALLING THE BEST SELLER CAROUSEL SECTION */}
            <BestsellerCarousel />
            <PromiseSection />
            <TestimonialCarousel />
            <Footer />
        </>
    );
};

export default Home;
