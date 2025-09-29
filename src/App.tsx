import './App.css'
import { Home } from './pages/Home'
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 970,
      lg: 1200,
      xl: 1536,
    },
  },
});

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </>
  )
}

export default App
