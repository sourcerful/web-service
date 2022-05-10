import '../index.css';
import { Box, CssBaseline, List, ListItem, Theme, Typography, Link } from "@mui/material";
import { makeStyles } from '@mui/styles';

const About = () => {
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

    let boxStyling = {'& > :not(style)': {m: 2}, marginBottom: 5, marginLeft: 10, marginRight: 10}

    return(
        <div>
            <CssBaseline/>
            <Box component="form" sx={boxStyling}>
                <Typography variant="h3" className={classes.typo}>About</Typography>
                <Typography variant="h4" className={classes.typo}>FTP Sharpener - What is it?</Typography>
                <Typography variant="h6" className={classes.typo}>This is the name of my project, this project focuses mainly 
                on sending files to a specific destination, in simplex mode. The project serves as a finals project for yud daled class, and
                as a project for the army.</Typography>
                <Typography variant="h6" className={classes.typo}>In Simplex mode, the communication is unidirectional, 
                as on a one-way street. Only one of the two devices on a link can transmit, the other can only receive.</Typography>                
                <Typography variant="h4" className={classes.typo}>How does it happen?</Typography>
                <Typography variant="h6" className={classes.typo}>The main service is written in C++, split into 2 parts:</Typography>
                <List dense={true}>
                    <ListItem>- Server side: responsible for getting the file to send to the destination.</ListItem>
                    <ListItem>- Client side: serves as the program to use in order to get the file.</ListItem>
                </List>
                <Typography variant="h6" className={classes.typo}>
                The data is getting encoded using FEC in the server, and decoded using FEC in the client.
                </Typography>
                <Typography variant="h4" className={classes.typo}>Technologies used</Typography>
                <Typography variant="h6" className={classes.typo}>The technologies (protocols, programs, etc...) used are:</Typography>
                <List dense={true}>
                    <ListItem>- UDP protocol, in order to send the data in simplex mode, on the C++ server</ListItem>   
                    <ListItem>- TCP protocol, for main communication between the backend Node.js server and the C++ server.</ListItem>                 
                    <ListItem>- HTTP protocol, for communication between the frontend and the backend.</ListItem>
                    <ListItem>- FEC library, wirehair by catid-{<Link color="secondary" target="_blank" href="https://github.com/catid/wirehair">
                     Github Library Link. </Link>} </ListItem>
                </List>
            </Box>
        </div>
        );
}

export default About;