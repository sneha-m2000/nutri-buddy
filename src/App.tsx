import React, { useEffect, useState } from 'react';
import SplashScreen from './components/common/SplashScreen';
import Header from './components/Layout/Header';
import Home from './Pages/Home/Home';

const App: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // 2 seconds

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <SplashScreen />
            ) : (
              <>
                    <Header />
                    <Home />
              </>
            )}
        </>
    );
};

export default App;
