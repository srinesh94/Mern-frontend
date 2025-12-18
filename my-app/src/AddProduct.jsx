import React, { useState } from 'react';

function AddProduct() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
    category: ''
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const categories = [
    'Laptops & Desktops',
    'Mobiles & Tablets',
    'Audio & Headphones',
    'Smart Wearables',
    'Cameras & Accessories',
    'Computing Accessories'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validation
    if (!formData.name || !formData.price || !formData.description) {
      setMessage('❌ Please fill in all required fields');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/postProduct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          description: formData.description,
          price: Number(formData.price),
          stock: Number(formData.stock) || 0,
          category: formData.category
        })
      });

      if (response.ok) {
        const result = await response.json();
        setMessage('✅ Product added successfully!');
        setFormData({
          name: '',
          description: '',
          price: '',
          stock: '',
          category: ''
        });
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('❌ Failed to add product. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('❌ Error connecting to server. Make sure backend is running on port 5000.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="add-product-container">
      <div className="add-product-wrapper">
        <h1>➕ Add New Product</h1>
        <p className="subtitle">Add a new electronics product to your inventory</p>

        {message && (
          <div className={`message ${message.includes('✅') ? 'success' : 'error'}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="add-product-form">
          <div className="form-group">
            <label>Product Name *</label>
            <input
              type="text"
              name="name"
              placeholder="e.g., Gaming Laptop Pro"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Price (₹) *</label>
            <input
              type="number"
              name="price"
              placeholder="e.g., 55000"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Stock Quantity</label>
              <input
                type="number"
                name="stock"
                placeholder="e.g., 10"
                value={formData.stock}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Description *</label>
            <textarea
              name="description"
              placeholder="Describe the product features and specifications..."
              value={formData.description}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? '⏳ Adding Product...' : '✅ Add Product'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
