// import React, { useEffect } from 'react';
// import { X, Plus, Minus, Trash2, Tag, Lock } from 'lucide-react';
// import ProteinPowerBowl from '../../../assets/protien power bowl.webp';
// import greendetox from '../../../assets/green-detox.webp';
// import grilledchickensalad from '../../../assets/grilled chicken salad.webp';
// import salmon from '../../../assets/grilled-salmon-with-asparagus-greek-salad.webp';
// import acai from '../../../assets/acai-dessert.webp';
// import turkeywrap from '../../../assets/turkey wrap.webp';
// import paneertandoori from '../../../assets/tandoori-paneer.webp';

// interface CartProps {
//     isOpen: boolean;
//     onClose: () => void;
// }

// interface CartItem {
//     id: number;
//     name: string;
//     price: number;
//     quantity: number;
//     image: string;
// }

// const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
//     // Lock body scroll when cart is open
//     useEffect(() => {
//         if (isOpen) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = '';
//         }
//         return () => {
//             document.body.style.overflow = '';
//         };
//     }, [isOpen]);

//     const cartItems: CartItem[] = [
//         {
//             id: 1,
//             name: 'Healthy Veg Meal',
//             price: 199,
//             quantity: 1,
//             image: ProteinPowerBowl,
//         },
//         {
//             id: 2,
//             name: 'Protein Bowl',
//             price: 249,
//             quantity: 2,
//             image: greendetox,
//         },
//         {
//             id: 3,
//             name: 'Healthy Veg Meal',
//             price: 199,
//             quantity: 1,
//             image: ProteinPowerBowl,
//         },
//         {
//             id: 4,
//             name: 'Protein Bowl',
//             price: 249,
//             quantity: 2,
//             image: grilledchickensalad,
//         },
//         {
//             id: 5,
//             name: 'Healthy Veg Meal',
//             price: 199,
//             quantity: 1,
//             image: 'grilledchickensalad',
//         },
//         {
//             id: 6,
//             name: 'Protein Bowl',
//             price: 249,
//             quantity: 2,
//             image: salmon,
//         },
//         {
//             id: 7,
//             name: 'Protein Bowl',
//             price: 249,
//             quantity: 2,
//             image: acai,
//         },
//         {
//             id: 8,
//             name: 'Protein Bowl',
//             price: 249,
//             quantity: 2,
//             image: turkeywrap,
//         },
//         {
//             id: 8,
//             name: 'Protein Bowl',
//             price: 249,
//             quantity: 2,
//             image: paneertandoori,
//         },
//     ];

//     const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
//     const total = subtotal;

//     const onIncrement = (id: number) => {
//         console.log('Increment', id);
//     };

//     const onDecrement = (id: number) => {
//         console.log('Decrement', id);
//     };

//     const onRemove = (id: number) => {
//         console.log('Remove', id);
//     };

//     return (
//         <>
//             {isOpen && (
//                 <div
//                     className="overflow-y-auto scrollbar-hide fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 sm:px-6"
//                     onClick={onClose}
//                 >
//                     <div
//                         onClick={(e) => e.stopPropagation()}
//                         className="
//                             w-full max-w-md
//                             max-h-[90vh]
//                             flex flex-col
//                             bg-[#070d0c]
//                             border border-[#1a3530]
//                             rounded-2xl
//                             animate-in zoom-in-95 duration-200
//                             overflow-hidden
//                         "
//                     >
//                         {/* Header */}
//                         <div className="flex items-start justify-between px-5 py-5 border-b border-[#1a3530] flex-shrink-0">
//                             <div>
//                                 <h2 className="font-heading text-xl font-medium text-[#e0f5f1] mb-1">Your Cart</h2>
//                                 <span className="font-body text-xs bg-[#0e2822] text-[#5fb8a6] border border-[#1a4a3e] px-3 py-0.5 rounded-full">
//                                     {cartItems.length} items
//                                 </span>
//                             </div>
//                             <button
//                                 onClick={onClose}
//                                 className="w-9 h-9 flex items-center justify-center rounded-full border border-[#1a3530] bg-[#0d1a18] text-[#7ab8ae] hover:bg-[#162825] transition flex-shrink-0"
//                                 aria-label="Close cart"
//                             >
//                                 <X size={15} />
//                             </button>
//                         </div>

