
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  calories: number;
  image: string;
  category: 'Burgers' | 'Fried Chicken' | 'Sides' | 'Combos';
  tags: string[];
}

export interface NavLink {
  label: string;
  href: string;
}
