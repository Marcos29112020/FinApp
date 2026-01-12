import React, { useState } from 'react'
import Dashboard from './components/Dashboard.jsx'
import Transactions from './components/Transactions.jsx'
import Investments from './components/Investments.jsx'
import Reports from './components/Reports.jsx'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'

export default function App() {
  const [user, setUser] = useState(null)
  const [page, setPage] = useState('home')

  const handleLogout = () => {
    setUser(null)
    setPage('home')
  }

  if (!user) {
    return <Login onLogin={setUser} />
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Cabeçalho com menu */}
      <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          FinApp - Controle Financeiro
        </h1>
        <div className="flex gap-4 items-center">
          <nav className="flex gap-3">
            <button
              onClick={() => setPage('home')}
              className={`px-3 py-1 rounded ${page === 'home' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              Home
            </button>
            <button
              onClick={() => setPage('dashboard')}
              className={`px-3 py-1 rounded ${page === 'dashboard' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setPage('transactions')}
              className={`px-3 py-1 rounded ${page === 'transactions' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              Transações
            </button>
            <button
              onClick={() => setPage('investments')}
              className={`px-3 py-1 rounded ${page === 'investments' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              Investimentos
            </button>
            <button
              onClick={() => setPage('reports')}
              className={`px-3 py-1 rounded ${page === 'reports' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              Relatórios
            </button>
          </nav>
          <span className="text-gray-600 dark:text-gray-300">Usuário: {user.username}</span>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </header>

      {/* Conteúdo principal (apenas o bloco que você pediu) */}
      <main className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        {page === 'home' && <Home user={user} />}
        {page === 'dashboard' && <Dashboard user={user} />}
        {page === 'transactions' && <Transactions user={user} />}
        {page === 'investments' && <Investments user={user} />}
        {page === 'reports' && <Reports user={user} />}
      </main>

      <footer className="text-center py-4 text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} FinApp - Protótipo para Portfólio
      </footer>
    </div>
  )
}
