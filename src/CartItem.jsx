import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity, clearCart } from './CartSlice';
import { money } from './plants';
import { ArrowLeft, ArrowRight, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';

export default function CartItem({ onNavigate }) {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const handleCheckout = () => window.alert('Coming soon! This is a demo storefront; no payment will be collected.');

  return <main className="cart-page page-shell"><div className="cart-title-bar"><div><div className="section-eyebrow">YOUR LITTLE GREEN CORNER</div><h1>Your <em>Shopping Cart.</em></h1><p>{totalItems} {totalItems === 1 ? 'plant' : 'plants'} waiting to come home.</p></div><button className="text-link" onClick={() => onNavigate('shop')}><ArrowLeft size={17}/> Continue shopping</button></div>
    {items.length === 0 ? <div className="empty-cart"><div className="empty-cart-icon"><ShoppingBag size={36}/></div><h2>Your bag is feeling a little empty.</h2><p>Let’s find some greenery to brighten your space.</p><button className="primary-btn" onClick={() => onNavigate('shop')}>Explore plants <ArrowRight size={17}/></button></div> : <div className="cart-layout"><section className="cart-list" aria-label="Items in your bag"><div className="cart-list-heading"><span>YOUR PLANTS ({totalItems})</span><button className="clear-link" onClick={() => dispatch(clearCart())}>Clear bag</button></div>{items.map((item) => <article key={item.id} className="cart-row"><img src={item.image} alt={item.name}/><div className="cart-row-main"><span className="plant-category">{item.category}</span><h2>{item.name}</h2><p>{money(item.price)} each</p><button className="remove-link" aria-label={`Delete ${item.name}`} onClick={() => dispatch(removeItem(item.id))}><Trash2 size={15}/> Delete</button></div><div className="cart-row-actions"><strong>{money(item.price * item.quantity)}</strong><div className="quantity-control"><button aria-label={`Decrease ${item.name} quantity`}  onClick={() => dispatch(updateQuantity({id: item.id, change: -1}))}><Minus size={14}/></button><span aria-label={`${item.quantity} ${item.name}`}>{item.quantity}</span><button aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({id: item.id, change: 1}))}><Plus size={14}/></button></div></div></article>)}</section><aside className="order-summary"><div className="summary-eyebrow">ALMOST THERE</div><h2>Order summary</h2><div className="summary-line"><span>Subtotal ({totalItems} items)</span><span>{money(subtotal)}</span></div><div className="summary-line"><span>Shipping</span><span className="free-shipping">FREE</span></div><div className="summary-divider"/><div className="summary-total"><strong>Total</strong><strong>{money(subtotal + shipping)}</strong></div><button className="primary-btn checkout-btn" onClick={handleCheckout}>Checkout <ArrowRight size={18}/></button><p className="demo-hint">Demo checkout only. No payments are processed.</p></aside></div>}
  </main>;
}
