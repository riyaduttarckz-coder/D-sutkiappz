// PRODUCTS DATASET
const PRODUCTS = {
    bestSellers: [
        { id: 1, name: 'Loila Icha - লইল্যা ইছা', price: '872 - 3490', numPrice: 872, img: 'images/laila-icha.jpg' },
        { id: 2, name: 'Nona Ilish - নোনা ইলিশ', price: '600 - 1200', numPrice: 600, img: 'images/nona-ilish.jpg' },
        { id: 3, name: 'Popa Shutki - পোপা শুটকি', price: '1445 - 2890', numPrice: 1445, img: 'images/popa.jpg' },
        { id: 4, name: 'Churi Shutki - চুরি শুটকি', price: '700 - 2750', numPrice: 700, img: 'images/churi.jpg' },
        { id: 5, name: 'Loitta Shutki - লইট্টা শুটকি', price: '470 - 1850', numPrice: 470, img: 'images/loitta.jpg' }
    ],
    premium: [
        { id: 201, name: 'লইট্টা শুটকি (Loitta Shutki)', price: '470 - 1850', numPrice: 470, img: 'images/loitta.jpg' },
        { id: 202, name: 'চুরি শুটকি (Churi Shutki)', price: '700 - 2750', numPrice: 700, img: 'images/churi.jpg' },
        { id: 203, name: 'নোনা ইলিশ (Nona Ilish)', price: '600 - 1200', numPrice: 600, img: 'images/nona-ilish.jpg' },
        { id: 204, name: 'পোপা শুটকি (Popa Shutki)', price: '1445 - 2890', numPrice: 1445, img: 'images/popa.jpg' },
        { id: 205, name: 'লইল্যা ইছা (Loila Icha)', price: '872 - 3490', numPrice: 872, img: 'images/laila-icha.jpg' }
    ],
    raw: [
        { id: 301, name: 'রূপচাঁদা তাজা মাছ (Pomfret)', price: '1200 - ২০০০', numPrice: 1200, img: 'images/popa.jpg' },
        { id: 302, name: 'লাক্ষ্যা মাছ (Lakka Fish)', price: '1500 - ২২০০', numPrice: 1500, img: 'images/churi.jpg' }
    ],
    balachao: [
        { id: 401, name: 'চাটগাঁইয়া স্পেশাল চিংড়ি বালাচাও', price: '৪৫০', numPrice: 450, img: 'images/balachao.jpg' },
        { id: 402, name: 'নাগা বালাচাও জার প্যাক', price: '৫০০', numPrice: 500, img: 'images/vorta-mix.jpg' }
    ],
    recipes: [
        { id: 501, name: 'লইট্টা শুটকির ঝুড়ি ভুনা রেসিপি', img: 'images/loitta.jpg', details: 'প্রথমে শুটকি কুসুম গরম পানিতে ভিজিয়ে নরম করুন। এরপর পেঁয়াজ, রসুন ও কাঁচামরিচ দিয়ে তেলের মধ্যে ভুনুন।' },
        { id: 502, name: 'শুটকি ভর্তার ঐতিহ্যবাহী প্রণালী', img: 'images/vorta-mix.jpg', details: 'শুটকি ভালো করে টেলে নিয়ে শুকনো মরিচ, রসুন ও লবণ দিয়ে পাটায় বেটে তৈরি করুন দারুণ সুস্বাদু ভর্তা।' }
    ]
};

let cart = [];
let currentLanguage = 'BN';

// INIT APP
window.onload = function() {
    renderBestSellers();
    renderPremiumProducts();
    renderRawProducts();
    renderBalachaoProducts();
    renderRecipes();
    renderChipsAndVorta();
    renderBlogs();
    setupSidebarCategories();
};

