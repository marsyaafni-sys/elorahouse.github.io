const products = [
<<<<<<< HEAD
  {
    id: 1,
    name: "White Ruffle Trim Blouse",
    cat: "Top",
    sub: "Blouse & Shirt",
    price: 205000,
    img: "./image/White Ruffle Trim Blouse.png",
    desc: "A feminine everyday blouse with a relaxed Korean-inspired silhouette.",
    material: "Rayon",
    color: "Ivory",
    sizes: ["S", "M", "L"],
    stock: 12,
  },
  {
    id: 2,
    name: "Checkered Casual Shirt",
    cat: "Top",
    sub: "Blouse & Shirt",
    price: 280000,
    img: "./image/Checkered Casual Shirt.png",
    desc: "A clean pleated skirt designed for effortless daily styling.",
    material: "Polyester",
    color: "Black",
    sizes: ["S", "M", "L"],
    stock: 8,
  },
  {
    id: 3,
    name: "Varsity Cropped Knitwear",
    cat: "Top",
    sub: "T-shirt & Croptop",
    price: 329000,
    img: "./image/Varsity Cropped Knitwear.png",
    desc: "An elegant midi dress with a soft feminine line and versatile styling.",
    material: "Chiffon",
    color: "Cream",
    sizes: ["S", "M", "L"],
    stock: 6,
  },
  {
    id: 4,
    name: "Pink V-Neck Knit Sweater",
    cat: "Top",
    sub: "T-shirt & Croptop",
    price: 379000,
    img: "./image/Pink V-Neck Knit Sweater.png",
    desc: "A lightweight knit layer that works from campus to weekend plans.",
    material: "Knit",
    color: "Oat",
    sizes: ["S", "M", "L"],
    stock: 15,
  },
  {
    id: 5,
    name: "Yuna Sailor Tweed One Set",
    cat: "Dress & One Set",
    sub: "One Set",
    price: 329000,
    img: "./image/Yuna Sailor Tweed One Set.png",
    desc: "Minimal cropped top with a clean neckline and easy proportions.",
    material: "Cotton",
    color: "White",
    sizes: ["S", "M", "L"],
    stock: 18,
  },
  {
    id: 6,
    name: "Black Layered Mini Skirt with Ribbon",
    cat: "Bottom",
    sub: "Skrirt",
    price: 199000,
    img: "./image/Black Layered Mini Skirt with Ribbon.png",
    desc: "Relaxed wide-leg trousers with a polished, timeless silhouette.",
    material: "Linen",
    color: "Charcoal",
    sizes: ["S", "M", "L"],
    stock: 9,
  },
  {
    id: 7,
    name: "Sora Pastel Two-Piece Set",
    cat: "Dress & One Set",
    sub: "One Set",
    price: 529000,
    img: "./image/Sora Pastel Two-Piece Dress.png",
    desc: "A coordinated set made for effortless outfit building.",
    material: "Rayon",
    color: "Black",
    sizes: ["S", "M", "L"],
    stock: 5,
  },
  {
    id: 8,
    name: "Burgundy Patterned Knit Cardigan",
    cat: "Outerwear",
    sub: "Cardigan",
    price: 589000,
    img: "./image/Burgundy Patterned Knit Cardigan.png",
    desc: "A structured yet comfortable blazer for a refined everyday look.",
    material: "Polyester",
    color: "Black",
    sizes: ["S", "M", "L"],
    stock: 7,
  },
];

let wishlist = JSON.parse(localStorage.getItem("eloraWishlist") || "[]");
let cart = JSON.parse(localStorage.getItem("eloraCart") || "[]");

const icon = {
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.8 8.9c0 5.5-8.8 10.1-8.8 10.1S3.2 14.4 3.2 8.9A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.6Z"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.5L20.5 8H6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c.7-3.6 3.2-5.5 7-5.5s6.3 1.9 7 5.5"/></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m6 6 12 12M18 6 6 18"/></svg>`,
};

