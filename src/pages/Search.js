import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import fetchData from 'utils/fetchData';
import { CATEGORY } from 'utils/common';
import * as loadingActions from 'modules/loading';
import * as searchActions from 'modules/search';

import SearchContainer from 'containers/SearchContainer';
import Loading from 'components/Loading';

const Search = ({ location }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(store => store.loading);
  const { lists } = useSelector(store => store.search);

  const queries = location.search.slice(1).split('&');

  useEffect(() => {
    if (!lists.length > 0) {
      dispatch(loadingActions.startLoading());
      fetchData(`${CATEGORY.SEARCH}movie`, [...queries])
        .then(result => {
          dispatch(searchActions.setLists(result));
          return 'finished getting data';
        })
        .then(() => {
          setTimeout(() => {
            dispatch(loadingActions.finishLoading());
          }, 500);
        });
    }
  }, [location]);

  return isLoading ? <Loading /> : <SearchContainer />;
};

Search.propTypes = {
  location: PropTypes.shape({
    search: PropTypes.string,
  }).isRequired,
};

export default withRouter(Search);
