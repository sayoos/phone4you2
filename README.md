# MercadoLivre Clone - E-commerce

Um clone completo do MercadoLivre com painel administrativo, desenvolvido em React.js e otimizado para deploy no Vercel.

## 🚀 Funcionalidades

### Site Público (E-commerce)
- ✅ **Interface moderna** similar ao MercadoLivre
- ✅ **Header completo** com busca, carrinho e navegação
- ✅ **Banner promocional** rotativo
- ✅ **Catálogo de produtos** com grid responsivo
- ✅ **Cards de produtos** com preços, descontos e avaliações
- ✅ **Sidebar de categorias** interativa
- ✅ **Design responsivo** para desktop e mobile
- ✅ **Footer completo** com links e informações

### Painel Administrativo
- ✅ **Dashboard** com gráficos e estatísticas
- ✅ **Gerenciamento de Produtos** (CRUD completo)
  - Adicionar, editar e excluir produtos
  - Upload de imagens via URL
  - Controle de estoque
  - Categorização
  - Busca e filtros
- ✅ **Gerenciamento de Categorias** (CRUD completo)
  - Criar e editar categorias
  - Subcategorias
  - Ícones personalizados
- ✅ **Interface intuitiva** com sidebar colapsável
- ✅ **Persistência de dados** via localStorage

### Tecnologias Utilizadas
- **React.js** - Framework principal
- **Tailwind CSS** - Estilização
- **Shadcn/UI** - Componentes de interface
- **Lucide React** - Ícones
- **Recharts** - Gráficos e visualizações
- **Context API** - Gerenciamento de estado
- **localStorage** - Persistência de dados
- **Vite** - Build tool
- **Vercel** - Deploy e hospedagem

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou pnpm

### Passos para executar localmente

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd mercado-livre-clone
```

2. **Instale as dependências**
```bash
npm install
# ou
pnpm install
```

3. **Execute o projeto**
```bash
npm run dev
# ou
pnpm run dev
```

4. **Acesse no navegador**
- Site público: `http://localhost:5173`
- Painel admin: Clique no botão "Painel Admin" no canto superior direito

## 🚀 Deploy no Vercel

### Opção 1: Deploy via CLI
```bash
# Instale a CLI do Vercel
npm i -g vercel

# Faça o build
npm run build

# Deploy
vercel --prod
```

### Opção 2: Deploy via GitHub
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente (se necessário)
3. O deploy será automático a cada push

### Configurações do Vercel
O projeto já inclui:
- `vercel.json` - Configuração de rotas SPA
- `package.json` - Scripts de build otimizados

## 📱 Como Usar

### Site Público
1. **Navegação**: Use o header para navegar entre seções
2. **Busca**: Digite produtos na barra de busca
3. **Categorias**: Clique nas categorias da sidebar
4. **Produtos**: Visualize detalhes e adicione ao carrinho

### Painel Administrativo
1. **Acesso**: Clique em "Painel Admin" no site
2. **Dashboard**: Visualize estatísticas e gráficos
3. **Produtos**: 
   - Clique em "Adicionar Produto" para criar novos
   - Use os ícones de editar/excluir na tabela
   - Filtre por categoria ou busque por nome
4. **Categorias**:
   - Adicione novas categorias com ícones
   - Defina subcategorias separadas por vírgula
   - Edite ou exclua categorias existentes

## 🎨 Personalização

### Cores e Tema
- Edite `src/App.css` para personalizar cores
- Use classes Tailwind para ajustar estilos
- Modifique `tailwind.config.js` para temas customizados

### Dados Iniciais
- Edite `src/utils/mockData.js` para alterar produtos e categorias padrão
- Os dados são persistidos no localStorage após modificações

### Componentes
- Todos os componentes estão em `src/components/`
- Layout: `src/components/layout/`
- Produtos: `src/components/product/`
- Admin: `src/components/admin/`

## 🔧 Estrutura do Projeto

```
src/
├── components/
│   ├── admin/          # Componentes do painel admin
│   ├── layout/         # Header, Footer, Sidebar
│   ├── product/        # Cards e grids de produtos
│   └── ui/             # Componentes base (shadcn/ui)
├── context/            # Context API para estado global
├── pages/              # Páginas principais
├── utils/              # Dados mock e utilitários
├── App.jsx             # Componente principal
└── main.jsx            # Entry point
```

## 📈 Próximas Funcionalidades

- [ ] Sistema de autenticação
- [ ] Carrinho de compras funcional
- [ ] Checkout e pagamentos
- [ ] Sistema de pedidos
- [ ] Avaliações de produtos
- [ ] Wishlist/Favoritos
- [ ] Notificações
- [ ] API backend real
- [ ] Upload de imagens real

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para dúvidas ou suporte:
- Abra uma issue no GitHub
- Entre em contato via email

---

**Desenvolvido com ❤️ usando React.js e Tailwind CSS**

