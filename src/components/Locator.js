import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleWrap = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  font-size: 4rem;
  transform: translate(-50%, -50%);
`;

const Locator = ({ selPath }) => {
  return <TitleWrap>{selPath}</TitleWrap>;
};

export default Locator;

Locator.defaultProps = {
  selPath: '',
};

Locator.propTypes = {
  selPath: PropTypes.string,
};
