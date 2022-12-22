import React from 'react'

import styles from './Login.module.css'

import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'


const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { createUser, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError("")

    const user = {
      email,
      password
    }

    const res = await createUser(user)

    console.log('user', user)

  }

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça login para continuar...</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Email: </span>
          <input
            type="email"
            name="displayEmail"
            required
            placeholder='Email do usuário'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha: </span>
          <input
            type="password"
            name="displayPassword"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Senha do usuário' />
        </label>
        {!loading && <button className={styles.btn}>Entrar</button>}
        {loading && <button className={styles.btn} disabled>Aguarde...</button>}
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Login