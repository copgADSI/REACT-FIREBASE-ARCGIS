import { Button } from '@mui/material'
import { Info, DirectionsBike } from '@mui/icons-material';


const SingleCard = () => {
    return (
        <div style={{ marginTop: '15px' }} >
            Ruta: Sogamoso- Pantano de Vargas
            <Button
                size='small'
                variant='outlined'
                endIcon={<Info />}
                style={{ width: '40%' }}
            >
                Ver Detalles
            </Button>

            <Button
                size='small'
                variant='contained'
                endIcon={<DirectionsBike />}
                style={{ width: '40%' }}
            >Ver en el Mapa</Button>
        </div>
    )
}

export default SingleCard