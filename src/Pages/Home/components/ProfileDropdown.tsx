import React, { useEffect, useRef } from 'react';

interface ProfileDropdownProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuItems = ['Profile', 'Orders', 'Meal Plans', 'Favourites', 'Logout'];

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ isOpen, onClose }) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div
            ref={dropdownRef}
            className="absolute right-0 top-12 w-64 bg-black rounded-md border border-[#66b2b2] shadow-2xl z-50"
        >
            {/* Arrow */}
            <div className="absolute -top-2 right-5 h-4 w-4 rotate-45 bg-black border-t border-3 border-[#66b2b2]" />

            <div className="py-3">
                {menuItems.map((item) => (
                    <button
                        key={item}
                        className="w-full text-left px-6 py-3 text-[#66b2b2] font-medium hover:bg-[#66b2b2] hover:text-black transition-all duration-200"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProfileDropdown;
