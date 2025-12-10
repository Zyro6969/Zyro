import { FoodItem } from './types';

export const MENU_ITEMS: FoodItem[] = [
  {
    id: '1',
    name: 'Zyro Truffle Burger',
    description: 'Angus beef patty with black truffle mayo, swiss cheese, and caramelized onions on a brioche bun.',
    price: 18.50,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    calories: 850,
    macros: { protein: 45, carbs: 50, fat: 40 }
  },
  {
    id: '2',
    name: 'Spicy Tuna Volcanos',
    description: 'Crispy rice cakes topped with spicy tuna tartare, jalapeño, and eel sauce.',
    price: 14.00,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
    calories: 420,
    macros: { protein: 25, carbs: 35, fat: 15 }
  },
  {
    id: '3',
    name: 'Miso Glazed Salmon',
    description: 'Sustainably sourced salmon fillet with a sweet miso glaze, served over quinoa and steamed bok choy.',
    price: 24.00,
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a7270028d?auto=format&fit=crop&w=800&q=80',
    calories: 600,
    macros: { protein: 40, carbs: 45, fat: 22 }
  },
  {
    id: '4',
    name: 'Green Goddess Bowl',
    description: 'Kale, avocado, edamame, cucumber, pumpkin seeds, and green tahini dressing.',
    price: 16.50,
    category: 'Salads',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    calories: 380,
    macros: { protein: 12, carbs: 28, fat: 24 }
  },
  {
    id: '5',
    name: 'Margherita DOC',
    description: 'San Marzano tomato sauce, buffalo mozzarella, fresh basil, and extra virgin olive oil.',
    price: 19.00,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    calories: 700,
    macros: { protein: 25, carbs: 80, fat: 28 }
  },
  {
    id: '6',
    name: 'Wagyu Beef Tacos',
    description: 'Three soft corn tacos filled with tender wagyu beef, pickled onions, and cilantro lime crema.',
    price: 22.00,
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=800&q=80',
    calories: 550,
    macros: { protein: 35, carbs: 40, fat: 30 }
  },
  {
    id: '7',
    name: 'Triple Chocolate Lava Cake',
    description: 'Warm chocolate cake with a molten center, served with vanilla bean ice cream.',
    price: 12.00,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80',
    calories: 650,
    macros: { protein: 8, carbs: 75, fat: 35 }
  },
  {
    id: '8',
    name: 'Dragon Fruit Smoothie Bowl',
    description: 'Blended dragon fruit topped with granola, banana, and chia seeds.',
    price: 13.50,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1525385444278-b7968e7e28dc?auto=format&fit=crop&w=800&q=80',
    calories: 350,
    macros: { protein: 6, carbs: 65, fat: 8 }
  },
  {
    id: '9',
    name: 'Double Bacon Cheeseburger',
    description: 'Two smashed patties, crispy bacon, american cheese, pickles, and secret sauce.',
    price: 20.00,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80',
    calories: 950,
    macros: { protein: 55, carbs: 45, fat: 60 }
  },
  {
    id: '10',
    name: 'Hot Honey Pepperoni Pizza',
    description: 'Spicy pepperoni cups, mozzarella, fresh chili, and a drizzle of hot honey.',
    price: 21.00,
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
    calories: 780,
    macros: { protein: 30, carbs: 85, fat: 32 }
  },
  {
    id: '11',
    name: 'Crispy Golden Calamari',
    description: 'Lightly fried squid rings served with lemon aioli and marinara sauce.',
    price: 15.00,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=800&q=80',
    calories: 450,
    macros: { protein: 15, carbs: 40, fat: 25 }
  },
  {
    id: '12',
    name: 'Classic Caesar Salad',
    description: 'Crisp romaine hearts, shaved parmesan, garlic croutons, and house-made caesar dressing.',
    price: 14.50,
    category: 'Salads',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80',
    calories: 320,
    macros: { protein: 12, carbs: 15, fat: 22 }
  },
  {
    id: '13',
    name: 'Fluffy Buttermilk Pancakes',
    description: 'Stack of three fluffy pancakes topped with butter, maple syrup, and fresh berries.',
    price: 14.00,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
    calories: 550,
    macros: { protein: 10, carbs: 90, fat: 18 }
  },
  {
    id: '14',
    name: 'New York Cheesecake',
    description: 'Classic creamy cheesecake with a graham cracker crust and strawberry compote.',
    price: 11.00,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&w=800&q=80',
    calories: 480,
    macros: { protein: 8, carbs: 45, fat: 30 }
  },
  {
    id: '15',
    name: 'Chicken Pad Thai',
    description: 'Rice noodles stir-fried with chicken, egg, peanuts, bean sprouts, and tamarind sauce.',
    price: 18.00,
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=800&q=80',
    calories: 650,
    macros: { protein: 25, carbs: 80, fat: 22 }
  },
  {
    id: '16',
    name: 'Buffalo Chicken Wings',
    description: 'Crispy wings tossed in spicy buffalo sauce, served with carrots, celery, and blue cheese dip.',
    price: 16.00,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
    calories: 550,
    macros: { protein: 35, carbs: 5, fat: 40 }
  },
  {
    id: '17',
    name: 'Avocado Toast Supreme',
    description: 'Sourdough toast topped with smashed avocado, poached egg, chili flakes, and microgreens.',
    price: 15.50,
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1588137372308-15f75323ca8d?auto=format&fit=crop&w=800&q=80',
    calories: 420,
    macros: { protein: 12, carbs: 45, fat: 25 }
  },
  {
    id: '18',
    name: 'Grilled Ribeye Steak',
    description: '12oz ribeye steak grilled to perfection, served with garlic mashed potatoes and asparagus.',
    price: 34.00,
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80',
    calories: 950,
    macros: { protein: 65, carbs: 35, fat: 70 }
  },
  {
    id: '19',
    name: 'Italian Tiramisu',
    description: 'Layers of espresso-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.',
    price: 12.50,
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?auto=format&fit=crop&w=800&q=80',
    calories: 450,
    macros: { protein: 6, carbs: 40, fat: 28 }
  },
  {
    id: '20',
    name: 'Truffle Mushroom Risotto',
    description: 'Creamy arborio rice cooked with wild mushrooms, parmesan cheese, and white truffle oil.',
    price: 22.00,
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=800&q=80',
    calories: 600,
    macros: { protein: 12, carbs: 75, fat: 25 }
  }
];

export const CATEGORIES = ['All', 'Burgers', 'Pizza', 'Mains', 'Salads', 'Appetizers', 'Desserts', 'Breakfast'];