import { Button, IconButton, TextField } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import useUpdateUserAccount from './Hooks/useUpdateUserAccount'
import CustomSnackbars from '../../../Components/CustomSnackbars/CustomSnackbars';

const AccountView = () => {
    const action = useUpdateUserAccount()
    return (
        <div className="info__container">
            <form onSubmit={action.updateUser}>
                <TextField defaultValue={action.user.displayName} name='name' placeholder='Ingresa tu nombre' />
                <TextField defaultValue={action.user.phoneNumber} name='phone' placeholder='Ingresa tu Teléfono' />
                <TextField defaultValue={action.user.email} name='email' placeholder='Ingresa tu Email' />
                <TextField
                    defaultValue={action.user.password}
                    onChange={action.handleSamePasswords}
                    type={action.showPasswords ? "text" : "password"}
                    name='password'
                    placeholder='Ingresa tu Contraseña'
                />
                <TextField
                    defaultValue={action.user.password}
                    onChange={action.handleSamePasswords}
                    type={action.showPasswords ? "text" : "password"}
                    name='confirmPassword'
                    placeholder='Confirmar Contraseña'
                />
                <IconButton
                    onClick={action.handleShowPasswords}
                    color="primary" component="span" size='small'>
                    {action.showPasswords
                        ?
                        <>
                            <VisibilityOff />
                            Ocultar Contraseñas
                        </>
                        :
                        <>
                            <Visibility />
                            Mostrar Contraseñas
                        </>
                    }
                </IconButton>
                <Button
                    disabled={action.disabledButton}
                    type='submit' variant='outlined'
                >
                    Actualizar Datos
                </Button>
                <CustomSnackbars />
            </form>
        </div>
    )
}

export default AccountView