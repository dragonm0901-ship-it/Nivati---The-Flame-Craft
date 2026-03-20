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
  // ── Signature Jar Candles (Best Sellers) ───────────────────────
  {
    id: "teddy-bear-signature",
    title: "Teddy Bear Large",
    price: 649,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_3917.JPG",
    gallery: ["/images/IMG_3917.JPG"],
    tag: "Best Seller",
    category: "Signature Candles",
    description: "An adorable large teddy bear candle, ideal for children's rooms or as a charming gift. Crafted with care and scented with warm vanilla.",
    scentNotes: {
      top: "Vanilla",
      mid: "Honey, Cream",
      base: "Tonka Bean, Musk"
    },
    burnTime: "25-30 hours"
  },
  {
    id: "rose-bloom-signature",
    title: "Rose Bloom",
    price: 349,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_3246.JPG",
    gallery: ["/images/IMG_3246.JPG"],
    tag: "Best Seller",
    category: "Signature Candles",
    description: "A stunning hand-sculpted rose candle with layered petals. Perfect as a gift or decorative centerpiece with real rose essence fragrance.",
    scentNotes: {
      top: "Rose Petals, Lavender",
      mid: "Peony, Pink Peppercorn",
      base: "Soft Musk, Tonka"
    },
    burnTime: "18-22 hours"
  },
  {
    id: "cake-signature",
    title: "Cake",
    price: 699,
    sizeTag: "col-span-1 md:col-span-2 row-span-2",
    img: "/images/Generated Image November 07, 2025 - 4.jpg",
    gallery: ["/images/Generated Image November 07, 2025 - 4.jpg"],
    tag: "Best Seller",
    category: "Signature Candles",
    description: "A beautifully detailed cake candle with frosting swirls and decorative elements. Too pretty to light, but scented with sweet vanilla cake fragrance.",
    scentNotes: {
      top: "Vanilla, Sugar",
      mid: "Buttercream, Caramel",
      base: "Tonka Bean, Musk"
    },
    burnTime: "30-35 hours"
  },
  {
    id: "fairy-house-signature",
    title: "Fairy House",
    price: 599,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/Generated Image November 07, 2025 - 5.jpg",
    gallery: ["/images/Generated Image November 07, 2025 - 5.jpg"],
    tag: "Best Seller",
    category: "Signature Candles",
    description: "A magical fairy house candle with intricate architectural details. Perfect for creating an enchanted atmosphere in any room.",
    scentNotes: {
      top: "Floral, Bergamot",
      mid: "Rose, Lily, Honeysuckle",
      base: "Musk, Cedarwood"
    },
    burnTime: "28-32 hours"
  },
  {
    id: "strawberry-jar-signature",
    title: "Strawberry Jar",
    price: 1249,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4096.jpg",
    gallery: ["/images/IMG_4096.jpg"],
    tag: "Premium",
    category: "Signature Candles",
    description: "A delightfully fruity strawberry candle in premium jar format. Sweet and indulgent fragrance that fills your space.",
    scentNotes: {
      top: "Fresh Strawberry",
      mid: "Berry, Cream",
      base: "Vanilla, Musk"
    },
    burnTime: "60-70 hours"
  },
  {
    id: "rainbow-jar-signature",
    title: "Rainbow Jar",
    price: 1249,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4077.jpg",
    gallery: ["/images/IMG_4077.jpg"],
    tag: "Premium",
    category: "Signature Candles",
    description: "A vibrant multi-colored rainbow candle with layered fragrances. Visually stunning and aromatic creation.",
    scentNotes: {
      top: "Citrus, Berry, Florals",
      mid: "Mixed Fruit Notes",
      base: "Musk, Cedarwood"
    },
    burnTime: "65-75 hours"
  },

  // ── Concrete Jar Candles ───────────────────────────────────────
  {
    id: "concrete-moon",
    title: "Moon",
    price: 999,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4071.jpg",
    gallery: ["/images/IMG_4071.jpg"],
    tag: "Modern",
    category: "Concrete Jar Candles",
    description: "A stunning moon-shaped concrete jar candle. Perfect for celestial lovers and modern minimalist spaces. Hand-poured with premium soy wax.",
    scentNotes: {
      top: "Moonflower, Bergamot",
      mid: "Night-blooming Jasmine",
      base: "Vanilla, Musk"
    },
    burnTime: "50-60 hours"
  },
  {
    id: "concrete-starfish",
    title: "Starfish",
    price: 649,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4075.jpg",
    gallery: ["/images/IMG_4075.jpg"],
    tag: "Coastal",
    category: "Concrete Jar Candles",
    description: "A charming starfish-shaped concrete jar candle with ocean-inspired aesthetics. Brings coastal vibes to any space.",
    scentNotes: {
      top: "Sea Salt, Citrus",
      mid: "Ocean Mist, Driftwood",
      base: "Cedarwood, Amber"
    },
    burnTime: "40-50 hours"
  },
  {
    id: "concrete-bowl",
    title: "Bowl",
    price: 799,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Contemporary",
    category: "Concrete Jar Candles",
    description: "An elegant bowl-shaped concrete vessel filled with premium scented wax. A functional art piece for your home.",
    scentNotes: {
      top: "Lavender, Eucalyptus",
      mid: "Sage, Mint",
      base: "Cedarwood, Vetiver"
    },
    burnTime: "45-55 hours"
  },
  {
    id: "concrete-three-layers",
    title: "Three Layers",
    price: 899,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Signature",
    category: "Concrete Jar Candles",
    description: "Three distinct layers of scented wax in a concrete jar. A visual and aromatic journey in one candle.",
    scentNotes: {
      top: "Bergamot, Grapefruit",
      mid: "Floral Blend, Rose",
      base: "Sandalwood, Patchouli"
    },
    burnTime: "50-60 hours"
  },
  {
    id: "concrete-grid-jar",
    title: "Grid Jar",
    price: 649,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4138.jpg",
    gallery: ["/images/IMG_4138.jpg"],
    tag: "Geometric",
    category: "Concrete Jar Candles",
    description: "A geometric grid-patterned concrete jar with clean, modern lines. Perfect for contemporary interiors.",
    scentNotes: {
      top: "Lemon, Lime",
      mid: "White Tea, Green Apple",
      base: "Clean Linen, Musk"
    },
    burnTime: "40-50 hours"
  },

  // ── Basic Jar Candles ───────────────────────────────────────────
  {
    id: "basic-small-100ml",
    title: "Small 100ml",
    price: 599,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Compact",
    category: "Basic Jar Candles",
    description: "Perfect entry-sized candle in our classic jar. 100ml of pure scented luxury, ideal for testing fragrances or gifting.",
    scentNotes: {
      top: "Citrus, Bergamot",
      mid: "Floral, Rose",
      base: "Musk, Woods"
    },
    burnTime: "15-20 hours"
  },
  {
    id: "basic-medium-160ml",
    title: "Medium 160ml",
    price: 899,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Standard",
    category: "Basic Jar Candles",
    description: "Our most popular size. 160ml of premium scented wax in a beautiful glass jar. Perfect balance of size and burn time.",
    scentNotes: {
      top: "Lavender, Lemon",
      mid: "Chamomile, Herb",
      base: "Cedarwood, Vetiver"
    },
    burnTime: "25-30 hours"
  },
  {
    id: "basic-large-200ml",
    title: "Large 200ml",
    price: 999,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Value",
    category: "Basic Jar Candles",
    description: "Our generous large size with 200ml of luxurious scented wax. Extended burn time and maximum fragrance distribution.",
    scentNotes: {
      top: "Vanilla, Caramel",
      mid: "Cinnamon, Spice",
      base: "Sandalwood, Amber"
    },
    burnTime: "35-45 hours"
  },

  // ── Mould Candles ──────────────────────────────────────────────
  {
    id: "astronaut",
    title: "Astronaut",
    price: 499,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_3918.JPG",
    gallery: ["/images/IMG_3918.JPG"],
    tag: "Decorative",
    category: "Mould Candles",
    description: "A whimsical astronaut-shaped candle perfect for space enthusiasts. Hand-poured with premium soy wax, this decorative piece doubles as a functional candle.",
    scentNotes: {
      top: "Citrus, Bergamot",
      mid: "Lavender, Sage",
      base: "Sandalwood, Musk"
    },
    burnTime: "20-25 hours"
  },
  {
    id: "teddy-bear-large",
    title: "Teddy Bear Large",
    price: 649,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_3917.JPG",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Decorative",
    category: "Mould Candles",
    description: "An adorable large teddy bear candle, ideal for children's rooms or as a charming gift. Crafted with care and scented with warm vanilla.",
    scentNotes: {
      top: "Vanilla",
      mid: "Honey, Cream",
      base: "Tonka Bean, Musk"
    },
    burnTime: "25-30 hours"
  },
  {
    id: "rose-peony-small",
    title: "Rose Peony Small",
    price: 299,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_3246.JPG",
    gallery: ["/images/IMG_3246.JPG"],
    tag: "Floral",
    category: "Mould Candles",
    description: "A delicate small rose and peony blend in candle form. Perfect for adding elegance to any shelf or desk. Lightly scented with floral essences.",
    scentNotes: {
      top: "Rose, Peony",
      mid: "Lily, Geranium",
      base: "Musk, Soft Woods"
    },
    burnTime: "12-15 hours"
  },
  {
    id: "rose-peony-large",
    title: "Rose Peony Large",
    price: 399,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4091.jpg",
    gallery: ["/images/IMG_4091.jpg"],
    tag: "Floral",
    category: "Mould Candles",
    description: "A generous-sized rose and peony candle with intricate petal detailing. Makes a stunning centerpiece while filling your space with romantic floral notes.",
    scentNotes: {
      top: "Rose, Peony",
      mid: "Lily, Geranium",
      base: "Musk, Soft Woods"
    },
    burnTime: "20-25 hours"
  },
  {
    id: "rose-bloom-mould",
    title: "Rose Bloom",
    price: 349,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4091.jpg",
    gallery: ["/images/IMG_4091.jpg"],
    tag: "Floral",
    category: "Mould Candles",
    description: "A stunning hand-sculpted rose candle with layered petals. Perfect as a gift or decorative centerpiece with real rose essence fragrance.",
    scentNotes: {
      top: "Rose Petals, Lavender",
      mid: "Peony, Pink Peppercorn",
      base: "Soft Musk, Tonka"
    },
    burnTime: "18-22 hours"
  },
  {
    id: "rose-bloom-ii",
    title: "Rose Bloom II",
    price: 349,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4091.jpg",
    gallery: ["/images/IMG_4091.jpg"],
    tag: "Floral",
    category: "Mould Candles",
    description: "An alternative rose design with deeper petal sculpting. A premium decorative candle that captures the essence of a blooming garden.",
    scentNotes: {
      top: "Red Rose, Raspberry",
      mid: "Damask Rose, Iris",
      base: "Sandalwood, Amber"
    },
    burnTime: "18-22 hours"
  },
  {
    id: "tulip-with-stem",
    title: "Tulip with Stem",
    price: 449,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Botanical",
    category: "Mould Candles",
    description: "An elegant tulip candle complete with a detailed stem. Brings spring charm to any space with its graceful botanical design.",
    scentNotes: {
      top: "Fresh Florals, Bergamot",
      mid: "Tulip, Green Stems",
      base: "Cedarwood, Vetiver"
    },
    burnTime: "20-25 hours"
  },
  {
    id: "tulip-flower",
    title: "Tulip Flower",
    price: 249,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Botanical",
    category: "Mould Candles",
    description: "A compact tulip-shaped candle perfect for small spaces. Minimal yet elegant, capturing the simple beauty of spring flowers.",
    scentNotes: {
      top: "Fresh Florals",
      mid: "Tulip Petals",
      base: "Green Moss, Cedarwood"
    },
    burnTime: "14-18 hours"
  },
  {
    id: "bubbles",
    title: "Bubbles",
    price: 399,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4087.JPG",
    gallery: ["/images/IMG_4087.JPG"],
    tag: "Modern",
    category: "Mould Candles",
    description: "A playful bubble-textured candle with a modern aesthetic. Each sphere is carefully crafted for a unique visual and tactile experience.",
    scentNotes: {
      top: "Citrus Zest",
      mid: "White Tea, Mint",
      base: "Linen, Musk"
    },
    burnTime: "20-25 hours"
  },
  {
    id: "bubble-pillar",
    title: "Bubble Pillar",
    price: 349,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4087.JPG",
    gallery: ["/images/IMG_4087.JPG"],
    tag: "Modern",
    category: "Mould Candles",
    description: "A vertical arrangement of bubble-textured candle for a contemporary look. Ideal for creating sculptural interest on shelves or tables.",
    scentNotes: {
      top: "Grapefruit, Lemon",
      mid: "White Pepper, Cardamom",
      base: "Driftwood, Ambroxan"
    },
    burnTime: "22-28 hours"
  },
  {
    id: "spiral",
    title: "Spiral",
    price: 249,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_3883.JPG",
    gallery: ["/images/IMG_3883.JPG"],
    tag: "Geometric",
    category: "Mould Candles",
    description: "A mesmerizing spiral-patterned candle with a minimalist design. Perfect for adding kinetic visual interest to any room.",
    scentNotes: {
      top: "Eucalyptus, Mint",
      mid: "Bamboo, Aloe",
      base: "Cedar, Clean Linen"
    },
    burnTime: "15-20 hours"
  },
  {
    id: "christmas-tree",
    title: "Christmas Tree",
    price: 499,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4103.jpg",
    gallery: ["/images/IMG_4103.jpg"],
    tag: "Seasonal",
    category: "Mould Candles",
    description: "A festive Christmas tree-shaped candle with intricate layering. Perfect for holiday decor, scented with warm seasonal spices.",
    scentNotes: {
      top: "Pine, Fir Needle",
      mid: "Cinnamon, Clove",
      base: "Cedarwood, Amber"
    },
    burnTime: "25-30 hours"
  },
  {
    id: "mini-flower",
    title: "Mini Flower",
    price: 149,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Mini",
    category: "Mould Candles",
    description: "Tiny flower-shaped candle perfect for decorative arrangements or small gifts. Sweet and charming with delicate floral scent.",
    scentNotes: {
      top: "Floral Blend",
      mid: "Rose, Lily",
      base: "Soft Musk"
    },
    burnTime: "8-10 hours"
  },
  {
    id: "sunflower",
    title: "Sunflower",
    price: 149,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4101.jpg",
    gallery: ["/images/IMG_4101.jpg"],
    tag: "Botanical",
    category: "Mould Candles",
    description: "A cheerful sunflower-shaped candle with bright golden tones. Spreads warmth and joy with its sunny disposition and citrus scent.",
    scentNotes: {
      top: "Lemon, Orange",
      mid: "Sunflower, Heliotrope",
      base: "Vanilla, Honey"
    },
    burnTime: "10-12 hours"
  },
  {
    id: "daisy",
    title: "Daisy",
    price: 149,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Botanical",
    category: "Mould Candles",
    description: "A simple yet elegant daisy candle with clean lines. Perfect for minimalist decor and scented with fresh, herbaceous notes.",
    scentNotes: {
      top: "Fresh Green, Grapefruit",
      mid: "Daisy, Chamomile",
      base: "Green Moss, Musk"
    },
    burnTime: "10-12 hours"
  },
  {
    id: "cactus-1",
    title: "Cactus 1",
    price: 449,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4133.jpg",
    gallery: ["/images/IMG_4133.jpg"],
    tag: "Succulent",
    category: "Mould Candles",
    description: "A charming cactus-shaped candle capturing the essence of desert botanicals. Minimalist design with a spicy, warm fragrance.",
    scentNotes: {
      top: "Cactus Flower, Bergamot",
      mid: "Arid Spices",
      base: "Sandalwood, Patchouli"
    },
    burnTime: "22-26 hours"
  },
  {
    id: "cactus-2",
    title: "Cactus 2",
    price: 199,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Succulent",
    category: "Mould Candles",
    description: "A smaller cactus variation with spiny texture details. A playful take on desert aesthetics with refreshing herbal notes.",
    scentNotes: {
      top: "Cactus, Mint",
      mid: "Green Pepper, Aloe",
      base: "Cedarwood, Vetiver"
    },
    burnTime: "12-15 hours"
  },
  {
    id: "cactus-3",
    title: "Cactus 3",
    price: 149,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Succulent",
    category: "Mould Candles",
    description: "A compact cactus candle, perfect for small desks or shelves. Lightly scented with cool, fresh desert botanicals.",
    scentNotes: {
      top: "Cactus, Citrus",
      mid: "Eucalyptus, Sage",
      base: "Dry Woods"
    },
    burnTime: "10-12 hours"
  },
  {
    id: "cactus-4",
    title: "Cactus 4",
    price: 119,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Succulent",
    category: "Mould Candles",
    description: "A miniature cactus candle, ideal for gifting or decoration. Simple design with subtle botanical scent notes.",
    scentNotes: {
      top: "Fresh Green",
      mid: "Herbal Notes",
      base: "Soft Woods"
    },
    burnTime: "8-10 hours"
  },
  {
    id: "couple",
    title: "Couple",
    price: 399,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Gift",
    category: "Mould Candles",
    description: "A romantic pair candle depicting two figures together. Perfect for anniversaries, weddings, or celebrating love with your special someone.",
    scentNotes: {
      top: "Rose, Jasmine",
      mid: "Gardenia, Patchouli",
      base: "Sandalwood, Amber"
    },
    burnTime: "20-25 hours"
  },
  {
    id: "strawberry",
    title: "Strawberry",
    price: 119,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4098.jpg",
    gallery: ["/images/IMG_4098.jpg"],
    tag: "Fruit",
    category: "Mould Candles",
    description: "A delightful strawberry-shaped candle with a juicy, fruity aroma. Small and sweet, perfect for adding a pop of color and scent.",
    scentNotes: {
      top: "Fresh Strawberry",
      mid: "Ripe Berry, Cream",
      base: "Vanilla, Musk"
    },
    burnTime: "10-12 hours"
  },
  {
    id: "cake",
    title: "Cake",
    price: 699,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/candle_cake_shaped.png",
    gallery: ["/images/candle_cake_shaped.png"],
    tag: "Gift Pick",
    category: "Mould Candles",
    description: "A beautifully detailed cake candle with frosting swirls and decorative elements. Too pretty to light, but scented with sweet vanilla cake fragrance.",
    scentNotes: {
      top: "Vanilla, Sugar",
      mid: "Buttercream, Caramel",
      base: "Tonka Bean, Musk"
    },
    burnTime: "30-35 hours"
  },
  {
    id: "fairy-house",
    title: "Fairy House",
    price: 599,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Whimsical",
    category: "Mould Candles",
    description: "A magical fairy house candle with intricate architectural details. Perfect for creating an enchanted atmosphere in any room.",
    scentNotes: {
      top: "Floral, Bergamot",
      mid: "Rose, Lily, Honeysuckle",
      base: "Musk, Cedarwood"
    },
    burnTime: "28-32 hours"
  },

  // ── Premium Jar Candles ────────────────────────────────────────
  {
    id: "cactus-jar",
    title: "Cactus Jar",
    price: 999,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Premium",
    category: "Premium Jar Candles",
    description: "A premium jar candle with cactus-inspired design and fragrance. Brings desert aesthetics to luxury home spaces.",
    scentNotes: {
      top: "Cactus Flower, Citrus",
      mid: "Dry Herbs, Aloe",
      base: "Sandalwood, Patchouli"
    },
    burnTime: "55-65 hours"
  },
  {
    id: "daisy-jar",
    title: "Daisy Jar",
    price: 999,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Premium",
    category: "Premium Jar Candles",
    description: "A beautiful daisy-themed premium jar candle with fresh floral notes. Perfect for spring and summer.",
    scentNotes: {
      top: "Fresh Florals, Bergamot",
      mid: "Daisy, Chamomile",
      base: "Green Moss, Musk"
    },
    burnTime: "55-65 hours"
  },
  {
    id: "berry-wine",
    title: "Berry Wine",
    price: 999,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Premium",
    category: "Premium Jar Candles",
    description: "A luxurious blend of berry and wine notes in our premium jar format. Sophisticated and deeply aromatic.",
    scentNotes: {
      top: "Blackberry, Raspberry",
      mid: "Red Wine, Berry",
      base: "Cedarwood, Amber"
    },
    burnTime: "55-65 hours"
  },
  {
    id: "daisy-wine",
    title: "Daisy Wine",
    price: 1149,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Premium",
    category: "Premium Jar Candles",
    description: "An elegant combination of delicate daisy and rich wine aromatics. A premium offering for the discerning customer.",
    scentNotes: {
      top: "Daisy, Floral",
      mid: "Wine, Berry Notes",
      base: "Sandalwood, Musk"
    },
    burnTime: "60-70 hours"
  },
  {
    id: "sunflower-jar",
    title: "Sunflower Jar",
    price: 999,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Premium",
    category: "Premium Jar Candles",
    description: "A vibrant sunflower-inspired premium candle. Brings cheerful warmth and brightness to any room.",
    scentNotes: {
      top: "Sunflower, Honey",
      mid: "Golden Florals",
      base: "Vanilla, Cedarwood"
    },
    burnTime: "55-70 hours"
  },
  {
    id: "mini-flower-jar",
    title: "Mini Flower Jar",
    price: 999,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Premium",
    category: "Premium Jar Candles",
    description: "A delicate mini flower design in premium jar format. Perfect for adding subtle botanical beauty.",
    scentNotes: {
      top: "Mixed Florals",
      mid: "Lily, Rose, Peony",
      base: "Soft Musk, Tonka"
    },
    burnTime: "55-65 hours"
  },
  {
    id: "tulip-jar",
    title: "Tulip Jar",
    price: 1249,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Premium",
    category: "Premium Jar Candles",
    description: "An exquisite tulip-inspired premium candle with premium wax blend. A true luxury item for tulip lovers.",
    scentNotes: {
      top: "Tulip, Fresh Green",
      mid: "Spring Florals",
      base: "Cedarwood, Vetiver"
    },
    burnTime: "65-75 hours"
  },
  {
    id: "tulip-stem-jar",
    title: "Tulip Stem Jar",
    price: 999,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Premium",
    category: "Premium Jar Candles",
    description: "A botanical premium candle featuring tulip with detailed stem design. Elegant and refined.",
    scentNotes: {
      top: "Tulip, Bergamot",
      mid: "Green Stem, Herb",
      base: "Moss, Cedarwood"
    },
    burnTime: "55-65 hours"
  },
  {
    id: "coffee-jar",
    title: "Coffee Jar",
    price: 899,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Specialty",
    category: "Premium Jar Candles",
    description: "A sophisticated coffee-scented premium candle. Perfect for coffee lovers and morning rituals.",
    scentNotes: {
      top: "Fresh Coffee, Citrus",
      mid: "Roasted Notes, Caramel",
      base: "Vanilla, Cedarwood"
    },
    burnTime: "50-60 hours"
  },
  {
    id: "strawberry-jar",
    title: "Strawberry Jar",
    price: 1249,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Premium",
    category: "Premium Jar Candles",
    description: "A delightfully fruity strawberry candle in premium jar format. Sweet and indulgent fragrance.",
    scentNotes: {
      top: "Fresh Strawberry",
      mid: "Berry, Cream",
      base: "Vanilla, Musk"
    },
    burnTime: "60-70 hours"
  },
  {
    id: "rainbow-jar",
    title: "Rainbow Jar",
    price: 1249,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Premium",
    category: "Premium Jar Candles",
    description: "A vibrant multi-colored rainbow candle with layered fragrances. Visually stunning and aromatic.",
    scentNotes: {
      top: "Citrus, Berry, Florals",
      mid: "Mixed Fruit Notes",
      base: "Musk, Cedarwood"
    },
    burnTime: "65-75 hours"
  },
  {
    id: "dried-flower-jar",
    title: "Dried Flower Jar",
    price: 1149,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Premium",
    category: "Premium Jar Candles",
    description: "A sophisticated dried flower design in premium candle format. Elegant botanical aesthetic.",
    scentNotes: {
      top: "Dried Florals, Lavender",
      mid: "Rose, Chamomile",
      base: "Tonka, Musk"
    },
    burnTime: "60-70 hours"
  },

  // ── Gel & Soy Jar ──────────────────────────────────────────────
  {
    id: "iced-latte",
    title: "Iced Latte",
    price: 999,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4136.jpg",
    gallery: ["/images/IMG_4136.jpg"],
    tag: "Gel Candle",
    category: "Gel&Soy Jar",
    description: "A refreshing iced latte-scented gel and soy candle. Perfect for coffee and cream lovers.",
    scentNotes: {
      top: "Cold Brew, Espresso",
      mid: "Cream, Vanilla",
      base: "Caramel, Musk"
    },
    burnTime: "50-60 hours"
  },
  {
    id: "iced-strawberry",
    title: "Iced Strawberry",
    price: 999,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4145.jpg",
    gallery: ["/images/IMG_4145.jpg"],
    tag: "Gel Candle",
    category: "Gel&Soy Jar",
    description: "A sweet iced strawberry gel and soy blend. Fruity and refreshing fragrance in candle form.",
    scentNotes: {
      top: "Fresh Strawberry",
      mid: "Berry Juice, Cream",
      base: "Vanilla, Sugar"
    },
    burnTime: "50-60 hours"
  },
  {
    id: "iced-blueberry",
    title: "Iced Blueberry",
    price: 999,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Gel Candle",
    category: "Gel&Soy Jar",
    description: "A smooth iced blueberry gel and soy candle. Perfect for berry enthusiasts.",
    scentNotes: {
      top: "Blueberry, Citrus",
      mid: "Berry, Cream",
      base: "Vanilla, Musk"
    },
    burnTime: "50-60 hours"
  },
  {
    id: "iced-matcha",
    title: "Iced Matcha",
    price: 999,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4144.jpg",
    gallery: ["/images/IMG_4144.jpg"],
    tag: "Gel Candle",
    category: "Gel&Soy Jar",
    description: "A trendy iced matcha gel and soy candle. Cool green tea fragrance with creamy notes.",
    scentNotes: {
      top: "Matcha, Green Tea",
      mid: "Cream, Vanilla",
      base: "Soft Musk"
    },
    burnTime: "50-60 hours"
  },
  {
    id: "heart-patches",
    title: "Heart Patches",
    price: 999,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Gel Candle",
    category: "Gel&Soy Jar",
    description: "A romantic heart-patterned gel and soy candle. Perfect for love-themed occasions.",
    scentNotes: {
      top: "Rose, Peony",
      mid: "Floral Blend",
      base: "Musk, Vanilla"
    },
    burnTime: "50-60 hours"
  },
  {
    id: "heart-burst",
    title: "Heart Burst",
    price: 999,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Gel Candle",
    category: "Gel&Soy Jar",
    description: "An explosive heart-burst design gel and soy candle. Vibrant and romantic.",
    scentNotes: {
      top: "Rose, Jasmine",
      mid: "Gardenia, Peony",
      base: "Sandalwood, Musk"
    },
    burnTime: "50-60 hours"
  },
  {
    id: "jack-daniels",
    title: "Jack Daniels",
    price: 999,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4147.jpg",
    gallery: ["/images/IMG_4147.jpg"],
    tag: "Gel Candle",
    category: "Gel&Soy Jar",
    description: "A bold whiskey-inspired gel and soy candle. Sophisticated notes for the connoisseur.",
    scentNotes: {
      top: "Whiskey, Oak",
      mid: "Vanilla, Spice",
      base: "Cedarwood, Tobacco"
    },
    burnTime: "50-60 hours"
  },
  {
    id: "strawberry-jam",
    title: "Strawberry Jam",
    price: 999,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Gel Candle",
    category: "Gel&Soy Jar",
    description: "A sweet and tangy strawberry jam gel and soy candle. Delightful fruity fragrance.",
    scentNotes: {
      top: "Strawberry, Sugar",
      mid: "Jam, Fruit",
      base: "Vanilla, Caramel"
    },
    burnTime: "50-60 hours"
  },

  // ── Mini Jar ───────────────────────────────────────────────────
  {
    id: "mini-heart",
    title: "Mini Heart",
    price: 649,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Mini",
    category: "Mini Jar",
    description: "A cute heart-shaped mini jar candle. Perfect for small spaces and gifting.",
    scentNotes: {
      top: "Rose, Pink Peppercorn",
      mid: "Floral, Peony",
      base: "Musk, Tonka"
    },
    burnTime: "20-25 hours"
  },
  {
    id: "mini-heart-burst",
    title: "Mini Heart Burst",
    price: 649,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Mini",
    category: "Mini Jar",
    description: "A vibrant heart-burst design in mini jar format. Compact and charming.",
    scentNotes: {
      top: "Rose, Bergamot",
      mid: "Jasmine, Floral",
      base: "Sandalwood, Musk"
    },
    burnTime: "20-25 hours"
  },

  // ── Concrete Pots ─────────────────────────────────────────────
  {
    id: "concrete-pot-moon",
    title: "Moon",
    price: 375,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4071.jpg",
    gallery: ["/images/IMG_4071.jpg"],
    tag: "Concrete",
    category: "Concrete Pots",
    description: "A sleek moon-shaped concrete pot. Perfect for DIY candle making or decoration.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
  {
    id: "concrete-pot-starfish",
    title: "Starfish",
    price: 155,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4075.jpg",
    gallery: ["/images/IMG_4075.jpg"],
    tag: "Concrete",
    category: "Concrete Pots",
    description: "A charming starfish-shaped concrete pot. Great for small DIY projects.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
  {
    id: "concrete-pot-bowl",
    title: "Bowl",
    price: 199,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4086.jpg",
    gallery: ["/images/IMG_4086.jpg"],
    tag: "Concrete",
    category: "Concrete Pots",
    description: "A simple concrete bowl pot for candle making. Minimalist design.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
  {
    id: "concrete-pot-three-layers",
    title: "Three Layers",
    price: 299,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Concrete",
    category: "Concrete Pots",
    description: "A three-layered concrete pot structure. Perfect for advanced makers.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
  {
    id: "concrete-pot-grid-jar",
    title: "Grid Jar",
    price: 155,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4138.jpg",
    gallery: ["/images/IMG_4138.jpg"],
    tag: "Concrete",
    category: "Concrete Pots",
    description: "A geometric grid-patterned concrete pot. Modern and versatile.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
  {
    id: "concrete-pot-big-bowl-nest",
    title: "Big Bowl Nest",
    price: 475,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Concrete",
    category: "Concrete Pots",
    description: "A large nested bowl-style concrete pot. Great for statement candles.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
  {
    id: "concrete-pot-large-bowl",
    title: "Large Bowl",
    price: 525,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_4142.jpg",
    gallery: ["/images/IMG_4142.jpg"],
    tag: "Concrete",
    category: "Concrete Pots",
    description: "An expansive concrete bowl pot. Perfect for large DIY candle projects.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },

  // ── Candle Making Kit ──────────────────────────────────────────
  {
    id: "candle-kit-full-set",
    title: "Full Set",
    price: 7999,
    sizeTag: "col-span-1 md:col-span-2 row-span-2",
    img: "/images/IMG_4138.jpg",
    gallery: ["/images/IMG_4138.jpg"],
    tag: "Complete Kit",
    category: "Candle Making Kit",
    description: "A comprehensive candle-making kit with everything needed to start your candle journey. Includes wax, wicks, oils, moulds, and tools.",
    scentNotes: {
      top: "Customize your own",
      mid: "Customize your own",
      base: "Customize your own"
    },
    burnTime: "N/A"
  },
  {
    id: "candle-kit-customized",
    title: "Customized Set",
    price: 999,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/collection_kit.png",
    gallery: ["/images/collection_kit.png"],
    tag: "Custom",
    category: "Candle Making Kit",
    description: "Create your personalized candle-making kit. Choose your own combination of wax, fragrance, and tools.",
    scentNotes: {
      top: "Customize your own",
      mid: "Customize your own",
      base: "Customize your own"
    },
    burnTime: "N/A"
  },

  // ── Candle Making (Supplies) ───────────────────────────────────
  {
    id: "stone-plaster-g-w",
    title: "Stone Plaster-G/W",
    price: 350,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/IMG_1476 2.jpg",
    gallery: ["/images/IMG_1476 2.jpg"],
    tag: "Supply",
    category: "Candle Making",
    description: "Premium stone plaster for mould making. 350 per kg, ideal for creating custom moulds.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
  {
    id: "pure-soy-wax",
    title: "Pure Soy Wax",
    price: 820,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/collection_materials.png",
    gallery: ["/images/collection_materials.png"],
    tag: "Supply",
    category: "Candle Making",
    description: "100% pure soy wax for sustainable candle making. Clean-burning and eco-friendly.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
  {
    id: "gel-wax",
    title: "Gel Wax",
    price: 900,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/collection_materials.png",
    gallery: ["/images/collection_materials.png"],
    tag: "Supply",
    category: "Candle Making",
    description: "Premium gel wax for creating transparent and decorative candles.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
  {
    id: "heart-mould",
    title: "Heart Mould",
    price: 375,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/collection_materials.png",
    gallery: ["/images/collection_materials.png"],
    tag: "Mould",
    category: "Candle Making",
    description: "A heart-shaped silicone mould for romantic candle designs.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
  {
    id: "bubble-mould",
    title: "Bubble Mould",
    price: 365,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/collection_materials.png",
    gallery: ["/images/collection_materials.png"],
    tag: "Mould",
    category: "Candle Making",
    description: "A bubble-pattern silicone mould for modern geometric designs.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
  {
    id: "rose-mould",
    title: "Rose Mould",
    price: 485,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/collection_materials.png",
    gallery: ["/images/collection_materials.png"],
    tag: "Mould",
    category: "Candle Making",
    description: "A detailed rose-shaped silicone mould for elegant floral candles.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
  {
    id: "tulip-mould",
    title: "Tulip Mould",
    price: 485,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/collection_materials.png",
    gallery: ["/images/collection_materials.png"],
    tag: "Mould",
    category: "Candle Making",
    description: "A botanical tulip-shaped silicone mould for spring-inspired designs.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
  {
    id: "mini-flower-mould",
    title: "Mini Flower",
    price: 475,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/collection_materials.png",
    gallery: ["/images/collection_materials.png"],
    tag: "Mould",
    category: "Candle Making",
    description: "A small flower-shaped silicone mould for delicate designs.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
  {
    id: "wax-thread",
    title: "Thread",
    price: 725,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/collection_materials.png",
    gallery: ["/images/collection_materials.png"],
    tag: "Supply",
    category: "Candle Making",
    description: "High-quality wax thread for wick applications and decorative details.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
  {
    id: "wick-holder",
    title: "Wick Holder",
    price: 15,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/collection_materials.png",
    gallery: ["/images/collection_materials.png"],
    tag: "Tool",
    category: "Candle Making",
    description: "A precision wick holder for perfectly centered candle pouring.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
  {
    id: "thank-you-stickers",
    title: "Thank You Stickers",
    price: 500,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/collection_materials.png",
    gallery: ["/images/collection_materials.png"],
    tag: "Packaging",
    category: "Candle Making",
    description: "Premium thank you stickers for finishing your handmade candle gifts.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
  {
    id: "melting-pot",
    title: "Melting Pot",
    price: 999,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/collection_materials.png",
    gallery: ["/images/collection_materials.png"],
    tag: "Tool",
    category: "Candle Making",
    description: "A professional melting pot for safely heating wax without direct flame.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
  {
    id: "wax-color",
    title: "Color",
    price: 120,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/collection_materials.png",
    gallery: ["/images/collection_materials.png"],
    tag: "Material",
    category: "Candle Making",
    description: "Premium candle coloring dyes in various shades for custom designs.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
  {
    id: "fragrance-oil",
    title: "Fragrance",
    price: 299,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/collection_materials.png",
    gallery: ["/images/collection_materials.png"],
    tag: "Scent",
    category: "Candle Making",
    description: "High-quality fragrance oils for personalized scent creation (199-799).",
    scentNotes: {
      top: "Varies",
      mid: "Varies",
      base: "Varies"
    },
    burnTime: "N/A"
  },
  {
    id: "blending-needle",
    title: "Needle",
    price: 399,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/collection_materials.png",
    gallery: ["/images/collection_materials.png"],
    tag: "Tool",
    category: "Candle Making",
    description: "A precision blending needle for layering wax and creating patterns.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
  {
    id: "thermometer",
    title: "Thermometer",
    price: 775,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/collection_materials.png",
    gallery: ["/images/collection_materials.png"],
    tag: "Tool",
    category: "Candle Making",
    description: "A precise thermometer for monitoring wax temperature during pouring.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
  {
    id: "lid-jar",
    title: "Lid Jar",
    price: 57,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/collection_materials.png",
    gallery: ["/images/collection_materials.png"],
    tag: "Container",
    category: "Candle Making",
    description: "Replacement jar lids for 100ml and 200ml jars (55-60).",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
  {
    id: "heat-gun",
    title: "Heat Gun",
    price: 1155,
    sizeTag: "col-span-1 row-span-1",
    img: "/images/collection_materials.png",
    gallery: ["/images/collection_materials.png"],
    tag: "Tool",
    category: "Candle Making",
    description: "A professional heat gun for smoothing wax surfaces and finishing touches.",
    scentNotes: {
      top: "Unscented",
      mid: "Unscented",
      base: "Unscented"
    },
    burnTime: "N/A"
  },
];
