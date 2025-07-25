import React from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Perfil from 'pages/perfil';
import Projects from 'pages/projetos';
import AppBar from 'components/appbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { SnackbarProvider } from 'notistack';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function PageSelector() {
  const query = useQuery();
  const page = query.get('page');

  const pages = {
    'perfil': <Perfil />,
    'projetos': <Projects />
  }
  return pages[page as keyof typeof pages] ?? <Projects />
}

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
            <PageSelector />
          </SnackbarProvider>
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;
