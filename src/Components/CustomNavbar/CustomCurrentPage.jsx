import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const CustomCurrentPage = () => {
    return (
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 4, display: { xs: 'none', md: 'flex' } }}
        >
            <Link to="/"> RoadTrippin</Link>
        </Typography>
    )
}

export default CustomCurrentPage