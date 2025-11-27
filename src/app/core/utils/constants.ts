import { Iproducts } from "../interfaces/iproducts";

export const MOCK_PRODUCTS: Iproducts[] = [
  {
    id: 1,
    name: 'Laptop',
    price: 999.99,
    category: 'Electronics',
    description: 'High-performance laptop',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=150&h=150&fit=crop',
    inStock: true
  },
  {
    id: 2,
    name: 'Smartphone',
    price: 599.99,
    category: 'Electronics',
    description: 'Latest smartphone model',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=150&h=150&fit=crop',
    inStock: true
  },
  {
    id: 3,
    name: 'Headphones',
    price: 149.99,
    category: 'Audio',
    description: 'Noise-cancelling headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&h=150&fit=crop',
    inStock: false
  },
  {
    id: 4,
    name: 'Tablet',
    price: 399.99,
    category: 'Electronics',
    description: 'Portable tablet device',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=150&h=150&fit=crop',
    inStock: true
  },
  {
    id: 5,
    name: 'Smart Watch',
    price: 199.99,
    category: 'Electronics',
    description: 'Fitness and health tracker',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&h=150&fit=crop',
    inStock: true
  },
  {
    id: 6,
    name: 'Camera',
    price: 799.99,
    category: 'Electronics',
    description: 'Digital camera',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=150&h=150&fit=crop',
    inStock: true
  },
  {
    id: 7,
    name: 'Bluetooth Speaker',
    price: 89.99,
    category: 'Audio',
    description: 'Portable Bluetooth speaker',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=150&h=150&fit=crop',
    inStock: true
  },
  {
    id: 8,
    name: 'Gaming Console',
    price: 499.99,
    category: 'Electronics',
    description: 'Next-gen gaming console',
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=150&h=150&fit=crop',
    inStock: false
  },
  {
    id: 9,
    name: 'Monitor',
    price: 299.99,
    category: 'Electronics',
    description: '27-inch display monitor',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=150&h=150&fit=crop',
    inStock: true
  },
  {
    id: 10,
    name: 'Mechanical Keyboard',
    price: 79.99,
    category: 'Electronics',
    description: 'RGB mechanical keyboard',
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=150&h=150&fit=crop',
    inStock: true
  },
  {
    id: 11,
    name: 'Wireless Mouse',
    price: 49.99,
    category: 'Electronics',
    description: 'Ergonomic wireless mouse',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=150&h=150&fit=crop',
    inStock: true
  },
  {
    id: 12,
    name: 'Printer',
    price: 199.99,
    category: 'Electronics',
    description: 'Color laser printer',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=150&h=150&fit=crop',
    inStock: true
  },
  {
    id: 13,
    name: 'T-Shirt',
    price: 19.99,
    category: 'Clothing',
    description: 'Cotton t-shirt',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=150&h=150&fit=crop',
    inStock: true
  },
  {
    id: 14,
    name: 'Jeans',
    price: 49.99,
    category: 'Clothing',
    description: 'Denim jeans',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=150&h=150&fit=crop',
    inStock: true
  },
  {
    id: 15,
    name: 'Programming Book',
    price: 39.99,
    category: 'Books',
    description: 'Learn Angular programming',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=150&h=150&fit=crop',
    inStock: true
  }
];

export const CATEGORIES = ['All', 'Electronics', 'Audio', 'Clothing', 'Books'];
