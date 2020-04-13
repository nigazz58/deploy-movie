import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { fade, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    // width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    // width: '100%',
    width: '10ch',
    '&:focus': {
      width: '20ch',
    },
    // [theme.breakpoints.up('sm')]: {
    //   width: '10ch',
    //   '&:focus': {
    //     width: '20ch',
    //   },
    // },
  },
}));

const SearchBar = props => {
  const { onSubmit } = props;
  const classes = useStyles();
  const inpRef = useRef();
  const responseMatch = useMediaQuery('(min-width:480px)');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        const inputTarget = inpRef.current.childNodes[0];
        const keyword = inputTarget.value;
        inputTarget.value = '';
        inputTarget.blur();
        onSubmit(keyword);
      }}
    >
      {responseMatch ? (
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <Search />
          </div>
          <InputBase
            ref={inpRef}
            placeholder="영화 검색"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      ) : (
        <IconButton aria-label="search" color="inherit">
          <Search />
        </IconButton>
      )}
    </form>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
