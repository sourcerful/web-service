import { SyntheticEvent, useContext } from "react";
import { useState } from "react";
import { AppBar, Typography, Toolbar, Tabs, Tab, IconButton } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import {StoreContext} from "../index";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const Navbar = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState(0);

    const tabClick = (event: SyntheticEvent, value: any) => {
        setValue(value)
    }

    const store = useContext(StoreContext)

    return (
        <>
            <AppBar sx={{ background: "#063970" }} position="sticky">
                <Toolbar>
                    <Link to="/">
                        <img src={require('../images/logo.png')} className="menu--logo" />
                    </Link>
                    <Tabs sx={{ marginRight: 'auto' }} textColor='inherit' value={value} onChange={tabClick} indicatorColor="secondary">
                        <Tab label={<span style={{ color: 'white' }}>Home</span>} onClick={() => navigate('/')}/>
                        <Tab label={<span style={{ color: 'white' }}>Activator</span>} onClick={() => navigate('/activator')}/>
                        <Tab label={<span style={{ color: 'white' }}>About</span>} onClick={() => navigate('/about')}/>
                    </Tabs>
                    <IconButton sx={{ ml: 1, marginRight: 1}} onClick={() => {store.stores.themeStore.toggle()}} color="inherit">
                    {store.stores.themeStore.isLightMode ? <Brightness4Icon fontSize="medium"/> : <Brightness7Icon fontSize="medium" />}
                    </IconButton>
                    <Typography color="common.white">Bamam</Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;