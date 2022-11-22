import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import styled from '@emotion/styled';
import { Link } from '@mui/material';
const MyAppBar = styled(AppBar)(() => ({
  backgroundColor: '#060607',
  boxSizing: 'border-box',
  maxHeight: '300px',
  padding: '100px 0px',
}));

const MyName = styled(Typography)(() => ({
  fontSize: '40px',
  fontFamily: 'monospace',
  fontWeight: 700,
  letterSpacing: '.3rem',
  color: '#E3CDB3',
  textDecoration: 'none',
}));
const AppbarContent = styled(Link)(() => ({
  marginRight: '30px',
  textDecoration: 'none',
  textAlign: 'center',
  fontWeight: 600,
  fontSize: '25px',
  boxSizing: 'border-box',
  color: '#E3CDB3',
}));
const pages = ['About Me', 'Projects', 'Contact'];
export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = event => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  return (
    <MyAppBar position="static" sx={{ height: '300px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <MyName
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
              }}
            >
              This is Donnahue George
            </MyName>
          </Box>
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
              {pages.map(page => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            This is Donnahue George
          </Typography>
          <Box
            sx={{
              display: { xs: 'none', md: 'inherit' },
            }}
          >
            {pages.map(page => (
              <AppbarContent key={page} onClick={handleCloseNavMenu} href={'#'}>
                {page}
              </AppbarContent>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </MyAppBar>
  );
}
