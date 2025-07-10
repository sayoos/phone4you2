import { ChevronRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const CategorySidebar = () => {
  const { categories } = useApp();
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <h3 className="font-semibold text-gray-900 mb-4">Categorias</h3>
      
      <div className="space-y-2">
        {categories.map((category) => (
          <div key={category.id} className="group">
            <div className="flex items-center justify-between p-2 rounded hover:bg-gray-50 cursor-pointer">
              <div className="flex items-center">
                <span className="text-lg mr-2">{category.icon}</span>
                <span className="text-sm text-gray-700 group-hover:text-blue-600">
                  {category.name}
                </span>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
            </div>
            
            {/* Subcategorias (mostrar no hover ou clique) */}
            <div className="hidden group-hover:block ml-6 mt-1 space-y-1">
              {category.subcategories.map((sub, index) => (
                <a
                  key={index}
                  href="#"
                  className="block text-xs text-gray-600 hover:text-blue-600 py-1"
                >
                  {sub}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySidebar;

