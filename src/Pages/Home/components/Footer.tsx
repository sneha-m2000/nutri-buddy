import { useState } from 'react';
import bgImage from '../../../assets/best-sellers-bg.webp';
import footerBg from '../../../assets/smoke-background-empty-dark-room.webp';


import { Facebook, Instagram, Linkedin, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

import MagneticButton from '../../../components/ui/Button3/Button';

type FooterAccordionProps = {
    title: string;
    children: React.ReactNode;
};

/* ACCORDION COMPONENT (Mobile only) */
function FooterAccordion({ title, children }: FooterAccordionProps) {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-white/10">
            {/* Header */}
            <button onClick={() => setOpen(!open)} className="w-full flex justify-between items-center py-4">
                <span className="font-semibold text-lg text-white font-Caveat">{title}</span>

                <span
                    className={`
                    text-xl transition-transform duration-300
                    ${open ? 'rotate-45' : ''}
                    `}
                >
                    +
                </span>
            </button>

            {/* Content */}
            <div
                className={`
                overflow-hidden transition-all duration-300
                ${open ? 'max-h-96 pb-4' : 'max-h-0'}
                `}
            >
                {children}
            </div>
        </div>
    );
}

export default function FoodDeliveryFooter() {
    return (
        <div className="bg-black relative z-[1]">
            {/* HERO CARD */}
            <div className="relative px-6 lg:px-12 -mb-20 lg:-mb-32 z-[2]">
                <div className="mx-auto max-w-7xl">
                    <div
                        className="relative overflow-hidden rounded-2xl lg:rounded-3xl 
                        p-6 md:p-12 lg:p-20 border border-gray-800"
                        style={{
                            backgroundImage: `url(${bgImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center">
                            <h2 className="text-2xl md:text-4xl lg:text-6xl font-cursive font-light mb-4 text-gray-200">
                                Delicious meals delivered to your door
                            </h2>

                            <p className="text-sm text-gray-400 mb-6">Order from 500+ restaurants in your area.</p>

                            <MagneticButton />
                        </div>
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <footer
                className="relative text-white pt-28 lg:pt-40 border-t border-white/10 bg-cover bg-center"
                style={{ backgroundImage: `url(${footerBg})` }}
            >
                <div className="mx-auto max-w-7xl px-6 lg:px-12 pb-16">
                    {/* ================= MOBILE FOOTER ================= */}
                    <div className="block lg:hidden">
                        {/* COMPANY */}
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-4">
                                <img src="/logo1.webp" className="w-16 h-16 object-contain" />

                                <div>
                                    <span className="text-lg font-bold text-[#306c6c]">Nutri Buddy</span>

                                    <span className="text-xs text-gray-400 block">Bite rite</span>
                                </div>
                            </div>

                            <p className="text-sm text-gray-400 flex gap-2">
                                <MapPin size={16} />
                                Cornelius, NC, United States
                            </p>

                            <p className="text-sm text-gray-400 flex gap-2 mt-2">
                                <Phone size={16} />
                                1-800-201-1019
                            </p>

                            <p className="text-sm text-gray-400 flex gap-2 mt-2">
                                <Mail size={16} />
                                support@foodmatrix.com
                            </p>
                        </div>

                        {/* QUICK LINKS */}
                        <FooterAccordion title="Quick Links">
                            <ul className="space-y-2 text-sm text-gray-400">
                                {['Pricing', 'Resources', 'About us', 'FAQ', 'Contact us'].map((item) => (
                                    <li key={item}>
                                        <a className="hover:text-[#67bed9] transition">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </FooterAccordion>

                        {/* SOCIAL */}
                        <FooterAccordion title="Social">
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>
                                    <a className="flex gap-2 hover:text-[#67bed9]">
                                        <Facebook size={16} />
                                        Facebook
                                    </a>
                                </li>

                                <li>
                                    <a className="flex gap-2 hover:text-[#67bed9]">
                                        <Instagram size={16} />
                                        Instagram
                                    </a>
                                </li>

                                <li>
                                    <a className="flex gap-2 hover:text-[#67bed9]">
                                        <Linkedin size={16} />
                                        LinkedIn
                                    </a>
                                </li>

                                <li>
                                    <a className="flex gap-2 hover:text-[#67bed9]">
                                        <Twitter size={16} />
                                        Twitter
                                    </a>
                                </li>

                                <li>
                                    <a className="flex gap-2 hover:text-[#67bed9]">
                                        <Youtube size={16} />
                                        YouTube
                                    </a>
                                </li>
                            </ul>
                        </FooterAccordion>

                        {/* LEGAL */}
                        <FooterAccordion title="Legal">
                            <ul className="space-y-2 text-sm text-gray-400">
                                {['Terms of service', 'Privacy policy', 'Cookie policy'].map((item) => (
                                    <li key={item}>
                                        <a className="hover:text-[#67bed9] transition">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </FooterAccordion>
                    </div>

                    {/* ================= DESKTOP FOOTER ================= */}
                    <div className="hidden lg:grid grid-cols-4 gap-10">
                        {/* COMPANY INFO */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <img
  src="/logo1.webp"
  alt="Nutri Buddy Logo"
  className="w-20 h-20 object-contain"
/>  

                                <div>
                                    <span className="text-xl font-bold text-[#306c6c]">Nutri Buddy</span>

                                    <span className="text-xs text-gray-400 block">Bite rite</span>
                                </div>
                            </div>

                            <p className="text-sm text-gray-400 mb-3 flex gap-2">
                                <MapPin size={16} />
                                Cornelius, NC, United States
                            </p>

                            <p className="text-sm text-gray-400 flex gap-2 mb-2">
                                <Phone size={16} />
                                1-800-201-1019
                            </p>

                            <p className="text-sm text-gray-400 flex gap-2">
                                <Mail size={16} />
                                support@foodmatrix.com
                            </p>
                        </div>

                        {/* QUICK LINKS */}
                        <div>
                            <h3 className="font-semibold mb-4 font-Caveat text-lg">Quick Links</h3>

                            <ul className="space-y-3 text-gray-400 text-sm">
                                {['Pricing', 'Resources', 'About us', 'FAQ', 'Contact us'].map((item) => (
                                    <li key={item}>
                                        <a className="hover:text-[#67bed9] transition">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* SOCIAL */}
                        <div>
                            <h3 className="font-semibold mb-4 font-Caveat text-lg">Social</h3>

                            <ul className="space-y-3 text-gray-400 text-sm">
                                <li>
                                    <a className="flex gap-2 hover:text-[#67bed9]">
                                        <Facebook size={16} />
                                        Facebook
                                    </a>
                                </li>

                                <li>
                                    <a className="flex gap-2 hover:text-[#67bed9]">
                                        <Instagram size={16} />
                                        Instagram
                                    </a>
                                </li>

                                <li>
                                    <a className="flex gap-2 hover:text-[#67bed9]">
                                        <Linkedin size={16} />
                                        LinkedIn
                                    </a>
                                </li>

                                <li>
                                    <a className="flex gap-2 hover:text-[#67bed9]">
                                        <Twitter size={16} />
                                        Twitter
                                    </a>
                                </li>

                                <li>
                                    <a className="flex gap-2 hover:text-[#67bed9]">
                                        <Youtube size={16} />
                                        YouTube
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* LEGAL */}
                        <div>
                            <h3 className="font-semibold mb-4 font-Caveat text-lg">Legal</h3>

                            <ul className="space-y-3 text-gray-400 text-sm">
                                {['Terms of service', 'Privacy policy', 'Cookie policy'].map((item) => (
                                    <li key={item}>
                                        <a className="hover:text-[#67bed9] transition">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="border-t border-white/10">
                    <p className="text-center text-gray-500 text-sm py-6">© 2024 Foodmatrix. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
