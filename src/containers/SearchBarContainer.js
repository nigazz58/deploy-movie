import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { language } from 'utils/common';

import SearchBar from 'components/header/SearchBar';

const SearchBarContainer = ({ history }) => {
  const onSubmit = keyword => {
    history.push(`/search/movie?${language}&query=${keyword}&page=1`);
  };
  return <SearchBar onSubmit={onSubmit} />;
};

SearchBarContainer.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default withRouter(SearchBarContainer);
