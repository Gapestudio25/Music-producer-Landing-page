import React, {useState} from 'react';
import {
  Toolbar,
  Link,
  AppBar,
  SwipeableDrawer,
  List,
  Hidden,
  ListItem,
  ListItemAvatar,
  IconButton ,
  ListItemText,
  Avatar,
  Divider,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from '@material-ui/core/styles';
import logo from '../../assets/logo.png';

const useStyles = makeStyles((theme) => ({
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    background: 'black',
    paddingLeft: 'auto',
    paddingRight: 'auto',
    borderBottom: '1px solid black',
    color: '#ffffff',
  },
  toolbarLink: {
    padding: theme.spacing(2),
    flexShrink: 0,
    color: '#ffffff',
    '&:hover': {
      background: 'rgba(255, 255, 255, .3)',
      borderRadius: '10px',
      textDecoration: 'none',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  logo: {
    borderRadius: '50%',
    width: '70px',
    height: '70px',
    margin: '0 20px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  drawerLogo: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: 'black',
    color: '#ffffff',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
  divider: {
    background: '#ffffff'
  },
}));

const navigation = [
  {
    title: 'Home',
    link: '#home',
  },
  {
    title: 'Playlist',
    link: '#playlist',
  },
  {
    title: 'About Me',
    link: '#aboutMe',
  },
  {
    title: 'Logo',
    link: '#home',
  },
  {
    title: 'Our Team',
    link: '#ourTeam',
  },
  {
    title: 'Pricing',
    link: '#pricing',
  },
  {
    title: 'Contact Us',
    link: '#contactUs',
  }
];

const ListItemLink = (props) => {
  return <ListItem button component="a" {...props} />;
}

const drawerWidth = 240;

const Header = () => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      <ListItemAvatar style={{marginBottom: '20px'}}>
        <Avatar
          src={logo}
          alt="Logo"
          className={classes.drawerLogo}
        />
      </ListItemAvatar>
      <Divider className={classes.divider} />
      {navigation.map((section, idx) => (
        (section.title !== 'Logo') ?
          <ListItemLink button key={idx} href={section.link}>
            <ListItemText primary={section.title} />
          </ListItemLink> :
          null
      ))}
    </List>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          {navigation.map((section, idx) => (
            (section.title === 'Logo') ?
              <Link key={idx} href={section.link}>
                <img className={classes.logo} src={logo} alt="Logo" />
              </Link> :
              <Link
                color="inherit"
                noWrap
                key={idx}
                variant="body2"
                href={section.link}
                className={classes.toolbarLink}
              >
                {section.title}
              </Link>
          ))}
        </Toolbar>
      </AppBar>
      
      <nav className={classes.drawer}>
        <Hidden mdUp implementation="css">
          <SwipeableDrawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            onOpen={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <IconButton
              onClick={handleDrawerToggle}
              className={classes.closeMenuButton}
              color= 'inherit'
            >
              <CloseIcon/>
            </IconButton>
            {drawer}
          </SwipeableDrawer>
        </Hidden>
      </nav>
    </div>
  );
};

export default Header;
