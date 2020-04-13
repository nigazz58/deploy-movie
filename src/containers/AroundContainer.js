import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { IMG_PATH } from 'utils/common';

import { Wrap, Inner } from 'styles/basic.style';

import NotFoundResult from 'components/NotFoundResult';
import PaginationControlled from 'components/PaginationControlled';

import styled from 'styled-components';

const CardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 1rem;
  justify-content: space-between;
  background: #fff;
  box-sizing: border-box;
  color: #000;
  margin-top: -30px;

  > li {
    margin-top: 30px;

    img {
      overflow: hidden;
      display: block;
      width: 200px;
      height: 300px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
    }
    h3 {
      margin-top: 10px;
      max-width: 200px;
    }
  }
`;

const AroundContainer = () => {
  const { lists } = useSelector(store => store.search);

  return (
    <>
      {lists.total_results > 0 ? (
        <Wrap>
          <Inner>
            <CardList>
              {lists.results.map(item => {
                return (
                  <li key={item.id}>
                    <Link to={`/detail/${item.id}`}>
                      <img
                        src={`${IMG_PATH.w342}${item.poster_path}`}
                        onError={e => {
                          e.target.src =
                            'https://dummyimage.com/200x300.png/dddddd/999999&text=+No+Image+';
                        }}
                        alt={item.original_title}
                      />
                      <h3>{item.title}</h3>
                    </Link>
                  </li>
                );
              })}
            </CardList>
            <PaginationControlled
              curPage={lists.page}
              totalPage={lists.total_pages}
            />
          </Inner>
        </Wrap>
      ) : (
        <NotFoundResult text="검색 결과가 없습니다." />
      )}
    </>
  );
};

export default AroundContainer;
