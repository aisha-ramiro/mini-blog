import { useState, useEffect } from 'react'

import styles from './Register.module.css'

const Register = () => {

  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    
    setError("")
  
    const user = {
      displayName,
      email,
      password
    }

    console.log('user', user)

    if(password !== confirmPassword){
      setError("As senhas precisam ser iguais!")
      return
    }
    
  }

  return (
    <div>
      <h1>Cadastre-se e comece a publicar!</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome: </span>
          <input 
          type="text" 
          name="displayName" 
          required 
          placeholder='Nome do usuário'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
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
        <label>
          <span>Confirme sua senha: </span>
          <input 
          type="password" 
          name="confirmPassword" 
          required 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder='Confirmação de senha' />
        </label>

        <button className={styles.btn}>Cadastrar</button>
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}

export default Register