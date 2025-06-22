import React  from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Perfil from 'pages/perfil';
import Projects from 'pages/projetos';
import AppBar from 'components/appbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { SnackbarProvider } from 'notistack';
import BlackThambaLandingPage from 'pages/blackthamba';

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Box
        className='wrapper'
        sx={{
          bgcolor: 'background.default',
          color: 'text.primary',
          width: '100%',
          minHeight: '100vh'
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
              <Route path="/blackthamba" element={<BlackThambaLandingPage />} />
            </Routes>
          </SnackbarProvider>
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;
