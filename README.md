📱 FinApp
FinApp é um protótipo de aplicativo financeiro desenvolvido com React, Vite, TailwindCSS e Recharts, focado em visualização de dados e experiência mobile. O projeto está hospedado via GitHub Pages e pode ser instalado como um PWA (Progressive Web App).

🔗 Acesse o projeto online
https://marcos29112020.github.io/FinApp/

🚀 Funcionalidades
📊 Gráficos interativos com Recharts

🎨 Interface responsiva com TailwindCSS

⚡ Build rápido com Vite

📱 Instalação como app via PWA

🌐 Deploy automático via GitHub Actions

📦 Tecnologias utilizadas
React 18

Vite

TailwindCSS

Recharts

vite-plugin-pwa

📂 Estrutura do projeto
Código

finapp/
├── public/
│   ├── manifest.json
│   ├── icon-192.png
│   └── icon-512.png
├── src/
│   ├── main.jsx
│   └── components/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── vite.config.js
└── package.json

⚙️ Como rodar localmente
bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm run dev

# Gerar build de produção
npm run build
📤 Deploy automático
O deploy é feito via GitHub Actions:

Ao fazer push na branch master, o workflow deploy.yml é executado.

O build gerado na pasta dist/ é publicado na branch gh-pages.

O GitHub Pages serve o conteúdo diretamente dessa branch.

📱 PWA (Progressive Web App)
O FinApp pode ser instalado como app no celular:

Android: Chrome/Edge → Menu ⋮ → “Instalar app”

iOS: Safari → Compartilhar → “Adicionar à Tela de Início”

📄 Funcionalidades pendentes
⚠️ As funcionalidades de exportação para PDF e Excel ainda não estão implementadas.

Elas estão previstas para futuras versões e serão integradas com bibliotecas como:

jspdf para geração de PDF

xlsx para exportação de planilhas

🤝 Contribuições
Sinta-se à vontade para abrir issues ou pull requests com sugestões, melhorias ou correções.

📘 Licença
Este projeto está sob a licença MIT.