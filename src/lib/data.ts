export interface Product {
  id: string;
  title: string;
  price: number;
  sizeTag: string;
  img: string;
  gallery: string[];
  tag: string;
  description: string;
  scentNotes: {
    top: string;
    mid: string;
    base: string;
  };
  burnTime: string;
  category: string;
}

export const products: Product[] = [
  // ── Signature Jar Candles ──────────────────────────────────────
  {
    id: "olive-fig",
    title: "Olive & Fig",
    price: 499,
    sizeTag: "col-span-1 md:col-span-2 row-span-2",
    img: "/images/collection_jars.png",
    gallery: ["/images/collection_jars.png", "/images/hero_candle.png"],
    tag: "Best Seller",
    category: "Signature Candles",
    description: "A Mediterranean escape. The green, earthy aroma of crushed olive leaves rounded out by the deep, jammy sweetness of ripe black figs. Perfect for late summer evenings.",
    scentNotes: {
      top: "Bergamot, Olive Leaf",
      mid: "Black Fig, Geranium",
      base: "Vetiver, Oakmoss"
    },
    burnTime: "45-50 hours"
  },
  {
    id: "sandalwood-rose",
    title: "Sandalwood Rose",
    price: 549,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/hero_candle.png",
    gallery: ["/images/hero_candle.png", "/images/collection_jars.png"],
    tag: "New",
    category: "Signature Candles",
    description: "A sophisticated take on a classic floral. Warm, creamy Australian sandalwood anchors the delicate, powdery softness of blooming damask rose.",
    scentNotes: {
      top: "Violet Leaf, Pink Peppercorn",
      mid: "Damask Rose, Iris",
      base: "Sandalwood, Amber"
    },
    burnTime: "45-50 hours"
  },
  {
    id: "matcha-mint",
    title: "Matcha Mint",
    price: 399,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/process_finish.png",
    gallery: ["/images/process_finish.png"],
    tag: "",
    category: "Signature Candles",
    description: "An invigorating morning ritual. Earthy, ceremonial-grade matcha blended with crisp peppermint and a touch of sweet vanilla milk.",
    scentNotes: {
      top: "Crushed Peppermint",
      mid: "Matcha Powder, Green Tea",
      base: "Vanilla Bean, White Musk"
    },
    burnTime: "40-45 hours"
  },
  {
    id: "bergamot-woods",
    title: "Bergamot Woods",
    price: 499,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/process_sourced.png",
    gallery: ["/images/process_sourced.png"],
    tag: "",
    category: "Signature Candles",
    description: "A walk through a citrus grove at dawn. Bright, zesty Calabrian bergamot mellowed by the grounding presence of cedar and dark woods.",
    scentNotes: {
      top: "Calabrian Bergamot, Lemon Zest",
      mid: "Jasmine, Black Pepper",
      base: "Cedarwood, Patchouli"
    },
    burnTime: "45-50 hours"
  },
  {
    id: "lavender-dream",
    title: "Lavender Dream",
    price: 549,
    sizeTag: "col-span-1 md:col-span-2 row-span-2",
    img: "/images/candle_lavender_jar.png",
    gallery: ["/images/candle_lavender_jar.png"],
    tag: "Best Seller",
    category: "Signature Candles",
    description: "Drift into a field of French lavender. This calming blend captures the essence of Provence with dried botanicals and a warm honey undertone.",
    scentNotes: {
      top: "French Lavender, Eucalyptus",
      mid: "Clary Sage, Chamomile",
      base: "Tonka Bean, Honey"
    },
    burnTime: "50-55 hours"
  },
  {
    id: "cinnamon-spice",
    title: "Cinnamon Spice",
    price: 449,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/candle_cinnamon_jar.png",
    gallery: ["/images/candle_cinnamon_jar.png"],
    tag: "Seasonal",
    category: "Signature Candles",
    description: "A warm autumn embrace. Rich Ceylon cinnamon bark, dried orange peel, and a hint of clove create the ultimate cozy atmosphere for cold evenings.",
    scentNotes: {
      top: "Orange Peel, Cardamom",
      mid: "Ceylon Cinnamon, Clove",
      base: "Nutmeg, Vanilla"
    },
    burnTime: "40-45 hours"
  },

  // ── Decorative / Shaped Candles ────────────────────────────────
  {
    id: "rose-bloom",
    title: "Rose Bloom",
    price: 349,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/candle_rose_shaped.png",
    gallery: ["/images/candle_rose_shaped.png"],
    tag: "Decorative",
    category: "Shaped Candles",
    description: "A stunning hand-sculpted rose candle with intricate petal details. A perfect gift or centerpiece for any occasion, lightly scented with real rose essence.",
    scentNotes: {
      top: "Rose Petals",
      mid: "Peony, Lily of the Valley",
      base: "Soft Musk"
    },
    burnTime: "15-20 hours"
  },
  {
    id: "cake-delight",
    title: "Cake Delight",
    price: 399,
    sizeTag: "col-span-1 md:col-span-2 row-span-2",
    img: "/images/candle_cake_shaped.png",
    gallery: ["/images/candle_cake_shaped.png"],
    tag: "Gift Pick",
    category: "Shaped Candles",
    description: "A whimsical birthday cake candle with pastel frosting and handcrafted flower details. Too pretty to light, but delightfully scented with vanilla butter cream.",
    scentNotes: {
      top: "Whipped Cream, Sugar",
      mid: "Vanilla Buttercream",
      base: "Caramel, Tonka"
    },
    burnTime: "25-30 hours"
  },
  {
    id: "geometric-sage",
    title: "Geometric Sage",
    price: 299,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/candle_geometric.png",
    gallery: ["/images/candle_geometric.png"],
    tag: "Minimal",
    category: "Shaped Candles",
    description: "A modern hexagonal pillar candle in our signature sage green. Clean lines meet artisanal craft—perfect for minimalist interiors and contemporary decor.",
    scentNotes: {
      top: "White Tea",
      mid: "Bamboo, Aloe",
      base: "Cedar, Clean Linen"
    },
    burnTime: "30-35 hours"
  },

  // ── Mini & Tealight Candles ────────────────────────────────────
  {
    id: "golden-tealight-set",
    title: "Golden Tealight Set",
    price: 199,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/candle_mini_tealights.png",
    gallery: ["/images/candle_mini_tealights.png"],
    tag: "Value Pack",
    category: "Mini Candles",
    description: "Set of 4 artisan tealight candles in elegant gold tins. Perfect for creating ambient corners, dining tables, or gifting. Unscented for versatile use.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "6-8 hours each"
  },
  {
    id: "mini-lavender",
    title: "Mini Lavender",
    price: 149,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/candle_lavender_jar.png",
    gallery: ["/images/candle_lavender_jar.png"],
    tag: "Mini",
    category: "Mini Candles",
    description: "A pocket-sized version of our best-selling Lavender Dream. Ideal for travel, bedside tables, or trying a scent before committing to the full size.",
    scentNotes: {
      top: "French Lavender",
      mid: "Chamomile, Sage",
      base: "Tonka Bean"
    },
    burnTime: "12-15 hours"
  },
  {
    id: "mini-cinnamon",
    title: "Mini Cinnamon",
    price: 149,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/candle_cinnamon_jar.png",
    gallery: ["/images/candle_cinnamon_jar.png"],
    tag: "Mini",
    category: "Mini Candles",
    description: "Our warm Cinnamon Spice in a compact travel-sized jar. Perfect for small spaces, desks, or as a thoughtful add-on gift.",
    scentNotes: {
      top: "Orange Zest",
      mid: "Cinnamon, Clove",
      base: "Vanilla, Nutmeg"
    },
    burnTime: "12-15 hours"
  },

  // ── Large / Statement Candles ──────────────────────────────────
  {
    id: "terracotta-pillar",
    title: "Terracotta Pillar",
    price: 899,
    sizeTag: "col-span-1 md:col-span-2 row-span-2",
    img: "/images/candle_large_pillar.png",
    gallery: ["/images/candle_large_pillar.png"],
    tag: "Statement",
    category: "Large Candles",
    description: "A commanding three-wick terracotta pillar candle. Its rich amber scent fills entire rooms with warmth. A true centerpiece for living rooms and dining halls.",
    scentNotes: {
      top: "Blood Orange, Saffron",
      mid: "Amber, Warm Spice",
      base: "Sandalwood, Patchouli"
    },
    burnTime: "80-90 hours"
  },
  {
    id: "grand-olive-fig",
    title: "Grand Olive & Fig",
    price: 799,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/collection_jars.png",
    gallery: ["/images/collection_jars.png"],
    tag: "XL",
    category: "Large Candles",
    description: "Our signature Olive & Fig scent in a generous 500ml vessel. Perfect for large living spaces — fills the room with Mediterranean warmth for weeks.",
    scentNotes: {
      top: "Bergamot, Olive Leaf",
      mid: "Black Fig, Geranium",
      base: "Vetiver, Oakmoss"
    },
    burnTime: "70-80 hours"
  },

  // ── DIY Kits ───────────────────────────────────────────────────
  {
    id: "starter-kit",
    title: "The Starter Kit",
    price: 1249,
    sizeTag: "col-span-1 md:col-span-2 row-span-2",
    img: "/images/collection_kit.png",
    gallery: ["/images/collection_kit.png"],
    tag: "Kit",
    category: "DIY Kits",
    description: "Everything you need to pour your first luxury candle at home. Includes natural soy wax, essential oils, cotton wicks, and our signature ceramic vessel.",
    scentNotes: {
      top: "Customize your own",
      mid: "Customize your own",
      base: "Customize your own"
    },
    burnTime: "N/A"
  },
  {
    id: "advanced-kit",
    title: "The Pro Maker Kit",
    price: 999,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/collection_kit.png",
    gallery: ["/images/collection_kit.png"],
    tag: "Kit",
    category: "DIY Kits",
    description: "For experienced makers ready to level up. Includes premium soy-coconut wax blend, 5 fragrance oils, thermometer, and 3 ceramic vessels.",
    scentNotes: {
      top: "Customize your own",
      mid: "Customize your own",
      base: "Customize your own"
    },
    burnTime: "N/A"
  },

  // ── Raw Materials ──────────────────────────────────────────────
  {
    id: "soy-wax-flakes",
    title: "Eco Soy Wax",
    price: 249,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/collection_materials.png",
    gallery: ["/images/collection_materials.png"],
    tag: "Supply",
    category: "Raw Materials",
    description: "100% natural, clean-burning soy wax flakes. Sustainably sourced and perfect for refilling your Nivati vessels.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "Yields 2 standard candles"
  },
  {
    id: "cotton-wick-bundle",
    title: "Cotton Wick Bundle",
    price: 179,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/collection_materials.png",
    gallery: ["/images/collection_materials.png"],
    tag: "Supply",
    category: "Raw Materials",
    description: "Pack of 20 pre-tabbed, 100% cotton wicks in assorted sizes. Lead-free and designed for clean, even burns in soy wax candles.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
];
