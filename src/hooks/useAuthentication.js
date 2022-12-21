import { db } from '../firebase/config'

import {
  getAuth,
  createUserWithEmailAndPassword,
  SignInWithEmailAndPassword,
  updateProfile,
  signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const [cancelled, setCancelled] = useState(false)

  const auth = getAuth()

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const createUser = async (data) => {
    checkIfIsCancelled()
    setLoading(true)

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      await updateProfile(user, {
        displayName: data.displayName
      })
      setLoading(false)
      setError(null)

      return user

    } catch (error) {
      let systemErrorMessage

      if (error.message.includes("password")) {
        systemErrorMessage = "A senha precisa ter no mínimo 6 caracteres"
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado!"
      } else {
        systemErrorMessage = "Ocorreu um erro, tente mais tarde"
      }
      setError(systemErrorMessage)
    }
    setLoading(false);
  }

  const logout = () => {
    checkIfIsCancelled()

    signOut(auth)
  }

  useEffect(() => {
    return setCancelled(true)
  }, [])

  return {
    auth,
    createUser,
    error,
    loading,
    logout
  }
}