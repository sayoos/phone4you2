import { useState } from 'react';
import { AppProvider } from './context/AppContext';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Simples sistema de roteamento para demonstração
  const renderPage = () => {
    switch (currentPage) {
      case 'admin':
        return <AdminPage />;
      default:
        return <HomePage />;
    }
  };

  // Adicionar botão para acessar admin (temporário para demonstração)
  if (currentPage === 'home') {
    return (
      <AppProvider>
        <div>
          <div className="fixed top-4 right-4 z-50">
            <button
              onClick={() => setCurrentPage('admin')}
              className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-700 transition-colors"
            >
              Painel Admin
            </button>
          </div>
          <HomePage />
        </div>
      </AppProvider>
    );
  }

  if (currentPage === 'admin') {
    return (
      <AppProvider>
        <div>
          <div className="fixed top-4 right-4 z-50">
            <button
              onClick={() => setCurrentPage('home')}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
            >
              Voltar ao Site
            </button>
          </div>
          <AdminPage />
        </div>
      </AppProvider>
    );
  }

  return (
    <AppProvider>
      {renderPage()}
    </AppProvider>
  );
}

export default App
