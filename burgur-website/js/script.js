'use strict';

/* =========================================================
   DATA
========================================================= */
const heroImages = [
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=80"
];

const features = [
  { icon: "fa-solid fa-truck-fast", label: "Fast Delivery" },
  { icon: "fa-solid fa-leaf", label: "Fresh Ingredients" },
  { icon: "fa-solid fa-fire-burner", label: "Grilled To Order" },
  { icon: "fa-solid fa-star", label: "5-Star Rated" }
];

const categories = ["All", "Burgers", "Sides", "Fries", "Drinks", "Desserts", "Wraps", "Salads"];

const menuItems = [
  { id: 1, name: "Classic Cheeseburger", category: "Burgers", description: "Beef patty, cheddar, lettuce, tomato, house sauce", price: 8.99, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80", badge: "Best Seller" },
  { id: 2, name: "Double Smash Burger", category: "Burgers", description: "Two smashed patties, double cheese, pickles, onions", price: 11.99, image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=80", badge: null },
  { id: 3, name: "BBQ Bacon Burger", category: "Burgers", description: "Smoky BBQ sauce, crispy bacon, cheddar, onion rings", price: 10.99, image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=600&q=80", badge: "New" },
  { id: 4, name: "Spicy Jalapeño Burger", category: "Burgers", description: "Pepper jack, jalapeños, spicy mayo, crispy onions", price: 10.49, image: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=600&q=80", badge: null },
  { id: 5, name: "Loaded Cheese Fries", category: "Fries", description: "Crispy fries topped with melted cheese and bacon bits", price: 6.49, image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=600&q=80", badge: null },
  { id: 6, name: "Curly Fries", category: "Fries", description: "Seasoned curly fries, crispy golden perfection", price: 4.99, image: "https://images.unsplash.com/photo-1518013431117-eb1465fa5752?auto=format&fit=crop&w=600&q=80", badge: null },
  { id: 7, name: "Onion Rings", category: "Sides", description: "Beer-battered onion rings with chipotle dip", price: 5.49, image: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=600&q=80", badge: null },
  { id: 8, name: "Buffalo Wings", category: "Sides", description: "6-piece crispy wings tossed in buffalo sauce", price: 7.99, image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=600&q=80", badge: "Spicy" },
  { id: 9, name: "Classic Milkshake", category: "Drinks", description: "Creamy vanilla shake topped with whipped cream", price: 4.99, image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=600&q=80", badge: null },
  { id: 10, name: "Fresh Lemonade", category: "Drinks", description: "House-made lemonade, cold and refreshing", price: 3.49, image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?auto=format&fit=crop&w=600&q=80", badge: null },
  { id: 11, name: "Chocolate Brownie", category: "Desserts", description: "Warm fudge brownie with vanilla ice cream", price: 5.99, image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80", badge: null },

  { id: 13, name: "Grilled Chicken Wrap", category: "Wraps", description: "Grilled chicken, lettuce, ranch in a soft tortilla", price: 8.49, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80", badge: null },
  { id: 14, name: "Veggie Wrap", category: "Wraps", description: "Fresh vegetables, hummus, feta in a spinach wrap", price: 7.49, image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80", badge: "Veg" },
  { id: 15, name: "Garden Salad", category: "Salads", description: "Mixed greens, cherry tomatoes, cucumber, vinaigrette", price: 6.99, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80", badge: null },
  { id: 16, name: "Caesar Salad", category: "Salads", description: "Romaine, parmesan, croutons, classic caesar dressing", price: 7.49, image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=600&q=80", badge: null }
];

const testimonials = [
  { id: 1, name: "Karim Hassan", role: "Regular Customer", quote: "Best burger in town, hands down. The smash burger is life-changing — perfectly seasoned and always fresh.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" },
  { id: 2, name: "Layla Ahmed", role: "Food Blogger", quote: "BURGUR nails the balance between indulgent and fresh. Their buns are baked in-house and you can genuinely taste the difference.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" },
  { id: 3, name: "Omar Farid", role: "Regular Customer", quote: "I order from here every week. Fast delivery, hot food, and the loaded fries are unbeatable.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80" }
];

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=700&q=80", alt: "Stack of gourmet burgers", size: "wide" },
  { src: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80", alt: "Chef grilling patties", size: "tall" },
  { src: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=500&q=80", alt: "Loaded cheese fries", size: "" },
  { src: "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=500&q=80", alt: "Buffalo wings platter", size: "" },
  { src: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=500&q=80", alt: "Double smash burger", size: "tall" },
  { src: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=500&q=80", alt: "Classic milkshake", size: "" },
  { src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=500&q=80", alt: "BBQ bacon burger", size: "" }
];

/* =========================================================
   STATE
========================================================= */
const state = {
  category: "All",
  sort: "default",
  search: "",
  heroIndex: 0,
  testimonialIndex: 0,
  cart: JSON.parse(localStorage.getItem("burgur_cart") || "[]"),
  favorites: JSON.parse(localStorage.getItem("burgur_favorites") || "[]")
};

const formatPrice = (n) => "$" + n.toFixed(2);

/* =========================================================
   RENDER: HERO
========================================================= */
function renderHero() {
  const thumbs = document.getElementById("heroThumbs");
  thumbs.innerHTML = heroImages.map((img, i) => `
    <button class="hero__thumb ${i === state.heroIndex ? "active" : ""}" data-action="hero-thumb" data-index="${i}" aria-label="View image ${i + 1}">
      <img src="${img}" alt="Burger preview ${i + 1}" loading="lazy">
    </button>
  `).join("");
}

function setHeroImage(index) {
  state.heroIndex = index;
  const mainImg = document.getElementById("heroMainImg");
  mainImg.style.opacity = "0";
  setTimeout(() => {
    mainImg.src = heroImages[index];
    mainImg.style.opacity = "1";
  }, 200);
  document.querySelectorAll(".hero__thumb").forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });
}

/* =========================================================
   RENDER: FEATURES
========================================================= */
function renderFeatures() {
  const grid = document.getElementById("featuresGrid");
  grid.innerHTML = features.map(f => `
    <div class="feature-item">
      <i class="${f.icon}"></i>
      <span>${f.label}</span>
    </div>
  `).join("");
}

/* =========================================================
   RENDER: MENU
========================================================= */
function renderCategoryTabs() {
  const tabs = document.getElementById("categoryTabs");
  tabs.innerHTML = categories.map(cat => `
    <button class="category-tab ${cat === state.category ? "active" : ""}" data-category="${cat}">${cat}</button>
  `).join("");
}

function syncCategoryTabs() {
  document.querySelectorAll(".category-tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === state.category);
  });
}

function getFilteredMenu() {
  let list = [...menuItems];

  if (state.category !== "All") {
    list = list.filter(item => item.category === state.category);
  }

  if (state.search.trim()) {
    const q = state.search.trim().toLowerCase();
    list = list.filter(item =>
      item.name.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    );
  }

  switch (state.sort) {
    case "price-asc": list.sort((a, b) => a.price - b.price); break;
    case "price-desc": list.sort((a, b) => b.price - a.price); break;
    case "name-asc": list.sort((a, b) => a.name.localeCompare(b.name)); break;
  }

  return list;
}

function renderMenu() {
  const grid = document.getElementById("menuGrid");
  const emptyState = document.getElementById("emptyState");
  const filtered = getFilteredMenu();

  if (filtered.length === 0) {
    grid.innerHTML = "";
    emptyState.hidden = false;
    return;
  }
  emptyState.hidden = true;

  grid.innerHTML = filtered.map(item => {
    const isFav = state.favorites.includes(item.id);
    return `
    <article class="menu-card reveal in-view" data-action="open-modal" data-id="${item.id}">
      <div class="menu-card__media">
        <img src="${item.image}" alt="${item.name} — ${item.description}" loading="lazy">
        ${item.badge ? `<span class="menu-card__badge">${item.badge}</span>` : ""}
        <button class="menu-card__fav ${isFav ? "active" : ""}" data-action="favorite" data-id="${item.id}" aria-label="Toggle favorite for ${item.name}">
          <i class="fa-${isFav ? "solid" : "regular"} fa-heart"></i>
        </button>
      </div>
      <div class="menu-card__body">
        <h3 class="menu-card__name">${item.name}</h3>
        <p class="menu-card__desc">${item.description}</p>
        <div class="menu-card__footer">
          <span class="menu-card__price">${formatPrice(item.price)}</span>
          <button class="menu-card__add" data-action="add-cart" data-id="${item.id}" aria-label="Add ${item.name} to cart">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </article>
  `;
  }).join("");
  observeReveal();
}

/* =========================================================
   RENDER: TESTIMONIALS
========================================================= */
function renderTestimonials() {
  const track = document.getElementById("testimonialsTrack");
  const dots = document.getElementById("testimonialsDots");

  track.innerHTML = `
    <div class="testimonials__slides" id="testimonialsSlides">
      ${testimonials.map(t => `
        <div class="testimonial-slide">
          <div class="testimonial-card">
            <div class="testimonial-card__stars">
              <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
            <p class="testimonial-card__quote">"${t.quote}"</p>
            <div class="testimonial-card__person">
              <img src="${t.image}" alt="${t.name}" loading="lazy">
              <div>
                <div class="testimonial-card__name">${t.name}</div>
                <div class="testimonial-card__role">${t.role}</div>
              </div>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `;

  dots.innerHTML = testimonials.map((_, i) => `
    <button data-action="testi-dot" data-index="${i}" aria-label="Go to testimonial ${i + 1}" class="${i === state.testimonialIndex ? "active" : ""}"></button>
  `).join("");

  updateTestimonialPosition();
}

function updateTestimonialPosition() {
  const slides = document.getElementById("testimonialsSlides");
  if (!slides) return;
  slides.style.transform = `translateX(-${state.testimonialIndex * 100}%)`;
  document.querySelectorAll("#testimonialsDots button").forEach((btn, i) => {
    btn.classList.toggle("active", i === state.testimonialIndex);
  });
}

function changeTestimonial(direction) {
  state.testimonialIndex = (state.testimonialIndex + direction + testimonials.length) % testimonials.length;
  updateTestimonialPosition();
}

/* =========================================================
   RENDER: GALLERY
========================================================= */
function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = galleryImages.map(g => `
    <div class="gallery-item reveal ${g.size ? "gallery-item--" + g.size : ""}">
      <img src="${g.src}" alt="${g.alt}" loading="lazy">
    </div>
  `).join("");
  observeReveal();
}

/* =========================================================
   CART
========================================================= */
function saveCart() { localStorage.setItem("burgur_cart", JSON.stringify(state.cart)); }

function addToCart(id, qty = 1) {
  const item = menuItems.find(m => m.id === id);
  if (!item) return;
  const existing = state.cart.find(c => c.id === id);
  if (existing) {
    existing.qty += qty;
  } else {
    state.cart.push({ id, qty });
  }
  saveCart();
  updateCartCount();
  renderCartDrawer();
  showToast(`${item.name} added to order`, "fa-solid fa-bag-shopping");
}

function changeQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(id, false);
  } else {
    saveCart();
    updateCartCount();
    renderCartDrawer();
  }
}

function removeFromCart(id, notify = true) {
  state.cart = state.cart.filter(i => i.id !== id);
  saveCart();
  updateCartCount();
  renderCartDrawer();
  if (notify) showToast("Item removed from order", "fa-solid fa-trash");
}

function updateCartCount() {
  const count = state.cart.reduce((sum, i) => sum + i.qty, 0);
  const el = document.getElementById("cartCount");

  el.textContent = count;
  el.style.display = count > 0 ? "flex" : "none";

  if (count > 0) {
    el.classList.remove("pulse");
    void el.offsetWidth;
    el.classList.add("pulse");
  }
}

function renderCartDrawer() {
  const container = document.getElementById("cartItems");
  const totalEl = document.getElementById("cartTotal");

  if (state.cart.length === 0) {
    container.innerHTML = `<p class="cart-drawer__empty">Your order is empty.</p>`;
    totalEl.textContent = formatPrice(0);
    return;
  }

  let total = 0;
  container.innerHTML = state.cart.map(c => {
    const item = menuItems.find(m => m.id === c.id);
    if (!item) return "";
    total += item.price * c.qty;
    return `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}">
        <div class="cart-item__info">
          <div class="cart-item__name">${item.name}</div>
          <div class="cart-item__price">${formatPrice(item.price)}</div>
          <div class="cart-item__qty">
            <button data-action="qty-dec" data-id="${item.id}" aria-label="Decrease quantity">−</button>
            <span>${c.qty}</span>
            <button data-action="qty-inc" data-id="${item.id}" aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button class="cart-item__remove" data-action="remove-cart" data-id="${item.id}" aria-label="Remove ${item.name}"><i class="fa-solid fa-xmark"></i></button>
      </div>
    `;
  }).join("");
  totalEl.textContent = formatPrice(total);
}

function openCartDrawer() {
  document.getElementById("cartDrawer").classList.add("active");
  document.getElementById("cartOverlay").classList.add("active");
  document.body.style.overflow = "hidden";
}
function closeCartDrawer() {
  document.getElementById("cartDrawer").classList.remove("active");
  document.getElementById("cartOverlay").classList.remove("active");
  document.body.style.overflow = "";
}

/* =========================================================
   FAVORITES
========================================================= */
function saveFavorites() { localStorage.setItem("burgur_favorites", JSON.stringify(state.favorites)); }

function toggleFavorite(id) {
  const item = menuItems.find(m => m.id === id);
  const index = state.favorites.indexOf(id);
  if (index > -1) {
    state.favorites.splice(index, 1);
    showToast("Removed from favorites", "fa-regular fa-heart");
  } else {
    state.favorites.push(id);
    showToast("Added to favorites", "fa-solid fa-heart");
  }
  saveFavorites();
  renderMenu();
}

/* =========================================================
   TOAST
========================================================= */
function showToast(message, icon = "fa-solid fa-circle-check") {
  const container = document.getElementById("toastContainer");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i class="${icon}"></i><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

/* =========================================================
   ITEM DETAILS MODAL
========================================================= */
let modalQty = 1;

function openItemModal(id) {
  const item = menuItems.find(m => m.id === id);
  if (!item) return;
  modalQty = 1;

  document.getElementById("modalContent").innerHTML = `
    <img src="${item.image}" alt="${item.name} — ${item.description}" class="modal__img">
    <div class="modal__info">
      <span class="modal__category">${item.category}</span>
      <h2 class="modal__name" id="modalItemName">${item.name}</h2>
      <p class="modal__desc">${item.description}. Made fresh to order with quality ingredients you can taste.</p>
      <div class="modal__price">${formatPrice(item.price)}</div>
      <div class="modal__qty">
        <button data-action="modal-qty-dec" aria-label="Decrease quantity">−</button>
        <span id="modalQtyValue">1</span>
        <button data-action="modal-qty-inc" aria-label="Increase quantity">+</button>
      </div>
      <div class="modal__actions">
        <button class="btn btn--primary" data-action="modal-add-cart" data-id="${item.id}">Add to Order</button>
      </div>
    </div>
  `;

  const modal = document.getElementById("itemModal");
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("modalCloseBtn").focus();
}

function closeItemModal() {
  const modal = document.getElementById("itemModal");
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

/* =========================================================
   SCROLL REVEAL
========================================================= */
let revealObserver;
function observeReveal() {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
  }
  document.querySelectorAll(".reveal:not(.in-view)").forEach(el => revealObserver.observe(el));
}

/* =========================================================
   MOBILE MENU
========================================================= */
function initMobileMenu() {
  const hamburger = document.getElementById("hamburgerBtn");
  const mobileNav = document.getElementById("mobileNav");
  const overlay = document.getElementById("overlay");

  function toggle(open) {
    mobileNav.classList.toggle("active", open);
    overlay.classList.toggle("active", open);
    hamburger.setAttribute("aria-expanded", String(open));
    document.body.style.overflow = open ? "hidden" : "";
  }

  hamburger.addEventListener("click", () => toggle(!mobileNav.classList.contains("active")));
  overlay.addEventListener("click", () => toggle(false));
  mobileNav.querySelectorAll(".mobile-nav__link").forEach(link => {
    link.addEventListener("click", () => toggle(false));
  });
}

/* =========================================================
   SEARCH
========================================================= */
function initSearch() {
  const searchBtn = document.getElementById("searchBtn");
  const closeBtn = document.getElementById("closeSearchBtn");
  const overlay = document.getElementById("searchOverlay");
  const input = document.getElementById("searchInput");

  searchBtn.addEventListener("click", () => {
    overlay.classList.add("active");
    setTimeout(() => input.focus(), 150);
  });
  closeBtn.addEventListener("click", () => overlay.classList.remove("active"));

  input.addEventListener("input", (e) => {
    state.search = e.target.value;
    renderMenu();
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      overlay.classList.remove("active");
    }
  });
}

/* =========================================================
   EVENT DELEGATION
========================================================= */
function initDelegatedEvents() {
  document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-action]");
    if (!target) return;
    const action = target.dataset.action;
    const id = Number(target.dataset.id);

    switch (action) {
      case "open-modal": openItemModal(id); break;
      case "add-cart": addToCart(id); break;
      case "favorite": toggleFavorite(id); break;
      case "qty-inc": changeQty(id, 1); break;
      case "qty-dec": changeQty(id, -1); break;
      case "remove-cart": removeFromCart(id); break;
      case "hero-thumb": setHeroImage(Number(target.dataset.index)); break;
      case "testi-dot":
        state.testimonialIndex = Number(target.dataset.index);
        updateTestimonialPosition();
        break;
      case "modal-qty-inc":
        modalQty += 1;
        document.getElementById("modalQtyValue").textContent = modalQty;
        break;
      case "modal-qty-dec":
        modalQty = Math.max(1, modalQty - 1);
        document.getElementById("modalQtyValue").textContent = modalQty;
        break;
      case "modal-add-cart":
        addToCart(id, modalQty);
        closeItemModal();
        break;
    }
  });
}

/* =========================================================
   INIT
========================================================= */
function init() {
  document.getElementById("year").textContent = new Date().getFullYear();

  renderHero();
  renderFeatures();
  renderCategoryTabs();
  renderMenu();
  renderTestimonials();
  renderGallery();
  renderCartDrawer();
  updateCartCount();
  observeReveal();
  initMobileMenu();
  initSearch();
  initDelegatedEvents();

  // Category tabs
  document.getElementById("categoryTabs").addEventListener("click", (e) => {
    const btn = e.target.closest(".category-tab");
    if (!btn) return;
    state.category = btn.dataset.category;
    syncCategoryTabs();
    renderMenu();
  });

  // Sort
  document.getElementById("sortSelect").addEventListener("change", (e) => {
    state.sort = e.target.value;
    renderMenu();
  });

  // Modal close
  document.getElementById("modalCloseBtn").addEventListener("click", closeItemModal);
  document.getElementById("modalBackdrop").addEventListener("click", closeItemModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeItemModal();
      closeCartDrawer();
    }
  });

  // Cart drawer
  document.getElementById("cartBtn").addEventListener("click", openCartDrawer);
  document.getElementById("cartCloseBtn").addEventListener("click", closeCartDrawer);
  document.getElementById("cartOverlay").addEventListener("click", closeCartDrawer);
  document.getElementById("footerCart").addEventListener("click", (e) => { e.preventDefault(); openCartDrawer(); });
  document.getElementById("footerCheckout").addEventListener("click", (e) => { e.preventDefault(); openCartDrawer(); });
  document.getElementById("checkoutBtn").addEventListener("click", () => {
    if (state.cart.length === 0) {
      showToast("Your order is empty", "fa-solid fa-circle-exclamation");
      return;
    }
    showToast("Order placed successfully!", "fa-solid fa-circle-check");
    state.cart = [];
    saveCart();
    updateCartCount();
    renderCartDrawer();
    closeCartDrawer();
  });

  // Footer placeholder links
  ["footerAccount", "footerOrders"].forEach(id => {
    document.getElementById(id).addEventListener("click", (e) => {
      e.preventDefault();
      showToast("Page coming soon", "fa-solid fa-circle-info");
    });
  });

  // Newsletter subscribe
  document.getElementById("subscribeForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("subscribeEmail");
    if (emailInput.value.trim()) {
      showToast("Welcome to the club! Check your email", "fa-solid fa-envelope-circle-check");
      emailInput.value = "";
    }
  });

  // Testimonial nav
  document.getElementById("testiPrev").addEventListener("click", () => changeTestimonial(-1));
  document.getElementById("testiNext").addEventListener("click", () => changeTestimonial(1));

  // Active nav link highlighting on scroll
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav__link");
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
        });
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(sec => navObserver.observe(sec));

  // Auto-advance testimonials
  setInterval(() => changeTestimonial(1), 6000);

  // Auto-advance hero images
  setInterval(() => {
    const next = (state.heroIndex + 1) % heroImages.length;
    setHeroImage(next);
  }, 5000);
}

document.addEventListener("DOMContentLoaded", init);
