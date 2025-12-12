import React, { useEffect, useRef } from 'react';
import './Button3.css'

const MagneticButton: React.FC = () => {
    const particleFieldRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const particleField = particleFieldRef.current;
        if (!particleField) return;

        // Create 50 particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            particle.style.setProperty('--x', `${Math.random() * 200 - 100}px`);
            particle.style.setProperty('--y', `${Math.random() * 200 - 100}px`);
            particle.style.animation = `particleFloat ${1 + Math.random() * 2}s infinite`;
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;

            particleField.appendChild(particle);
        }
    }, []);

    return (
        <button className="btn magnetic font-heading">
            Order Now
            <div className="particles-field" ref={particleFieldRef}></div>
        </button>
    );
};

export default MagneticButton;
