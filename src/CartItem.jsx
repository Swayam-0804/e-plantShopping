import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity, clearCart } from './CartSlice';
import { money } from './plants';
import { Navbar } from './ProductList';

export default function CartItem({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCartAmount = cartItems.reduce((sum, item) => sum + item.cost * item.quantity, 0);

  const handleIncrement = item => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  const handleDecrement = item => {
    if (item.quantity <= 1) dispatch(removeItem(item.name));
    else dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
  };
  const handleRemove = item => dispatch(removeItem(item.name));
  const handleContinueShopping = e => { e.preventDefault(); onNavigate('shop'); };
  const handleCheckout = () => window.alert('Coming Soon! Checkout is not available yet.');

  return (
    <main className="cart-page page-shell">
      <Navbar onNavigate={onNavigate} />
      <div className="cart-title-bar">
        <div><div className="section-eyebrow">PARADISE NURSERY</div><h1>Your <em>Shopping Cart</em></h1><p>{totalItems} plants in your cart</p></div>
        <button className="get-started-button text-link" onClick={handleContinueShopping}>Continue Shopping</button>
      </div>
      <div className="cart-layout">
        <section className="cart-container cart-list" aria-label="Shopping Cart items">
          {cartItems.length === 0 && <p>Your cart is empty. Select Continue Shopping to choose plants.</p>}
          {cartItems.map(item => (
            <article key={item.name} className="cart-row cart-item">
              <img src={item.image} alt={item.name}/>
              <div className="cart-row-main">
                <h2>{item.name}</h2>
                <p>Unit Price: {money(item.cost)}</p>
                <p>Quantity: {item.quantity}</p>
                <strong>Total: {money(item.cost * item.quantity)}</strong>
                <button className="cart-item-delete remove-link" onClick={() => handleRemove(item)}>Delete</button>
              </div>
              <div className="cart-row-actions">
                <div className="quantity-control">
                  <button aria-label={`Decrease ${item.name}`} onClick={() => handleDecrement(item)}>-</button>
                  <span>{item.quantity}</span>
                  <button aria-label={`Increase ${item.name}`} onClick={() => handleIncrement(item)}>+</button>
                </div>
              </div>
            </article>
          ))}
        </section>
        <aside className="order-summary">
          <h2>Order Summary</h2>
          <p>Total Cart Items: {totalItems}</p>
          <div className="summary-total"><strong>Total Cart Amount:</strong><strong>{money(totalCartAmount)}</strong></div>
          <button className="primary-btn checkout-btn" onClick={handleCheckout}>Checkout</button>
          <button className="get-started-button outline-btn" onClick={handleContinueShopping}>Continue Shopping</button>
          {cartItems.length > 0 && <button className="clear-link" onClick={() => dispatch(clearCart())}>Clear Cart</button>}
        </aside>
      </div>
    </main>
  );
}
