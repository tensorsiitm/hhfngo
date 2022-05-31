import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Collapse from "@mui/material/Collapse";
import Divider from "@mui/material/Divider";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import "./navbar.css";
import logo from "../../Shared/images/cropped-Helping-Hand-Foundation-Logo-1-2048x585.png";

// line 208: make different open variables for each dropdown list.

const pages = [
  {
    title: "Home",
    isdrpdn: false,
    link: "/",
    drpdns: [],
  },
  {
    title: "Vertical",
    isdrpdn: true,
    link: "",
    drpdns: [
      {
        title: "Education",
        link: "/education",
      },
      {
        title: "Poverty Alleviation",
        link: "/poverty_alleviation",
      },
      {
        title: "Public Health",
        link: "/public-health",
      },
    ],
  },

  {
    title: "Interventions",
    isdrpdn: false,
    link: "/interventions",
    drpdns: [],
  },
  {
    title: "Stories of Change",
    isdrpdn: false,
    link: "/storiesOfChange",
    drpdns: [],
  },
  {
    title: "Take Action",
    isdrpdn: false,
    link: "/takeAction",
    drpdns: [],
  },
  {
    title: "Donate",
    isdrpdn: false,
    link: "/donate",
    drpdns: [],
  },
  {
    title: "Contact Us",
    isdrpdn: false,
    link: "/contactUs",
    drpdns: [],
  },
];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = () => {
  return (
    <AppBar position="static" color="default">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", lg: "none" } }}>
            <MyDrawer />
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <img src={logo} className="logo" />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "flex" } }}>
            {pages.map((page) => {
              if (page.isdrpdn) {
                return (
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      {page.title}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {page.drpdns.map((drpdn) => (
                        <>
                          <Dropdown.Item>
                            <Link
                              to={drpdn.link}
                              sx={{
                                my: 2,
                                color: "inherit",
                                display: "block",
                              }}
                              className="aitem"
                            >
                              {drpdn.title}
                            </Link>
                          </Dropdown.Item>
                          <Dropdown.Divider />
                        </>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                );
              } else {
                return (
                  <Link
                    to={page.link}
                    sx={{ my: 2, color: "inherit", display: "block" }}
                    className="homelike"
                  >
                    {page.title}
                  </Link>
                );
              }
            })}
          </Box>

          <Search sx={{ display: { xs: "none", sm: "flex" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;

export function MyDrawer() {
  const [state, setState] = React.useState(false);

  function openDrawer() {
    setState(true);
  }
  function closeDrawer() {
    setState(false);
  }
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <React.Fragment key="left">
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={() => {
            openDrawer();
          }}
          color="inherit"
          className="menubtn"
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="left"
          open={state}
          onClose={() => {
            closeDrawer();
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => {
              closeDrawer();
            }}
            color="inherit"
            className="menubtn"
          >
            <CloseIcon />
          </IconButton>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="list"
          >
            {pages.map((page) => {
              if (page.isdrpdn) {
                return (
                  <>
                    <ListItemButton onClick={handleClick}>
                      <ListItemText>{page.title}</ListItemText>
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        {page.drpdns.map((drpdn) => (
                          <ListItem sx={{ pl: 4 }}>
                            <Link
                              to={drpdn.link}
                              onClick={() => {
                                closeDrawer();
                              }}
                            >
                              {drpdn.title}
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                    <Divider />
                  </>
                );
              } else {
                return (
                  <>
                    <Link
                      to={page.link}
                      sx={{ my: 2, color: "inherit", display: "block" }}
                      className="homelikexs"
                      onClick={() => {
                        closeDrawer();
                      }}
                    >
                      {page.title}
                    </Link>
                    <Divider />
                  </>
                );
              }
            })}
          </List>

          <Search sx={{ display: { xs: "flex", sm: "none" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
