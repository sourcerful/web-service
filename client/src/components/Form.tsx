import { ChangeEvent, useContext } from "react";
import { useState, useEffect } from "react";
import '../index.css';
import { createTheme, Theme } from '@mui/material/styles';
import { reqBodyDTO } from "../types/types";
import { Grid, Stack, TextField, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { validate } from '../services/validations';
import {StoreContext} from "../index";
import FileUploader from './FileUploader'


const useStyles: any = makeStyles((theme: Theme) => ({
    root: {
        '& .MuiFormControl-root': {
            width: "50%",
            margin: theme.spacing(1)
        }
    }
}))


const Form = () => {
    const store = useContext(StoreContext)

    const [values, setValues] = useState(store.stores.requestDataStore.requestBody) //change entirley
    const [validations, setValidations] = useState({IP: true, Port: true})
    const classes = useStyles()

    const checkIP = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target
        const validation = validate(name, value)

        setValidations({...validations, IP: validation})

        if(validation){
            setValues({...values, IP: value})
            console.log(value)
            store.stores.requestDataStore.requestBody.IP = value
        }
        else{
            store.stores.requestDataStore.requestBody.IP = ""
        } 
    }
    const checkPort = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target
        const validation = validate(name, value)

        setValidations({...validations, Port: validation})

        if(validation){
            setValues({...values, Port: value})
            console.log(value)
            store.stores.requestDataStore.requestBody.Port = value
        }
        else{
            store.stores.requestDataStore.requestBody.Port = ""
        }        
    }

    const textFields = <div><TextField label="IP Address" name="IP" variant="outlined" placeholder="e.g.,  192.168.0.1" onChange={checkIP}
                                helperText="Format: X.X.X.X" error={!validations.IP} color="secondary"/>
                            <TextField label="Port" name="Port" variant="outlined" placeholder="e.g.,  80" onChange={checkPort}
                                error={!validations.Port} helperText={!validations.Port ? "Invalid, must be: 1-65534" : ""} color="secondary"/></div>
                                
    return(
        <>
            <Grid container spacing={1}>
                <Grid item xs={7}>
                    <form className={classes.root}>
                        <Stack direction="column">
                            {textFields}
                        </Stack>    
                    </form>
                </Grid>
                <Grid item xs={5}>
                    <FileUploader/>
                </Grid>
            </Grid>                 
        </>
    );
}

export default Form;