// PAGE ROUTER
function switchPage(pageId) {
    document.querySelectorAll('.page-view').forEach(el => el.classList.add('hidden'));
    const target = document.getElementById(`page-${pageId}`);
    if (target) {
        target.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    document.querySelectorAll('.nav-tab').forEach(btn => btn.classList.remove('active-nav-tab'));
    const activeNavBtn = document.getElementById(`nav-${pageId}`);
    if (activeNavBtn) activeNavBtn.classList.add('active-nav-tab');
}

// RENDERERS
function renderBestSellers() {
    const container = document.getElementById('homeBestSellingGrid');
    if(!container) return;
    container.innerHTML = PRODUCTS.bestSellers.map(p => `
        <div class="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-3">
            <div class="h-36 overflow-hidden rounded-xl bg-slate-50 relative">
                <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover">
            </div>
            <div>
                <h4 class="font-bold text-slate-800 text-xs md:text-sm line-clamp-2">${p.name}</h4>
                <div class="text-[#0073e6] font-black text-sm mt-1">৳ ${p.price}</div>
            </div>
            <button onclick="addToCart(${p.id}, '${p.name}', ${p.numPrice}, '${p.img}')" class="w-full bg-[#0073e6] hover:bg-sky-600 text-white font-bold py-2 rounded-xl text-xs transition">
                Buy Now
            </button>
        </div>
    `).join('');
}

function renderPremiumProducts() {
    const container = document.getElementById('premiumProductsGrid');
    if(!container) return;
    container.innerHTML = PRODUCTS.premium.map(p => `
        <div class="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-3">
            <div class="h-36 overflow-hidden rounded-xl bg-slate-50 relative">
                <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover">
            </div>
            <div>
                <h4 class="font-bold text-slate-800 text-xs md:text-sm line-clamp-2">${p.name}</h4>
                <div class="text-[#0073e6] font-black text-sm mt-1">৳ ${p.price}</div>
            </div>
            <button onclick="addToCart(${p.id}, '${p.name}', ${p.numPrice}, '${p.img}')" class="w-full bg-[#0073e6] hover:bg-sky-600 text-white font-bold py-2 rounded-xl text-xs transition">
                Buy Now
            </button>
        </div>
    `).join('');
}

function renderRawProducts() {
    const container = document.getElementById('rawProductsGrid');
    if(!container) return;
    container.innerHTML = PRODUCTS.raw.map(p => `
        <div class="bg-white rounded-2xl border border-slate-200 p-3 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-3">
            <div class="h-36 overflow-hidden rounded-xl bg-slate-50 relative">
                <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover">
            </div>
            <div>
                <h4 class="font-bold text-slate-800 text-xs md:text-sm line-clamp-2">${p.name}</h4>
                <div class="text-[#0073e6] font-black text-sm mt-1">৳ ${p.price}</div>
            </div>
            <button onclick="addToCart(${p.id}, '${p.name}', ${p.numPrice}, '${p.img}')" class="w-full bg-[#0073e6] hover:bg-sky-600 text-white font-bold py-2 rounded-xl text-xs transition">
                Buy Now
            </button>
        </div>
    `).join('');
}

function renderBalachaoProducts() {
    const container = document.getElementById('balachaoProductsGrid');
    if(!container) return;
    container.innerHTML = PRODUCTS.balachao.map(p => `
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div class="h-48 overflow-hidden bg-slate-100 relative">
                <img src="${p.img}" alt="${p.name}" class="w-full h-full object-cover">
            </div>
            <div class="p-4 space-y-2">
                <h4 class="font-bold text-slate-900 text-sm md:text-base">${p.name}</h4>
                <div class="text-[#0073e6] font-black text-base">৳ ${p.price}</div>
                <button onclick="addToCart(${p.id}, '${p.name}', ${p.numPrice}, '${p.img}')" class="w-full bg-[#0073e6] hover:bg-sky-600 text-white font-bold py-2.5 rounded-xl text-xs transition mt-2">
                    Buy Now
                </button>
            </div>
        </div>
    `).join('');
}

function renderRecipes() {
    const container = document.getElementById('recipesGrid');
    if(!container) return;
    container.innerHTML = PRODUCTS.recipes.map(r => `
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div class="h-44 overflow-hidden bg-slate-100">
                <img src="${r.img}" alt="${r.name}" class="w-full h-full object-cover">
            </div>
            <div class="p-4 space-y-3">
                <h4 class="font-bold text-slate-900 text-base">${r.name}</h4>
                <button onclick="openModalText('${r.name}', '${r.details}')" class="bg-slate-900 hover:bg-slate-800 text-white font-bold px-4 py-2 rounded-xl text-xs transition">
                    আরও পড়ুন
                </button>
            </div>
        </div>
    `).join('');
}

function renderChipsAndVorta() {
    const chipsGrid = document.getElementById('chipsProductsGrid');
    if(chipsGrid) {
        chipsGrid.innerHTML = `
            <div class="bg-white p-3 rounded-2xl border border-slate-200 space-y-2">
                <img src="images/laila-icha.jpg" class="h-32 w-full object-cover rounded-xl">
                <h4 class="font-bold text-sm">ক্রিসপি সামুদ্রিক ফিশ চিপস</h4>
                <div class="text-[#0073e6] font-bold text-sm">৳ ১২০</div>
                <button onclick="addToCart(601, 'ক্রিসপি সামুদ্রিক ফিশ চিপস', 120, 'images/laila-icha.jpg')" class="w-full bg-[#0073e6] text-white py-1.5 rounded-xl text-xs font-bold">Buy Now</button>
            </div>
        `;
    }

    const vortaGrid = document.getElementById('vortaProductsGrid');
    if(vortaGrid) {
        vortaGrid.innerHTML = `
            <div class="bg-white p-3 rounded-2xl border border-slate-200 space-y-2">
                <img src="images/vorta-mix.jpg" class="h-32 w-full object-cover rounded-xl">
                <h4 class="font-bold text-sm">স্পেশাল চেপা শুটকি ভর্তা মশলা</h4>
                <div class="text-[#0073e6] font-bold text-sm">৳ ৩৫০</div>
                <button onclick="addToCart(701, 'স্পেশাল চেপা শুটকি ভর্তা মশলা', 350, 'images/vorta-mix.jpg')" class="w-full bg-[#0073e6] text-white py-1.5 rounded-xl text-xs font-bold">Buy Now</button>
            </div>
        `;
    }
}

function renderBlogs() {
    const grid = document.getElementById('blogPostsGrid');
    if(!grid) return;
    grid.innerHTML = `
        <div class="bg-white p-5 rounded-2xl border space-y-3">
            <span class="text-xs text-sky-600 font-bold uppercase">স্বাস্থ্য ও পুষ্টি</span>
            <h3 class="font-bold text-lg text-slate-900">কেন খাবেন বিষমুক্ত অর্গানিক শুটকি?</h3>
            <p class="text-slate-600 text-xs leading-relaxed">সামুদ্রিক শুটকিতে রয়েছে উচ্চমাত্রার প্রোটিন, ভিটামিন-ডি এবং ক্যালসিয়াম।</p>
            <button onclick="openModalText('কেন খাবেন বিষমুক্ত অর্গানিক শুটকি?', 'সামুদ্রিক শুটকিতে কোনো অতিরিক্ত রাসায়নিক ব্যবহার না করে কেবল রোদের তাপে শুকানো হয়।')" class="text-[#0073e6] text-xs font-bold">বিস্তারিত পড়ুন →</button>
        </div>
        <div class="bg-white p-5 rounded-2xl border space-y-3">
            <span class="text-xs text-amber-600 font-bold uppercase">রান্নার টিপস</span>
            <h3 class="font-bold text-lg text-slate-900">শুটকি মাছের গন্ধ দূর করার সহজ উপায়</h3>
            <p class="text-slate-600 text-xs leading-relaxed">রান্নার পূর্বে হালকা গরম পানিতে সামান্য লবণ ও লেবুর রস দিয়ে ৫ মিনিট ভিজিয়ে রাখুন।</p>
            <button onclick="openModalText('শুটকি মাছের গন্ধ দূর করার উপায়', 'গরম পানিতে ভিজিয়ে ধোয়ার পর সামান্য হলুদ ও সরিষার তেলে হালকা সাঁতলে নিন।')" class="text-[#0073e6] text-xs font-bold">বিস্তারিত পড়ুন →</button>
        </div>
    `;
}

// SIDEBAR CHECKBOXES
function setupSidebarCategories() {
    const premCats = ['লোইট্টা', 'চুরি', 'নোনা ইলিশ', 'পোপা', 'লইল্যা ইছা', 'রূপচাঁদা', 'লাক্ষ্যা'];
    const pEl = document.getElementById('premiumCategoryList');
    if(pEl) pEl.innerHTML = premCats.map(c => `<label class="flex items-center gap-2 text-slate-700 cursor-pointer hover:text-[#0073e6]"><input type="checkbox" checked class="rounded text-[#0073e6] focus:ring-0"> ${c}</label>`).join('');

    const rawCats = ['Pomfret (রূপচাঁদা)', 'Lakka Fish (লাক্ষ্যা মাছ)', 'Salmon Fish (তাইইল্যা মাছ)', 'Lal Poa (লাল পোয়া)'];
    const rEl = document.getElementById('rawCategoryList');
    if(rEl) rEl.innerHTML = rawCats.map(c => `<label class="flex items-center gap-2 text-slate-700 cursor-pointer hover:text-[#0073e6]"><input type="checkbox" checked class="rounded text-[#0073e6] focus:ring-0"> ${c}</label>`).join('');

    const balCats = ['Chatgaiya Mix Balachao', 'Dry Fish', 'Shutki-শুটকি', 'Balachao', 'Naga Balachao'];
    const bEl = document.getElementById('balachaoCategoryList');
    if(bEl) bEl.innerHTML = balCats.map(c => `<label class="flex items-center gap-2 text-slate-700 cursor-pointer hover:text-[#0073e6]"><input type="checkbox" checked class="rounded text-[#0073e6] focus:ring-0"> ${c}</label>`).join('');

    const recCats = ['Tuna Shutki Recipe', 'Mola Shutki Recipe', 'Kachki Shutki Recipe', 'Chepa Shutki Recipe'];
    const recEl = document.getElementById('recipeCategoryList');
    if(recEl) recEl.innerHTML = recCats.map(c => `<label class="flex items-center gap-2 text-slate-700 cursor-pointer hover:text-[#0073e6]"><input type="checkbox" checked class="rounded text-[#0073e6] focus:ring-0"> ${c}</label>`).join('');
}

// CART MANAGEMENT
function addToCart(id, name, price, img) {
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ id, name, price, img, qty: 1 });
    }
    updateCartUI();
    showToast(`"${name}" কার্টে যোগ করা হয়েছে!`);
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function adjustQty(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) removeFromCart(id);
        else updateCartUI();
    }
}

