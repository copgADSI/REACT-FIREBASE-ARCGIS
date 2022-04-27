import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import useResponsiveAppBar from './Hooks/ResponsiveAppBar/useResponsiveAppBar'
import { settings } from './settings'

const CustomOpenSettings = () => {
    const navbar = useResponsiveAppBar()
    return (

        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={navbar.handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={navbar.anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(navbar.anchorElUser)}
                onClose={navbar.handleCloseUserMenu}
            >
                {settings.map((setting, index) => (
                    <MenuItem key={index} onClick={navbar.handleCloseUserMenu}>
                        <Typography textAlign="center">
                            <Link style={{ color: 'black' }} to={setting.path} >
                                {setting.text}</Link>
                        </Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

export default CustomOpenSettings