export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'breakfast' | 'lunch' | 'dinner' | 'snacks' | 'combo';
  image: string;
  isPopular?: boolean;
  isVeg: boolean;
  originalPrice?: number;
}

export const menuItems: MenuItem[] = [
  // Breakfast
  {
    id: 'b1',
    name: 'Aloo Paratha',
    description: 'Stuffed flatbread with spiced potato filling, served with butter and yogurt',
    price: 40,
    category: 'breakfast',
    image: '/src/assets/aloo-paratha.jpg',
    isPopular: true,
    isVeg: true,
  },
  {
    id: 'b2',
    name: 'Poha',
    description: 'Flattened rice cooked with spices, peanuts, and fresh herbs',
    price: 30,
    category: 'breakfast',
    image: '/src/assets/poha.jpg',
    isVeg: true,
  },
  {
    id: 'b3',
    name: 'Masala Dosa',
    description: 'Crispy rice crepe filled with spiced potato, served with chutney and sambar',
    price: 50,
    category: 'breakfast',
    image: '/src/assets/masala-dosa.jpg',
    isPopular: true,
    isVeg: true,
  },
  {
    id: 'b4',
    name: 'Club Sandwich',
    description: 'Triple-decker sandwich with chicken, lettuce, tomato, and mayo',
    price: 60,
    category: 'breakfast',
    image: '/src/assets/club-sandwich.jpg',
    isVeg: false,
  },

  // Lunch
  {
    id: 'l1',
    name: 'Chicken Biryani',
    description: 'Aromatic basmati rice cooked with tender chicken and aromatic spices',
    price: 120,
    category: 'lunch',
    image: '/src/assets/chicken-biryani.jpg',
    isPopular: true,
    isVeg: false,
  },
  {
    id: 'l2',
    name: 'Paneer Butter Masala',
    description: 'Cottage cheese cubes in rich, creamy tomato gravy with butter',
    price: 100,
    category: 'lunch',
    image: '/src/assets/paneer-butter-masala.jpg',
    isVeg: true,
  },
  {
    id: 'l3',
    name: 'Dal Tadka',
    description: 'Yellow lentils tempered with aromatic spices and ghee',
    price: 70,
    category: 'lunch',
    image: '/src/assets/dal-tadka.jpg',
    isVeg: true,
  },
  {
    id: 'l4',
    name: 'Veg Thali',
    description: 'Complete meal with dal, sabzi, roti, rice, and dessert',
    price: 90,
    category: 'lunch',
    image: '/src/assets/dal-tadka.jpg',
    isVeg: true,
  },

  // Dinner
  {
    id: 'd1',
    name: 'Butter Chicken',
    description: 'Tender chicken in creamy tomato-based curry with butter',
    price: 140,
    category: 'dinner',
    image: '/src/assets/chicken-biryani.jpg',
    isPopular: true,
    isVeg: false,
  },
  {
    id: 'd2',
    name: 'Paneer Tikka',
    description: 'Grilled cottage cheese marinated in spices and yogurt',
    price: 110,
    category: 'dinner',
    image: '/src/assets/paneer-butter-masala.jpg',
    isVeg: true,
  },
  {
    id: 'd3',
    name: 'Veg Fried Rice',
    description: 'Stir-fried rice with mixed vegetables and soy sauce',
    price: 80,
    category: 'dinner',
    image: '/src/assets/poha.jpg',
    isVeg: true,
  },
  {
    id: 'd4',
    name: 'Chicken Fried Rice',
    description: 'Stir-fried rice with chicken pieces and vegetables',
    price: 100,
    category: 'dinner',
    image: '/src/assets/club-sandwich.jpg',
    isVeg: false,
  },

  // Snacks
  {
    id: 's1',
    name: 'Samosa',
    description: 'Crispy fried pastry filled with spiced potatoes and peas',
    price: 20,
    category: 'snacks',
    image: '/src/assets/samosa.jpg',
    isPopular: true,
    isVeg: true,
  },
  {
    id: 's2',
    name: 'French Fries',
    description: 'Crispy golden potato fries with seasoning',
    price: 40,
    category: 'snacks',
    image: '/src/assets/french-fries.jpg',
    isVeg: true,
  },
  {
    id: 's3',
    name: 'Veg Cutlet',
    description: 'Crispy vegetable patties served with chutney',
    price: 30,
    category: 'snacks',
    image: '/src/assets/samosa.jpg',
    isVeg: true,
  },
  {
    id: 's4',
    name: 'Pav Bhaji',
    description: 'Spiced vegetable curry served with buttered bread rolls',
    price: 50,
    category: 'snacks',
    image: '/src/assets/poha.jpg',
    isVeg: true,
  },

  // Combo Meals
  {
    id: 'c1',
    name: 'Breakfast Combo',
    description: 'Aloo Paratha + Poha + Chai. Perfect morning meal combo',
    price: 60,
    originalPrice: 80,
    category: 'combo',
    image: '/src/assets/aloo-paratha.jpg',
    isPopular: true,
    isVeg: true,
  },
  {
    id: 'c2',
    name: 'Lunch Special Combo',
    description: 'Chicken Biryani + Raita + Soft Drink. Complete lunch package',
    price: 130,
    originalPrice: 155,
    category: 'combo',
    image: '/src/assets/chicken-biryani.jpg',
    isPopular: true,
    isVeg: false,
  },
  {
    id: 'c3',
    name: 'Veg Thali Combo',
    description: 'Dal + Paneer Curry + 3 Rotis + Rice + Dessert',
    price: 110,
    originalPrice: 140,
    category: 'combo',
    image: '/src/assets/paneer-butter-masala.jpg',
    isVeg: true,
  },
  {
    id: 'c4',
    name: 'Snack Attack Combo',
    description: 'Samosa (2pcs) + French Fries + Cold Drink',
    price: 70,
    originalPrice: 90,
    category: 'combo',
    image: '/src/assets/samosa.jpg',
    isVeg: true,
  },
  {
    id: 'c5',
    name: 'Evening Meal Combo',
    description: 'Masala Dosa + Coffee + Vada. Perfect evening combo',
    price: 75,
    originalPrice: 95,
    category: 'combo',
    image: '/src/assets/masala-dosa.jpg',
    isVeg: true,
  },
];
