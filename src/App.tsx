import './App.css';
import { Home } from './pages/Home';
import { createTheme, ThemeProvider } from '@mui/material';
import { Footer } from './components/sections/Footer/Footer';
import { NavBar } from './components/blocks/NavBar';

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
      <NavBar />
      <ThemeProvider theme={theme}>
        <Home />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
