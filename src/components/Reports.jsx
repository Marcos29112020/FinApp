import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'

export default function Reports({ user }) {
  const storageKey = `transactions_${user.username}`
  const [transactions] = useLocalStorage(storageKey, [])

  const entradas = transactions.filter(t => t.value > 0).reduce((acc, t) => acc + t.value, 0)
  const saidas = transactions.filter(t => t.value < 0).reduce((acc, t) => acc + t.value, 0)
  const saldo = entradas + saidas

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Relatórios</h2>
      <p className="text-green-600 font-semibold">
        Entradas: {entradas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </p>
      <p className="text-red-600 font-semibold">
        Saídas: {saidas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </p>
      <p className="text-blue-600 font-bold mt-2">
        Diferença (Saldo): {saldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </p>
    </div>
  )
}
