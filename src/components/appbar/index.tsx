import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { Divider, Drawer, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from 'contexts/ThemeContext';
  
const pages = [{ path: 'projetos', nome: 'Projetos' },{ path: 'perfil', nome: 'Perfil'}];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [drawerVisible, setDrawerVisible] = React.useState<boolean>(false);

  const { changeTheme, mode } = useTheme();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if ( event.type === 'keydown' && 
        ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerVisible(it => !it);
  };

  return (
    <AppBar
      position="sticky"
      color='inherit'
      elevation={0}
      style={{
        opacity: 0.9
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            <Tooltip title="Logo">
              <img src={`img/logo${mode === 'light' ? "Preto" : ''}.png`} alt="Logo" width="55" />
            </Tooltip>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.path} onClick={handleCloseNavMenu}>
                    <NavLink
                      style={({ isActive }) => {
                        let style: React.CSSProperties = {
                          color: "transparent",
                          textDecorationColor: "transparent",
                        }
                        if (!isActive) {
                          style.background = "transparent"
                          style.color = mode === 'light' ? "black" : 'white'
                        }
                        return style;
                      }}
                      className="arco-iris"
                      to={page.path}
                      key={page.path}
                    >
                        {page.nome}
                    </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            <img src="img/logoPreto.png" alt="Logo" width="55" />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <Button
                  key={page.path}
                  style={{
                    textTransform: "none"
                  }}
                >
                  <NavLink
                      style={({ isActive }) => {
                          let style: React.CSSProperties = {
                            color: "transparent",
                            textDecorationColor: "transparent",
                          }
                          if (!isActive) {
                            style.background = "transparent"
                            style.color = mode === 'light' ? "black" : 'white'
                          }
                          return style;
                      }}
                      className="arco-iris"
                      to={page.path}
                      key={page.path}
                  >
                      {page.nome}
                  </NavLink>
                </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Abrir configurações">
              <IconButton 
                onClick={toggleDrawer}
                aria-label="settings" 
                style={{
                  borderStyle: "solid",
                  borderColor: "rgb(231, 235, 240)",
                  borderWidth: "thin",
                  height: 38,
                  width: 38,
                  borderRadius: 10
                }}
              >
                <SettingsIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
      <Drawer
        anchor='right'
        open={drawerVisible}
        onClose={toggleDrawer}
      >
        <Box
          width={360}
          style={{
            display: 'flex',
            padding: 16,
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Typography variant="h6" component={'span'}>
            Configurações
          </Typography>
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box
          width={360}
          style={{
            paddingRight: 16,
            paddingLeft: 16,
          }}
          
        >
          <Typography variant="body1" style={{ margin: "20px 0px 10px"}} component={'p'}>
            Modo
          </Typography>
          <ToggleButtonGroup
            color="primary"
            value={mode}
            exclusive
            onChange={(event, value) => changeTheme(value)}
          >
            <ToggleButton value="dark">
              <Brightness4Icon />
            </ToggleButton>
            <ToggleButton value="light">
              <Brightness7Icon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Drawer>
      <Divider />
    </AppBar>
  );
};
export default ResponsiveAppBar;