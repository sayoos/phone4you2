import { useState } from 'react';
import { Plus, Edit, Trash2, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useApp } from '../../context/AppContext';

const CategoryManager = () => {
  const { categories, addCategory, updateCategory, deleteCategory } = useApp();
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    icon: '',
    subcategories: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const categoryData = {
      name: formData.name,
      icon: formData.icon,
      subcategories: formData.subcategories.split(',').map(sub => sub.trim()).filter(sub => sub)
    };

    if (editingCategory) {
      updateCategory({ ...categoryData, id: editingCategory.id });
    } else {
      addCategory(categoryData);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      icon: '',
      subcategories: ''
    });
    setShowAddForm(false);
    setEditingCategory(null);
  };

  const handleEdit = (category) => {
    setFormData({
      name: category.name,
      icon: category.icon,
      subcategories: category.subcategories.join(', ')
    });
    setEditingCategory(category);
    setShowAddForm(true);
  };

  const handleDelete = (categoryId) => {
    if (confirm('Tem certeza que deseja excluir esta categoria?')) {
      deleteCategory(categoryId);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Gerenciar Categorias</h1>
        <Button 
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Plus className="h-4 w-4 mr-2" />
          Adicionar Categoria
        </Button>
      </div>

      {/* Formulário de Adicionar/Editar */}
      {showAddForm && (
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold mb-4">
            {editingCategory ? 'Editar Categoria' : 'Adicionar Nova Categoria'}
          </h2>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nome da Categoria</label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="Ex: Eletrônicos"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Ícone (Emoji)</label>
              <Input
                required
                value={formData.icon}
                onChange={(e) => setFormData({...formData, icon: e.target.value})}
                placeholder="📱"
                maxLength={2}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">
                Subcategorias (separadas por vírgula)
              </label>
              <Input
                value={formData.subcategories}
                onChange={(e) => setFormData({...formData, subcategories: e.target.value})}
                placeholder="Ex: Smartphones, Tablets, Acessórios"
              />
            </div>

            <div className="md:col-span-2 flex gap-2">
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                {editingCategory ? 'Atualizar' : 'Adicionar'} Categoria
              </Button>
              <Button type="button" variant="outline" onClick={resetForm}>
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Lista de Categorias */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleEdit(category)}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDelete(category.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-medium text-gray-600">Subcategorias:</h4>
              <div className="flex flex-wrap gap-1">
                {category.subcategories.map((sub, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {sub}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryManager;

