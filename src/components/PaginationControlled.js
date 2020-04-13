import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    '& nav': {
      margin: '30px auto 0',
      display: 'inline-block',
    },
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const PaginationControlled = ({ curPage, totalPage, history }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(curPage);
  const handleChange = (event, value) => {
    setPage(value);

    const path = history.location.pathname;
    const querys = history.location.search;
    const cutNum = querys.indexOf('page=') + 5;
    const newQeurys = `${path}${querys.substring(0, cutNum)}${value}`;

    history.push(newQeurys);
  };

  return (
    <div className={classes.root}>
      <Pagination count={totalPage} page={page} onChange={handleChange} />
    </div>
  );
};

export default withRouter(PaginationControlled);

PaginationControlled.propTypes = {
  curPage: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,
  history: PropTypes.shape({
    location: PropTypes.object,
    push: PropTypes.func,
  }).isRequired,
};
