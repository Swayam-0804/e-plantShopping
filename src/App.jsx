import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ArrowRight, Leaf, Menu, ShoppingBag, X } from 'lucide-react';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = useSelector((state) => state.cart.items.reduce((total, item) => total + item.quantity, 0));
  const navigate = (nextPage) => { setPage(nextPage); setMenuOpen(false); window.scrollTo({top: 0, behavior: 'smooth'}); };
  return <div className="app"><header className="site-header"><button className="brand" onClick={() => navigate('home')} aria-label="Paradise Nursery home"><span className="brand-icon"><Leaf size={24}/></span><span>paradise<span className="brand-accent">.</span><small>NURSERY</small></span></button><nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation"><button className={page === 'home' ? 'nav-active' : ''} onClick={() => navigate('home')}>Home</button><button className={page === 'shop' ? 'nav-active' : ''} onClick={() => navigate('shop')}>Shop plants</button><button className={page === 'about' ? 'nav-active' : ''} onClick={() => navigate('about')}>Our story</button></nav><div className="header-actions"><button className="header-cart" aria-label={`Shopping bag, ${cartCount} items`} onClick={() => navigate('cart')}><ShoppingBag size={22}/><span className="cart-count">{cartCount}</span></button><button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? <X/> : <Menu/>}</button></div></header>
  {page === 'home' && <main><section className="hero"><div className="hero-overlay"/><div className="hero-content"><div className="hero-eyebrow"><span className="hero-eyebrow-line"/> WELCOME TO PARADISE NURSERY</div><h1>Welcome to <em>Paradise Nursery.</em></h1><p>Paradise Nursery is your one-stop shop for beautiful indoor plants. We help you bring nature into your home with carefully selected houseplants for every space.</p><button className="hero-cta" onClick={() => navigate('shop')}>Get Started <ArrowRight size={19}/></button><div className="hero-footer"><span><Leaf size={17}/> Rooted in nature</span><span>Made for your space</span></div></div><div className="hero-side-label">GROW SOMETHING BEAUTIFUL &nbsp; / &nbsp; EST. 2026</div></section><section className="home-feature"><div><span className="section-eyebrow">THE PLANT EDIT</span><h2>Good things <em>grow here.</em></h2><p>From easygoing first plants to lush statement pieces, discover the perfect addition to your space.</p></div><button className="outline-btn" onClick={() => navigate('shop')}>Explore the collection <ArrowRight size={18}/></button></section></main>}
  {page === 'shop' && <ProductList onNavigate={navigate}/>}
  {page === 'about' && <AboutUs/>}
  {page === 'cart' && <CartItem onNavigate={navigate}/>}
  <footer className="site-footer"><span>paradise<span className="brand-accent">.</span> nursery</span><small>Grow a little joy, every day. © 2026 Paradise Nursery</small><button onClick={() => navigate('about')}>Our story <ArrowRight size={15}/></button></footer></div>;
}
