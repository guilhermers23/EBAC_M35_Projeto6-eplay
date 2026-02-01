# E-PLAY - Loja de Games 🎮

O **E-PLAY** é uma plataforma de e-commerce de videojogos moderna, integrada e totalmente responsiva. Este projeto foi desenvolvido como parte do currículo da **EBAC**, focando em práticas avançadas de desenvolvimento Frontend, como o uso de APIs assíncronas, gerenciamento de estado global e tipagem estrita.

---

## 🚀 Funcionalidades

- **Catálogo Dinâmico:** Listagem de jogos consumida via API com seções de "Promoções" e "Em Breve".
- **Filtro por Categorias:** Navegação segmentada por gêneros (Ação, RPG, FPS, etc.).
- **Carrinho de Compras:** Sistema completo de adição/remoção de itens com persistência de estado.
- **Página de Detalhes:** Informações técnicas, galeria de imagens e descrição detalhada de cada título.
- **Checkout:** Processo de finalização de compra com validação de formulários em tempo real.

## 🛠 Tecnologias Utilizadas

O projeto utiliza o que há de mais moderno no ecossistema React:

* **React** (v18+)
* **TypeScript** (Segurança e produtividade com tipagem)
* **Redux Toolkit & RTK Query** (Gerenciamento de estado e cache de API)
* **Styled Components** (Estilização encapsulada e dinâmica)
* **React Router Dom** (Sistema de rotas SPA)
* **Formik & Yup** (Tratamento e validação de formulários)

---

## ⚙️ Como Executar o Projeto

Para rodar este projeto localmente, siga os passos abaixo:

1. **Clone este repositório:**
   ```bash
   git clone [https://github.com/guilhermers23/EBAC_M35_Projeto6-eplay.git](https://github.com/guilhermers23/EBAC_M35_Projeto6-eplay.git)

2. **Entre na pasta do projeto:**
   ```bash
   cd EBAC_M35_Projeto6-eplay

3. **Instale as dependências:**
   ```bash
   npm install
   
4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   
Acesse http://localhost:3000 no seu navegador para ver o resultado.

## 📂 Estrutura do Projeto
A organização de pastas segue o padrão de escalabilidade:

- `src/components`: Componentes menores e reutilizáveis.

- `src/containers`: Seções compostas das páginas.

- `src/pages`: Telas completas da aplicação.

- `src/services`: Configuração das chamadas de API.

- `src/store`: Configuração do Redux e estados globais.

- `src/styles`: Temas, cores e estilos globais.

# 👤 Autor
Desenvolvido por Guilherme Rosa da Silva.

Este projeto foi desenvolvido para fins educacionais no curso de Desenvolvedor Full Stack Python da EBAC.
