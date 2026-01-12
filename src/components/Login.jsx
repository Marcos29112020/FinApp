import React, { useState } from 'react'

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [mode, setMode] = useState('login') // alterna entre login e cadastro

  // Recupera lista de usuários
  const storedUsers = JSON.parse(localStorage.getItem('users')) || []

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!username || !password) {
      alert('Preencha usuário e senha!')
      return
    }

    if (mode === 'register') {
      // Cadastro
      if (password.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres!')
        return
      }
      if (password !== confirmPassword) {
        alert('As senhas não conferem!')
        return
      }
      // Verifica se já existe
      if (storedUsers.find(u => u.username === username)) {
        alert('Usuário já existe!')
        return
      }
      const newUsers = [...storedUsers, { username, password }]
      localStorage.setItem('users', JSON.stringify(newUsers))
      alert('Cadastro realizado com sucesso!')
      onLogin({ username })
    } else {
      // Login
      const user = storedUsers.find(u => u.username === username && u.password === password)
      if (user) {
        onLogin({ username })
      } else {
        alert('Usuário ou senha inválidos!')
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow w-80 space-y-4"
      >
        <h2 className="text-xl font-bold text-center text-blue-600 dark:text-blue-400">
          {mode === 'login' ? 'Login FinApp' : 'Cadastro FinApp'}
        </h2>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded px-3 py-2"
        />
        {mode === 'register' && (
          <input
            type="password"
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          {mode === 'login' ? 'Entrar' : 'Cadastrar'}
        </button>

        {/* Alternar entre login e cadastro */}
        <p className="text-sm text-center text-gray-600 dark:text-gray-300 mt-2">
          {mode === 'login' ? (
            <>
              Não tem conta?{' '}
              <button
                type="button"
                onClick={() => setMode('register')}
                className="text-blue-600 underline"
              >
                Cadastre-se
              </button>
            </>
          ) : (
            <>
              Já tem conta?{' '}
              <button
                type="button"
                onClick={() => setMode('login')}
                className="text-blue-600 underline"
              >
                Faça login
              </button>
            </>
          )}
        </p>
      </form>
    </div>
  )
}
