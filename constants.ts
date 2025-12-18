
import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Broz Classic Burger',
    description: 'Juicy chicken patty, secret broz sauce, lettuce, and premium brioche.',
    price: 8.99,
    calories: 650,
    image: 'https://picsum.photos/seed/burger1/600/400',
    category: 'Burgers',
    tags: ['Bestseller', 'Spicy']
  },
  {
    id: '2',
    name: 'Monster Drumsticks (3pcs)',
    description: 'Extra crispy signature coating with a blend of 12 street spices.',
    price: 12.50,
    calories: 820,
    image: 'https://picsum.photos/seed/chicken1/600/400',
    category: 'Fried Chicken',
    tags: ['Crispy', 'Large']
  },
  {
    id: '3',
    name: 'Fire-Wing Basket',
    description: '8 wings tossed in our signature Nashville-style hot glaze.',
    price: 10.99,
    calories: 580,
    image: 'https://picsum.photos/seed/wings1/600/400',
    category: 'Fried Chicken',
    tags: ['Very Spicy']
  },
  {
    id: '4',
    name: 'Broz Loaded Fries',
    description: 'Golden fries topped with chopped chicken, cheese sauce, and jalapeños.',
    price: 6.50,
    calories: 450,
    image: 'https://picsum.photos/seed/fries1/600/400',
    category: 'Sides',
    tags: ['Cheesy']
  },
  {
    id: '5',
    name: 'Double Broz Combo',
    description: '2 Burgers, 1 Large Fries, and 2 Sodas. Perfect for two.',
    price: 22.00,
    calories: 1450,
    image: 'https://picsum.photos/seed/combo1/600/400',
    category: 'Combos',
    tags: ['Value']
  },
  {
    id: '6',
    name: 'Popcorn Chicken Bucket',
    description: 'Bite-sized chicken nuggets with a smoky garlic dip.',
    price: 7.99,
    calories: 390,
    image: 'https://picsum.photos/seed/popcorn/600/400',
    category: 'Sides',
    tags: ['Snack']
  }
];

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' }
];
