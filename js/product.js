// product.js - Handles product rendering and product-related operations

/**
 * Product Module - Manages product data and rendering
 */

class Product {
    constructor(id, name, price, category, image, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.image = image;
        this.description = description;
    }

    /**
     * Get product data from DOM
     * @param {string} productId - The product ID
     * @returns {Product|null} Product object or null
     */
    static getProductFromDOM(productId) {
        const productCard = document.querySelector(`[data-id="${productId}"]`);
        
        if (!productCard) return null;
        
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.getAttribute('data-price'));
        const productCategory = productCard.getAttribute('data-category');
        const productImage = productCard.querySelector('img').src;
        const productDescription = productCard.querySelector('p').textContent;
        
        return new Product(
            productId,
            productName,
            productPrice,
            productCategory,
            productImage,
            productDescription
        );
    }

    /**
     * Render cart item to HTML
     * @returns {string} HTML string for cart item
     */
    renderCartItem(quantity) {
        return `
            <div class="cart-item" data-id="${this.id}">
                <div class="cart-item-image">
                    <img src="${this.image}" alt="${this.name}">
                </div>
                <div class="cart-item-details">
                    <h4>${this.name}</h4>
                    <p class="cart-item-price">$${this.price.toFixed(2)}</p>
                    <div class="cart-item-controls">
                        <button class="quantity-btn decrease" onclick="cart.updateQuantity(${this.id}, -1)">
                            <i class="fas fa-minus"></i>
                        </button>
                        <span class="quantity">${quantity}</span>
                        <button class="quantity-btn increase" onclick="cart.updateQuantity(${this.id}, 1)">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <div class="cart-item-actions">
                    <button class="remove-item-btn" onclick="cart.removeItem(${this.id})" title="Remove item">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                    <p class="cart-item-total">$${(this.price * quantity).toFixed(2)}</p>
                </div>
            </div>
        `;
    }

    /**
     * Render order summary item
     * @param {number} quantity - Item quantity
     * @returns {string} HTML string for order summary item
     */
    renderOrderSummary(quantity) {
        return `
            <div class="order-item" data-id="${this.id}">
                <div class="order-item-image">
                    <img src="${this.image}" alt="${this.name}">
                </div>
                <div class="order-item-details">
                    <h4>${this.name}</h4>
                    <p>Quantity: ${quantity}</p>
                    <p class="order-item-total">$${(this.price * quantity).toFixed(2)}</p>
                </div>
            </div>
        `;
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Product;
}

