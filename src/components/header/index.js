import React/*, {useState}*/ from 'react';
import {
  Toolbar,
  Link,
  AppBar,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import logo from '../../assets/logo.png';

const useStyles = makeStyles((theme) => ({
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
    background: 'rgba(255, 255, 255, .3)',
    paddingLeft: 'auto',
    paddingRight: 'auto',
    borderBottom: '1px solid #ffffff',
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
  },
  logo: {
    borderRadius: '50%',
    width: '60px',
    margin: '0 20px',
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

const Header = () => {
  const classes = useStyles();
  // const [open, setOpen] = useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <AppBar position="fixed">
      <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
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
  );
};

export default Header;