# 💰 FinApp - Controle Financeiro Pessoal

O **FinApp** é um aplicativo web desenvolvido em **React + Vite + TailwindCSS** para controle financeiro pessoal.  
Ele permite que cada usuário cadastre suas próprias transações e investimentos, visualize relatórios e acompanhe o saldo total em gráficos dinâmicos.

---

## 🚀 Funcionalidades

- 🔑 **Login e Cadastro Multiusuário**
  - Cadastro com validação de senha (mínimo 6 caracteres e confirmação).
  - Login para múltiplos clientes, cada um com seus próprios dados.

- 💵 **Transações**
  - Adicionar **Entradas** (receitas) e **Saídas** (despesas).
  - Editar e excluir transações.
  - Dados persistidos no navegador via `localStorage`.

- 📈 **Investimentos**
  - Adicionar **Aportes** (entrada) e **Retiradas** (saída).
  - Editar e excluir investimentos.
  - Persistência por usuário no `localStorage`.

- 📊 **Dashboard Dinâmico**
  - Exibe saldo de transações, saldo de investimentos e saldo total.
  - Gráfico de linha mostrando evolução do saldo ao longo das transações.

- 📑 **Relatórios**
  - Mostra total de entradas, saídas e diferença (saldo líquido).
  - Preparado para exportação em PDF/Excel (próxima etapa).

- 📱 **Responsividade**
  - Layout adaptado para smartphones e desktops usando TailwindCSS.

---

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- `localStorage` para persistência de dados
- [Recharts](https://recharts.org/) para gráficos

---

## 📂 Estrutura do Projeto

