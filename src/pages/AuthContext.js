import React, { useContext, useState, useEffect } from "react"
import { auth, db } from "../firebase-config"
import { getDatabase, onValue, set, ref } from "firebase/database";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "@firebase/auth"
import { signOut } from "firebase/auth"

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
    signOut(auth)
  }

  function resetPassword(email) {
    return sendPasswordResetEmail(auth, email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  function get() {

  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user)
        setLoading(false)
      } else {
        setCurrentUser(null)
        setLoading(false)
      }
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
