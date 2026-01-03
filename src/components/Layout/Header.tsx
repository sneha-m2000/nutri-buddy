import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import HoverButton from '../ui/Button2/Button2';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Meal Plans', href: '#plans' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
];

const NutriBuddyHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            navItems.forEach((item) => {
                const section = document.querySelector(item.href);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveLink(item.name);
                    }
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
            ${isScrolled ? 'bg-black/80 backdrop-blur-md shadow-lg shadow-cyan-500/10' : 'bg-transparent'}`}
        >
            {/* CONTAINER */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
                    {/* LOGO */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <img
                            src="/logo1.png"
                            alt="Nutri Buddy Logo"
                            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain"
                        />

                        <div className="leading-tight">
                            <h1
                                className={`font-heading font-bold tracking-wider text-sm sm:text-base md:text-lg
                                ${isScrolled ? 'text-[#66b2b2]' : 'text-black'}`}
                            >
                                NUTRI BUDDY
                            </h1>
                            <p className="font-body text-[10px] sm:text-xs tracking-widest text-gray-600">BITE RIGHT</p>
                        </div>
                    </div>

                    {/* DESKTOP NAV */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-10">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setActiveLink(item.name)}
                                className={`relative font-bold font-Caveat text-base lg:text-xl transition-all duration-300
                                ${isScrolled ? 'text-[#66b2b2]' : 'text-black'}
                                after:absolute after:left-0 after:-bottom-1 after:h-[3px]
                                after:bg-[#004c4c] after:rounded-full after:transition-all after:duration-300
                                ${
                                    activeLink === item.name
                                        ? 'after:w-full text-[#004c4c]'
                                        : 'after:w-0 hover:after:w-full'
                                }`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>

                    {/* DESKTOP ACTIONS */}
                    <div className="hidden md:flex items-center gap-2 lg:gap-4">
                        <button className="text-[#66b2b2] hover:text-white transition p-2">
                            <ShoppingCart className="w-5 h-5" />
                        </button>
                        <button className="text-[#66b2b2] hover:text-white transition p-2">
                            <User className="w-5 h-5" />
                        </button>
                        <HoverButton text="Order Now" onClick={() => console.log('Order clicked')} />
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        className="md:hidden p-2 text-cyan-700"
                        aria-label="Toggle Menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* MOBILE MENU */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-black/80 backdrop-blur-md border-t border-cyan-500/20">
                    <nav className="px-4 py-5 flex flex-col gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-cyan-100 hover:text-cyan-400 font-medium py-2 text-base"
                            >
                                {item.name}
                            </a>
                        ))}

                        <div className="flex items-center gap-3 pt-4 border-t border-cyan-500/20">
                            <button className="text-cyan-100 hover:text-cyan-400 p-2">
                                <ShoppingCart className="w-5 h-5" />
                            </button>
                            <button className="text-cyan-100 hover:text-cyan-400 p-2">
                                <User className="w-5 h-5" />
                            </button>
                            <button className="flex-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-900 px-4 py-2 rounded-lg font-Caveat shadow-lg">
                                Order Now
                            </button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default NutriBuddyHeader;
