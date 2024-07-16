import React from 'react'
import HotWallet from '../store/HotWallet';
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
    return (
        <header>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton color='secondary' onClick={HotWallet.logout} sx={{ mr: 2 }}>
                        <LogoutIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {HotWallet.user?.nearAccountId}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </header>
    )
}

export default Header