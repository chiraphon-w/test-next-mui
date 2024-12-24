import React from "react";
import {
  AccountBox,
  Article,
  Home,
  ModeNight,
  People,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

interface SideBarProps {
  mode: string;
  setMode: (mode: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ mode, setMode }) => {
  const menuItems = [
    { text: "Homepage", icon: <Home />, href: "#home" },
    { text: "Pages", icon: <Article />, href: "#simple-list" },
    { text: "Groups", icon: <People />, href: "#simple-list" },
    { text: "Marketplace", icon: <Storefront />, href: "#simple-list" },
    { text: "Friends", icon: <Person />, href: "#simple-list" },
    { text: "Settings", icon: <Settings />, href: "#simple-list" },
    { text: "Profile", icon: <AccountBox />, href: "#simple-list" },
  ];

  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: {
          xs: "none",
          md: "block",
        },
      }}
    >
      <Box position="fixed">
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component="a" href={item.href}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch
                onChange={() => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default SideBar;
