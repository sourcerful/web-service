import { ChangeEvent } from "react";
import { useState } from "react";
import '../index.css';
import { createTheme, Theme } from '@mui/material/styles';
import { reqBodyDTO } from "../types/types";
import { Fab, Grid, Stack, TextField, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';
import {validateIP, validatePort} from '../services/validations';
import FileUploader from './FileUploader'

const initialValues: reqBodyDTO = {
    activator: false
}

const useStyles: any = makeStyles((theme: Theme) => ({
    root: {
        '& .MuiFormControl-root': {
            width: "50%",
            margin: theme.spacing(1)
        }
    }
}))


const Form = () => {
    
    const [values, setValues] = useState(initialValues)
    const [validations, setValidations] = useState({IP: true, Port: true})
    const classes = useStyles()

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target
        
        if(name === "IP"){
            setValidations({...validations, IP: validateIP(value)})
        }
        else if(name === "Port"){
            setValidations({...validations, Port: validatePort(value)})
        }

        if(validations.IP || validations.Port){
            setValues({
                ...values,
                [name]: value
            })
        }
    }

    const textFields = <div><TextField label="IP Address" name="IP" variant="outlined" placeholder="e.g.,  192.168.0.1" onChange={handleChange}
                                helperText="Format: X.X.X.X" error={!validations.IP} color="secondary"/>
                            <TextField label="Port" name="Port" variant="outlined" placeholder="e.g.,  80" onChange={handleChange}
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
            <Fab color="secondary" variant="extended" size="large" sx={{marginTop: 3}}>
                Submit
            </Fab>        
        </>
    );
}

export default Form;