import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import { plants, categories, money } from './plants';
import { ArrowUpRight, Check, ShoppingBag, Search } from 'lucide-react';

export default function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [category, setCategory] = useState('All Plants');
  const [query, setQuery] = useState('');
  const [recentlyAdded, setRecentlyAdded] = useState(null);
  const visible = useMemo(() => plants.filter((plant) => (category === 'All Plants' || plant.category === category) && `${plant.name} ${plant.description}`.toLowerCase().includes(query.toLowerCase())), [category, query]);

  const add = (plant) => {
    dispatch(addItem(plant));
    setRecentlyAdded(plant.id);
  };

  return (
    <main className="shop-page page-shell">
      <div className="shop-intro"><div><div className="section-eyebrow"><LeafMark /> CURATED FOR YOUR SPACE</div><h1>Find your <em>green thing.</em></h1><p>Beautiful plants, happier spaces. Pick your perfect leafy companion.</p></div><button className="shop-cart-link" onClick={() => onNavigate('cart')}>View your bag <ShoppingBag size={18}/><ArrowUpRight size={18}/></button></div>
      <div className="catalog-tools"><div className="category-tabs" aria-label="Filter plants by category">{categories.map((name) => <button key={name} aria-pressed={category === name} className={category === name ? 'tab active' : 'tab'} onClick={() => setCategory(name)}>{name}</button>)}</div><label className="searchbox"><Search size={17} aria-hidden="true"/><input aria-label="Search plants" value={query} placeholder="Search plants..." onChange={(e) => setQuery(e.target.value)}/></label></div>
      <p className="results-label">SHOWING {visible.length} PLANTS</p>
      {visible.length === 0 ? <div className="empty-state"><h2>No plants found</h2><p>Try another search or category.</p><button className="primary-btn" onClick={() => {setQuery(''); setCategory('All Plants');}}>Show all plants</button></div> : <div className="plant-grid">{visible.map((plant) => {const inCart = cartItems.find((item) => item.id === plant.id);return <article className="plant-card" key={plant.id}><div className="plant-photo-wrap"><img src={plant.image} alt={`${plant.name} potted plant`} loading="lazy"/>{plant.tag && <span className="plant-tag">{plant.tag}</span>}</div><div className="plant-info"><div className="plant-category">{plant.category} · {plant.light}</div><div className="plant-title-row"><h2>{plant.name}</h2><strong>{money(plant.price)}</strong></div><p>{plant.description}</p><button className={recentlyAdded === plant.id ? 'add-btn just-added' : 'add-btn'} onClick={() => add(plant)}><span>{recentlyAdded === plant.id ? 'Added to bag' : 'Add to bag'}{inCart && <small> · {inCart.quantity} in bag</small>}</span>{recentlyAdded === plant.id ? <Check size={18}/> : <ShoppingBag size={18}/>}</button></div></article>;})}</div>}
    </main>
  );
}
function LeafMark() { return <span className="tiny-spark">✳</span>; }
