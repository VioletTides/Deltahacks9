import React, { useContext, useState, useEffect } from "react"
import { auth, db } from "../firebase-config"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { set, ref } from "firebase/database";


const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password, lat, long) {
    createUserWithEmailAndPassword(auth, email, password).then((credentials)=> {
      const uid = credentials.user.uid;
      set(ref(db, `${uid}`), {
        email: email,
        inventory: {
          fruitveg: 0,
          dairyalt: 0,
          grains: 0,
          meatalt: 0
        },
        lat: lat,
        long: long,
      })
      return credentials
    }).catch((error)=>{
      return error
    })
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
