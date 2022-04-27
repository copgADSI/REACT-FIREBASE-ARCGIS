import { Button, TextField } from '@mui/material'
import React from 'react'
import useHookHandleSubmit from '../../Hooks/onSubmit/useHookHandleSubmit'

const SignInView = () => {
  const login =  useHookHandleSubmit()
  return (
    <div>
      <form onSubmit={login.handleSubmit}>
        <TextField
          placeholder='Ingresar email'
          type="email"
          name="email"
        />
        <TextField
          placeholder='Ingresar contraseña'
          type="password"
          name="password"
        />
        <Button
          color='primary'
          variant='outlined'
          type='submit'
        > Ingresar
        </Button>
      </form>
    </div>
  )
}

export default SignInView