function updateCartUI() {
    const badge = document.getElementById('cartBadge');
    const totalQty = cart.reduce((sum, i) => sum + i.qty, 0);
    if(badge) badge.textContent = totalQty;

    const list = document.getElementById('cartItemsList');
    if(!list) return;

    if (cart.length === 0) {
        list.innerHTML = `<div class="text-center text-slate-400 py-10 font-bold">আপনার কার্ট ফাঁকা রয়েছে</div>`;
    } else {
        list.innerHTML = cart.map(item => `
            <div class="flex items-center justify-between gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-200">
                <img src="${item.img}" class="w-14 h-14 object-cover rounded-xl">
                <div class="flex-1">
                    <h4 class="font-bold text-xs text-slate-900 line-clamp-1">${item.name}</h4>
                    <div class="text-[#0073e6] font-bold text-xs mt-0.5">৳ ${item.price * item.qty}</div>
                    <div class="flex items-center gap-2 mt-1">
                        <button onclick="adjustQty(${item.id}, -1)" class="w-5 h-5 bg-slate-200 rounded text-xs font-bold">-</button>
                        <span class="text-xs font-bold">${item.qty}</span>
                        <button onclick="adjustQty(${item.id}, 1)" class="w-5 h-5 bg-slate-200 rounded text-xs font-bold">+</button>
                    </div>
                </div>
                <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700 text-sm p-1">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </div>
        `).join('');
    }

    const total = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const totalPriceEl = document.getElementById('cartTotalPrice');
    if(totalPriceEl) totalPriceEl.textContent = `৳ ${total}`;
}

