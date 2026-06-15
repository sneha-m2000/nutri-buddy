import React, { useEffect } from 'react';
import { X, Plus, Minus, Trash2, Tag, Lock } from 'lucide-react';
import ProteinPowerBowl from '../../../assets/protien power bowl.webp';
import greendetox from '../../../assets/green-detox.webp';
import grilledchickensalad from '../../../assets/grilled chicken salad.webp';
import salmon from '../../../assets/grilled-salmon-with-asparagus-greek-salad.webp';
import acai from '../../../assets/acai-dessert.webp';
import turkeywrap from '../../../assets/turkey wrap.webp';
import paneertandoori from '../../../assets/tandoori-paneer.webp';

interface CartProps {
    isOpen: boolean;
    onClose: () => void;
}

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
    // Lock body scroll when cart is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const cartItems: CartItem[] = [
        {
            id: 1,
            name: 'Healthy Veg Meal',
            price: 199,
            quantity: 1,
            image: ProteinPowerBowl,
        },
        {
            id: 2,
            name: 'Protein Bowl',
            price: 249,
            quantity: 2,
            image: greendetox,
        },
        {
            id: 3,
            name: 'Healthy Veg Meal',
            price: 199,
            quantity: 1,
            image: ProteinPowerBowl,
        },
        {
            id: 4,
            name: 'Protein Bowl',
            price: 249,
            quantity: 2,
            image: grilledchickensalad,
        },
        {
            id: 5,
            name: 'Healthy Veg Meal',
            price: 199,
            quantity: 1,
            image: 'grilledchickensalad',
        },
        {
            id: 6,
            name: 'Protein Bowl',
            price: 249,
            quantity: 2,
            image: salmon,
        },
        {
            id: 7,
            name: 'Protein Bowl',
            price: 249,
            quantity: 2,
            image: acai,
        },
        {
            id: 8,
            name: 'Protein Bowl',
            price: 249,
            quantity: 2,
            image: turkeywrap,
        },
        {
            id: 8,
            name: 'Protein Bowl',
            price: 249,
            quantity: 2,
            image: paneertandoori,
        },
    ];

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const total = subtotal;

    const onIncrement = (id: number) => {
        console.log('Increment', id);
    };

    const onDecrement = (id: number) => {
        console.log('Decrement', id);
    };

    const onRemove = (id: number) => {
        console.log('Remove', id);
    };

    return (
        <>
            {isOpen && (
                <div
                    className="overflow-y-auto scrollbar-hide fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 sm:px-6"
                    onClick={onClose}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="
                            w-full max-w-md
                            max-h-[90vh]
                            flex flex-col
                            bg-[#070d0c]
                            border border-[#1a3530]
                            rounded-2xl
                            animate-in zoom-in-95 duration-200
                            overflow-hidden
                        "
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between px-5 py-5 border-b border-[#1a3530] flex-shrink-0">
                            <div>
                                <h2 className="font-heading text-xl font-medium text-[#e0f5f1] mb-1">Your Cart</h2>
                                <span className="font-body text-xs bg-[#0e2822] text-[#5fb8a6] border border-[#1a4a3e] px-3 py-0.5 rounded-full">
                                    {cartItems.length} items
                                </span>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-9 h-9 flex items-center justify-center rounded-full border border-[#1a3530] bg-[#0d1a18] text-[#7ab8ae] hover:bg-[#162825] transition flex-shrink-0"
                                aria-label="Close cart"
                            >
                                <X size={15} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="overflow-y-auto no-scrollbar flex-1  px-5 py-4 space-y-3">
                            {cartItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-[#0d1a18] border border-[#1a3530] rounded-2xl p-4 flex gap-3 items-center"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded-xl border border-[#1a3530] bg-[#162825] flex-shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-heading text-sm font-medium text-[#d8f0eb] truncate mb-0.5">
                                            {item.name}
                                        </h3>
                                        <p className="font-body text-sm text-[#5fb8a6] font-medium mb-2.5">₹{item.price}</p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2.5 bg-[#080f0d] border border-[#1a3530] rounded-full px-3 py-1">
                                                <button
                                                    onClick={() => onDecrement(item.id)}
                                                    className="text-[#7ab8ae] hover:text-[#d8f0eb] transition"
                                                    aria-label="Decrease quantity"
                                                >
                                                    <Minus size={11} />
                                                </button>
                                                <span className="font-body text-sm font-medium text-[#d8f0eb] w-4 text-center">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() => onIncrement(item.id)}
                                                    className="text-[#7ab8ae] hover:text-[#d8f0eb] transition"
                                                    aria-label="Increase quantity"
                                                >
                                                    <Plus size={11} />
                                                </button>
                                            </div>
                                            <button
                                                onClick={() => onRemove(item.id)}
                                                className="text-[#2a5a4e] hover:text-red-400 transition p-1.5"
                                                aria-label="Remove item"
                                            >
                                                <Trash2 size={15} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer */}
                        <div className="px-5 py-4 border-t border-[#1a3530] bg-[#060c0b] flex-shrink-0">
                            {/* Promo Code */}
                            <div className="flex items-center gap-2 bg-[#0d1a18] border border-[#1a3530] rounded-xl px-4 py-2.5 mb-4">
                                <Tag size={14} className="text-[#2a5a4e] flex-shrink-0" />
                                <input
                                    type="text"
                                    placeholder="Promo code"
                                    className="flex-1 bg-transparent font-body text-sm text-[#7ab8ae] placeholder:text-[#2a4a3e] outline-none"
                                />
                                <button className="font-body text-xs text-[#5fb8a6] font-medium hover:text-[#8dd4c5] transition">
                                    Apply
                                </button>
                            </div>

                            {/* Totals */}
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-body text-sm text-[#4a7a6e]">Subtotal</span>
                                <span className="font-body text-sm text-[#7ab8ae]">₹{subtotal}</span>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <span className="font-body text-sm text-[#4a7a6e]">Shipping</span>
                                <span className="font-body text-xs text-[#3fa888]">
                                    Free
                                </span>
                            </div>

                            <div className="flex justify-between items-center pt-3 border-t border-[#1a3530] mb-4">
                                <span className="font-heading text-sm font-medium text-[#d8f0eb]">Total</span>
                                <span className="font-heading text-xl font-medium text-[#e0f5f1]">₹{total}</span>
                            </div>

                            <button className="w-full bg-[#0f3830] hover:bg-[#143f37] text-[#5fb8a6] border border-[#5fb8a6] rounded-xl py-3 font-heading text-sm font-medium flex items-center justify-center gap-2 transition">
                                <Lock size={14} />
                                Proceed to Checkout
                            </button>
                            <p className="font-body text-[11px] text-[#2a5a4e] text-center mt-2.5">
                                Secured with 256-bit SSL encryption
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Cart;