import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import HoverButton from '../ui/Button2/Button2'

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

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Meal Plans', href: '#plans' },
        { name: 'Menu', href: '#menu' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

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
    });


    return (
        <>
            <header
                className={`header-fade fixed top-0 left-0 right-0 z-50 transition-all duration-300
                    ${isScrolled ? 'bg-black backdrop-blur-md shadow-lg shadow-cyan-500/10' : 'bg-transparent'}`}
            >
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex items-center space-x-3">
                            <img src="/src/assets/logo1.png" alt="Nutri Buddy Logo" className="w-20 h-20 object-contain" />

                            <div>
                                <h1
                                    className={`font-heading text-xl font-bold tracking-wider ${
                                        isScrolled ? 'text-[#66b2b2]' : 'text-black'
                                    }`}
                                >
                                    NUTRI BUDDY
                                </h1>
                                <p className="font-body text-xs text-gray-700 tracking-widest">BITE RIGHT</p>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-10">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setActiveLink(item.name)}
                                    className={`
                relative font-bold font-Caveat text-xl
                transition-all duration-300
                ${isScrolled ? 'text-[#66b2b2]' : 'text-black'}
                after:absolute after:left-0 after:-bottom-1 after:h-[3px]
                after:bg-[#004c4c] after:rounded-full
                after:transition-all after:duration-300
                ${activeLink === item.name ? 'after:w-full text-[#004c4c]' : 'after:w-0 hover:after:w-full'}
            `}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>

                        {/* Desktop Actions */}
                        <div className="hidden md:flex items-center space-x-4">
                            <button className="text-[#66b2b2] hover:text-black transition-colors duration-200 p-2">
                                <ShoppingCart className="w-5 h-5" />
                            </button>
                            <button className="text-[#66b2b2] hover:text-black transition-colors duration-200 p-2">
                                <User className="w-5 h-5" />
                            </button>
                            {/* <button className="font-heading bg-black text-[#66b2b2] px-6 py-2 rounded-lg font-semibold hover:bg-[#1f83a6] transition-all duration-200 shadow-lg shadow-cyan-500/30">
                                Order Now
                            </button> */}
                            <div style={{ height: '100vh', width: '100%' }}>
                                <HoverButton text="Order Now" onClick={() => console.log('Button clicked!')} />
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-cyan-700 p-2"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-black/70 backdrop-blur-md border-t border-cyan-500/20">
                        <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-cyan-100 hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="flex items-center space-x-4 pt-4 border-t border-cyan-500/20">
                                <button className="text-cyan-100 hover:text-cyan-400 transition-colors duration-200 p-2">
                                    <ShoppingCart className="w-5 h-5" />
                                </button>
                                <button className="text-cyan-100 hover:text-cyan-400 transition-colors duration-200 p-2">
                                    <User className="w-5 h-5" />
                                </button>
                                <button className="flex-1 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-900 px-6 py-2 rounded-lg hover:from-cyan-400 hover:to-teal-400 transition-all duration-200 shadow-lg shadow-cyan-500/30 font-Caveat">
                                    Order Now
                                </button>
                            </div>
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
};

export default NutriBuddyHeader;