//                         {/* Cart Items */}
//                         <div className="overflow-y-auto no-scrollbar flex-1  px-5 py-4 space-y-3">
//                             {cartItems.map((item) => (
//                                 <div
//                                     key={item.id}
//                                     className="bg-[#0d1a18] border border-[#1a3530] rounded-2xl p-4 flex gap-3 items-center"
//                                 >
//                                     <img
//                                         src={item.image}
//                                         alt={item.name}
//                                         className="w-16 h-16 object-cover rounded-xl border border-[#1a3530] bg-[#162825] flex-shrink-0"
//                                     />
//                                     <div className="flex-1 min-w-0">
//                                         <h3 className="font-heading text-sm font-medium text-[#d8f0eb] truncate mb-0.5">
//                                             {item.name}
//                                         </h3>
//                                         <p className="font-body text-sm text-[#5fb8a6] font-medium mb-2.5">₹{item.price}</p>
//                                         <div className="flex items-center justify-between">
//                                             <div className="flex items-center gap-2.5 bg-[#080f0d] border border-[#1a3530] rounded-full px-3 py-1">
//                                                 <button
//                                                     onClick={() => onDecrement(item.id)}
//                                                     className="text-[#7ab8ae] hover:text-[#d8f0eb] transition"
//                                                     aria-label="Decrease quantity"
//                                                 >
//                                                     <Minus size={11} />
//                                                 </button>
//                                                 <span className="font-body text-sm font-medium text-[#d8f0eb] w-4 text-center">
//                                                     {item.quantity}
//                                                 </span>
//                                                 <button
//                                                     onClick={() => onIncrement(item.id)}
//                                                     className="text-[#7ab8ae] hover:text-[#d8f0eb] transition"
//                                                     aria-label="Increase quantity"
//                                                 >
//                                                     <Plus size={11} />
//                                                 </button>
//                                             </div>
//                                             <button
//                                                 onClick={() => onRemove(item.id)}
//                                                 className="text-[#2a5a4e] hover:text-red-400 transition p-1.5"
//                                                 aria-label="Remove item"
//                                             >
//                                                 <Trash2 size={15} />
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                         {/* Footer */}
//                         <div className="px-5 py-4 border-t border-[#1a3530] bg-[#060c0b] flex-shrink-0">
//                             {/* Promo Code */}
//                             <div className="flex items-center gap-2 bg-[#0d1a18] border border-[#1a3530] rounded-xl px-4 py-2.5 mb-4">
//                                 <Tag size={14} className="text-[#2a5a4e] flex-shrink-0" />
//                                 <input
//                                     type="text"
//                                     placeholder="Promo code"
//                                     className="flex-1 bg-transparent font-body text-sm text-[#7ab8ae] placeholder:text-[#2a4a3e] outline-none"
//                                 />
//                                 <button className="font-body text-xs text-[#5fb8a6] font-medium hover:text-[#8dd4c5] transition">
//                                     Apply
//                                 </button>
//                             </div>

//                             {/* Totals */}
//                             <div className="flex justify-between items-center mb-2">
//                                 <span className="font-body text-sm text-[#4a7a6e]">Subtotal</span>
//                                 <span className="font-body text-sm text-[#7ab8ae]">₹{subtotal}</span>
//                             </div>
//                             <div className="flex justify-between items-center mb-4">
//                                 <span className="font-body text-sm text-[#4a7a6e]">Shipping</span>
//                                 <span className="font-body text-xs text-[#3fa888]">
//                                     Free
//                                 </span>
//                             </div>

