const PRODUCTS = [
  { id: 1, name: "Grapes", category: "fruits", price: 4.25, unit: "Kg", image: "https://images.unsplash.com/photo-1537640538966-79f369143a8c?w=400&h=300&fit=crop", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt" },
  { id: 2, name: "Raspberries", category: "fruits", price: 3.50, unit: "Kg", image: "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?w=400&h=300&fit=crop", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt" },
  { id: 3, name: "Apricots", category: "fruits", price: 5.00, unit: "Kg", image: "https://images.unsplash.com/photo-1560807706-0c0227a6ae05?w=400&h=300&fit=crop", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt" },
  { id: 4, name: "Banana", category: "fruits", price: 2.75, unit: "Kg", image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt" },
  { id: 5, name: "Tomato", category: "vegetables", price: 3.25, unit: "Kg", image: "https://images.unsplash.com/photo-1546094096-0df4faaa0b12?w=400&h=300&fit=crop", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt" },
  { id: 6, name: "Potato", category: "vegetables", price: 2.50, unit: "Kg", image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt" },
  { id: 7, name: "Bell Pepper", category: "vegetables", price: 4.00, unit: "Kg", image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400&h=300&fit=crop", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt" },
  { id: 8, name: "Broccoli", category: "vegetables", price: 3.75, unit: "Kg", image: "https://images.unsplash.com/photo-1459411621453-7bb0337f8700?w=400&h=300&fit=crop", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt" },
  { id: 9, name: "Orange Juice", category: "juice", price: 6.50, unit: "L", image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt" },
  { id: 10, name: "Apple Juice", category: "juice", price: 5.75, unit: "L", image: "https://images.unsplash.com/photo-1622597467836-fbc0d131d0d8?w=400&h=300&fit=crop", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt" },
  { id: 11, name: "Mango Juice", category: "juice", price: 7.00, unit: "L", image: "https://images.unsplash.com/photo-1603569283847-aa295b0d016a?w=400&h=300&fit=crop", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt" },
  { id: 12, name: "Mixed Juice", category: "juice", price: 6.25, unit: "L", image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0e?w=400&h=300&fit=crop", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt" },
  { id: 13, name: "Dried Apricots", category: "dried", price: 8.50, unit: "Kg", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt" },
  { id: 14, name: "Dried Dates", category: "dried", price: 9.00, unit: "Kg", image: "https://images.unsplash.com/photo-1606312619070-d48d4ecc2f86?w=400&h=300&fit=crop", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt" },
  { id: 15, name: "Dried Figs", category: "dried", price: 10.25, unit: "Kg", image: "https://images.unsplash.com/photo-1608797178974-15b36a7519d5?w=400&h=300&fit=crop", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt" },
  { id: 16, name: "Dried Raisins", category: "dried", price: 7.50, unit: "Kg", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt" }
];

const VEGETABLES = PRODUCTS.filter(p => p.category === "vegetables");

const BESTSELLERS = [
  { id: 1, name: "Organic Apples", price: 3.99, image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=100&h=100&fit=crop" },
  { id: 2, name: "Fresh Strawberries", price: 5.49, image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=100&h=100&fit=crop" },
  { id: 3, name: "Organic Carrots", price: 2.29, image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=100&h=100&fit=crop" },
  { id: 4, name: "Green Lettuce", price: 1.99, image: "https://images.unsplash.com/photo-1622206151226-18ca2c9e67f9?w=100&h=100&fit=crop" },
  { id: 5, name: "Fresh Oranges", price: 4.29, image: "https://images.unsplash.com/photo-1547514700-3710a6ad562e?w=100&h=100&fit=crop" },
  { id: 6, name: "Organic Spinach", price: 2.79, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=100&h=100&fit=crop" },
  { id: 7, name: "Sweet Corn", price: 3.49, image: "https://images.unsplash.com/photo-1551754655-7750dde7b676?w=100&h=100&fit=crop" },
  { id: 8, name: "Fresh Blueberries", price: 6.99, image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=100&h=100&fit=crop" },
  { id: 9, name: "Organic Cucumber", price: 1.89, image: "https://images.unsplash.com/photo-1604977042946-1b3aa3f995ea?w=100&h=100&fit=crop" },
  { id: 10, name: "Fresh Mango", price: 5.99, image: "https://images.unsplash.com/photo-1553279768-865489f8de31?w=100&h=100&fit=crop" },
  { id: 11, name: "Organic Kale", price: 3.29, image: "https://images.unsplash.com/photo-1524179091445-86f8c5d6867b?w=100&h=100&fit=crop" },
  { id: 12, name: "Fresh Pineapple", price: 4.99, image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=100&h=100&fit=crop" }
];

const TESTIMONIALS = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Client Name",
    role: "Customer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop"
  },
  {
    id: 2,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    name: "Client Name",
    role: "Customer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop"
  }
];

const STATS = [
  { id: 1, icon: "fa-users", label: "Satisfied Customers", value: 1963, suffix: "" },
  { id: 2, icon: "fa-star", label: "Quality of Service", value: 99, suffix: "%" },
  { id: 3, icon: "fa-certificate", label: "Quality of Certified", value: 33, suffix: "" },
  { id: 4, icon: "fa-box", label: "Available Products", value: 789, suffix: "" }
];

const TEAM = [
  { id: 1, name: "John Smith", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop" },
  { id: 2, name: "Sarah Johnson", role: "Operations Manager", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop" },
  { id: 3, name: "Michael Brown", role: "Quality Director", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop" },
  { id: 4, name: "Emily Davis", role: "Customer Relations", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop" }
];

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&h=450&fit=crop",
    badge: "Vegetables",
    alt: "Fresh organic vegetables"
  },
  {
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&h=450&fit=crop",
    badge: "Fruits",
    alt: "Fresh organic fruits"
  },
  {
    image: "https://images.unsplash.com/photo-1490817048654-669359d4c2d8?w=600&h=450&fit=crop",
    badge: "Organic",
    alt: "Organic produce basket"
  }
];

const CATEGORIES = [
  { id: "all", label: "All Products" },
  { id: "vegetables", label: "Vegetables" },
  { id: "fruits", label: "Fruits" },
  { id: "juice", label: "Juice" },
  { id: "dried", label: "Dried" }
];
