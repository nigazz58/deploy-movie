import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Error = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Inner = styled.div`
  p {
    font-size: 2rem;
  }
`;

const NotFoundResult = ({ text }) => {
  return (
    <Error>
      <Inner>
        <p>{text}</p>
      </Inner>
    </Error>
  );
};

NotFoundResult.propTypes = {
  text: PropTypes.string.isRequired,
};

export default NotFoundResult;
