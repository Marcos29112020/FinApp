import React from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'
import useLocalStorage from '../hooks/useLocalStorage.js'

export default function Dashboard({ user }) {
  // Recupera dados do usuário logado
  const [transactions] = useLocalStorage(`transactions_${user.username}`, [])
  const [investments] = useLocalStorage(`investments_${user.username}`, [])

  // Cálculos
  const entradas = transactions.filter(t => t.value > 0).reduce((acc, t) => acc + t.value, 0)
  const saidas = transactions.filter(t => t.value < 0).reduce((acc, t) => acc + t.value, 0)
  const saldoTransacoes = entradas + saidas
  const saldoInvestimentos = investments.reduce((acc, i) => acc + i.value, 0)
  const saldoTotal = saldoTransacoes + saldoInvestimentos

  // Dados para gráfico: evolução do saldo ao longo das transações
  let acumulado = 0
  const data = transactions.map((t, idx) => {
    acumulado += t.value
    return { name: `Mov ${idx + 1}`, saldo: acumulado }
  })

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Resumo Financeiro
      </h2>

      {/* Totais */}
      <div className="mb-6 space-y-1">
        <p className="text-green-600 font-semibold">
          Entradas: {entradas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
        <p className="text-red-600 font-semibold">
          Saídas: {saidas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
        <p className="text-blue-600 font-bold">
          Saldo Transações: {saldoTransacoes.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
        <p className="text-purple-600 font-bold">
          Saldo Investimentos: {saldoInvestimentos.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
        <p className="text-xl font-bold text-gray-900 dark:text-gray-100 mt-2">
          Saldo Total: {saldoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </p>
      </div>

      {/* Gráfico */}
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="saldo" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
