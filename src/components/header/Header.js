import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Menu, Theaters } from '@material-ui/icons';

import Navi from 'components/header/Navi';
import SearchBarContainer from 'containers/SearchBarContainer';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    boxShadow: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    transition: 'background .3s linear',
    '&.filled': {
      backgroundColor: 'rgba(0,0,0,1)',
    },

    '& div[class*=Toolbar]': {
      minHeight: '60px',
    },
  },
  menuButton: {
    marginLeft: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
    fontSize: '1.375rem',
    color: 'white',

    '& a': {
      display: 'inline-flex',
      alignItems: 'center',
      verticalAlign: 'top',
    },

    '& svg': {
      fontSize: 'x-large',
      verticalAlign: 'middle',
      marginRight: '3px',
    },
  },
}));

const Header = () => {
  const { menuList } = useSelector(store => store.menu);
  const [open, setOpen] = useState(false);
  const appBar = useRef();
  const classes = useStyles();

  const handleScroll = () => {
    // const headerH = document.querySelector('header').offsetHeight;
    if (window.scrollY > 0) {
      appBar.current.classList.add('filled');
    } else {
      appBar.current.classList.remove('filled');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar ref={appBar} position="fixed" className={classes.root}>
      <Toolbar>
        <Typography variant="h1" className={classes.title}>
          <Link to="/">
            <Theaters />
            Movie
          </Link>
        </Typography>

        <SearchBarContainer />

        <IconButton
          edge="end"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={handleClickOpen}
        >
          <Menu />
        </IconButton>
        <Navi menuList={menuList} open={open} onClose={handleClose} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
