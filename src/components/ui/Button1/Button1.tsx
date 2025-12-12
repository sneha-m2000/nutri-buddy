import React from 'react';
import '../Button1/Button1.css'

type Props = {
    children: React.ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: 'v11' | 'v12'; // choose which CSS class to use
    className?: string;
    disabled?: boolean;
};

const PrimaryButton: React.FC<Props> = ({ children, onClick, variant = 'v12', className = '', disabled = false }) => {
    // map variant to css class
    const baseClass = variant === 'v11' ? 'animated-button11' : 'animated-button12';

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`${baseClass} ${className}`}
            style={{ position: 'relative' }} // required because CSS uses absolute-positioned spans
            aria-disabled={disabled}
        >
            {/* the 4 spans are required for the animated border lines */}
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            {/* visible label */}
            <span style={{ position: 'relative', zIndex: 2 }}>{children}</span>
        </button>
    );
};

export default PrimaryButton;
