import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import { plants, categories, money } from './plants';
import { ArrowUpRight, Check, ShoppingBag, Search } from 'lucide-react';

export default function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [category, setCategory] = useState('All Plants');
  const [query, setQuery] = useState('');
  const filteredPlants = plants.filter(plant =>
    (category === 'All Plants' || plant.category === category) &&
    `${plant.name} ${plant.description}`.toLowerCase().includes(query.toLowerCase())
  );
  const visibleCategories = categories.filter(name => name !== 'All Plants' && filteredPlants.some(plant => plant.category === name));
  const handleAddToCart = plant => {
    if (cartItems.some(item => item.id === plant.id)) return;
    dispatch(addItem(plant));
  };
  return (
    <main className="shop-page page-shell">
      <div className="shop-intro"><div><div className="section-eyebrow">CURATED FOR YOUR SPACE</div>
        <h1>Our <em>Houseplants</em></h1><p>Find a perfect plant for your home.</p></div>
        <button className="shop-cart-link" onClick={() => onNavigate('cart')}>Shopping Cart <ShoppingBag size={18}/><ArrowUpRight size={18}/></button>
      </div>
      <div className="catalog-tools"><div className="category-tabs" aria-label="Plant categories">
        {categories.map(name => <button key={name} className={category === name ? 'tab active' : 'tab'} aria-pressed={category === name} onClick={() => setCategory(name)}>{name}</button>)}
      </div><label className="searchbox"><Search size={17}/><input aria-label="Search plants" placeholder="Search plants..." value={query} onChange={e => setQuery(e.target.value)}/></label></div>
      <p className="results-label">SHOWING {filteredPlants.length} PLANTS</p>
      {filteredPlants.length === 0 && <div className="empty-state"><h2>No plants found</h2><button className="primary-btn" onClick={() => { setCategory('All Plants'); setQuery(''); }}>Show all plants</button></div>}
      {visibleCategories.map(name => <section className="plant-category-section" key={name}>
        <h2 className="category-heading">{name}</h2>
        <div className="plant-grid">{filteredPlants.filter(plant => plant.category === name).map(plant => {
          const isAdded = cartItems.some(item => item.id === plant.id);
          return <article key={plant.id} className="plant-card">
            <div className="plant-photo-wrap"><img src={plant.image} alt={plant.name} loading="lazy"/>{plant.tag && <span className="plant-tag">{plant.tag}</span>}</div>
            <div className="plant-info"><div className="plant-category">{plant.category} · {plant.light}</div>
              <div className="plant-title-row"><h3>{plant.name}</h3><strong>{money(plant.price)}</strong></div>
              <p>{plant.description}</p>
              <button className={isAdded ? 'add-btn just-added' : 'add-btn'} disabled={isAdded} onClick={() => handleAddToCart(plant)}>
                <span>{isAdded ? 'Added to Cart' : 'Add to Cart'}</span>{isAdded ? <Check size={18}/> : <ShoppingBag size={18}/>}
              </button>
            </div></article>;
        })}</div>
      </section>)}
    </main>
  );
}
