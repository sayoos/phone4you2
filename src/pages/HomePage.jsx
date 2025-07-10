import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Banner from '../components/layout/Banner';
import CategorySidebar from '../components/layout/CategorySidebar';
import ProductGrid from '../components/product/ProductGrid';
import { useApp } from '../context/AppContext';

const HomePage = () => {
  const { products } = useApp();
  
  // Dividir produtos em seções
  const featuredProducts = products.slice(0, 5);
  const recommendedProducts = products.slice(2, 6);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <CategorySidebar />
          </div>
          
          {/* Main content */}
          <div className="lg:col-span-3">
            <Banner />
            
            <ProductGrid 
              products={featuredProducts} 
              title="Produtos em destaque" 
            />
            
            <ProductGrid 
              products={recommendedProducts} 
              title="Recomendados para você" 
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;

