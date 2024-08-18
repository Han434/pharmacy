import { Outlet, Link } from "react-router-dom";
import { Box, AppBar, Toolbar, Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky">
          <Toolbar>
            <Typography>
                Phamacy
            </Typography>
            <List>
              <ListItem>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <Link to="/">
                    <ListItemText>
                      Home
                    </ListItemText>
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <Link to="/browseProduct">
                    <ListItemText>
                      Browse Product
                    </ListItemText>
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <Link to="/report">
                    <ListItemText>
                      Report
                    </ListItemText>
                  </Link>
                </ListItemButton>
                <ListItemButton sx={{ textAlign: 'center' }}>
                  <Link to="/logIn">
                    <ListItemText>
                      Log In
                    </ListItemText>
                  </Link>
                </ListItemButton>
              </ListItem>
            </List>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet/>
    </>
  )
};

export default Layout;