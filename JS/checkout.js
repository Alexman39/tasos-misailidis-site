// JS/checkout.js

// Map your internal product IDs to Stripe Payment Link URLs
const CHECKOUT_URLS = {
    "5-day-hypertrophy": "https://buy.stripe.com/bJe5kD3m8exz8zoftN5sA04",      // 5 Day Hypertrophy
    "upper-lower": "https://buy.stripe.com/8x29AT2i4613cPEdlF5sA03",        // Upper Lower
    "leg-power": "https://buy.stripe.com/eVqcN509W2OR8zo81l5sA02",          // Leg Power (or home program)
    "glute-goddess": "https://buy.stripe.com/28EbJ19Kw0GJ3f4gxR5sA01",          // Glute Goddess
    "lean-toned": "https://buy.stripe.com/bJe7sLbSEfBD16W5Td5sA00",             // Lean & Toned
    "ultimate-bundle": "https://buy.stripe.com/9B628qeqEgx3fvb2OHdQQ00"         // Ultimate Bodybuilding Bundle
};

// Attach listeners when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".product-button-add");

    buttons.forEach((btn) => {
        const productId = btn.dataset.productId;

        btn.addEventListener("click", () => {
            const checkoutUrl = CHECKOUT_URLS[productId];
            if (!checkoutUrl) {
                console.error("No checkout URL configured for product:", productId);
                return;
            }

            // Redirect to Stripe-hosted checkout
            window.location.href = checkoutUrl;
        });
    });
});
