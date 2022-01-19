import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#fffd61',
      main: '#ffca28',
      dark: '#c79a00',
      contrastText: '#000',
    },
    secondary: {
      light: '#76d275',
      main: '#43a047',
      dark: '#00701a',
      contrastText: '#000',
    },
  },
});

class Country extends Component {
    state = { 
        name: 'United States',
        gold: 0,
     } 
    handleIncrement = () =>{
        this.setState({ gold: this.state.gold+1 })
    } 
    render() { 
        return (
            <ThemeProvider theme={theme}>
                <Box className='Country' sx={{ boxShadow:2, width:300, mx:'auto' }}>
                    <Avatar sx={{ bgcolor: 'primary.main', mx:2}}>{ this.state.gold }</Avatar>
                    <Button variant="outlined" color="secondary" style={{ cursor:'pointer', display: 'inline' }} sx={{ m: 0, p:0, mx: 2}} onClick={ this.handleIncrement }>+</Button>  
                    { this.state.name }
                </Box>
            </ThemeProvider>
        );
    }
}
 
export default Country;