import { AppBar, Container, Toolbar } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import CustomCurrentPage from './CustomCurrentPage'
import CustomMenu from './CustomMenu'
import CustomOpenSettings from './CustomOpenSettings'
import CustomPages from './CustomPages'

const Navbar = () => {
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <CustomCurrentPage />
                        <CustomMenu />
                        <CustomPages />
                        <CustomOpenSettings />
                    </Toolbar>

                </Container>
            </AppBar>
            <Outlet />
        </>
    )
}

export default Navbar