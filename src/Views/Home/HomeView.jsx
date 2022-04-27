import React, { useContext } from 'react'
import { UserContext } from '../../Context/User/UserProvider'

const HomeView = () => {
  const { user } = useContext(UserContext)
  return (
    <div>
      Bienvenido {user.displatName ?? user.email}
    </div>
  )
}

export default HomeView