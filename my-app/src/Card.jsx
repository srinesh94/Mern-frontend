function Card() {
  return (
    <div style={{
      padding: '60px 40px',
      textAlign: 'center',
      minHeight: '80vh',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
    }}>
      <h1 style={{
        fontSize: '48px',
        color: '#1a1a2e',
        marginBottom: '30px',
        fontWeight: '800'
      }}>🛒 Shopping Cart</h1>
      <p style={{
        fontSize: '20px',
        color: '#666',
        fontWeight: '600'
      }}>Your cart is currently empty</p>
      <p style={{
        fontSize: '18px',
        color: '#999',
        marginTop: '15px'
      }}>Add electronics from our products page to get started!</p>
      <a href="/products" style={{
        display: 'inline-block',
        marginTop: '30px',
        padding: '16px 45px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        fontSize: '18px',
        fontWeight: '700',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        textDecoration: 'none',
        boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)',
        transition: 'all 0.3s ease'
      }}>
        Continue Shopping
      </a>
    </div>
  );
}

export default Card;
