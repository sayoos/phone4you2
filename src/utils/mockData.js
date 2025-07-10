// Mock data para desenvolvimento
export const mockProducts = [
  {
    id: 1,
    title: "iPhone 15 Pro Max 256GB",
    price: 7999.99,
    originalPrice: 8999.99,
    discount: 11,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
    category: "Celulares e Telefones",
    brand: "Apple",
    rating: 4.8,
    reviews: 1250,
    stock: 15,
    description: "iPhone 15 Pro Max com chip A17 Pro, sistema de câmera Pro e tela Super Retina XDR de 6,7 polegadas.",
    features: [
      "Chip A17 Pro",
      "Câmera Principal de 48MP",
      "Tela Super Retina XDR",
      "5G",
      "Face ID"
    ],
    seller: {
      name: "TechStore Oficial",
      reputation: "Platinum",
      sales: 50000
    }
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra 512GB",
    price: 6499.99,
    originalPrice: 7299.99,
    discount: 11,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=400&h=400&fit=crop",
    category: "Celulares e Telefones",
    brand: "Samsung",
    rating: 4.7,
    reviews: 890,
    stock: 8,
    description: "Galaxy S24 Ultra com S Pen integrada, câmera de 200MP e tela Dynamic AMOLED 2X.",
    features: [
      "Processador Snapdragon 8 Gen 3",
      "Câmera de 200MP",
      "S Pen integrada",
      "Tela Dynamic AMOLED 2X",
      "5G"
    ],
    seller: {
      name: "Samsung Store",
      reputation: "Platinum",
      sales: 75000
    }
  },
  {
    id: 3,
    title: "Notebook Gamer Acer Nitro 5",
    price: 3299.99,
    originalPrice: 3899.99,
    discount: 15,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
    category: "Computadores",
    brand: "Acer",
    rating: 4.5,
    reviews: 456,
    stock: 12,
    description: "Notebook gamer com processador Intel Core i5, placa de vídeo GTX 1650 e 16GB de RAM.",
    features: [
      "Intel Core i5-11400H",
      "NVIDIA GTX 1650",
      "16GB RAM DDR4",
      "SSD 512GB",
      "Tela 15.6\" Full HD"
    ],
    seller: {
      name: "Acer Store",
      reputation: "Gold",
      sales: 25000
    }
  },
  {
    id: 4,
    title: "Smart TV 55\" 4K Samsung",
    price: 2199.99,
    originalPrice: 2699.99,
    discount: 19,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop",
    category: "TV e Home Theater",
    brand: "Samsung",
    rating: 4.6,
    reviews: 678,
    stock: 20,
    description: "Smart TV 55 polegadas com resolução 4K, HDR e sistema operacional Tizen.",
    features: [
      "Resolução 4K UHD",
      "HDR10+",
      "Sistema Tizen",
      "Wi-Fi integrado",
      "3 HDMI / 2 USB"
    ],
    seller: {
      name: "Samsung Store",
      reputation: "Platinum",
      sales: 75000
    }
  },
  {
    id: 5,
    title: "Fone de Ouvido Sony WH-1000XM5",
    price: 1899.99,
    originalPrice: 2199.99,
    discount: 14,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop",
    category: "Áudio",
    brand: "Sony",
    rating: 4.9,
    reviews: 1890,
    stock: 25,
    description: "Fone de ouvido com cancelamento de ruído líder da indústria e qualidade de som premium.",
    features: [
      "Cancelamento de ruído ativo",
      "Bateria de 30 horas",
      "Carregamento rápido",
      "Bluetooth 5.2",
      "Controles touch"
    ],
    seller: {
      name: "Sony Store",
      reputation: "Platinum",
      sales: 45000
    }
  },
  {
    id: 6,
    title: "Console PlayStation 5",
    price: 3999.99,
    originalPrice: 4499.99,
    discount: 11,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=400&h=400&fit=crop",
    category: "Games",
    brand: "Sony",
    rating: 4.8,
    reviews: 2340,
    stock: 5,
    description: "Console de nova geração com SSD ultra-rápido e gráficos ray tracing.",
    features: [
      "SSD ultra-rápido",
      "Ray tracing",
      "Áudio 3D",
      "Controle DualSense",
      "Retrocompatibilidade PS4"
    ],
    seller: {
      name: "Sony Store",
      reputation: "Platinum",
      sales: 45000
    }
  }
];

export const mockCategories = [
  {
    id: 1,
    name: "Celulares e Telefones",
    icon: "📱",
    subcategories: ["Smartphones", "Celulares Básicos", "Acessórios"]
  },
  {
    id: 2,
    name: "Computadores",
    icon: "💻",
    subcategories: ["Notebooks", "Desktops", "Tablets", "Acessórios"]
  },
  {
    id: 3,
    name: "TV e Home Theater",
    icon: "📺",
    subcategories: ["Smart TVs", "TVs", "Home Theater", "Streaming"]
  },
  {
    id: 4,
    name: "Áudio",
    icon: "🎧",
    subcategories: ["Fones de Ouvido", "Caixas de Som", "Equipamentos de Áudio"]
  },
  {
    id: 5,
    name: "Games",
    icon: "🎮",
    subcategories: ["Consoles", "Jogos", "Acessórios"]
  },
  {
    id: 6,
    name: "Eletrodomésticos",
    icon: "🏠",
    subcategories: ["Geladeiras", "Fogões", "Micro-ondas", "Lavadoras"]
  }
];

export const mockUser = {
  id: 1,
  name: "Admin",
  email: "admin@mercadolivre.com",
  role: "admin"
};

