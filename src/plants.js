// Remote Unsplash photographs. The app requires internet access to display them.
export const plants = [
  { id: 1, name: 'Monstera Deliciosa', category: 'Tropical Plants', price: 32, image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&auto=format&fit=crop&q=85', description: 'Bold split leaves and an easygoing attitude.', light: 'Indirect light', tag: 'Bestseller' },
  { id: 2, name: 'Bird of Paradise', category: 'Tropical Plants', price: 48, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&auto=format&fit=crop&q=85', description: 'A sculptural statement for bright rooms.', light: 'Bright light', tag: 'Popular' },
  { id: 3, name: 'Rubber Plant', category: 'Tropical Plants', price: 29, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=800&auto=format&fit=crop&q=85', description: 'Glossy foliage that makes a room feel alive.', light: 'Indirect light', tag: '' },
  { id: 4, name: 'Snake Plant', category: 'Low-Maintenance', price: 24, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=800&auto=format&fit=crop&q=85', description: 'Strong architectural leaves, wonderfully forgiving.', light: 'Low to bright', tag: 'Easy care' },
  { id: 5, name: 'ZZ Plant', category: 'Low-Maintenance', price: 27, image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&auto=format&fit=crop&q=85', description: 'Thrives even when life gets busy.', light: 'Low light', tag: 'Easy care' },
  { id: 6, name: 'Pothos', category: 'Low-Maintenance', price: 18, image: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=800&auto=format&fit=crop&q=85', description: 'Trailing green vines full of personality.', light: 'Indirect light', tag: '' },
  { id: 7, name: 'Peace Lily', category: 'Flowering Plants', price: 26, image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?w=800&auto=format&fit=crop&q=85', description: 'Elegant foliage and graceful white blooms.', light: 'Indirect light', tag: '' },
  { id: 8, name: 'Anthurium', category: 'Flowering Plants', price: 35, image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&auto=format&fit=crop&q=85', description: 'Vivid color with a tropical spirit.', light: 'Bright indirect', tag: 'New' },
  { id: 9, name: 'Orchid', category: 'Flowering Plants', price: 39, image: 'https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=800&auto=format&fit=crop&q=85', description: 'A timeless bloom for your favorite corner.', light: 'Filtered light', tag: '' }
];
export const categories = ['All Plants', 'Tropical Plants', 'Low-Maintenance', 'Flowering Plants'];
export const money = (value) => `$${Number(value).toFixed(2)}`;
