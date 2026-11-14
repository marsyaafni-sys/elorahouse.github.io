// Additional Top products for the T-Shirt & Crop Top subcategory.
// This file is loaded after app.js so the products array is available here.
products.push(
  {
    id: 9,
    sku: "TST-001",
    name: "White Polka Dot V-Neck Long Sleeve Top",
    cat: "Top",
    sub: "T-Shirt & Crop Top",
    price: 169000,
    img: "./image/White Polka Dot Wrap Crop Top.png",
    desc: "Atasan berlengan panjang dengan motif polka dot halus dan kerah V-neck yang memberikan tampilan manis serta anggun.",
    material: "Cotton",
    fit: "Slim Fit",
    color: "White",
    sizes: ["S", "M", "L"],
    stock: 10,
  },
  {
    id: 10,
    sku: "TST-002",
    name: "Soft Pink V-Neck Fluffy Crop Sweater",
    cat: "Top",
    sub: "T-Shirt & Crop Top",
    price: 189000,
    img: "./image/Pink V-Neck Knit Sweater.png",
    desc: "Sweater crop berwarna merah muda lembut bertekstur fluffy dengan kerah V-neck, sangat cocok dipadukan untuk gaya layered (tumpuk).",
    material: "Knit",
    fit: "Crop Fit",
    color: "Soft Pink",
    sizes: ["S", "M", "L"],
    stock: 10,
  },
  {
    id: 11,
    sku: "TST-003",
    name: "Varsity Raglan Cropped Knitwear",
    cat: "Top",
    sub: "T-Shirt & Crop Top",
    price: 199000,
    img: "./image/Varsity Cropped Knitwear.png",
    desc: "Atasan rajut crop gaya varsity berlengan raglan merah-navy dengan detail bordir angka \"S\" di dada untuk tampilan sporty dan preppy.",
    material: "Knit",
    fit: "Fitted Crop",
    color: "Red & Navy",
    sizes: ["S", "M", "L"],
    stock: 10,
  },
  {
    id: 12,
    sku: "TST-004",
    name: "Vintage Butterfly Graphic Long Sleeve Crop Top",
    cat: "Top",
    sub: "T-Shirt & Crop Top",
    price: 159000,
    img: "./image/White Butterfly Graphic Long Sleeve Crop Top.png",
    desc: "Crop top lengan panjang warna krem terang dengan grafis kupu-kupu bernuansa vintage dan detail jahitan luar (exposed seams) yang trendi.",
    material: "Cotton",
    fit: "Slim Fit",
    color: "Light Cream",
    sizes: ["S", "M", "L"],
    stock: 10,
  },
  {
    id: 13,
    sku: "TST-005",
    name: "Mint Green Pointelle Short Sleeve Knit Top",
    cat: "Top",
    sub: "T-Shirt & Crop Top",
    price: 179000,
    img: "./image/Mint Green Pointelle Knit Top.png",
    desc: "Atasan rajut lengan pendek warna hijau mint dengan motif rajutan berlubang (pointelle) yang memberikan kesan klasik dan segar.",
    material: "Knit",
    fit: "Regular Fit",
    color: "Mint Green",
    sizes: ["S", "M", "L"],
    stock: 10,
  },
  {
    id: 14,
    sku: "TST-006",
    name: "Kitten Illustration Sleeveless Top",
    cat: "Top",
    sub: "T-Shirt & Crop Top",
    price: 139000,
    img: "./image/Minimal Graphic Tee.png",
    desc: "Atasan tanpa lengan berpotongan mock neck dengan cetakan ilustrasi anak kucing yang lucu dan menggemaskan.",
    material: "Cotton",
    fit: "Slim Fit",
    color: "White",
    sizes: ["S", "M", "L"],
    stock: 10,
  },
  {
    id: 15,
    sku: "TST-007",
    name: "Light Blue ARISEISM Graphic Baby Tee",
    cat: "Top",
    sub: "T-Shirt & Crop Top",
    price: 149000,
    img: "./image/Light Blue Graphic Baby Tee.png",
    desc: "Kaos baby tee warna biru muda dengan cetakan tulisan gaya kampus (collegiate print) di bagian dada, cocok untuk gaya kasual sehari-hari.",
    material: "Cotton",
    fit: "Slim Fit",
    color: "Light Blue",
    sizes: ["S", "M", "L"],
    stock: 10,
  },
);

// Show the supplied fit and product ID on each new product's detail page.
document.addEventListener("DOMContentLoaded", () => {
  const detailRoot = document.querySelector("#detailRoot");
  if (!detailRoot) return;

  const productId = Number(new URLSearchParams(location.search).get("id"));
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  detailRoot.querySelectorAll(".detail-specs-item").forEach((item) => {
    const label = item.querySelector("p")?.textContent.trim().toLowerCase();
    const value = item.querySelector("strong");
    if (label === "fit" && product.fit) value.textContent = product.fit;
    if (label === "sku" && product.sku) value.textContent = product.sku;
  });
});