//                             <div className="flex justify-between items-center pt-3 border-t border-[#1a3530] mb-4">
//                                 <span className="font-heading text-sm font-medium text-[#d8f0eb]">Total</span>
//                                 <span className="font-heading text-xl font-medium text-[#e0f5f1]">₹{total}</span>
//                             </div>

//                             <button className="w-full bg-[#0f3830] hover:bg-[#143f37] text-[#5fb8a6] border border-[#5fb8a6] rounded-xl py-3 font-heading text-sm font-medium flex items-center justify-center gap-2 transition">
//                                 <Lock size={14} />
//                                 Proceed to Checkout
//                             </button>
//                             <p className="font-body text-[11px] text-[#2a5a4e] text-center mt-2.5">
//                                 Secured with 256-bit SSL encryption
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

// export default Cart;

/**
 * Cart.tsx — Shopping Cart Modal Component
 *
 * This component shows a slide-in modal (popup) that displays
 * the user's cart items. It receives two props:
 *   - isOpen: whether the cart modal is visible
 *   - onClose: a function to call when the user wants to close it
 *
 * COLOR NOTE FOR BEGINNERS:
 * The original theme used very dark teal colors for some text (e.g. #2a5a4e, #4a7a6e)
 * which were hard to read on dark backgrounds. We've bumped those up to brighter
 * teal shades (#6db8a8, #8ecfbf) so they stay in the same green-teal family
 * but are clearly legible. All other theme colors are untouched.
 */

import React, { useEffect, useState } from 'react';
import { X, Plus, Minus, Trash2, Tag, Lock } from 'lucide-react';
import ProteinPowerBowl from '../../../assets/protien power bowl.webp';
import greendetox from '../../../assets/green-detox.webp';
import grilledchickensalad from '../../../assets/grilled chicken salad.webp';
import salmon from '../../../assets/grilled-salmon-with-asparagus-greek-salad.webp';
import acai from '../../../assets/acai-dessert.webp';
import turkeywrap from '../../../assets/turkey wrap.webp';
import paneertandoori from '../../../assets/tandoori-paneer.webp';

// ─── TypeScript Interfaces ──────────────────────────────────────────────────
// These define the "shape" (structure) of data we work with.

/** Props that the Cart component expects from its parent */
interface CartProps {
    isOpen: boolean;   // Is the cart modal currently visible?
    onClose: () => void; // Function to call when closing the cart
}

/** Represents a single item inside the cart */
interface CartItem {
    id: number;       // Unique identifier for each item
    name: string;     // Display name
    price: number;    // Price per unit in ₹
    quantity: number; // How many of this item are in the cart
    image: string;    // Image source (imported asset or URL string)
}

// ─── Initial Cart Data ───────────────────────────────────────────────────────
// Defined outside the component so it doesn't get re-created on every render.
// In a real app this would come from a global store (Redux, Zustand, Context, etc.)

const initialCartItems: CartItem[] = [
    { id: 1, name: 'Healthy Veg Meal',  price: 199, quantity: 1, image: ProteinPowerBowl },
    { id: 2, name: 'Protein Bowl',      price: 249, quantity: 2, image: greendetox },
    { id: 3, name: 'Grilled Salad',     price: 199, quantity: 1, image: grilledchickensalad },
    { id: 4, name: 'Grilled Salmon',    price: 299, quantity: 1, image: salmon },
    { id: 5, name: 'Açaí Dessert',      price: 179, quantity: 2, image: acai },
    { id: 6, name: 'Turkey Wrap',       price: 229, quantity: 1, image: turkeywrap },
    { id: 7, name: 'Paneer Tandoori',   price: 249, quantity: 2, image: paneertandoori },
];

