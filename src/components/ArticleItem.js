import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Article = styled.div`
  margin-top: 30px;

  h2 {
    font-size: 2rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 1.25rem;
    }
  }
`;

const ArticleItem = ({ title, children }) => {
  return (
    <Article>
      <h2>{title}</h2>
      {children}
    </Article>
  );
};

ArticleItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ArticleItem;
