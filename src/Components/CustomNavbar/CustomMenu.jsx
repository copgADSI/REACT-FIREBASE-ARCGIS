import React from 'react'
import { IconButton, Menu } from '@mui/material'
import { Box } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu';
import useResponsiveAppBar from './Hooks/ResponsiveAppBar/useResponsiveAppBar';
import { pages } from './pages';
import CustomMenuItem from './CustomMenuItem';


const CustomMenu = () => {
    const navbar = useResponsiveAppBar()
    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={navbar.handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={navbar.anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(navbar.anchorElNav)}
                onClose={navbar.handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}

            >
                {pages.map((page,index) => (
                    <CustomMenuItem key={index} page={page} />
                ))}
            </Menu>
        </Box>
    )
}

export default CustomMenu