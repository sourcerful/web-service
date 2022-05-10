import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Switch from "@mui/material/Switch"
import FormGroup from "@mui/material/FormGroup"
import { FormControl, FormLabel, Typography, CssBaseline, Box, Grid, Paper, Fab } from "@mui/material";
import { Theme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import { requestPostActivator } from "../services/requests";
import {StoreContext} from "../index";
import Form from "./Form"

const Activator = () => {
    const [checked, setChecked] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }

    const store = useContext(StoreContext)

    useEffect(() => {
      console.log(checked) //change to submit?
      requestPostActivator({activator: checked})
    }, [checked])
   
    const useStyles: any = makeStyles((theme: Theme) => ({
        typo: {
            textAlign: "left",
            marginLeft: "80px", 
            marginTop: "5px"   
        },
        pageContent: {
          margin: theme.spacing(5),
          padding: theme.spacing(7)
        }
    }));

    const classes = useStyles();
    let controlSwitch = <Grid component="label" container alignItems="center" spacing={1}>
                            <Grid item>Off</Grid>
                            <Grid item>
                                <Switch checked={checked} onChange={handleChange} name="activator" color="secondary"/>
                            </Grid>
                            <Grid item>On</Grid>
                        </Grid>
    
    let topBoxStyling = {'& > :not(style)': {m: 2, width: '20ch'}}
    let botBoxStyling = {'& > :not(style)': {m: 2, width: '120ch'}, marginBottom: 2}

    const checkForm = () => {
      //on submit, post to server
      console.log("submitted")
      
    }

    return (
        <>   
            <CssBaseline/>              
            <FormControl sx={{marginLeft: 10}}>
              <Box component="form" sx={topBoxStyling}>
                <Typography variant="h3" className={classes.typo}>Service Activator</Typography>
                <FormGroup>
                  <FormLabel focused={false}>Toggle to activate the service:</FormLabel>
                  {controlSwitch}                                    
                </FormGroup>   
              </Box>       
              <Box component="form" sx={botBoxStyling}>    
                {checked === true && <Paper className={classes.pageContent} elevation={6} variant="outlined">
                                        <Form/>
                                        <Fab color="secondary" variant="extended" size="large" sx={{marginTop: 3}} 
                                              onClick={checkForm}>Submit</Fab>   
                                      </Paper>}       
              </Box>                       
            </FormControl>
        </>
    )
}

export default Activator;