function save() {
  localStorage.setItem("eloraWishlist", JSON.stringify(wishlist));
  localStorage.setItem("eloraCart", JSON.stringify(cart));
  updateCounts();
}
function updateCounts() {
  const wc = document.querySelector("#wishCount"),
    cc = document.querySelector("#cartCount");
  if (wc) wc.textContent = wishlist.length;
  if (cc) cc.textContent = cart.reduce((s, x) => s + x.qty, 0);
}
function toggleWish(id) {
  wishlist = wishlist.includes(id)
    ? wishlist.filter((x) => x !== id)
    : [...wishlist, id];
  save();
  renderCurrent();
}
function addCart(id, size = "M", qty = 1) {
  const p = products.find((x) => x.id === id);
  const found = cart.find((x) => x.id === id && x.size === size);
  if (found) found.qty += qty;
  else cart.push({ id, size, qty });
  save();
  toast(`${p.name} added to cart`);
}
function toast(msg) {
  let t = document.querySelector(".toast");
  if (!t) {
    t = document.createElement("div");
    t.className = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 1800);
}
function productCard(p) {
  const active = wishlist.includes(p.id);
  return `<article class="product-card">
 <button class="wish-float ${active ? "active" : ""}" onclick="toggleWish(${p.id})" aria-label="Wishlist">${icon.heart}</button>
 <a href="product.html?id=${p.id}" class="product-img"><img src="${p.img}" alt="${p.name}" loading="lazy"></a>
 <div class="product-info"><span class="product-meta">${p.sub}</span><a class="product-name" href="product.html?id=${p.id}">${p.name}</a><span class="product-price">Rp ${p.price.toLocaleString("id-ID")}</span></div>
 </article>`;
}
function header() {
  const path = location.pathname.split("/").pop() || "index.html";
  const active = (p) => (path === p ? "active" : "");
  return `<header class="navbar"><div class="container nav-inner">
=======
 {id:1,name:"Luna Soft Blouse",cat:"Top",sub:"Blouse & Kemeja",price:289000,img:"https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=900&q=85",desc:"A feminine everyday blouse with a relaxed Korean-inspired silhouette.",material:"Rayon",color:"Ivory",sizes:["S","M","L"],stock:12},
 {id:2,name:"Mia Pleated Skirt",cat:"Bottom",sub:"Skirts",price:319000,img:"https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=900&q=85",desc:"A clean pleated skirt designed for effortless daily styling.",material:"Polyester",color:"Black",sizes:["S","M","L"],stock:8},
 {id:3,name:"Sora Midi Dress",cat:"Dress & One Set",sub:"Casual & Midi Dress",price:449000,img:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85",desc:"An elegant midi dress with a soft feminine line and versatile styling.",material:"Chiffon",color:"Cream",sizes:["S","M","L"],stock:6},
 {id:4,name:"Nara Knit Cardigan",cat:"Outerwear",sub:"Cardigan",price:379000,img:"https://images.unsplash.com/photo-1627225924765-552d49cf47ad?auto=format&fit=crop&w=900&q=85",desc:"A lightweight knit layer that works from campus to weekend plans.",material:"Knit",color:"Oat",sizes:["S","M","L"],stock:15},
 {id:5,name:"Eden Crop Top",cat:"Top",sub:"T-Shirt & Crop Top",price:229000,img:"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",desc:"Minimal cropped top with a clean neckline and easy proportions.",material:"Cotton",color:"White",sizes:["S","M","L"],stock:18},
 {id:6,name:"Yuna Wide Pants",cat:"Bottom",sub:"Pants",price:399000,img:"https://images.unsplash.com/photo-1506629905607-d9a0d9c7a5a5?auto=format&fit=crop&w=900&q=85",desc:"Relaxed wide-leg trousers with a polished, timeless silhouette.",material:"Linen",color:"Charcoal",sizes:["S","M","L"],stock:9},
 {id:7,name:"Aeri One Set",cat:"Dress & One Set",sub:"One Set",price:529000,img:"https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=900&q=85",desc:"A coordinated set made for effortless outfit building.",material:"Rayon",color:"Black",sizes:["S","M","L"],stock:5},
 {id:8,name:"Hana Blazer",cat:"Outerwear",sub:"Blazer & Coat",price:589000,img:"https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=900&q=85",desc:"A structured yet comfortable blazer for a refined everyday look.",material:"Polyester",color:"Black",sizes:["S","M","L"],stock:7}
];

let wishlist = JSON.parse(localStorage.getItem("eloraWishlist")||"[]");
let cart = JSON.parse(localStorage.getItem("eloraCart")||"[]");

const icon = {
 heart:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M20.8 8.9c0 5.5-8.8 10.1-8.8 10.1S3.2 14.4 3.2 8.9A4.7 4.7 0 0 1 12 6.3a4.7 4.7 0 0 1 8.8 2.6Z"/></svg>`,
 cart:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 1.9-1.5L20.5 8H6"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>`,
 user:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c.7-3.6 3.2-5.5 7-5.5s6.3 1.9 7 5.5"/></svg>`,
 menu:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
 close:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m6 6 12 12M18 6 6 18"/></svg>`
};

