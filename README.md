# Hami MiniMarket - Fresh Local Produce Website

## Project Overview
Hami MiniMarket is a modern, responsive website for a local fresh produce market. The website showcases fresh fruits and vegetables with an emphasis on local sourcing, quality, and community connection.

## 🎯 Project Purpose
- Create a professional website for Hami MiniMarket
- Showcase fresh, locally-sourced fruits and vegetables
- Provide contact information and product catalog
- Build community connection through quality produce presentation

## 🛠️ Technologies Used
- **HTML5** - Semantic structure and content
- **CSS3** - Styling, responsive design, and animations
- **JavaScript** - Interactive features and form validation
- **Font Awesome** - Icons and visual elements
- **Google Fonts** - Typography (Poppins font family)

## 🚀 Features

### Week 2 - Product Catalog
- Responsive layout (mobile and desktop)
- Product catalog (8+ items: name, image, price, category)
- Real-time search by product name
- Category filter (Fruits/Vegetables)
- Price filter (≤ selected price)
- Add to Cart button + navbar cart counter (localStorage)
- Contact form with client-side validation

### Week 3 - Modular Shopping Cart System ⭐ NEW!
- **Modular Code Architecture**:
  - `product.js` - Product rendering and management
  - `cart.js` - Cart logic and operations
  - `storage.js` - localStorage management
  - `checkout.js` - Order summary functionality
- **Cart Modal/Sidebar**:
  - Slide-in cart modal from right
  - View all cart items with images
  - Update quantities (+/- buttons)
  - Remove individual items
  - Clear entire cart
- **Persistent Storage**:
  - Cart saved in browser localStorage
  - Automatically loads on page refresh
  - Cart counter in navbar
- **Order Summary Page**:
  - Dedicated checkout page (`checkout.html`)
  - Display all items with details
  - Subtotal, tax (5%), and total calculation
  - Confirm order button
- **Discount System**:
  - 10% discount for orders over $50
  - Automatically applied at checkout
- **Toast Notifications**:
  - Slide-in notifications for cart actions
  - Success messages for add/remove/update
- **Animations**:
  - Fade-in cart items
  - Slide-out cart modal
  - Smooth transitions

## 📱 How to Run the Project

### Option 1: Local Development
1. Clone or download this repository
2. Open `index.html` in your web browser
3. The website will load with all styles and functionality

### Option 2: Live Server (Recommended)
1. Install a local development server (e.g., Live Server extension in VS Code)
2. Open the project folder in your code editor
3. Start the live server
4. Navigate to the provided local URL

### Option 3: Deploy to Web
- **GitHub Pages**: Push to GitHub and enable Pages in repository settings
- **Netlify**: Drag and drop the project folder to Netlify
- **Other Platforms**: Upload files to any web hosting service

## 📁 Project Structure
```
web2/
├── index.html           # Landing + product catalog (search & filters)
├── checkout.html        # Order summary and checkout page
├── styles.css           # Styles and responsive rules
├── script.js            # Search, filters, UI interactions
├── js/
│   ├── storage.js       # localStorage operations
│   ├── product.js       # Product rendering and management
│   ├── cart.js          # Cart logic and operations
│   └── checkout.js      # Checkout page functionality
├── README.md            # Documentation (this file)
├── picture1.jpg .. picture11.jpg # Product images
```

## 🎨 Design Features
- **Color Scheme**: Fresh greens and natural tones
- **Typography**: Modern Poppins font family
- **Layout**: Grid-based responsive design
- **Icons**: Font Awesome icons for visual appeal
- **Animations**: Smooth hover effects and transitions

## 📞 Contact Information
- **Location**: Somalia, Mogadishu, Wartanabada
- **Phone**: (+252) 61-1-63-52-73
- **Email**: maryamabdimohamed63@gmail.com

## 🌟 Key Sections
1. **Hero Section** - Welcome message and call-to-action
2. **Products** - Fresh produce showcase with descriptions
3. **About** - Company mission and values
4. **Contact** - Contact form and business information
5. **Footer** - Social links and additional information

