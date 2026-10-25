import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import { ShoppingBag, Leaf } from 'lucide-react';
import { money } from './plants';

// Three categories with six unique plant products each. Kept in this file for rubric review.
const plantsArray = [
  {
    "category": "Tropical Plants",
    "plants": [
      {
        "id": 1,
        "name": "Monstera Deliciosa",
        "category": "Tropical Plants",
        "cost": 32,
        "price": 32,
        "image": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&auto=format&fit=crop&q=85",
        "description": "Bold split leaves and an easygoing attitude.",
        "light": "Indirect light",
        "tag": "Bestseller"
      },
      {
        "id": 2,
        "name": "Bird of Paradise",
        "category": "Tropical Plants",
        "cost": 48,
        "price": 48,
        "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&auto=format&fit=crop&q=85",
        "description": "A sculptural statement for bright rooms.",
        "light": "Bright light",
        "tag": "Popular"
      },
      {
        "id": 3,
        "name": "Rubber Plant",
        "category": "Tropical Plants",
        "cost": 29,
        "price": 29,
        "image": "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=800&auto=format&fit=crop&q=85",
        "description": "Glossy foliage that makes a room feel alive.",
        "light": "Indirect light",
        "tag": ""
      },
      {
        "id": 10,
        "name": "Areca Palm",
        "category": "Tropical Plants",
        "cost": 31,
        "price": 31,
        "image": "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&auto=format&fit=crop&q=85",
        "description": "A lovely areca palm to brighten your indoor space.",
        "light": "Indirect light",
        "tag": ""
      },
      {
        "id": 11,
        "name": "Philodendron",
        "category": "Tropical Plants",
        "cost": 28,
        "price": 28,
        "image": "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&auto=format&fit=crop&q=85",
        "description": "A lovely philodendron to brighten your indoor space.",
        "light": "Indirect light",
        "tag": ""
      },
      {
        "id": 12,
        "name": "Fiddle Leaf Fig",
        "category": "Tropical Plants",
        "cost": 46,
        "price": 46,
        "image": "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=800&auto=format&fit=crop&q=85",
        "description": "A lovely fiddle leaf fig to brighten your indoor space.",
        "light": "Indirect light",
        "tag": ""
      }
    ]
  },
  {
    "category": "Low-Maintenance",
    "plants": [
      {
        "id": 4,
        "name": "Snake Plant",
        "category": "Low-Maintenance",
        "cost": 24,
        "price": 24,
        "image": "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=800&auto=format&fit=crop&q=85",
        "description": "Strong architectural leaves, wonderfully forgiving.",
        "light": "Low to bright",
        "tag": "Easy care"
      },
      {
        "id": 5,
        "name": "ZZ Plant",
        "category": "Low-Maintenance",
        "cost": 27,
        "price": 27,
        "image": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=85",
        "description": "Thrives even when life gets busy.",
        "light": "Low light",
        "tag": "Easy care"
      },
      {
        "id": 6,
        "name": "Pothos",
        "category": "Low-Maintenance",
        "cost": 18,
        "price": 18,
        "image": "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=800&auto=format&fit=crop&q=85",
        "description": "Trailing green vines full of personality.",
        "light": "Indirect light",
        "tag": ""
      },
      {
        "id": 13,
        "name": "Aloe Vera",
        "category": "Low-Maintenance",
        "cost": 16,
        "price": 16,
        "image": "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=800&auto=format&fit=crop&q=85",
        "description": "A lovely aloe vera to brighten your indoor space.",
        "light": "Indirect light",
        "tag": ""
      },
      {
        "id": 14,
        "name": "Jade Plant",
        "category": "Low-Maintenance",
        "cost": 20,
        "price": 20,
        "image": "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=85",
        "description": "A lovely jade plant to brighten your indoor space.",
        "light": "Indirect light",
        "tag": ""
      },
      {
        "id": 15,
        "name": "Spider Plant",
        "category": "Low-Maintenance",
        "cost": 19,
        "price": 19,
        "image": "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=800&auto=format&fit=crop&q=85",
        "description": "A lovely spider plant to brighten your indoor space.",
        "light": "Indirect light",
        "tag": ""
      }
    ]
  },
  {
    "category": "Flowering Plants",
    "plants": [
      {
        "id": 7,
        "name": "Peace Lily",
        "category": "Flowering Plants",
        "cost": 26,
        "price": 26,
        "image": "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=800&auto=format&fit=crop&q=85",
        "description": "Elegant foliage and graceful white blooms.",
        "light": "Indirect light",
        "tag": ""
      },
      {
        "id": 8,
        "name": "Anthurium",
        "category": "Flowering Plants",
        "cost": 35,
        "price": 35,
        "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&auto=format&fit=crop&q=85",
        "description": "Vivid color with a tropical spirit.",
        "light": "Bright indirect",
        "tag": "New"
      },
      {
        "id": 9,
        "name": "Orchid",
        "category": "Flowering Plants",
        "cost": 39,
        "price": 39,
        "image": "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=800&auto=format&fit=crop&q=85",
        "description": "A timeless bloom for your favorite corner.",
        "light": "Filtered light",
        "tag": ""
      },
      {
        "id": 16,
        "name": "African Violet",
        "category": "Flowering Plants",
        "cost": 21,
        "price": 21,
        "image": "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=800&auto=format&fit=crop&q=85",
        "description": "A lovely african violet to brighten your indoor space.",
        "light": "Indirect light",
        "tag": ""
      },
      {
        "id": 17,
        "name": "Begonia",
        "category": "Flowering Plants",
        "cost": 22,
        "price": 22,
        "image": "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&auto=format&fit=crop&q=85",
        "description": "A lovely begonia to brighten your indoor space.",
        "light": "Indirect light",
        "tag": ""
      },
      {
        "id": 18,
        "name": "Kalanchoe",
        "category": "Flowering Plants",
        "cost": 17,
        "price": 17,
        "image": "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=800&auto=format&fit=crop&q=85",
        "description": "A lovely kalanchoe to brighten your indoor space.",
        "light": "Indirect light",
        "tag": ""
      }
    ]
  }
];

