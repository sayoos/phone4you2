import { useState } from 'react';
import AdminSidebar from '../components/admin/AdminSidebar';
import Dashboard from '../components/admin/Dashboard';
import ProductManager from '../components/admin/ProductManager';
import CategoryManager from '../components/admin/CategoryManager';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'products':
        return <ProductManager />;
      case 'categories':
        return <CategoryManager />;
      case 'orders':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Gerenciar Pedidos</h1>
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-500">Funcionalidade de pedidos em desenvolvimento...</p>
            </div>
          </div>
        );
      case 'customers':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Gerenciar Clientes</h1>
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-500">Funcionalidade de clientes em desenvolvimento...</p>
            </div>
          </div>
        );
      case 'analytics':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Relatórios e Analytics</h1>
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-500">Relatórios detalhados em desenvolvimento...</p>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Configurações</h1>
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-500">Configurações do sistema em desenvolvimento...</p>
            </div>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <div className="flex-1 overflow-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminPage;

