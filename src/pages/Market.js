
import { useState } from "react";

import wheyProtein from "../assets/images/market/whey-protein.png";
import creatine from "../assets/images/market/creatine.png";
import shaker from "../assets/images/market/shaker.png";
import trainingGloves from "../assets/images/market/training-gloves.png";
import resistanceBands from "../assets/images/market/resistance-bands.png";
import proteinBar from "../assets/images/market/protein-bar.png";

const products = [
  {
    id: 1,
    name: "Whey Protein",
    category: "Supplements",
    price: 49.99,
    image: wheyProtein,
    description: "Premium protein for muscle recovery."
  },
  {
    id: 2,
    name: "Creatine Monohydrate",
    category: "Supplements",
    price: 29.99,
    image: creatine,
    description: "Support strength and performance."
  },
  {
    id: 3,
    name: "FitForge Shaker",
    category: "Accessories",
    price: 14.99,
    image: shaker,
    description: "Mix your supplements anywhere."
  },
  {
    id: 4,
    name: "Training Gloves",
    category: "Training Gear",
    price: 10.99,
    image: trainingGloves,
    description: "Comfortable grip for every workout."
  },
  {
    id: 5,
    name: "Resistance Bands",
    category: "Training Gear",
    price: 12.99,
    image: resistanceBands,
    description: "Train anywhere with resistance bands."
  },
  {
    id: 6,
    name: "Protein Bar",
    category: "Nutrition",
    price: 3.99,
    image: proteinBar,
    description: "A convenient post-workout snack."
  }
];

export default function Market() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Products");
  const [sort, setSort] = useState("default");

  const categories = [
    "All Products",
    "Supplements",
    "Training Gear",
    "Accessories",
    "Nutrition"
  ];

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All Products" ||
        product.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return 0;
    });

  return (
    <div className="market-page">
      <section className="market-hero">
        <p className="market-label">FITFORGE MARKET</p>

        <h1>
          Fuel Your <span>Fitness Journey.</span>
        </h1>

        <p>
          Discover fitness essentials, supplements,
          training gear and accessories.
        </p>

        <a href="#market-products" className="primary-btn">
          Shop Now
        </a>
      </section>

      <section className="market-container" id="market-products">
        <aside className="market-sidebar">
          <h2>Categories</h2>

          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item ? "active-category" : ""
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </aside>

        <div className="market-main">
          <div className="market-toolbar">
            <div>
              <h2>Featured Products</h2>
              <p>{filteredProducts.length} products found</p>
            </div>

            <div className="market-controls">
              <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
              >
                <option value="default">Featured</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="market-grid">
            {filteredProducts.map((product) => (
              <div className="market-card" key={product.id}>
                <div className="market-product-image">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />
                </div>

                <div className="market-card-content">
                  <p className="market-product-category">
                    {product.category}
                  </p>

                  <h3>{product.name}</h3>
                  <p>{product.description}</p>

                  <div className="market-card-bottom">
                    <strong>${product.price.toFixed(2)}</strong>

                    <button
                      onClick={() =>
                        alert("Shopping cart coming next!")
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <p className="market-empty">
              No products found. Try another search.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
