import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../../Firebase/Firebase.config'
export const UserContext = createContext()
const UserProvider = ({ children }) => {

  const [user, setUser] = useState(false)
  
  useEffect(() => {
    const unsusbribe = onAuthStateChanged(auth, (user_) => {
      if (user_) {
        const { displayName, email, phoneNumber, photoURL, uid } = user_
        setUser({
          displayName,
          email,
          phoneNumber,
          photoURL,
          uid
        })
      } else {
        setUser(null)
      }
    })
    return () => unsusbribe()
  }, [])

  const signUpUserWithGoogle = () => {

  }

  const signUpUserWithEmailAndPassword = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }

  const signInUserWithEmailAndPassword = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((response) => {
      console.log(response)
    }).catch((error) => {
      console.log(error)
    })
  }

  const updateUserProfile = (user_information) => {
    updateProfile(auth.currentUser, {
      displayName: user_information.name,
      photoURL: user_information.photo,
      phoneNumber: user_information.phone,
      password: user_information.password
    }).then(() => {
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <UserContext.Provider value={{
      user,
      signUpUserWithGoogle,
      signUpUserWithEmailAndPassword,
      signInUserWithEmailAndPassword,
      updateUserProfile

    }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider