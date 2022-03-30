import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Activator from './components/Activator';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { createTheme } from '@mui/material/styles';
import { Container, CssBaseline, ThemeProvider, Box } from '@mui/material';
import { blue } from '@mui/material/colors';
import About from './components/About';
 
function App() {
  let theme = createTheme({
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
  }) 
  
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      <Router>
        <Navbar/>
        <Container fixed>
          <Box sx={{backgroundColor: "#efefef", height: '90vh'}}>
            <Routes>
                <Route path="/home" element={<Home/>}/>          
                <Route path="/activator" element={<Activator/>}/>
                <Route path="/about" element={<About/>}/>          
            </Routes>
          </Box>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
