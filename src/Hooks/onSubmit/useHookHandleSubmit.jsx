import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/User/UserProvider'

export const useHookHandleSubmit = () => {
    const {
        signUpUserWithEmailAndPassword,
        signInUserWithEmailAndPassword
    } = useContext(UserContext)
    const navigate = useNavigate()
    const [values, setValues] = useState({
        uid: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        avatar: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const response = Object.fromEntries(data)
        await signInUserWithEmailAndPassword(
            response.email,
            response.password
        )
    }

    const signUpUser = async () => {
        await signUpUserWithEmailAndPassword(
            values.email,
            values.password
        )
        navigate("/login")
    }
    return {
        handleSubmit,
        values,
        setValues,
        signUpUser
    }
}

export default useHookHandleSubmit