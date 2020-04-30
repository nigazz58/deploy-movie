import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { fade, makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { Search, Close } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  searchBox: {
    position: 'fixed',
    visibility: 'hidden',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '100vw',
    padding: '12px 16px',
    minHeight: '60px',
    boxSizing: 'border-box',
    backgroundColor: 'rgba(0,0,0,1)',
    transform: 'translate(0, -100%)',
    transition: 'transform 0.3s ease, visibility 0.3s ease',

    '&.active': {
      visibility: 'visible',
      transform: 'translate(0, 0)',
    },

    '& $search': {
      display: 'flex',
    },
    '& $searchIcon': {
      display: 'none',
    },

    '& button[data-btn-close]': {
      padding: '0 3px',
    },

    '& $inputRoot': {
      width: '100%',

      '& input': {
        padding: theme.spacing(1, 1, 1, 1),
        width: 'inherit',
      },
    },
  },

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

const SearchItem = ({ inpRef, onClose }) => {
  const classes = useStyles();
  return (
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
      {onClose && (
        <IconButton
          aria-label="close"
          color="inherit"
          onClick={onClose}
          data-btn-close
        >
          <Close />
        </IconButton>
      )}
    </div>
  );
};

const SearchBar = props => {
  const { onSubmit } = props;
  const classes = useStyles();
  const inpRef = useRef();
  const searchRef = useRef();
  const responseMatch = useMediaQuery('(min-width:480px)');

  const handleOpen = () => {
    searchRef.current.classList.add('active');
    inpRef.current.childNodes[0].focus();
  };

  const handleClose = () => {
    searchRef.current.classList.remove('active');
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();

        const inputTarget = inpRef.current.childNodes[0];
        const keyword = inputTarget.value;

        if (keyword === '') return;

        inputTarget.value = '';
        inputTarget.blur();

        if (searchRef.current !== null) {
          searchRef.current.classList.remove('active');
        }

        onSubmit(keyword);
      }}
    >
      {responseMatch ? (
        <SearchItem inpRef={inpRef} />
      ) : (
        <>
          <IconButton aria-label="search" color="inherit" onClick={handleOpen}>
            <Search />
          </IconButton>
          <div ref={searchRef} className={classes.searchBox}>
            <SearchItem inpRef={inpRef} onClose={handleClose} />
          </div>
        </>
      )}
    </form>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

SearchItem.defaultProps = {
  onClose: undefined,
};

SearchItem.propTypes = {
  inpRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) })
    .isRequired,
  onClose: PropTypes.func,
};
