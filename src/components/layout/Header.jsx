import { useState } from 'react';
import { Search, ShoppingCart, User, Menu, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems] = useState(3); // Mock cart items

  return (
    <header className="bg-yellow-400 shadow-md">
      {/* Top bar */}
      <div className="bg-gray-100 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>Enviar para São Paulo 01310-100</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-blue-600">Criar conta</a>
            <a href="#" className="hover:text-blue-600">Entrar</a>
            <a href="#" className="hover:text-blue-600">Minhas compras</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600 mr-8">
              MercadoLivre
            </h1>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                type="text"
                placeholder="Buscar produtos, marcas e muito mais..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 rounded-sm border-0 shadow-sm"
              />
              <Button 
                size="sm" 
                className="absolute right-0 top-0 h-full px-4 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-l-none"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
              <Heart className="h-5 w-5" />
              <span className="text-xs mt-1">Favoritos</span>
            </Button>
            
            <Button variant="ghost" size="sm" className="flex flex-col items-center p-2 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="text-xs mt-1">Carrinho</span>
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Button>

            <Button variant="ghost" size="sm" className="flex flex-col items-center p-2">
              <User className="h-5 w-5" />
              <span className="text-xs mt-1">Conta</span>
            </Button>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Categories bar */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center space-x-6 text-sm overflow-x-auto">
            <a href="#" className="whitespace-nowrap hover:text-blue-600 py-2">Categorias</a>
            <a href="#" className="whitespace-nowrap hover:text-blue-600 py-2">Ofertas</a>
            <a href="#" className="whitespace-nowrap hover:text-blue-600 py-2">Histórico</a>
            <a href="#" className="whitespace-nowrap hover:text-blue-600 py-2">Supermercado</a>
            <a href="#" className="whitespace-nowrap hover:text-blue-600 py-2">Moda</a>
            <a href="#" className="whitespace-nowrap hover:text-blue-600 py-2">Vender</a>
            <a href="#" className="whitespace-nowrap hover:text-blue-600 py-2">Contato</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