// ─── Cart Component ──────────────────────────────────────────────────────────

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {

    // ── State ──────────────────────────────────────────────────────────────
    // useState stores data that can change and cause the UI to re-render.

    /** The live list of cart items — starts with our initial data */
    const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

    /** The text typed into the promo code input field */
    const [promoCode, setPromoCode] = useState('');

    /** Message shown after the user clicks "Apply" on the promo code */
    const [promoMessage, setPromoMessage] = useState('');

    // ── Side Effect: Lock body scroll when cart is open ────────────────────
    // useEffect runs after the component renders.
    // Here we prevent the page behind the modal from scrolling.

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // disable background scroll
        } else {
            document.body.style.overflow = '';       // restore scroll when closed
        }
        // Cleanup: always restore scroll if the component unmounts unexpectedly
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]); // Only re-run when `isOpen` changes

    // ── Derived Values ─────────────────────────────────────────────────────
    // These are calculated from state on every render — no useState needed.

    /**
     * Subtotal: sum of (price × quantity) for every item.
     * Array.reduce() walks through the array, accumulating a running total.
     */
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    /**
     * Total: currently equals subtotal.
     * You could add tax, delivery fees, or promo discounts here later.
     */
    const total = subtotal;

    // ── Handler Functions ──────────────────────────────────────────────────
    // These update state in response to user actions.

    /**
     * Increase the quantity of an item by 1.
     * We use .map() to create a NEW array (never mutate state directly in React).
     */
    const onIncrement = (id: number) => {
        setCartItems(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 } // spread copies item, then overrides quantity
                    : item                                      // other items stay unchanged
            )
        );
    };

    /**
     * Decrease the quantity of an item by 1.
     * If quantity would drop to 0, we remove the item from the cart entirely.
     */
    const onDecrement = (id: number) => {
        setCartItems(prev =>
            prev
                .map(item =>
                    item.id === id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter(item => item.quantity > 0) // remove items with quantity 0
        );
    };

    /**
     * Completely remove an item from the cart.
     * .filter() returns a new array excluding the item with the matching id.
     */
    const onRemove = (id: number) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    /**
     * Validate and apply a promo code.
     * Currently checks against a hardcoded code "HEALTHY10".
     * In a real app you'd call an API endpoint to validate.
     */
    const onApplyPromo = () => {
        if (promoCode.trim().toUpperCase() === 'HEALTHY10') {
            setPromoMessage('✓ Promo applied! 10% off your next order.');
        } else if (promoCode.trim() === '') {
            setPromoMessage('Please enter a promo code.');
        } else {
            setPromoMessage('Invalid promo code. Try HEALTHY10.');
        }
    };

    // ── Early Return: nothing rendered when cart is closed ─────────────────
    // This keeps the DOM clean when the modal isn't needed.
    if (!isOpen) return null;

    // ── JSX (the UI) ───────────────────────────────────────────────────────
    return (
        <>
            {/*
              * BACKDROP
              * Full-screen dark overlay behind the modal.
              * Clicking it calls onClose to dismiss the cart.
              * backdrop-blur-sm blurs the page content behind it.
              */}
            <div
                className="overflow-y-auto scrollbar-hide fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 sm:px-6"
                onClick={onClose}
            >
                {/*
                  * MODAL CONTAINER
                  * e.stopPropagation() prevents clicks inside the modal
                  * from bubbling up to the backdrop and closing the cart.
                  */}
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

                    {/* ── HEADER ───────────────────────────────────────────────────── */}
                    {/* Shows "Your Cart" title, item count badge, and close button */}
                    <div className="flex items-start justify-between px-5 py-5 border-b border-[#1a3530] flex-shrink-0">
                        <div>
                            <h2 className="font-heading text-xl font-medium text-[#e0f5f1] mb-1">Your Cart</h2>

                            {/* Item count badge — updates automatically as items are added/removed */}
                            <span className="font-body text-xs bg-[#0e2822] text-[#5fb8a6] border border-[#1a4a3e] px-3 py-0.5 rounded-full">
                                {cartItems.length} item{cartItems.length !== 1 ? 's' : ''}
                            </span>
                        </div>

                        {/* Close button — calls the onClose prop passed from parent */}
                        <button
                            onClick={onClose}
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-[#1a3530] bg-[#0d1a18] text-[#7ab8ae] hover:bg-[#162825] transition flex-shrink-0"
                            aria-label="Close cart" // accessibility: screen readers read this
                        >
                            <X size={15} />
                        </button>
                    </div>

                    {/* ── CART ITEMS LIST ───────────────────────────────────────────── */}
                    {/*
                      * overflow-y-auto: scrollable when items overflow the height
                      * flex-1: takes up all remaining vertical space between header & footer
                      * We use .map() to render one card per item in cartItems state
                      */}
                    <div className="overflow-y-auto no-scrollbar flex-1 px-5 py-4 space-y-3">

                        {/* Empty state: shown when all items have been removed */}
                        {cartItems.length === 0 && (
                            <div className="flex flex-col items-center justify-center py-16 text-center">
                                <p className="font-heading text-[#6db8a8] text-base mb-1">Your cart is empty</p>
                                <p className="font-body text-xs text-[#4a7a6e]">Add some healthy meals to get started!</p>
                            </div>
                        )}

                        {cartItems.map((item) => (
                            /*
                             * key={item.id} — React needs a unique key on each list item
                             * so it can efficiently update only changed items in the DOM.
                             */
                            <div
                                key={item.id}
                                className="bg-[#0d1a18] border border-[#1a3530] rounded-2xl p-4 flex gap-3 items-center"
                            >
                                {/* Item thumbnail image */}
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 object-cover rounded-xl border border-[#1a3530] bg-[#162825] flex-shrink-0"
                                    onError={(e) => {
                                        // Fallback: if image fails to load, show a placeholder color block
                                        (e.target as HTMLImageElement).style.background = '#1a3530';
                                        (e.target as HTMLImageElement).style.opacity = '0.5';
                                    }}
                                />

                                {/* Item details: name, price, quantity controls, remove button */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-heading text-sm font-medium text-[#d8f0eb] truncate mb-0.5">
                                        {item.name}
                                    </h3>

                                    {/* Price per unit — color bumped from #5fb8a6 (fine) stays the same */}
                                    <p className="font-body text-sm text-[#5fb8a6] font-medium mb-2.5">
                                        ₹{item.price}
                                    </p>

                                    {/* Row with quantity stepper and remove button */}
                                    <div className="flex items-center justify-between">

                                        {/* Quantity stepper: − [count] + */}
                                        <div className="flex items-center gap-2.5 bg-[#080f0d] border border-[#1a3530] rounded-full px-3 py-1">
                                            <button
                                                onClick={() => onDecrement(item.id)}
                                                className="text-[#7ab8ae] hover:text-[#d8f0eb] transition"
                                                aria-label="Decrease quantity"
                                            >
                                                <Minus size={11} />
                                            </button>

                                            {/* Current quantity — re-renders automatically when state changes */}
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

                                        {/*
                                          * Remove button
                                          * COLOR FIX: was #2a5a4e (nearly invisible on dark bg).
                                          * Changed to #6db8a8 — same teal family, clearly readable.
                                          * Hover turns red for a "danger action" affordance.
                                          */}
                                        <button
                                            onClick={() => onRemove(item.id)}
                                            className="text-[#6db8a8] hover:text-red-400 transition p-1.5"
                                            aria-label="Remove item"
                                        >
                                            <Trash2 size={15} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── FOOTER ───────────────────────────────────────────────────── */}
                    {/* Contains promo code input, order totals, and checkout button */}
                    <div className="px-5 py-4 border-t border-[#1a3530] bg-[#060c0b] flex-shrink-0">

                        {/* PROMO CODE INPUT */}
                        <div className="flex items-center gap-2 bg-[#0d1a18] border border-[#1a3530] rounded-xl px-4 py-2.5 mb-1">
                            {/*
                              * COLOR FIX: Tag icon was #2a5a4e (very dark, hard to see).
                              * Bumped to #6db8a8 — visible but still in theme.
                              */}
                            <Tag size={14} className="text-[#6db8a8] flex-shrink-0" />

                            {/*
                              * Controlled input: value comes from state, onChange updates state.
                              * This is the "controlled component" pattern in React.
                              * COLOR FIX: placeholder was #2a4a3e (near-invisible).
                              * Changed to placeholder-[#4a7a6e] for legibility.
                              */}
                            <input
                                type="text"
                                placeholder="Promo code"
                                value={promoCode}
                                onChange={(e) => setPromoCode(e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && onApplyPromo()} // apply on Enter key too
                                className="flex-1 bg-transparent font-body text-sm text-[#7ab8ae] placeholder:text-[#4a7a6e] outline-none"
                            />

                            <button
                                onClick={onApplyPromo}
                                className="font-body text-xs text-[#5fb8a6] font-medium hover:text-[#8dd4c5] transition"
                            >
                                Apply
                            </button>
                        </div>

                        {/* Promo feedback message — only shown if promoMessage is non-empty */}
                        {promoMessage && (
                            <p className={`font-body text-[11px] mb-3 pl-1 ${
                                promoMessage.startsWith('✓')
                                    ? 'text-[#5fb8a6]'   // success: teal
                                    : 'text-[#f87171]'   // error: soft red (accessible on dark bg)
                            }`}>
                                {promoMessage}
                            </p>
                        )}

                        {/* TOTALS SECTION */}
                        {/*
                          * COLOR FIX: "Subtotal" / "Shipping" labels were #4a7a6e — borderline.
                          * Bumped to #6db8a8 for clear readability against the dark background.
                          */}
                        <div className="flex justify-between items-center mb-2">
                            <span className="font-body text-sm text-[#6db8a8]">Subtotal</span>
                            <span className="font-body text-sm text-[#7ab8ae]">₹{subtotal}</span>
                        </div>

                        <div className="flex justify-between items-center mb-4">
                            <span className="font-body text-sm text-[#6db8a8]">Shipping</span>
                            {/*
                              * COLOR FIX: "Free" was #3fa888 — decent but slightly dim.
                              * Kept at #5fb8a6 to match price values for visual consistency.
                              */}
                            <span className="font-body text-xs text-[#5fb8a6]">Free</span>
                        </div>

                        {/* Grand total row */}
                        <div className="flex justify-between items-center pt-3 border-t border-[#1a3530] mb-4">
                            <span className="font-heading text-sm font-medium text-[#d8f0eb]">Total</span>
                            <span className="font-heading text-xl font-medium text-[#e0f5f1]">₹{total}</span>
                        </div>

                        {/* CHECKOUT BUTTON */}
                        {/*
                          * Disabled when cart is empty — no point checking out with nothing.
                          * opacity-50 + cursor-not-allowed gives visual "disabled" feedback.
                          */}
                        <button
                            disabled={cartItems.length === 0}
                            className="w-full bg-[#0f3830] hover:bg-[#143f37] disabled:opacity-50 disabled:cursor-not-allowed text-[#5fb8a6] border border-[#5fb8a6] rounded-xl py-3 font-heading text-sm font-medium flex items-center justify-center gap-2 transition"
                        >
                            <Lock size={14} />
                            Proceed to Checkout
                        </button>

                        {/*
                          * Security note below button.
                          * COLOR FIX: was #2a5a4e — almost invisible on the dark footer.
                          * Bumped to #6db8a8 so users can actually read this trust signal.
                          */}
                        <p className="font-body text-[11px] text-[#6db8a8] text-center mt-2.5">
                            Secured with 256-bit SSL encryption
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Cart;