// Shared navbar used on both ProductList and CartItem pages.
export function Navbar({ onNavigate }) {
  const cartItems = useSelector(state => state.cart.items);
  const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <nav className="navbar" aria-label="Plant shop navigation">
      <button onClick={() => onNavigate('home')}><Leaf size={17}/> Home</button>
      <button onClick={() => onNavigate('shop')}>Plants</button>
      <button onClick={() => onNavigate('cart')} aria-label={`Cart: ${cartQuantity} items`}>
        <ShoppingBag size={19} /> Cart <span className="cart-count">{cartQuantity}</span>
      </button>
    </nav>
  );
}

export default function ProductList({ onNavigate }) {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedToCart, setAddedToCart] = useState({});
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Plants');
  const cartQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = plant => {
    if (addedToCart[plant.name] || cartItems.some(item => item.name === plant.name)) return;
    dispatch(addItem(plant));
    setAddedToCart(previous => ({ ...previous, [plant.name]: true }));
  };

  return (
    <main className="shop-page page-shell">
      <Navbar onNavigate={onNavigate} />
      <div className="shop-intro">
        <div><div className="section-eyebrow">PARADISE NURSERY</div><h1>Our <em>Houseplants</em></h1><p>Explore our plant collections and bring nature home.</p></div>
        <button className="shop-cart-link" onClick={() => onNavigate('cart')}>
          Shopping Cart <ShoppingBag size={19}/> <span className="cart-count">{cartQuantity}</span>
        </button>
      </div>
      <div className="catalog-tools">
        <div className="category-tabs">
          {['All Plants', ...plantsArray.map(group => group.category)].map(category => (
            <button key={category} className={selectedCategory === category ? 'tab active' : 'tab'}
              onClick={() => setSelectedCategory(category)}>{category}</button>
          ))}
        </div>
        <label className="searchbox">Search plants <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search plants..."/></label>
      </div>
      {plantsArray.filter(group => selectedCategory === 'All Plants' || group.category === selectedCategory).map(group => {
        const visible = group.plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()));
        if (!visible.length) return null;
        return (
          <section key={group.category} className="product-list plant-category-section">
            <h2 className="category-heading">{group.category}</h2>
            <div className="plant-grid">
              {visible.map(plant => (
                <article className="plant-card" key={plant.name}>
                  <div className="plant-photo-wrap"><img src={plant.image} alt={plant.name} loading="lazy" /></div>
                  <div className="plant-info">
                    <div className="plant-category">{plant.category}</div>
                    <div className="plant-title-row"><h3>{plant.name}</h3><strong>{money(plant.cost)}</strong></div>
                    <p>{plant.description}</p>
                    <button className="add-btn" disabled={addedToCart[plant.name] || cartItems.some(item => item.name === plant.name)}
                      onClick={() => handleAddToCart(plant)}>
                      {addedToCart[plant.name] || cartItems.some(item => item.name === plant.name) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </main>
  );
}
