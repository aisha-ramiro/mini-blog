import { useContext, createContext } from "react";
import React from 'react';

import { auth } from 'firebase/auth';

const AuthContext = createContext()

export function AuthProvider ({ children, value }){
  return <AuthContext.Provider value={value}> {children} </AuthContext.Provider>
}

export function useAuthValue(){
  return useContext(AuthContext)
}