import { useContext, useState } from "react"
import { UserContext } from "../../../../Context/User/UserProvider"

export const useUpdateUserAccount = () => {

    const { updateUserProfile,user } = useContext(UserContext)

    const [values, setValues] = useState({
        password: '',
        confirmPassword: '',
        showPasswords: false,
        disabledButton: false,
    });

    const handleShowPasswords = () => {
        setValues({
            ...values,
            showPasswords: !values.showPasswords,
        });
    }
    const handleSamePasswords = async (e) => {
        setValues({
            ...values,
             confirmPassword : e.target.value
        })
        console.log(values.confirmPassword);
        if (values.confirmPassword !== values.password) {
            setValues({
                ...values,
                disabledButton: !values.disabledButton
            })
        } else {
            setValues({
                ...values,
                disabledButton: false
            })
        }

    }

    const updateUser = async (e) => {
        e.preventDefault()
        const formData = new FormData(await e.target)
        const user_information = Object.fromEntries(formData)
        await updateUserProfile(
            user_information
        )
    }

    return {
        updateUser,
        handleShowPasswords,
        handleSamePasswords,
        disabled: values.disabledButton,
        showPasswords: values.showPasswords,
        user
    }
}

export default useUpdateUserAccount