import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Activator from './components/Activator';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { Container, CssBaseline, ThemeProvider, Box, Paper } from '@mui/material';
import About from './components/About';
import darkTheme from './services/darkTheme';
import lightTheme from './services/lightTheme';
import { observer } from 'mobx-react'; 
import {useContext} from 'react';
import {StoreContext} from './index'

function App() {
  
  const store = useContext(StoreContext)
  const applyTheme = store.stores.themeStore.isLightMode

  return (
    <ThemeProvider theme={applyTheme ? lightTheme : darkTheme}>
    <CssBaseline/>
      <Router>
        <Navbar/>
        <Container fixed>
          <Paper sx={{backgroundColor: 'primary.main', flexDirection: 'column', marginTop: 2, marginBottom: 2, padding: 2}}>
            <Routes>
                <Route path="/" element={<Home/>}/>          
                <Route path="/activator" element={<Activator/>}/>
                <Route path="/about" element={<About/>}/>          
            </Routes>
          </Paper>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default observer(App);
