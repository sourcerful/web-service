import React, { SyntheticEvent } from "react";
import { useState } from "react";
import { AppBar, Typography, Toolbar, Tabs, Tab } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";


const Navbar = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState(0);

    const tabClick = (event: SyntheticEvent, value: any) => {
        setValue(value)
    }

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
                    <Typography color="common.white">Bamam</Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;