function toggleCartModal() {
    const modal = document.getElementById('cartModal');
    if(modal) modal.classList.toggle('hidden');
}

// CHECKOUT FLOW
function openCheckoutModal() {
    if (cart.length === 0) {
        alert('অনুগ্রহ করে প্রথমে কার্টে কিছু পণ্য যোগ করুন!');
        return;
    }
    toggleCartModal();
    updateCheckoutTotal();
    const checkoutModal = document.getElementById('checkoutModal');
    if(checkoutModal) checkoutModal.classList.remove('hidden');
}

function closeCheckoutModal() {
    const checkoutModal = document.getElementById('checkoutModal');
    if(checkoutModal) checkoutModal.classList.add('hidden');
}

function updateCheckoutTotal() {
    const subtotal = cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
    const zoneEl = document.getElementById('deliveryZone');
    const delivery = zoneEl ? parseInt(zoneEl.value) : 60;
    
    const subEl = document.getElementById('summarySubtotal');
    const delEl = document.getElementById('summaryDelivery');
    const grandEl = document.getElementById('summaryGrandTotal');

    if(subEl) subEl.textContent = `৳ ${subtotal}`;
    if(delEl) delEl.textContent = `৳ ${delivery}`;
    if(grandEl) grandEl.textContent = `৳ ${subtotal + delivery}`;
}

