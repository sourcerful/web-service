import {createTheme} from "@mui/material";
import { blue, red } from '@mui/material/colors';

const mainTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: "#FFFFFF",
      default: "#DEDEDE",
    },
    primary: {
      main: "#f3f3f3",
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
