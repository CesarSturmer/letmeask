import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { firebase, auth } from '../services/firebase'
type User = {
  id: string;
  name: string;
  avatar: string;
}

//como é uma função assíncrona ele precisar ser do tipo Promisse, dentro da promessa n tem retorno
type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType)


export function AuthContextProvider (props: AuthContextProviderProps) {

  const [user, setUser] = useState<User>()
  //unsubscribe descadastra desse evento, deixando de ficar ouvindo o eventlistener
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, photoURL, uid } = user
        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account')
        }
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL,
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()

    const result = await auth.signInWithPopup(provider)
    if (result.user) {
      const { displayName, photoURL, uid } = result.user

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account')
      }
      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      })
    }
  }
  return (
  <AuthContext.Provider value={{ user, signInWithGoogle }}>
    {props.children}
  </AuthContext.Provider>

  )
}