function handlePlaceOrder(e) {
    e.preventDefault();
    closeCheckoutModal();
    cart = [];
    updateCartUI();
    showToast('ধন্যবাদ! আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে।');
}

// MODALS & TOAST
function openModalText(title, content) {
    const titleEl = document.getElementById('infoModalTitle');
    const contentEl = document.getElementById('infoModalContent');
    const modal = document.getElementById('infoModal');

    if(titleEl) titleEl.textContent = title;
    if(contentEl) contentEl.textContent = content;
    if(modal) modal.classList.remove('hidden');
}

function closeInfoModal() {
    const modal = document.getElementById('infoModal');
    if(modal) modal.classList.add('hidden');
}

function openUserModal() {
    openModalText('গ্রাহক একাউন্ট', 'আপনার শুটকিজ একাউন্টে লগইন বা সাইনআপ করতে আপনার মোবাইল নম্বর ব্যবহার করুন।');
}

function showToast(message) {
    const container = document.getElementById('toastContainer');
    if(!container) return;
    const toast = document.createElement('div');
    toast.className = 'bg-slate-900 text-white text-xs font-bold px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2 border border-slate-700 pointer-events-auto transition duration-300';
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400 text-base"></i> ${message}`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// SEARCH
function handleGlobalSearch(query) {
    if (!query) return;
    const q = query.toLowerCase();
    switchPage('premium');
    const filtered = PRODUCTS.premium.filter(p => p.name.toLowerCase().includes(q));
    const container = document.getElementById('premiumProductsGrid');
    if(!container) return;

    if (filtered.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-10 font-bold text-slate-400">কোনো পণ্য পাওয়া যায়নি</div>`;
    } else {
        container.innerHTML = filtered.map(p => `
            <div class="bg-white rounded-2xl border p-3 shadow-sm space-y-2">
                <img src="${p.img}" class="h-36 w-full object-cover rounded-xl">
                <h4 class="font-bold text-xs line-clamp-2">${p.name}</h4>
                <div class="text-[#0073e6] font-black text-sm">৳ ${p.price}</div>
                <button onclick="addToCart(${p.id}, '${p.name}', ${p.numPrice}, '${p.img}')" class="w-full bg-[#0073e6] text-white py-2 rounded-xl text-xs font-bold">Buy Now</button>
            </div>
        `).join('');
    }
}

// LANGUAGE TOGGLE
function toggleLanguage() {
    currentLanguage = currentLanguage === 'BN' ? 'EN' : 'BN';
    const langLabel = document.getElementById('currentLangLabel');
    if(langLabel) langLabel.textContent = currentLanguage;
    showToast(`Language switched to ${currentLanguage === 'BN' ? 'Bangla' : 'English'}`);
}