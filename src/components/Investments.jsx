import React, { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage.js'

export default function Investments({ user }) {
  const storageKey = `investments_${user.username}`
  const [investments, setInvestments] = useLocalStorage(storageKey, [])
  const [asset, setAsset] = useState('')
  const [value, setValue] = useState('')
  const [editingId, setEditingId] = useState(null)

  const addInvestment = (type) => {
    if (!asset || !value) return
    const val = parseFloat(value)
    const signedValue = type === 'entrada' ? val : -val

    if (editingId) {
      setInvestments(investments.map(i =>
        i.id === editingId ? { ...i, asset, value: signedValue } : i
      ))
      setEditingId(null)
    } else {
      setInvestments([...investments, { id: Date.now(), asset, value: signedValue }])
    }
    setAsset('')
    setValue('')
  }

  const editInvestment = (i) => {
    setAsset(i.asset)
    setValue(Math.abs(i.value))
    setEditingId(i.id)
  }

  const deleteInvestment = (id) => {
    setInvestments(investments.filter(i => i.id !== id))
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Investimentos</h2>
      <ul className="space-y-2 mb-4">
        {investments.map(i => (
          <li key={i.id} className="flex justify-between items-center">
            <span>{i.asset}</span>
            <span className={i.value < 0 ? 'text-red-500' : 'text-green-500'}>
              {i.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => editInvestment(i)}
                className="bg-yellow-500 text-white px-2 py-1 rounded text-sm"
              >
                Editar
              </button>
              <button
                onClick={() => deleteInvestment(i.id)}
                className="bg-red-500 text-white px-2 py-1 rounded text-sm"
              >
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Ativo"
          value={asset}
          onChange={e => setAsset(e.target.value)}
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
          onClick={() => addInvestment('entrada')}
          className="bg-green-600 text-white px-3 py-1 rounded"
        >
          Aporte
        </button>
        <button
          onClick={() => addInvestment('saida')}
          className="bg-red-600 text-white px-3 py-1 rounded"
        >
          Retirada
        </button>
      </div>
    </div>
  )
}
