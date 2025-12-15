
const allProducts = [
    // CASHEWS
    { 
        id: 1, 
        name: "W320 Jumbo Cashews", 
        cat: "Cashews", 
        weight: "500g", 
        price: 850, 
        img: "images/W320 Jumbo Cashews/1.jpg", 
        desc: "Premium large white whole cashews (W320 grade). Creamy and crunchy.",
        gallery: ["images/W320 Jumbo Cashews/1.jpg", "images/W320 Jumbo Cashews/2.jpg", "images/W320 Jumbo Cashews/3.jpg"]
    },
    { 
        id: 2, 
        name: "Roasted Salted Cashews", 
        cat: "Cashews", 
        weight: "250g", 
        price: 450, 
        img: "images/Roasted Salted Cashews/1.jpg", 
        desc: "Slow roasted and lightly salted for the perfect savory snack.",
        gallery: ["images/Roasted Salted Cashews/1.jpg", "images/Roasted Salted Cashews/2.jpg", "images/Roasted Salted Cashews/3.jpg"]
    },
    { 
        id: 3, 
        name: "Peri Peri Cashews", 
        cat: "Cashews", 
        weight: "200g", 
        price: 380, 
        img: "images/Peri Peri Cashews/1.jpg", 
        desc: "Spicy peri peri masala coated cashews.",
        gallery: ["images/Peri Peri Cashews/1.jpg", "images/Peri Peri Cashews/2.jpg", "images/Peri Peri Cashews/3.jpg"]
    },
    
    // ALMONDS
    { 
        id: 4, 
        name: "California Almonds", 
        cat: "Almonds", 
        weight: "1kg", 
        price: 1100, 
        img: "images/California Almonds/1.jpg", 
        desc: "100% Natural California almonds. High in protein and Vitamin E.",
        gallery: ["images/California Almonds/1.jpg", "images/California Almonds/2.jpg", "images/California Almonds/3.jpg"]
    },
    { 
        id: 5, 
        name: "Mamra Almonds Premium", 
        cat: "Almonds", 
        weight: "500g", 
        price: 1400, 
        img: "images/Mamra Almonds Premium/1.jpg", 
        desc: "Authentic Irani Mamra Almonds. Superior taste and high oil content.",
        gallery: ["images/Mamra Almonds Premium/1.jpg", "images/Mamra Almonds Premium/2.jpg", "images/Mamra Almonds Premium/3.jpg"]
    },
    { 
        id: 6, 
        name: "Smoke Roasted Almonds", 
        cat: "Almonds", 
        weight: "250g", 
        price: 550, 
        img: "images/Smoke Roasted Almonds/1.jpg", 
        desc: "Crunchy almonds with a smoky BBQ flavour.",
        gallery: ["images/Smoke Roasted Almonds/1.jpg", "images/Smoke Roasted Almonds/2.jpg", "images/Smoke Roasted Almonds/3.jpg"]
    },

    // WALNUTS
    { 
        id: 7, 
        name: "Kashmiri Walnut Kernels", 
        cat: "Walnuts", 
        weight: "500g", 
        price: 900, 
        img: "images/Kashmiri Walnut Kernels/1.jpg", 
        desc: "Fresh snow-white walnut kernels from Kashmir.",
        gallery: ["images/Kashmiri Walnut Kernels/1.jpg", "images/Kashmiri Walnut Kernels/2.jpg", "images/Kashmiri Walnut Kernels/3.jpg"]
    },
    { 
        id: 8, 
        name: "Inshell Walnuts", 
        cat: "Walnuts", 
        weight: "1kg", 
        price: 750, 
        img: "images/Inshell Walnuts/1.jpg", 
        desc: "Whole walnuts with shell. Crack them fresh.",
        gallery: ["images/Inshell Walnuts/1.jpg", "images/Inshell Walnuts/2.jpg", "images/Inshell Walnuts/3.jpg"]
    },

    // PISTACHIOS
    { 
        id: 9, 
        name: "Irani Roasted Pistachios", 
        cat: "Pistachios", 
        weight: "500g", 
        price: 1200, 
        img: "images/Irani Roasted Pistachios/1.jpg", 
        desc: "Large lightly salted roasted pistachios.",
        gallery: ["images/Irani Roasted Pistachios/1.jpg", "images/Irani Roasted Pistachios/2.jpg", "images/Irani Roasted Pistachios/3.jpg"]
    },
    { 
        id: 10, 
        name: "Plain Pista Kernels", 
        cat: "Pistachios", 
        weight: "200g", 
        price: 600, 
        img: "images/Plain Pista Kernels/1.jpg", 
        desc: "Unsalted pistachio kernels, perfect for baking or sweets.",
        gallery: ["images/Plain Pista Kernels/1.jpg", "images/Plain Pista Kernels/2.jpg", "images/Plain Pista Kernels/3.jpg"]
    },

    // RAISINS
    { 
        id: 11, 
        name: "Afghan Green Raisins", 
        cat: "Raisins", 
        weight: "500g", 
        price: 350, 
        img: "images/Afghan Green Raisins/1.jpg", 
        desc: "Sweet, long green raisins (Kishmish).",
        gallery: ["images/Afghan Green Raisins/1.jpg", "images/Afghan Green Raisins/2.jpg", "images/Afghan Green Raisins/3.jpg"]
    },
    { 
        id: 12, 
        name: "Premium Black Raisins", 
        cat: "Raisins", 
        weight: "250g", 
        price: 250, 
        img: "images/Premium Black Raisins/1.jpg", 
        desc: "Seedless black raisins, rich in iron.",
        gallery: ["images/Premium Black Raisins/1.jpg", "images/Premium Black Raisins/2.jpg", "images/Premium Black Raisins/3.jpg"]
    },

    // DATES
    { 
        id: 13, 
        name: "Medjool Dates", 
        cat: "Dates", 
        weight: "500g", 
        price: 800, 
        img: "images/Medjool Dates/1.jpg", 
        desc: "The king of dates. Large, soft, and caramel-like sweetness.",
        gallery: ["images/Medjool Dates/1.jpg", "images/Medjool Dates/2.jpg", "images/Medjool Dates/3.jpg"]
    },
    { 
        id: 14, 
        name: "Ajwa Dates", 
        cat: "Dates", 
        weight: "250g", 
        price: 900, 
        img: "images/Ajwa Dates/1.jpg", 
        desc: "Holy dates from Medina. Highly nutritious.",
        gallery: ["images/Ajwa Dates/1.jpg", "images/Ajwa Dates/2.jpg", "images/Ajwa Dates/3.jpg"]
    },
    { 
        id: 15, 
        name: "Omani Dates", 
        cat: "Dates", 
        weight: "1kg", 
        price: 600, 
        img: "images/Omani Dates/1.jpg", 
        desc: "Daily use dates, sweet and economical.",
        gallery: ["images/Omani Dates/1.jpg", "images/Omani Dates/2.jpg", "images/Omani Dates/3.jpg"]
    },

    // FIGS
    { 
        id: 16, 
        name: "Afghani Anjeer (Figs)", 
        cat: "Figs", 
        weight: "500g", 
        price: 950, 
        img: "images/Afghani Anjeer (Figs)/1.jpg", 
        desc: "Large dried figs strung together. Excellent for digestion.",
        gallery: ["images/Afghani Anjeer (Figs)/1.jpg", "images/Afghani Anjeer (Figs)/2.jpg", "images/Afghani Anjeer (Figs)/3.jpg"]
    },

    // EXOTIC & OTHERS
    { 
        id: 17, 
        name: "Jumbo Dried Apricots", 
        cat: "Exotic", 
        weight: "250g", 
        price: 400, 
        img: "images/Jumbo Dried Apricots/1.jpg", 
        desc: "Turkish dried apricots, vibrant orange and sweet.",
        gallery: ["images/Jumbo Dried Apricots/1.jpg", "images/Jumbo Dried Apricots/2.jpg", "images/Jumbo Dried Apricots/3.jpg"]
    },
    { 
        id: 18, 
        name: "Salted Macadamia Nuts", 
        cat: "Exotic", 
        weight: "200g", 
        price: 1200, 
        img: "images/Salted Macadamia Nuts/1.jpg", 
        desc: "The finest Australian Macadamia nuts, buttery texture.",
        gallery: ["images/Salted Macadamia Nuts/1.jpg", "images/Salted Macadamia Nuts/2.jpg", "images/Salted Macadamia Nuts/3.jpg"]
    },
    { 
        id: 19, 
        name: "Pecan Nuts", 
        cat: "Exotic", 
        weight: "200g", 
        price: 900, 
        img: "images/Pecan Nuts/1.jpg", 
        desc: "Rich and buttery pecans, great for snacking.",
        gallery: ["images/Pecan Nuts/1.jpg", "images/Pecan Nuts/2.jpg", "images/Pecan Nuts/3.jpg"]
    },
    { 
        id: 20, 
        name: "Brazil Nuts", 
        cat: "Exotic", 
        weight: "200g", 
        price: 850, 
        img: "images/Brazil Nuts/1.jpg", 
        desc: "Rich in Selenium. Crunchy and creamy.",
        gallery: ["images/Brazil Nuts/1.jpg", "images/Brazil Nuts/2.jpg", "images/Brazil Nuts/3.jpg"]
    },
    { 
        id: 21, 
        name: "Healthy Trail Mix", 
        cat: "Exotic", 
        weight: "500g", 
        price: 700, 
        img: "images/Healthy Trail Mix/1.jpg", 
        desc: "A perfect mix of almonds, cashews, raisins, and pumpkin seeds.",
        gallery: ["images/Healthy Trail Mix/1.jpg", "images/Healthy Trail Mix/2.jpg", "images/Healthy Trail Mix/3.jpg"]
    },
    { 
        id: 22, 
        name: "Dried Cranberries", 
        cat: "Exotic", 
        weight: "250g", 
        price: 450, 
        img: "images/Dried Cranberries/1.jpg", 
        desc: "Sliced cranberries, sweet and tangy.",
        gallery: ["images/Dried Cranberries/1.jpg", "images/Dried Cranberries/2.jpg", "images/Dried Cranberries/3.jpg"]
    },
    { 
        id: 23, 
        name: "Dried Blueberries", 
        cat: "Exotic", 
        weight: "200g", 
        price: 550, 
        img: "images/Dried Blueberries/1.jpg", 
        desc: "Rich antioxidant blueberries.",
        gallery: ["images/Dried Blueberries/1.jpg", "images/Dried Blueberries/2.jpg", "images/Dried Blueberries/3.jpg"]
    },
    { 
        id: 24, 
        name: "Kesar (Saffron) Grade A", 
        cat: "Exotic", 
        weight: "1g", 
        price: 450, 
        img: "images/Kesar (Saffron) Grade A/1.jpg", 
        desc: "Pure Kashmiri Mongra Saffron.",
        gallery: ["images/Kesar (Saffron) Grade A/1.jpg", "images/Kesar (Saffron) Grade A/2.jpg", "images/Kesar (Saffron) Grade A/3.jpg"]
    }
];

