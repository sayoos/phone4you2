import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Sobre o MercadoLivre</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Sobre nós</a></li>
              <li><a href="#" className="hover:text-blue-600">Trabalhe conosco</a></li>
              <li><a href="#" className="hover:text-blue-600">Termos e condições</a></li>
              <li><a href="#" className="hover:text-blue-600">Como cuidamos da sua privacidade</a></li>
              <li><a href="#" className="hover:text-blue-600">Acessibilidade</a></li>
            </ul>
          </div>

          {/* Ajuda */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Ajuda</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Comprar</a></li>
              <li><a href="#" className="hover:text-blue-600">Vender</a></li>
              <li><a href="#" className="hover:text-blue-600">Resolução de problemas</a></li>
              <li><a href="#" className="hover:text-blue-600">Centro de segurança</a></li>
              <li><a href="#" className="hover:text-blue-600">Como comprar</a></li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Redes sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Minha conta */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Minha conta</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-blue-600">Entrar</a></li>
              <li><a href="#" className="hover:text-blue-600">Vender</a></li>
              <li><a href="#" className="hover:text-blue-600">Minhas compras</a></li>
              <li><a href="#" className="hover:text-blue-600">Favoritos</a></li>
              <li><a href="#" className="hover:text-blue-600">Minha conta</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-600 mb-4 md:mb-0">
            Copyright © 1999-2024 MercadoLivre Clone S.R.L.
          </div>
          <div className="flex items-center space-x-4">
            <img src="https://via.placeholder.com/40x25/cccccc/666666?text=VISA" alt="Visa" className="h-6" />
            <img src="https://via.placeholder.com/40x25/cccccc/666666?text=MC" alt="Mastercard" className="h-6" />
            <img src="https://via.placeholder.com/40x25/cccccc/666666?text=PIX" alt="PIX" className="h-6" />
            <img src="https://via.placeholder.com/40x25/cccccc/666666?text=BB" alt="Boleto" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

