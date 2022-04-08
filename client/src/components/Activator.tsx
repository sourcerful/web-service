import React from "react";
import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch"
import FormGroup from "@mui/material/FormGroup"
import { FormControl, FormLabel, FormControlLabel, Typography, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme, Theme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import { blue } from "@mui/material/colors";
import { requestPostActivator } from "../services/requests";

const Activator = () => {
    const [checked, setChecked] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

    useEffect(() => {
      console.log(checked)
      requestPostActivator({activator: checked})
    }, [checked])
   
    const useStyles: any = makeStyles((theme: Theme) => ({
        typo: {
            textAlign: "center",    
        }
    }));

    const theme = createTheme({
        palette: {
          primary: {
            main: '#fefefe'
          },
          secondary: blue,
          background: {
            default: "#dedede"
          }
        }, 
        typography: {
          fontFamily: 'Quicksand',
          fontWeightLight: 400,
          fontWeightRegular: 400,
          fontWeightMedium: 400,
          fontWeightBold: 400
        }
      });
       
    const classes = useStyles();

    return (
        <>   
            <ThemeProvider theme={theme}>
            <CssBaseline/>
                <Typography variant="h2" className={classes.typo}>Service Activator</Typography>
                <FormControl sx={{marginLeft: 10}}>
                    <FormLabel focused={false}>Press to activate the service:</FormLabel>
                    <FormGroup>
                        <FormControlLabel control={<Switch checked={checked} onChange={handleChange} name="activator" color="secondary"/>} 
                            label="Activate"/>
                    </FormGroup>
                </FormControl>
            </ThemeProvider>
        </>
    )
}

export default Activator;