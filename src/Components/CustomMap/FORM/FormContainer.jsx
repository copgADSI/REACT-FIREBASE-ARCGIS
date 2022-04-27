import { TextField } from '@mui/material'
import React from 'react'
import SingleCard from './SingleCard/SingleCard'
import "./Styles.css"
const FormContainer = () => {
    return (
        <div id='form__container'>
            <TextField type="text" placeholder='Buscar Ruta' style={{ width: '100%' }} />
            <SingleCard />
            <SingleCard />
        </div>
    )
}

export default FormContainer