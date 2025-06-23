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
import { NavLink, useLocation } from 'react-router-dom';
import { Divider, Drawer, ToggleButton, ToggleButtonGroup } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from 'contexts/ThemeContext';
import { MouseEventHandler } from 'react';

export interface AppBarProps {
  handleOpenNavMenu: MouseEventHandler<HTMLElement>
  handleCloseNavMenu: MouseEventHandler<HTMLElement>
  anchorElNav: null | HTMLElement
  toggleDrawer: (event: React.KeyboardEvent | React.MouseEvent) => void
}

const pages = [{ key: 'projetos', name: 'Projetos' }, { key: 'perfil', name: 'Perfil' }, { key: 'blackthamba', name: 'Black Thamba' }];

const blackThambaSections = [
  { name: 'Início', key: 'inicio' },
  { name: 'Sobre', key: 'sobre' },
  { name: 'Estatuto', key: 'estatuto' },
  { name: 'Eventos', key: 'eventos' },
  { name: 'Galeria', key: 'galeria' },
  { name: 'Contato', key: 'contato' }
];

const ProfileAppBar = ({ anchorElNav, handleCloseNavMenu, handleOpenNavMenu, toggleDrawer }: AppBarProps) => {
  const { mode } = useTheme();

  return <Container maxWidth="xl">
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
            <MenuItem key={page.key} onClick={handleCloseNavMenu}>
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
                to={page.key}
                key={page.key}
              >
                {page.name}
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
        <img src={`img/logo${mode === 'light' ? "Preto" : ''}.png`} alt="Logo" width="55" />
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {pages.map((page) => (
          <Button
            key={page.key}
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
              to={page.key}
              key={page.key}
            >
              {page.name}
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
};

const BlackThambaAppBar = ({ anchorElNav, handleCloseNavMenu, handleOpenNavMenu, toggleDrawer }: AppBarProps) => {

  return <Container maxWidth="xl">
    <Toolbar disableGutters>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
      >
        <Tooltip title="Logo">
          <img src={'/blackthamba.png'} alt="Logo" width="45" style={{ borderRadius: 10 }} />
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
            horizontal: 'right',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {blackThambaSections.map((section) => (
            <MenuItem key={section.key} onClick={handleCloseNavMenu}>
              <Button
                key={section.key}
                style={{
                  textTransform: "none",
                  color: '#EDE0C0',
                  background: 'transparent'
                }}
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
        <Tooltip title="Logo">
          <img src={'/blackthamba.png'} alt="Logo" width="45" style={{ borderRadius: 10 }} />
        </Tooltip>
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        {blackThambaSections.map((section) => (
          <Button
            key={section.key}
            style={{
              textTransform: "none",
              color: '#EDE0C0',
            }}
            type='button'
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
};

// const StyledToolbar = styled(Toolbar)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   flexShrink: 0,
//   borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
//   backdropFilter: 'blur(24px)',
//   border: '1px solid',
//   borderColor: theme.palette.divider,
//   backgroundColor: alpha(theme.palette.background.default, 0.4),
//   boxShadow: theme.shadows[1],
//   padding: '8px 12px',
// }));
// TODO: Review it in a next time
// const BlackThambaAppBarV2 = () => {
//   const [open, setOpen] = React.useState(false);
//   const toggleDrawer = (newOpen: boolean) => () => {
//     setOpen(newOpen);
//   };

//   return <AppBar
//     position="fixed"
//     enableColorOnDark
//     sx={{
//       boxShadow: 0,
//       bgcolor: 'transparent',
//       backgroundImage: 'none',
//       mt: 'calc(var(--template-frame-height, 0px) + 28px)',
//     }}
//   >
//     <Container maxWidth="lg">
//       <StyledToolbar variant="dense" disableGutters>
//         <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
//           <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
//             {blackThambaSections.map((section) => (
//               <Button
//                 key={section.key}
//                 style={{
//                   textTransform: "none",
//                   color: '#EDE0C0',
//                 }}
//                 type='button'
//                 onClick={() => {
//                   const element = document.getElementById(section.key);
//                   if (element) {
//                     element.scrollIntoView({ behavior: 'smooth' });
//                   } else {
//                     window.location.hash = `#${section.key}`;
//                   }
//                 }}
//               >
//                 {section.name}
//               </Button>
//             ))}
//           </Box>
//         </Box>
//         <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
//           <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
//             <MenuIcon />
//           </IconButton>
//           <Drawer
//             anchor="top"
//             open={open}
//             onClose={toggleDrawer(false)}
//             PaperProps={{
//               sx: {
//                 top: 'var(--template-frame-height, 0px)',
//               },
//             }}
//           >
//             <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
//               <Box
//                 sx={{
//                   display: 'flex',
//                   justifyContent: 'flex-end',
//                 }}
//               >
//                 <IconButton onClick={toggleDrawer(false)}>
//                   <CloseRoundedIcon />
//                 </IconButton>
//               </Box>

//               {blackThambaSections.map((section) => (
//                 <MenuItem key={section.key} onClick={toggleDrawer(false)}>
//                   <Button
//                     key={section.key}
//                     style={{
//                       textTransform: "none",
//                       color: '#EDE0C0',
//                       background: 'transparent'
//                     }}
//                     onClick={() => {
//                       const element = document.getElementById(section.key);
//                       if (element) {
//                         element.scrollIntoView({ behavior: 'smooth' });
//                       } else {
//                         window.location.hash = `#${section.key}`;
//                       }
//                     }}
//                   >
//                     {section.name}
//                   </Button>
//                 </MenuItem>
//               ))}
//             </Box>
//           </Drawer>
//         </Box>
//       </StyledToolbar>
//     </Container>
//   </AppBar>
// }

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [drawerVisible, setDrawerVisible] = React.useState<boolean>(false);

  const { changeTheme, mode } = useTheme();

  const location = useLocation();
  const currentRoute = location.pathname;
  const isBlackThamba = "/blackthamba" === currentRoute

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerVisible(it => !it);
  };

  const ContainerContent = isBlackThamba ? BlackThambaAppBar : ProfileAppBar;

  return <AppBar
      position="sticky"
      color='inherit'
      elevation={0}
      style={{
        opacity: 0.9
      }}
    >
      <ContainerContent
        handleOpenNavMenu={handleOpenNavMenu}
        handleCloseNavMenu={handleCloseNavMenu}
        anchorElNav={anchorElNav}
        toggleDrawer={toggleDrawer}
      />
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
        {isBlackThamba ? null :
          <Box
            width={360}
            style={{
              paddingRight: 16,
              paddingLeft: 16,
            }}
          >
            <Typography variant="body1" style={{ margin: "20px 0px 10px" }} component={'p'}>
              Modo
            </Typography>
            <ToggleButtonGroup
              color="primary"
              value={mode}
              exclusive
              onChange={(_event, value) => changeTheme(value)}
            >
              <ToggleButton value="dark">
                <Brightness4Icon />
              </ToggleButton>
              <ToggleButton value="light">
                <Brightness7Icon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>}
      </Drawer>
      <Divider />
    </AppBar>
};



export default ResponsiveAppBar;