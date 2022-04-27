import { MenuItem, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import useResponsiveAppBar from './Hooks/ResponsiveAppBar/useResponsiveAppBar'

const CustomMenuItem = ({ page }) => {
    const navbar = useResponsiveAppBar()
    return (
        <MenuItem key={page} onClick={navbar.handleCloseNavMenu}>
            <Typography textAlign="center">
                <NavLink to={page.path}
                    style={isActive => ({
                        color: isActive ? "black" : "white"
                    })}
                >
                    {page.text}
                </NavLink>
            </Typography>
        </MenuItem>
    )
}

export default CustomMenuItem