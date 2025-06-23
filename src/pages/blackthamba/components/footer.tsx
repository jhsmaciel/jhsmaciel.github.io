import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Instagram } from '@mui/icons-material';
import { blackThambaSections } from 'components/appbar';
import Stack from '@mui/material/Stack';

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
      {'Copyright © '}
      <Link color="text.secondary" href="https://jhsmaciel.github.io/blackthamba">
        Black Thamba
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            minWidth: { xs: '100%', sm: '60%' },
          }}
        >
          <Box sx={{ width: { xs: '80%', sm: '80%' } }}>
            <Typography variant="body2" gutterBottom sx={{ fontWeight: 600, mt: 2 }}>
            Sugestões e Feedbacks
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
            Sua opinião é fundamental. Tem ideias para novos roles, sugestões para o nosso estatuto ou qualquer feedback? Este espaço é seu. A irmandade se fortalece com a voz de cada um. 
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' },
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
            Seções
          </Typography>
          {blackThambaSections.map((section) => (
            <Button
            key={section.key}
            style={{
              textTransform: "none",
              background: 'transparent',
              padding: 0,
            }}
            type='reset'
            onClick={() => {
              const element = document.getElementById(section.key);
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.location.hash = `#${section.key}`;
              }
            }}
          >
            {section.name}
          </Button>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color="text.secondary" variant="body2" href="#">
            Privacy Policy
          </Link>
          <Typography sx={{ display: 'inline', mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" variant="body2" href="#">
            Terms of Service
          </Link>
          <Copyright />
          <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
            Developed by&nbsp;
            <Link color="inherit" href="https://github.com/jhsmaciel" target="_blank" rel="noopener">
              @jhsmaciel
            </Link>
          </Typography>
        </div>
        <Stack
          direction="row"
          spacing={1}
          sx={{ justifyContent: 'left', color: 'text.secondary' }}
        >
          <IconButton
            color="inherit"
            size="small"
            href="https://www.instagram.com/blackthamba/"
            aria-label="instagram"
            sx={{alignSelf: 'center'}}
          >
            <Instagram />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}