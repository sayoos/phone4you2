import { createContext, useContext, useReducer, useEffect } from 'react';
import { mockProducts, mockCategories } from '../utils/mockData';

const AppContext = createContext();

// Actions
const ACTIONS = {
  SET_PRODUCTS: 'SET_PRODUCTS',
  ADD_PRODUCT: 'ADD_PRODUCT',
  UPDATE_PRODUCT: 'UPDATE_PRODUCT',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
  SET_CATEGORIES: 'SET_CATEGORIES',
  ADD_CATEGORY: 'ADD_CATEGORY',
  UPDATE_CATEGORY: 'UPDATE_CATEGORY',
  DELETE_CATEGORY: 'DELETE_CATEGORY',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_CART_QUANTITY: 'UPDATE_CART_QUANTITY',
  CLEAR_CART: 'CLEAR_CART'
};

// Reducer
const appReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_PRODUCTS:
      return { ...state, products: action.payload };
    
    case ACTIONS.ADD_PRODUCT:
      const newProduct = {
        ...action.payload,
        id: Date.now(),
        rating: 4.5,
        reviews: 0,
        seller: {
          name: "Admin Store",
          reputation: "Platinum",
          sales: 1000
        }
      };
      return { ...state, products: [...state.products, newProduct] };
    
    case ACTIONS.UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.payload.id ? action.payload : product
        )
      };
    
    case ACTIONS.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload)
      };
    
    case ACTIONS.SET_CATEGORIES:
      return { ...state, categories: action.payload };
    
    case ACTIONS.ADD_CATEGORY:
      const newCategory = {
        ...action.payload,
        id: Date.now()
      };
      return { ...state, categories: [...state.categories, newCategory] };
    
    case ACTIONS.UPDATE_CATEGORY:
      return {
        ...state,
        categories: state.categories.map(category =>
          category.id === action.payload.id ? action.payload : category
        )
      };
    
    case ACTIONS.DELETE_CATEGORY:
      return {
        ...state,
        categories: state.categories.filter(category => category.id !== action.payload)
      };
    
    case ACTIONS.ADD_TO_CART:
      const existingItem = state.cart.find(item => item.id === action.payload.id);
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      };
    
    case ACTIONS.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      };
    
    case ACTIONS.UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };
    
    case ACTIONS.CLEAR_CART:
      return { ...state, cart: [] };
    
    default:
      return state;
  }
};

// Initial state
const initialState = {
  products: [],
  categories: [],
  cart: [],
  user: null
};

// Provider component
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load data from localStorage on mount
  useEffect(() => {
    const savedProducts = localStorage.getItem('ecommerce_products');
    const savedCategories = localStorage.getItem('ecommerce_categories');
    const savedCart = localStorage.getItem('ecommerce_cart');

    if (savedProducts) {
      dispatch({ type: ACTIONS.SET_PRODUCTS, payload: JSON.parse(savedProducts) });
    } else {
      dispatch({ type: ACTIONS.SET_PRODUCTS, payload: mockProducts });
    }

    if (savedCategories) {
      dispatch({ type: ACTIONS.SET_CATEGORIES, payload: JSON.parse(savedCategories) });
    } else {
      dispatch({ type: ACTIONS.SET_CATEGORIES, payload: mockCategories });
    }

    if (savedCart) {
      dispatch({ type: ACTIONS.SET_CART, payload: JSON.parse(savedCart) });
    }
  }, []);

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('ecommerce_products', JSON.stringify(state.products));
  }, [state.products]);

  useEffect(() => {
    localStorage.setItem('ecommerce_categories', JSON.stringify(state.categories));
  }, [state.categories]);

  useEffect(() => {
    localStorage.setItem('ecommerce_cart', JSON.stringify(state.cart));
  }, [state.cart]);

  // Actions
  const actions = {
    // Product actions
    addProduct: (product) => dispatch({ type: ACTIONS.ADD_PRODUCT, payload: product }),
    updateProduct: (product) => dispatch({ type: ACTIONS.UPDATE_PRODUCT, payload: product }),
    deleteProduct: (productId) => dispatch({ type: ACTIONS.DELETE_PRODUCT, payload: productId }),
    
    // Category actions
    addCategory: (category) => dispatch({ type: ACTIONS.ADD_CATEGORY, payload: category }),
    updateCategory: (category) => dispatch({ type: ACTIONS.UPDATE_CATEGORY, payload: category }),
    deleteCategory: (categoryId) => dispatch({ type: ACTIONS.DELETE_CATEGORY, payload: categoryId }),
    
    // Cart actions
    addToCart: (product) => dispatch({ type: ACTIONS.ADD_TO_CART, payload: product }),
    removeFromCart: (productId) => dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: productId }),
    updateCartQuantity: (productId, quantity) => 
      dispatch({ type: ACTIONS.UPDATE_CART_QUANTITY, payload: { id: productId, quantity } }),
    clearCart: () => dispatch({ type: ACTIONS.CLEAR_CART })
  };

  const value = {
    ...state,
    ...actions
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Hook to use the context
export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export default AppContext;