function save(){localStorage.setItem("eloraWishlist",JSON.stringify(wishlist));localStorage.setItem("eloraCart",JSON.stringify(cart));updateCounts()}
function updateCounts(){
 const wc=document.querySelector("#wishCount"),cc=document.querySelector("#cartCount");
 if(wc)wc.textContent=wishlist.length;
 if(cc)cc.textContent=cart.reduce((s,x)=>s+x.qty,0);
}
function toggleWish(id){wishlist=wishlist.includes(id)?wishlist.filter(x=>x!==id):[...wishlist,id];save();renderCurrent()}
function addCart(id,size="M",qty=1){
 const p=products.find(x=>x.id===id); const found=cart.find(x=>x.id===id&&x.size===size);
 if(found)found.qty+=qty; else cart.push({id,size,qty});
 save(); toast(`${p.name} added to cart`);
}
function toast(msg){let t=document.querySelector(".toast");if(!t){t=document.createElement("div");t.className="toast";document.body.appendChild(t)}t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1800)}
function productCard(p){
 const active=wishlist.includes(p.id);
 return `<article class="product-card">
 <button class="wish-float ${active?"active":""}" onclick="toggleWish(${p.id})" aria-label="Wishlist">${icon.heart}</button>
 <a href="product.html?id=${p.id}" class="product-img"><img src="${p.img}" alt="${p.name}" loading="lazy"></a>
 <div class="product-info"><span class="product-meta">${p.sub}</span><a class="product-name" href="product.html?id=${p.id}">${p.name}</a><span class="product-price">Rp ${p.price.toLocaleString("id-ID")}</span></div>
 </article>`
}
function header(){
 const path=location.pathname.split("/").pop()||"index.html";
 const active=p=>path===p?"active":"";
 return `<header class="navbar"><div class="container nav-inner">
>>>>>>> 99dda6eee05fd8b8b466f2d14a97079b3eb2d96d
 <button class="icon-btn mobile-toggle" onclick="toggleDrawer()" aria-label="Menu">${icon.menu}</button>
 <a class="brand" href="index.html"><span class="logo">EH</span><span>ELORA HOUSE</span></a>
 <nav class="nav-links"><a class="${active("index.html")}" href="index.html">Home</a><a class="${active("about.html")}" href="about.html">About Us</a><a class="${active("catalogue.html")}" href="catalogue.html">Catalogue</a></nav>
 <div class="nav-actions"><a class="icon-btn" href="wishlist.html" aria-label="Wishlist">${icon.heart}<span class="badge-count" id="wishCount">0</span></a><a class="icon-btn" href="cart.html" aria-label="Cart">${icon.cart}<span class="badge-count" id="cartCount">0</span></a><a class="icon-btn" href="login.html" aria-label="Login">${icon.user}</a></div>
 </div></header>
 <div class="drawer" id="drawer"><a href="index.html">Home</a><a href="about.html">About Us</a><a href="catalogue.html">Catalogue</a><a href="wishlist.html">Wishlist</a><a href="cart.html">Cart</a><a href="login.html">Login</a></div>`;
}
<<<<<<< HEAD
function footer() {
  return `<footer class="footer"><div class="container"><div class="footer-grid">
=======
function footer(){
 return `<footer class="footer"><div class="container"><div class="footer-grid">
>>>>>>> 99dda6eee05fd8b8b466f2d14a97079b3eb2d96d
 <div><div class="footer-brand">ELORA HOUSE</div><p style="margin-top:12px;max-width:300px">Made to Be You — Korean-inspired fashion that feels simple, feminine and effortless.</p></div>
 <div><h4>Explore</h4><p><a href="index.html">Home</a></p><p><a href="about.html">About Us</a></p><p><a href="catalogue.html">Catalogue</a></p></div>
 <div><h4>Customer</h4><p><a href="wishlist.html">Wishlist</a></p><p><a href="cart.html">Cart</a></p><p><a href="login.html">Login</a></p></div>
 <div><h4>Follow</h4><p>Instagram</p><p>TikTok</p><p>hello@elorahouse.com</p></div>
 </div><div class="footer-bottom"><span>© 2026 ELORA HOUSE</span><span>Made to Be You ♡</span></div></div></footer>`;
}
<<<<<<< HEAD
function toggleDrawer() {
  document.querySelector("#drawer")?.classList.toggle("open");
}
function renderShell() {
  document.querySelector("#site-header").innerHTML = header();
  document.querySelector("#site-footer").innerHTML = footer();
  updateCounts();
}
function renderCurrent() {
  if (location.pathname.endsWith("catalogue.html")) renderCatalogue();
  if (location.pathname.endsWith("wishlist.html")) renderWishlist();
  if (location.pathname.endsWith("cart.html")) renderCart();
  updateCounts();
}
function renderCatalogue(filter = "All Products", query = "") {
  const grid = document.querySelector("#catalogueGrid");
  if (!grid) return;
  let list = products.filter(
    (p) => filter === "All Products" || p.cat === filter,
  );
  if (query)
    list = list.filter((p) =>
      (p.name + " " + p.sub).toLowerCase().includes(query.toLowerCase()),
    );
  grid.innerHTML =
    list.map(productCard).join("") ||
    `<div class="empty" style="grid-column:1/-1"><h2>No pieces found</h2><p>Try another search or category.</p></div>`;
  document
    .querySelectorAll("[data-filter]")
    .forEach((b) => b.classList.toggle("active", b.dataset.filter === filter));
}
function renderWishlist() {
  const el = document.querySelector("#wishlistList");
  if (!el) return;
  const list = products.filter((p) => wishlist.includes(p.id));
  el.innerHTML = list.length
    ? list
        .map(
          (p) =>
            `<div class="item"><a class="item-img" href="product.html?id=${p.id}"><img src="${p.img}" alt="${p.name}"></a><div class="item-info"><h3>${p.name}</h3><p>${p.sub} · Rp ${p.price.toLocaleString("id-ID")}</p><button class="text-btn" onclick="addCart(${p.id});">Move to cart</button></div><button class="text-btn" onclick="toggleWish(${p.id})">Remove</button></div>`,
        )
        .join("")
    : `<div class="empty"><h2>Your wishlist is quiet.</h2><p>Save pieces you love and come back anytime.</p><a class="btn" style="margin-top:22px" href="catalogue.html">Explore Catalogue</a></div>`;
}
function renderCart() {
  const el = document.querySelector("#cartItems");
  if (!el) return;
  const items = cart.map((x, i) => ({
    ...x,
    p: products.find((p) => p.id === x.id),
  }));
  const subtotal = items.reduce((s, x) => s + x.p.price * x.qty, 0);
  el.innerHTML = items.length
    ? items
        .map(
          (x, i) =>
            `<div class="item"><div class="item-img"><img src="${x.p.img}" alt="${x.p.name}"></div><div class="item-info"><h3>${x.p.name}</h3><p>Size ${x.size} · ${x.p.color}</p><div class="quantity" style="margin-top:12px"><button onclick="changeQty(${i},-1)">−</button><span>${x.qty}</span><button onclick="changeQty(${i},1)">+</button></div></div><div class="item-price"><strong>Rp ${(x.p.price * x.qty).toLocaleString("id-ID")}</strong><br><button class="text-btn" onclick="removeCart(${i})">Remove</button></div></div>`,
        )
        .join("")
    : `<div class="empty"><h2>Your cart is empty.</h2><p>Find something that feels like you.</p><a class="btn" style="margin-top:22px" href="catalogue.html">Shop the collection</a></div>`;
  const sub = document.querySelector("#subtotal");
  if (sub) sub.textContent = `Rp ${subtotal.toLocaleString("id-ID")}`;
  const total = document.querySelector("#total");
  if (total)
    total.textContent = `Rp ${(subtotal + (subtotal ? 25000 : 0)).toLocaleString("id-ID")}`;
}
function changeQty(i, d) {
  cart[i].qty = Math.max(1, cart[i].qty + d);
  save();
  renderCart();
}
function removeCart(i) {
  cart.splice(i, 1);
  save();
  renderCart();
}
function init() {
  const h = document.querySelector("#site-header");
  if (h) renderShell();
  const catGrid = document.querySelector("#featuredGrid");
  if (catGrid)
    catGrid.innerHTML = products.slice(0, 4).map(productCard).join("");
  const best = document.querySelector("#bestSellerGrid");
  if (best) best.innerHTML = products.slice(0, 4).map(productCard).join("");
  const fresh = document.querySelector("#newArrivalGrid");
  if (fresh) fresh.innerHTML = products.slice(4, 8).map(productCard).join("");
  const sale = document.querySelector("#saleGrid");
  if (sale)
    sale.innerHTML = [products[1], products[4], products[6], products[3]]
      .map(productCard)
      .join("");
  const cgrid = document.querySelector("#catalogueGrid");
  if (cgrid) {
    renderCatalogue();
    document
      .querySelectorAll("[data-filter]")
      .forEach((b) =>
        b.addEventListener("click", () =>
          renderCatalogue(
            b.dataset.filter,
            document.querySelector("#searchInput")?.value || "",
          ),
        ),
      );
    document
      .querySelector("#searchInput")
      ?.addEventListener("input", (e) =>
        renderCatalogue(
          document.querySelector(".filter.active")?.dataset.filter ||
            "All Products",
          e.target.value,
        ),
      );
  }
  renderCurrent();
  const detail = document.querySelector("#detailRoot");
  if (detail) {
    const id = Number(new URLSearchParams(location.search).get("id")) || 1;
    const p = products.find((x) => x.id === id) || products[0];
    const comparePrice = p.price + 65000;
    const stockLabel =
      p.stock <= 5
        ? `Only ${p.stock} left`
        : p.stock <= 15
          ? "Limited Stock"
          : "In Stock";
    const currentColor = p.color || "Ivory";
    const gallery = [
      p.img,
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85",
    ];
    detail.innerHTML = `<div class="detail-subnav"><a href="index.html">Home</a><span>›</span><a href="catalogue.html">Catalogue</a><span>›</span><span>${p.name}</span></div><div class="detail-grid"><div class="detail-gallery"><div class="detail-thumbs">${gallery.map((img, idx) => `<button class="detail-thumb ${idx === 0 ? "active" : ""}" data-gallery-index="${idx}"><img src="${img}" alt="${p.name} ${idx + 1}"></button>`).join("")}</div><div class="detail-gallery-main"><img src="${gallery[0]}" alt="${p.name}"></div></div><div class="detail-panel"><p class="eyebrow">${p.cat} · ${p.sub}</p><h1>${p.name}</h1><div class="detail-price-row"><span class="detail-compare">Rp ${comparePrice.toLocaleString("id-ID")}</span><span class="detail-price">Rp ${p.price.toLocaleString("id-ID")}</span><span class="discount-pill">-18%</span></div><p class="detail-summary">${p.desc} Designed for daily wear, campus, work, hangouts and special moments.</p><p class="detail-stock ${p.stock <= 5 ? "low" : ""}">${stockLabel}</p>
  <div class="detail-option"><div class="detail-option-head"><span>Size</span><button class="detail-size-guide" type="button">Size Guide</button></div><div class="detail-option-list" id="sizes">${p.sizes.map((s, i) => `<button class="detail-option-chip ${i === 1 ? "active" : ""}" data-size="${s}">${s}</button>`).join("")}</div></div><div class="detail-action-row"><div class="detail-qty"><button type="button" onclick="detailQty(-1)" aria-label="Decrease quantity">−</button><span id="detailQty">1</span><button type="button" onclick="detailQty(1)" aria-label="Increase quantity">+</button></div><button class="btn detail-btn" type="button" onclick="detailAdd(${p.id})">Add to Cart</button><button class="detail-wish ${wishlist.includes(p.id) ? "saved" : ""}" type="button" onclick="toggleWish(${p.id});this.classList.toggle('saved',wishlist.includes(${p.id}))">${wishlist.includes(p.id) ? "♥" : "♡"}</button></div><div class="detail-specs"><div class="detail-specs-item"><p>Material</p><strong>${p.material}</strong></div><div class="detail-specs-item"><p>Fit</p><strong>Regular fit</strong></div><div class="detail-specs-item"><p>SKU</p><strong>EL${p.id.toString().padStart(4, "0")}</strong></div><div class="detail-specs-item"><p>Made In</p><strong>Indonesia</strong></div></div><div class="detail-ship"><span>🚚 Free shipping over Rp 500.000</span><span>↩ 7-day easy returns</span></div></div></div>`;
    const galleryMain = document.querySelector(".detail-gallery-main img");
    document.querySelectorAll(".detail-thumb").forEach((thumb) => {
      thumb.onclick = () => {
        document
          .querySelectorAll(".detail-thumb")
          .forEach((b) => b.classList.toggle("active", b === thumb));
        if (galleryMain) galleryMain.src = thumb.querySelector("img").src;
      };
    });
    document
      .querySelectorAll(".detail-option-chip[data-color]")
      .forEach((btn) => {
        btn.onclick = () => {
          document
            .querySelectorAll(".detail-option-chip[data-color]")
            .forEach((x) => x.classList.remove("active"));
          btn.classList.add("active");
          document
            .querySelector(".detail-option-head span:last-child")
            ?.replaceChildren(document.createTextNode(btn.dataset.color));
        };
      });
    document.querySelectorAll("#sizes .detail-option-chip").forEach((b) => {
      b.onclick = () => {
        document
          .querySelectorAll("#sizes .detail-option-chip")
          .forEach((x) => x.classList.remove("active"));
        b.classList.add("active");
      };
    });
    document
      .querySelector(".detail-size-guide")
      ?.addEventListener("click", () => {
        document
          .querySelector(".table-wrap")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    const detailTable = `<div class="table-wrap"><table class="size-table"><tr><th>Size</th><th>Bust</th><th>Waist</th><th>Length</th><th>Shoulder</th></tr><tr><td>S</td><td>84 cm</td><td>68 cm</td><td>52 cm</td><td>35 cm</td></tr><tr><td>M</td><td>88 cm</td><td>72 cm</td><td>53 cm</td><td>36 cm</td></tr><tr><td>L</td><td>92 cm</td><td>76 cm</td><td>54 cm</td><td>37 cm</td></tr></table></div>`;
    const guideWrap = document.createElement("div");
    guideWrap.className = "detail-guide";
    guideWrap.innerHTML = `<div class="detail-guide-head"><strong>Size guide</strong></div>${detailTable}`;
    document.querySelector(".detail-panel")?.appendChild(guideWrap);
  }
  document.querySelector("#loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem(
      "eloraUser",
      document.querySelector("#loginName").value || "Guest",
    );
    toast("Dummy login successful");
    setTimeout(() => (location.href = "index.html"), 600);
  });
  document.querySelector("#checkoutForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!cart.length) {
      toast("Your cart is empty");
      return;
    }
    cart = [];
    save();
    document.querySelector("#checkoutMessage").innerHTML =
      "<div class='empty'><h2>Order received ♡</h2><p>This is a dummy checkout for the prototype.</p><a class='btn' style='margin-top:22px' href='index.html'>Back to home</a></div>";
  });
}
function detailQty(d) {
  const el = document.querySelector("#detailQty");
  el.textContent = Math.max(1, Number(el.textContent) + d);
}
function detailAdd(id) {
  const size = document.querySelector("#sizes .active")?.dataset.size || "M";
  addCart(id, size, Number(document.querySelector("#detailQty").textContent));
}
document.addEventListener("DOMContentLoaded", init);
=======
function toggleDrawer(){document.querySelector("#drawer")?.classList.toggle("open")}
function renderShell(){document.querySelector("#site-header").innerHTML=header();document.querySelector("#site-footer").innerHTML=footer();updateCounts()}
function renderCurrent(){
 if(location.pathname.endsWith("catalogue.html")) renderCatalogue();
 if(location.pathname.endsWith("wishlist.html")) renderWishlist();
 if(location.pathname.endsWith("cart.html")) renderCart();
 updateCounts();
}
function renderCatalogue(filter="All Products",query=""){
 const grid=document.querySelector("#catalogueGrid"); if(!grid)return;
 let list=products.filter(p=>filter==="All Products"||p.cat===filter);
 if(query)list=list.filter(p=>(p.name+" "+p.sub).toLowerCase().includes(query.toLowerCase()));
 grid.innerHTML=list.map(productCard).join("")||`<div class="empty" style="grid-column:1/-1"><h2>No pieces found</h2><p>Try another search or category.</p></div>`;
 document.querySelectorAll("[data-filter]").forEach(b=>b.classList.toggle("active",b.dataset.filter===filter));
}
function renderWishlist(){
 const el=document.querySelector("#wishlistList");if(!el)return;
 const list=products.filter(p=>wishlist.includes(p.id));
 el.innerHTML=list.length?list.map(p=>`<div class="item"><a class="item-img" href="product.html?id=${p.id}"><img src="${p.img}" alt="${p.name}"></a><div class="item-info"><h3>${p.name}</h3><p>${p.sub} · Rp ${p.price.toLocaleString("id-ID")}</p><button class="text-btn" onclick="addCart(${p.id});">Move to cart</button></div><button class="text-btn" onclick="toggleWish(${p.id})">Remove</button></div>`).join(""):`<div class="empty"><h2>Your wishlist is quiet.</h2><p>Save pieces you love and come back anytime.</p><a class="btn" style="margin-top:22px" href="catalogue.html">Explore Catalogue</a></div>`;
}
function renderCart(){
 const el=document.querySelector("#cartItems");if(!el)return;
 const items=cart.map((x,i)=>({...x,p:products.find(p=>p.id===x.id)}));
 const subtotal=items.reduce((s,x)=>s+x.p.price*x.qty,0);
 el.innerHTML=items.length?items.map((x,i)=>`<div class="item"><div class="item-img"><img src="${x.p.img}" alt="${x.p.name}"></div><div class="item-info"><h3>${x.p.name}</h3><p>Size ${x.size} · ${x.p.color}</p><div class="quantity" style="margin-top:12px"><button onclick="changeQty(${i},-1)">−</button><span>${x.qty}</span><button onclick="changeQty(${i},1)">+</button></div></div><div class="item-price"><strong>Rp ${(x.p.price*x.qty).toLocaleString("id-ID")}</strong><br><button class="text-btn" onclick="removeCart(${i})">Remove</button></div></div>`).join(""):`<div class="empty"><h2>Your cart is empty.</h2><p>Find something that feels like you.</p><a class="btn" style="margin-top:22px" href="catalogue.html">Shop the collection</a></div>`;
 const sub=document.querySelector("#subtotal");if(sub)sub.textContent=`Rp ${subtotal.toLocaleString("id-ID")}`;
 const total=document.querySelector("#total");if(total)total.textContent=`Rp ${(subtotal+(subtotal?25000:0)).toLocaleString("id-ID")}`;
}
function changeQty(i,d){cart[i].qty=Math.max(1,cart[i].qty+d);save();renderCart()}
function removeCart(i){cart.splice(i,1);save();renderCart()}
function init(){
 const h=document.querySelector("#site-header");if(h)renderShell();
 const catGrid=document.querySelector("#featuredGrid");if(catGrid)catGrid.innerHTML=products.slice(0,4).map(productCard).join(""); const best=document.querySelector("#bestSellerGrid");if(best)best.innerHTML=products.slice(0,4).map(productCard).join(""); const fresh=document.querySelector("#newArrivalGrid");if(fresh)fresh.innerHTML=products.slice(4,8).map(productCard).join(""); const sale=document.querySelector("#saleGrid");if(sale)sale.innerHTML=[products[1],products[4],products[6],products[3]].map(productCard).join("");
 const cgrid=document.querySelector("#catalogueGrid");if(cgrid){
  renderCatalogue();
  document.querySelectorAll("[data-filter]").forEach(b=>b.addEventListener("click",()=>renderCatalogue(b.dataset.filter,document.querySelector("#searchInput")?.value||"")));
  document.querySelector("#searchInput")?.addEventListener("input",e=>renderCatalogue(document.querySelector(".filter.active")?.dataset.filter||"All Products",e.target.value));
 }
 renderCurrent();
 const detail=document.querySelector("#detailRoot");if(detail){
  const id=Number(new URLSearchParams(location.search).get("id"))||1;const p=products.find(x=>x.id===id)||products[0];
  detail.innerHTML=`<div class="detail-grid"><div class="gallery"><div class="thumbs"><button class="thumb active"><img src="${p.img}" alt=""></button><button class="thumb"><img src="${p.img}" alt=""></button><button class="thumb"><img src="${p.img}" alt=""></button></div><div class="main-photo"><img src="${p.img}" alt="${p.name}"></div></div>
  <div class="detail-info"><div class="eyebrow">${p.cat} · ${p.sub}</div><h1>${p.name}</h1><div class="detail-price">Rp ${p.price.toLocaleString("id-ID")}</div><p class="detail-description">${p.desc} Designed for daily wear, campus, work, hangouts and special moments.</p>
  <div class="option-title">Color · ${p.color}</div><div class="option-row"><button class="option active">${p.color}</button><button class="option">Black</button></div>
  <div class="option-title">Size</div><div class="option-row" id="sizes">${p.sizes.map((s,i)=>`<button class="option ${i===1?"active":""}" data-size="${s}">${s}</button>`).join("")}</div>
  <div class="option-title">Quantity</div><div class="quantity"><button onclick="detailQty(-1)">−</button><span id="detailQty">1</span><button onclick="detailQty(1)">+</button></div>
  <div class="detail-actions"><button class="btn" onclick="detailAdd(${p.id})">Add to Cart</button><button class="btn light" onclick="toggleWish(${p.id})">${wishlist.includes(p.id)?"♥ Saved":"♡ Wishlist"}</button></div>
  <div class="info-accordion"><div class="info-row"><span>Material</span><span>${p.material}</span></div><div class="info-row"><span>Stock</span><span>${p.stock} pieces</span></div><div class="info-row"><span>Fit</span><span>Regular fit</span></div><div class="info-row"><span>Care</span><span>Machine wash cold</span></div></div>
  <div style="margin-top:28px"><strong style="font-family:var(--serif);font-size:22px">Size guide</strong><div class="table-wrap"><table class="size-table"><tr><th>Size</th><th>Bust</th><th>Waist</th><th>Length</th><th>Shoulder</th></tr><tr><td>S</td><td>84 cm</td><td>68 cm</td><td>52 cm</td><td>35 cm</td></tr><tr><td>M</td><td>88 cm</td><td>72 cm</td><td>53 cm</td><td>36 cm</td></tr><tr><td>L</td><td>92 cm</td><td>76 cm</td><td>54 cm</td><td>37 cm</td></tr></table></div></div></div></div>`;
  document.querySelectorAll("#sizes .option").forEach(b=>b.onclick=()=>{document.querySelectorAll("#sizes .option").forEach(x=>x.classList.remove("active"));b.classList.add("active")});
 }
 document.querySelector("#loginForm")?.addEventListener("submit",e=>{e.preventDefault();localStorage.setItem("eloraUser",document.querySelector("#loginName").value||"Guest");toast("Dummy login successful");setTimeout(()=>location.href="index.html",600)});
 document.querySelector("#checkoutForm")?.addEventListener("submit",e=>{e.preventDefault();if(!cart.length){toast("Your cart is empty");return}cart=[];save();document.querySelector("#checkoutMessage").innerHTML="<div class='empty'><h2>Order received ♡</h2><p>This is a dummy checkout for the prototype.</p><a class='btn' style='margin-top:22px' href='index.html'>Back to home</a></div>"});
}
function detailQty(d){const el=document.querySelector("#detailQty");el.textContent=Math.max(1,Number(el.textContent)+d)}
function detailAdd(id){const size=document.querySelector("#sizes .active")?.dataset.size||"M";addCart(id,size,Number(document.querySelector("#detailQty").textContent))}
document.addEventListener("DOMContentLoaded",init);
>>>>>>> 99dda6eee05fd8b8b466f2d14a97079b3eb2d96d