## 🔧 Technical Implementation
- HTML5 (semantic structure)
- CSS Grid/Flexbox, media queries
- JavaScript (DOM manipulation, filter logic, localStorage)
- Accessibility-friendly labels and alt text
- Cross-browser responsive design

## 🧪 How to Test the Cart (Week 3)

### Testing the Cart System
1. **Add Items**:
   - Click "Add to Cart" on any product
   - Cart modal should slide in from right
   - Toast notification appears

2. **Update Quantities**:
   - In cart modal, use +/- buttons to change quantity
   - Total updates automatically
   - Toast notification appears

3. **Remove Items**:
   - Click trash icon to remove individual items
   - Or "Clear Cart" to remove all
   - Toast notification appears

4. **Persistent Storage**:
   - Add items to cart
   - Refresh page (F5)
   - Items should still be in cart

5. **Checkout**:
   - Click "Proceed to Checkout" in cart modal
   - Review order on checkout page
   - See subtotal, tax (5%), and total
   - If total > $50, see 10% discount applied
   - Click "Confirm Order" to complete

6. **Discount System**:
   - Add items totaling over $50
   - Go to checkout
   - See 10% discount applied automatically

### localStorage Usage
The cart uses `localStorage.getItem('cart')` and `localStorage.setItem('cart')` to persist cart data across page refreshes. Open browser DevTools (F12) → Application → Local Storage to view saved cart data.

## 📈 Future Enhancements
- User authentication and order history
- Payment integration
- Reviews and ratings
- Newsletter subscription
- Product recommendations

## 📤 Deployment
- GitHub Pages: push repo → Settings → Pages → Deploy from main branch
- Netlify: drag-and-drop folder or connect repo (build command not required)

## 📝 How to Run Locally
1. Clone/download the repo
2. Open `index.html` in any modern browser
3. Or use a live server extension for auto-reload

## 💼 LinkedIn Post Templates

### Week 2 Post
I just completed Week 2 of the HamiSkills Web Dev track! Built a responsive product catalog for Hami MiniMarket with real-time search, category and price filters, plus an Add to Cart and navbar counter (no backend yet). Learned a lot about DOM manipulation, event handling, and localStorage. Live demo/repo: <your link>

### Week 3 Post ⭐ NEW!
🚀 Week 3 complete! Built a modular shopping cart system for Hami MiniMarket using separation of concerns:
✅ product.js - Product rendering
✅ cart.js - Cart logic & operations  
✅ storage.js - localStorage management
✅ checkout.js - Order summary

Features: Slide-in cart modal, persistent storage, 10% discount for orders over $50, toast notifications, and smooth animations. Clean, scalable code architecture with modular JavaScript modules. #WebDevelopment #JavaScript #LocalStorage #SeparationOfConcerns

Live demo: <your link>

---

## ✅ Week 3 Deliverables Checklist

- [x] ✅ Modular Cart System (product.js, cart.js, storage.js)
- [x] ✅ "Add to Cart" buttons for each product
- [x] ✅ Cart modal/sidebar with items display
- [x] ✅ Product name, quantity, price in cart
- [x] ✅ Total cost with tax (5%)
- [x] ✅ "Remove" and "Update Quantity" options
- [x] ✅ Persistent cart storage (localStorage)
- [x] ✅ Auto-load cart on page refresh
- [x] ✅ Cart counter in navbar
- [x] ✅ Order Summary page (checkout.html)
- [x] ✅ Clean summary with subtotal, tax, and total
- [x] ✅ "Confirm Order" button
- [x] ✅ Toast notifications
- [x] ✅ Cart animations (fade-in, slide-out)
- [x] ✅ Discount system (10% off if total > $50)

---

**Developer**: Maryan Abdi Mohamed  
**Project**: Week 3 – Modular Shopping Cart System  
**Date**: January 2025  
**Platform**: Hami Skills Development Program
#   W e b - W e e k _ 0 3  
 