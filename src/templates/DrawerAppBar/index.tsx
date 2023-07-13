'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import { AccountCircle, Close, Menu } from '@mui/icons-material';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const drawerWidth = 280;
const navItems = [
  { route: '/', title: 'Início' },
  { route: '/explore', title: 'Explorar' },
  { route: '/my-tickets', title: 'Meus Ingressos' },
  { route: '/favorites', title: 'Favoritos' },
];

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const handleDrawerToggle = () => setMobileOpen((prevState) => !prevState);

  const drawer = (
    <Box sx={{ display: 'grid', paddingX: 1.5, paddingTop: 5.5 }}>
      <IconButton onClick={handleDrawerToggle} sx={{ justifySelf: 'end' }}>
        <Close />
      </IconButton>
      <List>
        {navItems.map(({ route, title }) => (
          <ListItem key={title} disablePadding>
            <ListItemButton
              onClick={() => {
                handleDrawerToggle();
                router.push(route);
              }}
            >
              <ListItemText
                primary={title}
                primaryTypographyProps={{ fontWeight: 600 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', marginBottom: { xs: '8rem', sm: '9rem' } }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#32174D' }}>
        <Toolbar
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: { xs: '3rem 1fr 3rem', md: 'repeat(3, 1fr)' },
            justifyContent: 'space-between',
            paddingLeft: { md: 0 },
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' }, justifySelf: 'start' }}
          >
            <Menu />
          </IconButton>

          {/* larger screens menu */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              height: '100%',
              whiteSpace: 'nowrap',
            }}
          >
            {navItems.map(({ route, title }) => (
              <Button
                key={title}
                onClick={() => router.push(route)}
                sx={{
                  color: '#fff',
                  paddingX: 3,
                  textTransform: 'none',
                  '&:hover': {
                    color: '#F0A202',
                    backgroundColor: 'transparent',
                    textDecoration: 'underline',
                  },
                }}
              >
                {title}
              </Button>
            ))}
          </Box>

          {/* Logo */}
          <Box
            sx={{
              alignItems: 'center',
              cursor: 'pointer',
              display: 'flex',
              height: '100%',
              justifySelf: 'center',
            }}
          >
            <Image
              alt="MovieFever logo"
              height={30}
              onClick={() => router.push('/')}
              src="/logo-color-lined.png"
              width={172}
            />
          </Box>

          {/* Account */}
          <AccountCircle sx={{ justifySelf: 'end', height: 24, width: 24 }} />
        </Toolbar>
      </AppBar>

      {/* Mobile menu */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
