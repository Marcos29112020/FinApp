import React from 'react'

export default function Home({ user }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 text-center animate-fadeIn">
      <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
        Bem-vindo ao FinApp
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        Olá <strong>{user.username}</strong>, este é o seu painel de controle financeiro.
      </p>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        Use o menu acima para navegar entre Dashboard, Transações, Investimentos e Relatórios.
      </p>
    </div>
  )
}
