import React from 'react';
import './Button2.css';

interface HoverButtonProps {
    text?: string;
    onClick?: () => void;
    className?: string;
}

const HoverButton: React.FC<HoverButtonProps> = ({ text = 'Hover me!', onClick, className = '' }) => {
    return (
        <div className={`hover-btn-wrapper ${className}`}>
            <button className="hover-btn" style={{ '--content': `'${text}'` } as React.CSSProperties} onClick={onClick}>
                <div className="left" />
                {text}
                <div className="right" />
            </button>
        </div>
    );
};

export default HoverButton;
