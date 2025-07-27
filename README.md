## DASH
Durante minhas explorações pela internet, sempre me deparei com sites muito úteis, criativos e até curiosos. Verdadeiras joias escondidas que, por algum motivo, não recebem a atenção que merecem. Como forma de não perdê-los de vista, comecei a salvar esses links em um simples bloco de notas, pensando que um dia poderia precisar deles novamente.

Foi então que surgiu a ideia do DASH: um projeto pessoal que reúne esses sites interessantes em um só lugar, de forma organizada, acessível e visualmente agradável. A ideia é facilitar o acesso a ferramentas online incríveis desde editores de imagem gratuitos, plataformas para criar tarefas educativas, até sites que permitem assistir a conteúdos de outros países diretamente do navegador. Tudo isso categorizado e fácil de explorar.

Outro desafio que decidi encarar foi criar um layout de lista inspirado no visual do Pinterest, que exibe seus conteúdos em um formato assimétrico e dinâmico, algo que sempre achei visualmente fascinante. Quis trazer essa ideia para o DASH, permitindo que os sites fossem exibidos de forma leve, fluida e atrativa, quebrando o padrão tradicional de grades uniformes.

Além disso, implementei um sistema de carregamento automático de dados, onde, à medida que o usuário rola a página para baixo, novos sites são carregados e adicionados à lista automaticamente. Isso garante uma experiência mais contínua, sem a necessidade de cliques ou recarregamentos manuais.

## 🛠️ Tecnologias Utilizadas
1. Hygraph Studio
Escolhi o Hygraph para armazenar os dados dos sites (nome, descrição, link, etc.) porque ele é rápido, intuitivo e entrega exatamente os dados que eu preciso, nada além disso. Sua interface amigável e a estrutura baseada em GraphQL facilitaram muito o processo de desenvolvimento e organização do conteúdo.

2. Next.js
O Next.js foi usado como base do projeto por oferecer uma estrutura robusta e moderna, com funcionalidades como roteamento automático, SSR (Server-Side Rendering), otimização de imagens e muito mais. Ele me deu liberdade para estruturar o projeto da forma que eu queria, com agilidade e escalabilidade.

3. Tailwind CSS
Para estilização, usei o Tailwind CSS, que além de moderno, oferece uma maneira altamente produtiva de escrever estilos diretamente nos componentes. Ele me permitiu criar um layout responsivo com rapidez, garantindo que o site fique bonito e funcional tanto no desktop quanto no celular.

4. URQL
Para integrar com o Hygraph (GraphQL), optei pelo URQL. Ele é leve, fácil de configurar e tem uma API muito limpa. Com ele, consigo buscar apenas os dados necessários, fazer cache inteligente e implementar funcionalidades como paginação com facilidade.
<br/>


# Modo Dark
<img width="1468" height="774" alt="Captura de tela 2025-07-27 124647" src="https://github.com/user-attachments/assets/7f941916-c4e2-403e-98d3-7ab74b4abf92" />
<br/>

# Modo Light
<img width="1435" height="724" alt="Captura de tela 2025-07-27 124730" src="https://github.com/user-attachments/assets/fbabbb0c-9737-435f-af59-fcaec9b5db5a" />
<br/>



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
