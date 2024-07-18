import React from 'react'
import HotWallet from '../store/HotWallet';
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';

const Header = () => {
    return (
            <AppBar position="sticky" >
                <Toolbar variant='dense'>
                    <IconButton color='secondary' onClick={HotWallet.logout} sx={{ mr: 2 }}>
                        <LogoutIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {HotWallet.user?.nearAccountId}
                    </Typography>
                </Toolbar>
            </AppBar>
    )
}

export default Header