const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(price);
};

let cart = JSON.parse(localStorage.getItem('kajus_cart')) || [];


const cartSidebar = document.querySelector('.cart-sidebar');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotalEl = document.getElementById('cart-total-amount');
const cartCountEl = document.querySelector('.cart-count');
const modalOverlay = document.querySelector('.modal-overlay');
const mobileMenu = document.querySelector('.mobile-menu');


document.addEventListener('DOMContentLoaded', () => {
    updateCartUI();

    if (document.getElementById('product-grid')) {
        const isHome = document.querySelector('.hero');
        renderProducts(isHome);
        if(!isHome) setupSorting();
    }
    
    if (window.location.pathname.includes('checkout.html')) {
        initCheckout();
    }
});


function saveCart() {
    localStorage.setItem('kajus_cart', JSON.stringify(cart));
    updateCartUI();
    syncAllButtons();
}

function addToCart(id) {
    const product = allProducts.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);
    if (existing) { existing.qty++; } else { cart.push({ ...product, qty: 1 }); }
    saveCart();
    openCart();
}

function updateQty(id, change) {
    const index = cart.findIndex(item => item.id === id);
    if (index > -1) {
        cart[index].qty += change;
        if (cart[index].qty <= 0) cart.splice(index, 1);
        saveCart();
    }
}

