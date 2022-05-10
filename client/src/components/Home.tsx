import '../index.css';
import { Box, CssBaseline, Theme, Typography } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';

const Home = () => {
    const navigate = useNavigate()

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

    let boxStyling = {'& > :not(style)': {m: 2}, marginBottom: 5, marginLeft: 10}

    return(
        <div>
            <CssBaseline/>
            <Box component="form" sx={boxStyling}>
                <Typography variant="h3" className={classes.typo}>Home</Typography>
                <Typography variant="h4" className={classes.typo}>Welcome to my website!</Typography>
                <Typography variant="h6" className={classes.typo}>This is the home page of the website, in order to use the
                service, hop over to the {<Link to="/activator"> Activator </Link>} page.</Typography>
                <Typography variant="h6" className={classes.typo}>This website is mainly used to transfer files to a certain
                destination.</Typography>
                <Typography variant="h6" className={classes.typo}>For further information head to the 
                {<Link to="/about"> About </Link>}page.</Typography>
            </Box>
        </div>
        );
}

export default Home;