import React from "react";
import {createTheme} from "@mui/material";
import { blue, red } from '@mui/material/colors';

const mainTheme = createTheme({
    palette: {
        mode: "dark",
        background: {
            paper: "#18181a",
            default: "#091522",
        },
        primary: {
          main: "#0a1929",
        },
        secondary: blue,
        error: red,
      },
    typography: {
        fontFamily: 'Assistant',
          fontWeightLight: 400,
          fontWeightRegular: 400,
          fontWeightMedium: 400,
          fontWeightBold: 400
      },  
    });
    
export default mainTheme;
