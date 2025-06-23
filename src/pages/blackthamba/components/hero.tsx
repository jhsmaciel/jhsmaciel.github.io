import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const StyledBox = styled('div')(({ theme }) => ({
    alignSelf: 'center',
    width: '100%',
    height: 400,
    marginTop: theme.spacing(8),
    borderRadius: theme.shape.borderRadius,
    outline: '6px solid',
    border: '1px solid',
    backgroundSize: 'cover',
    [theme.breakpoints.up('sm')]: {
        marginTop: theme.spacing(10),
        height: 700,
    },
    boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
    backgroundImage: `url(${process.env.PUBLIC_URL}/img/master-intruder.png)`,
    outlineColor: 'hsla(220, 20%, 42%, 0.1)',
    borderColor: theme.palette.grey[700],
}));


export default function Hero() {
    return (
        <Box
            id="inicio"
            sx={(theme) => ({
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundImage:
                    'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
            })}
        >
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 14, sm: 20 },
                    pb: { xs: 8, sm: 12 },
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'center',
                        fontSize: 'clamp(3rem, 10vw, 3.5rem)',
                        color: 'primary.main',
                    }}
                >
                    Black Thamba
                </Typography>
                <Typography
                    sx={{
                        textAlign: 'center',
                        color: 'text.secondary',
                        width: { sm: '100%', md: '80%' },
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis sapien turpis.
                    Nullam vitae viverra tellus, at dictum mauris. Aliquam erat volutpat.
                    Etiam in nisl ut ipsum lobortis fermentum a ac lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                </Typography>
                <StyledBox id="image" />
            </Container>
        </Box>
    );
}