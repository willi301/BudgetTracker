import React from 'react';
import './navbar.css';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import { Button } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#01579b',
    },
    secondary: {
      main: '#4a148c',
    },
  },
});

function NavBar() {

  return (
    <ThemeProvider theme={theme}>
        <div className='main-nav'>
            <p>
                BudgetTracker
            </p>

            <Button 
                color='secondary' variant="contained" size="small"
                sx={{
                    fontSize: "16px", // Adjust font size
                  }}
            >
                Log In
            </Button>
        </div>
    </ThemeProvider>
  );
}

export default NavBar;
