import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../Context/User/UserProvider'

const PrivateRoutes = ({ children }) => {
    const { user } = useContext(UserContext)
    if (!user) {
        return <Navigate to="/login" />
    } else {
        return children
    }
}

export default PrivateRoutes