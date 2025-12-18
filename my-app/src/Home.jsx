import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-content1">
      {/* Hero Section */}
      <div className="home-content2">
        <h1>🛍️ Srinesh Electronics</h1>
        <p>Discover Premium Electronics at Unbeatable Prices</p>
        <p>Your trusted destination for laptops, smartphones, headphones, smart gadgets & more.</p>
        <p>⚡ Exclusive Deals Live Now!</p>
        <p>Get Up to 50% OFF + Free Shipping on First Order!</p>
        <Link to="/products">
          <button className="shop-btn">Shop Now</button>
        </Link>
      </div>

      {/* Why Choose Us */}
      <div className="features-card">
        <p>✅ 100% Authentic Products</p>
        <p>🚀 Fast 24-48 Hour Delivery</p>
        <p>↩️ Easy 30-Day Returns</p>
        <p>💬 24/7 Expert Support</p>
      </div>

      {/* Categories Section */}
      <div className="categories-card">
        <h1>Shop by Category</h1>
        <p>💻 Laptops & Desktops</p>
        <p>📱 Mobiles & Tablets</p>
        <p>🎧 Audio & Headphones</p>
        <p>⌚ Smart Wearables</p>
        <p>📷 Cameras & Accessories</p>
        <p>🖱️ Computing Accessories</p>
      </div>

      {/* Trending Offers */}
      <div className="offers-card">
        <h1>🔥 Trending This Week</h1>
        <p>🎮 Gaming Laptops - Starting ₹45,999</p>
        <p>📲 Latest Smartphones - From ₹15,999</p>
        <p>🎵 Premium Earbuds - Under ₹2,999</p>
        <p>⌚ Smart Watches - From ₹3,499</p>
        <p>📺 HD Monitors - Up to 40% OFF</p>
        <p>🔌 Power Banks - Extra 20% OFF</p>
      </div>

      {/* Footer */}
      <footer>
        <p>© 2025 Srinesh Electronics — Your Tech Paradise. | Free Shipping on Orders Above ₹500</p>
      </footer>
    </div>
  );
}

export default Home;
