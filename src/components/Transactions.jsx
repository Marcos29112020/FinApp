import React, { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'

export default function Transactions({ user }) {
  const storageKey = `transactions_${user.username}`
  const [transactions, setTransactions] = useLocalStorage(storageKey, [])
  const [desc, setDesc] = useState('')
  const [value, setValue] = useState('')
  const [editingId, setEditingId] = useState(null)

  const addTransaction = (type) => {
    if (!desc || !value) return
    const val = parseFloat(value)
    const signedValue = type === 'entrada' ? val : -val

    if (editingId) {
      setTransactions(transactions.map(t =>
        t.id === editingId ? { ...t, desc, value: signedValue } : t
      ))
      setEditingId(null)
    } else {
      setTransactions([...transactions, { id: Date.now(), desc, value: signedValue }])
    }
    setDesc('')
    setValue('')
  }

  const editTransaction = (t) => {
    setDesc(t.desc)
    setValue(Math.abs(t.value))
    setEditingId(t.id)
  }

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id))
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Transações</h2>
      <ul className="space-y-2 mb-4">
        {transactions.map(t => (
          <li key={t.id} className="flex justify-between items-center">
            <span>{t.desc}</span>
            <span className={t.value < 0 ? 'text-red-500' : 'text-green-500'}>
              {t.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
            <div className="flex gap-2">
              <button onClick={() => editTransaction(t)} className="bg-yellow-500 text-white px-2 py-1 rounded text-sm">Editar</button>
              <button onClick={() => deleteTransaction(t.id)} className="bg-red-500 text-white px-2 py-1 rounded text-sm">Excluir</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Descrição"
          value={desc}
          onChange={e => setDesc(e.target.value)}
          className="border rounded px-2 py-1 flex-1"
        />
        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={e => setValue(e.target.value)}
          className="border rounded px-2 py-1 w-32"
        />
        <button
          onClick={() => addTransaction('entrada')}
          className="bg-green-600 text-white px-3 py-1 rounded"
        >
          Entrada
        </button>
        <button
          onClick={() => addTransaction('saida')}
          className="bg-red-600 text-white px-3 py-1 rounded"
        >
          Saída
        </button>
      </div>
    </div>
  )
}
