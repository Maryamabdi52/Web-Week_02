// checkout.js - Handles checkout/order summary page functionality

/**
 * Checkout Module - Manages order summary and confirmation
 */

class Checkout {
    constructor() {
        this.init();
    }

    /**
     * Initialize checkout page
     */
    init() {
        this.renderOrderItems();
        this.renderOrderSummary();
        
        // Check if cart is empty
        if (cart.items.length === 0) {
            this.showEmptyCart();
        }
    }

    /**
     * Render order items on checkout page
     */
    renderOrderItems() {
        const orderItemsContainer = document.getElementById('orderItems');
        
        if (!orderItemsContainer) return;
        
        if (cart.items.length === 0) {
            orderItemsContainer.innerHTML = '';
            return;
        }

        orderItemsContainer.innerHTML = cart.items.map(item => {
            const product = new Product(
                item.id,
                item.name,
                item.price,
                item.category,
                item.image,
                item.description
            );
            return product.renderOrderSummary(item.quantity);
        }).join('');
    }

    /**
     * Render order summary on checkout page
     */
    renderOrderSummary() {
        const orderSummaryContainer = document.getElementById('orderSummaryDetails');
        
        if (!orderSummaryContainer) return;

        const subtotal = cart.getSubtotal();
        const tax = cart.getTax();
        const discount = cart.getDiscount();
        const total = cart.getTotal();

        orderSummaryContainer.innerHTML = `
            <div class="order-summary-line">
                <span>Subtotal</span>
                <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div class="order-summary-line">
                <span>Tax (5%)</span>
                <span>$${tax.toFixed(2)}</span>
            </div>
            ${discount > 0 ? `
                <div class="order-summary-line discount">
                    <span><i class="fas fa-tag"></i> Discount (10%)</span>
                    <span>-$${discount.toFixed(2)}</span>
                </div>
            ` : ''}
            <div class="order-summary-line total">
                <span>Total</span>
                <span>$${total.toFixed(2)}</span>
            </div>
        `;
    }

    /**
     * Show empty cart message
     */
    showEmptyCart() {
        const checkoutContent = document.getElementById('checkoutContent');
        
        if (!checkoutContent) return;
        
        checkoutContent.innerHTML = `
            <div class="empty-checkout">
                <i class="fas fa-shopping-bag"></i>
                <h3>Your cart is empty</h3>
                <p>Looks like you haven't added any items to your cart yet.</p>
                <a href="index.html#products" class="btn btn-primary">
                    <i class="fas fa-shopping-cart"></i> Start Shopping
                </a>
            </div>
        `;
    }

    /**
     * Confirm order (simulates order confirmation)
     */
    confirmOrder() {
        if (cart.items.length === 0) {
            cart.showNotification('Your cart is empty');
            return;
        }

        // Show success message
        const successMessage = document.getElementById('successMessage');
        const checkoutContent = document.getElementById('checkoutContent');
        
        if (successMessage && checkoutContent) {
            checkoutContent.style.display = 'none';
            successMessage.classList.add('show');
            
            // Clear cart after confirmation
            setTimeout(() => {
                cart.clearCart();
            }, 1000);
        }
    }
}

// Create global checkout instance
const checkout = new Checkout();

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Checkout;
}