function clearCart() {
    cart = [];
    saveCart();
}


function renderProducts(isHome) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    
    let productsToDisplay = isHome ? allProducts.slice(0, 8) : allProducts; 

    // Sorting
    const sortVal = document.getElementById('sort-products')?.value;
    if (sortVal === 'price-low') productsToDisplay.sort((a,b) => a.price - b.price);
    if (sortVal === 'price-high') productsToDisplay.sort((a,b) => b.price - a.price);
    if (sortVal === 'name-asc') productsToDisplay.sort((a,b) => a.name.localeCompare(b.name));

    productsToDisplay.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="card-img-wrap" onclick="openModal(${product.id})">
                <span class="card-weight-badge">${product.weight}</span>
                <img src="${product.img}" alt="${product.name}" loading="lazy">
            </div>
            <div class="card-info">
                <span class="card-cat">${product.cat}</span>
                <h3 class="card-title">${product.name}</h3>
                <div class="card-price">${formatPrice(product.price)}</div>
                <div class="btn-action-container" data-id="${product.id}"></div>
            </div>
        `;
        grid.appendChild(card);
    });
    syncAllButtons();
}

function syncAllButtons() {
    document.querySelectorAll('.btn-action-container').forEach(container => {
        const id = parseInt(container.getAttribute('data-id'));
        const inCart = cart.find(item => item.id === id);
        
        if (inCart) {
            container.innerHTML = `
                <div class="qty-control">
                    <button class="qty-btn" onclick="updateQty(${id}, -1)">-</button>
                    <span class="qty-display">${inCart.qty}</span>
                    <button class="qty-btn" onclick="updateQty(${id}, 1)">+</button>
                </div>`;
        } else {
            container.innerHTML = `<button class="btn-add" onclick="addToCart(${id})">ADD TO CART</button>`;
        }
    });
}


function updateCartUI() {
    const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
    if(cartCountEl) cartCountEl.textContent = totalQty;

    if(cartItemsContainer) {
        cartItemsContainer.innerHTML = '';
        

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = `
                <div class="empty-state">
                    <span class="empty-state-icon">🛒</span>
                    <h3>Your cart is empty</h3>
                    <p>Looks like you haven't added any healthy snacks yet.</p>
                    <button onclick="closeCart()" style="margin-top:20px; color:var(--primary); font-weight:bold; background:none; text-decoration:underline;">Continue Shopping</button>
                </div>
            `;

            if(document.querySelector('.cart-footer')) {
                document.querySelector('.cart-footer').style.display = 'none';
            }
        } else {

            if(document.querySelector('.cart-footer')) {
                document.querySelector('.cart-footer').style.display = 'block';
            }

            let totalPrice = 0;
            cart.forEach(item => {
                totalPrice += item.price * item.qty;
                cartItemsContainer.innerHTML += `
                    <div class="cart-item">
                        <img src="${item.img}" alt="${item.name}">
                        <div class="cart-item-details">
                            <div class="cart-item-title">${item.name}</div>
                            <div class="cart-item-price">${item.weight} | ${formatPrice(item.price)}</div>
                            
                            <div class="cart-qty-wrap">
                                <button class="cart-qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                                <span class="cart-qty-val">${item.qty}</span>
                                <button class="cart-qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                            </div>
                        </div>
                        <div style="font-weight:700; color:var(--secondary);">${formatPrice(item.price * item.qty)}</div>
                    </div>`;
            });
            if(cartTotalEl) cartTotalEl.textContent = formatPrice(totalPrice);
        }
    }
}

function openModal(id) {
    const product = allProducts.find(p => p.id === id);
    if(!product) return;
    const modalHTML = `
        <div class="product-modal">
            <div class="modal-close" onclick="closeModal()">&times;</div>
            <div class="modal-gallery">
                <img src="${product.gallery[0]}" class="main-img" id="main-modal-img">
                <div class="thumbs">
                    ${product.gallery.map(img => `<img src="${img}" onclick="swapImage('${img}')">`).join('')}
                </div>
            </div>
            <div class="modal-info">
                <span style="background:#eee; padding:2px 8px; border-radius:4px; font-size:0.8rem; font-weight:bold; width: fit-content;">${product.weight}</span>
                <h2 style="color:var(--secondary); margin-top:10px; margin-bottom:10px;">${product.name}</h2>
                <div style="font-size:1.5rem; color:var(--primary); font-weight:bold; margin-bottom:20px;">${formatPrice(product.price)}</div>
                <p style="color:#555; line-height:1.6; margin-bottom:20px;">${product.desc}</p>
                <div class="btn-action-container" data-id="${product.id}"></div>
            </div>
        </div>`;
    modalOverlay.innerHTML = modalHTML;
    modalOverlay.style.display = 'flex';
    syncAllButtons();
}

function closeModal() { modalOverlay.style.display = 'none'; }
function swapImage(src) { document.getElementById('main-modal-img').src = src; }
if(modalOverlay) modalOverlay.addEventListener('click', (e) => { if(e.target === modalOverlay) closeModal(); });

function openCart() { cartSidebar.classList.add('open'); cartOverlay.classList.add('open'); }
function closeCart() { cartSidebar.classList.remove('open'); cartOverlay.classList.remove('open'); }
function toggleMobileMenu() { mobileMenu.classList.toggle('active'); }
function setupSorting() {
    const el = document.getElementById('sort-products');
    if(el) el.addEventListener('change', () => renderProducts(false));
}


function initCheckout() {
    if (cart.length === 0) {
        alert('Cart is empty!');
        window.location.href = 'index.html';
        return;
    }
    const container = document.getElementById('checkout-summary');
    const totalEl = document.getElementById('checkout-final-total');
    let total = 0;
    
    container.innerHTML = '';
    cart.forEach(item => {
        total += item.price * item.qty;
        container.innerHTML += `
            <div class="summary-item">
                <span>${item.name} (${item.weight}) x ${item.qty}</span>
                <span>${formatPrice(item.price * item.qty)}</span>
            </div>`;
    });
    totalEl.textContent = formatPrice(total);
}

function placeOrder(e) {
    e.preventDefault();
    const btn = document.querySelector('.btn-place-order');
    btn.innerHTML = 'Processing...';
    btn.style.opacity = '0.7';
    setTimeout(() => {
        alert('Order Placed Successfully via COD!');
        localStorage.removeItem('kajus_cart');
        window.location.href = 'index.html';
    }, 2000);
}


function submitContactForm(e) {
    e.preventDefault();

    const btn = e.target.querySelector('.btn-send');
    const icon = btn.querySelector('#btn-icon');
    const originalText = btn.innerHTML; 


    btn.innerHTML = 'Sending...';
    btn.style.opacity = '0.8';
    btn.style.cursor = 'wait';


    setTimeout(() => {

        btn.innerHTML = 'Message Sent! ✓';
        btn.classList.add('success'); 
        btn.style.opacity = '1';
        btn.style.cursor = 'default';

        
        e.target.reset();

        
        setTimeout(() => {
            btn.classList.remove('success');
            btn.innerHTML = `<span>Send Message</span> <span id="btn-icon">➤</span>`;
            btn.style.cursor = 'pointer';
        }, 3000);

    }, 1500);
}

function newsletterSubmit(e) {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    const input = e.target.querySelector('input');
    const originalText = btn.innerText;

    btn.innerText = 'Joining...';
    btn.style.opacity = '0.8';

    setTimeout(() => {
        btn.innerText = 'Subscribed!';
        btn.style.backgroundColor = '#27ae60';
        btn.style.color = 'white';
        input.value = ''; 

        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.backgroundColor = 'white';
            btn.style.color = '#145A32'; 
        }, 2500);
    }, 1200);
}