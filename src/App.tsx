import React  from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Perfil from 'pages/perfil';
import Projects from 'pages/projetos';
import SearchAppBar from 'components/appbar';
import { ThemeProvider } from 'contexts/ThemeContext';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { SnackbarProvider } from 'notistack';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <SearchAppBar />
        <Box
          className='wrapper'
          sx={{
            bgcolor: 'background.default',
            color: 'text.primary',
            width: '100%',
          }}
        >
          <Container
            maxWidth="xl"
            className='wrapper'
            sx={{
              bgcolor: 'background.default',
              color: 'text.primary',
            }}
          >
            <SnackbarProvider maxSnack={3}>
              <Routes>
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/projetos" element={<Projects />} />
              </Routes>
            </SnackbarProvider>
          </Container>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
