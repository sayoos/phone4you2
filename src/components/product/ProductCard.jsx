import { Heart, Star, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProductCard = ({ product }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-3 w-3 ${
          i < Math.floor(rating) 
            ? 'fill-yellow-400 text-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200 group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-200"
        />
        
        {product.discount && (
          <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-600">
            {product.discount}% OFF
          </Badge>
        )}
        
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 p-2 bg-white/80 hover:bg-white"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {renderStars(product.rating)}
          </div>
          <span className="text-xs text-gray-500 ml-1">
            ({product.reviews})
          </span>
        </div>

        <div className="mb-3">
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through mr-2">
              {formatPrice(product.originalPrice)}
            </span>
          )}
          <span className="text-lg font-semibold text-gray-900">
            {formatPrice(product.price)}
          </span>
        </div>

        <div className="flex items-center text-xs text-green-600 mb-3">
          <Truck className="h-3 w-3 mr-1" />
          <span>Frete grátis</span>
        </div>

        <div className="text-xs text-gray-500 mb-3">
          por <span className="text-green-600">{product.seller.name}</span>
          <Badge variant="outline" className="ml-1 text-xs">
            {product.seller.reputation}
          </Badge>
        </div>

        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
          Adicionar ao carrinho
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;

