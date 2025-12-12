// import React from "react";
// import {Atom} from "react-loading-indicators";

// const SplashScreen: React.FC =()=> {
//     return (
//         <div className="Fixed inset-0 flex items-center justify-center bg-white z-50">
//             <Atom color="#32cd32" size="medium" text="" textColor="" />
//         </div>
//     );
// };
// export default SplashScreen;

import React from 'react';
import {Atom} from 'react-loading-indicators';

const SplashScreen: React.FC = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-[#306c6c] z-50">
            <Atom color="#0000" size="medium" text="" textColor="" />
            {/* <LifeLine color="#2596be" size="medium" text="" textColor="" /> */}
        </div>
    );
};

export default SplashScreen;
