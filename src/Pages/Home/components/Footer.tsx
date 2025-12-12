import bgImage from '../../../assets/best-sellers-bg.jpg';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import MagneticButton from '../../../components/ui/Button3/Button';
import footerBg from '../../../assets/smoke-background-empty-dark-room.jpg';


export default function FoodDeliveryFooter() {
    return (
        <div className="bg-black relative" style={{ zIndex: 1 }}>
            <div className="w-full relative" style={{ zIndex: 1 }}>
                {/* Hero Card - Positioned above footer */}
                <div className="relative px-6 lg:px-12 -mb-32" style={{ zIndex: 2 }}>
                    <div className="mx-auto max-w-7xl">
                        <div
                            className="relative overflow-hidden rounded-3xl p-12 md:p-16 lg:p-20 border border-gray-800 bg-contain"
                            style={{
                                backgroundImage: `url(${bgImage})`,
                            }}
                        >
                            {/* Overlay for dark tint */}
                            {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div> */}

                            {/* Center All Content */}
                            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center">
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-cursive font-light mb-4 text-gray-200 leading-tight">
                                    Delicious meals delivered to your door
                                </h2>

                                <p className="text-sm md:text-sm font-body italic text-gray-400 mb-8">
                                    Order from 500+ restaurants in your area.
                                </p>

                                <MagneticButton />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                {/* <footer
                    className="relative bg-gradient-to-br from-[#0d0d0d] via-[#234b4b]/40 to-black text-black pt-40 pb-0 border-t border-white/10"
                    style={{ zIndex: 1 }}
                > */}
                <footer
                    className="relative text-white pt-40 pb-0 border-t border-white/10 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${footerBg})`,
                        zIndex: 1,
                    }}
                >
                    {/* Top Section */}
                    <div className="mx-auto max-w-7xl px-6 lg:px-12 pb-16">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                            {/* Company Info */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <img
                                        src="/src/assets/logo1.png"
                                        alt="Nutri Buddy Logo"
                                        className="w-24 h-24 object-contain"
                                    />
                                    <div>
                                        <span className="text-xl font-extrabold font-heading tracking-wide text-[#306c6c]">
                                            Nutri Buddy
                                        </span>
                                        <span className="text-xs text-gray-400 font-heading block -mt-1">Bite rite</span>
                                    </div>
                                </div>

                                <address className="not-italic font-body text-gray-400 text-sm leading-relaxed mb-6 space-y-1">
                                    <p className="flex items-start gap-2">
                                        <MapPin className="w-4 h-4 mt-1 text-[#67bed9]" />
                                        20619 Torrence Chapel Rd
                                        <br />
                                        Suite 116 #1040
                                        <br />
                                        Cornelius, NC 28031
                                        <br />
                                        United States
                                    </p>
                                </address>

                                <div className="space-y-3 text-sm">
                                    <div>
                                        <span className="text-gray-500 font-body block mb-1">Phone</span>
                                        <p className="flex items-center gap-2 text-white font-medium font-body">
                                            <Phone className="w-4 h-4 text-[#67bed9]" />
                                            1-800-201-1019
                                        </p>
                                    </div>

                                    <div>
                                        <span className="text-gray-500 font-body block mb-1">Email</span>
                                        <p className="flex items-center font-body gap-2 text-white font-medium">
                                            <Mail className="w-4 h-4 text-[#67bed9]" />
                                            support@foodmatrix.com
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h3 className="font-semibold mb-4 font-Caveat text-white text-lg">Quick Links</h3>
                                <ul className="space-y-3 font-body text-gray-400 text-sm">
                                    {['Pricing', 'Resources', 'About us', 'FAQ', 'Contact us'].map((item) => (
                                        <li key={item}>
                                            <a
                                                href="#"
                                                className="hover:text-[#67bed9] transition-colors duration-300 hover:pl-1 block"
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Social */}
                            <div>
                                <h3 className="font-semibold mb-4 font-Caveat text-white text-lg">Social</h3>

                                <ul className="space-y-4 font-body text-gray-400 text-sm">
                                    <li>
                                        <a href="#" className="flex items-center gap-2 hover:text-[#67bed9] transition">
                                            <Facebook className="w-4 h-4" /> Facebook
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center gap-2 hover:text-[#67bed9] transition">
                                            <Instagram className="w-4 h-4" /> Instagram
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center gap-2 hover:text-[#67bed9] transition">
                                            <Linkedin className="w-4 h-4" /> LinkedIn
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center gap-2 hover:text-[#67bed9] transition">
                                            <Twitter className="w-4 h-4" /> Twitter
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center gap-2 hover:text-[#67bed9] transition">
                                            <Youtube className="w-4 h-4" /> YouTube
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* Legal */}
                            <div>
                                <h3 className="font-semibold mb-4 font-Caveat text-white text-lg">Legal</h3>
                                <ul className="space-y-3 font-body text-gray-400 text-sm">
                                    {['Terms of service', 'Privacy policy', 'Cookie policy'].map((item) => (
                                        <li key={item}>
                                            <a
                                                href="#"
                                                className="hover:text-[#67bed9] transition-colors duration-300 hover:pl-1 block"
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-white/10"></div>

                    {/* Bottom Section */}
                    <div className="mx-auto max-w-7xl px-6 lg:px-12 py-6">
                        <p className="text-center text-gray-500 text-sm">© 2024 Foodmatrix. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}