import { Alert, Snackbar } from '@mui/material'
import React from 'react'
import useCustomizedSnackbars from './Hooks/useCustomizedSnackbars'

const CustomSnackbars = () => {
    const action = useCustomizedSnackbars()
    console.log(action.alert.message)
    return (
        <Snackbar open={true} autoHideDuration={6000}>
            <Alert onClose={action.handleClose} severity="success" sx={{ width: '100%' }}>
               {action.alert.message}
            </Alert>
        </Snackbar>
    )
}

export default CustomSnackbars