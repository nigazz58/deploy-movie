import React from 'react';
import { Link } from 'react-router-dom';
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
  h1 {
    font-size: 4rem;
  }
  p {
    font-size: 2rem;
  }
  a {
    display: block;
    margin-top: 30px;
    text-decoration: underline !important;
  }
`;

const NotFound404 = () => {
  return (
    <Error>
      <Inner>
        <h1>404</h1>
        <p>페이지를 찾을 수 없습니다.</p>
        <Link to="/">홈으로 이동</Link>
      </Inner>
    </Error>
  );
};

export default NotFound404;
