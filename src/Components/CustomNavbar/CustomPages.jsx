import { Badge, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import { pages } from './pages'
import { NavLink } from 'react-router-dom';

const CustomPages = () => {
    let activeStyle = {
        color: "black",
    };
    return (
        <Box
            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
        >
            {pages.map((page, index) =>
                <NavLink
                    style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                    key={index}
                    to={page.path}
                >
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        {page.notifications ?
                            <Badge badgeContent={4} color="error">
                                {page.icon}
                            </Badge>
                            :
                            <Badge color="error">
                                {page.icon}
                            </Badge>
                        }
                    </IconButton>
                </NavLink>
            )}
        </Box>

    )
}

export default CustomPages