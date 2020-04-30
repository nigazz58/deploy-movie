import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import mediumZoom from 'medium-zoom';

import { IMG_PATH } from 'utils/common';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Rating from '@material-ui/lab/Rating';
import GradeIcon from './GradeIcon';

const Headline = styled.div`
  font-size: 2rem;
  color: #fff;
  position: absolute;
  left: 50%;
  width: 100%;
  padding: 0 30px;
  box-sizing: border-box;
  text-align: center;
  top: -132px; /* 상단 영역 중간에 위치 */
  transform: translate(-50%, -50%);

  @media screen and (max-width: 600px) {
    font-size: 1rem;
    top: -94px;
  }
`;

const Box = styled.div`
  border-bottom: 1px dashed #ddd;
  &:after {
    display: block;
    content: '';
    clear: both;
  }
`;

const GradeIconWrap = styled.div``;

const PosterWrap = styled.div`
  position: relative;
  float: left;
  width: 240px;
  margin: -100px 30px 15px 0;

  ${GradeIconWrap} {
    position: absolute;
    right: 15px;
    top: 15px;
  }

  @media screen and (max-width: 768px) {
    width: 180px;
    margin: -80px 15px 15px 0;
  }

  @media screen and (max-width: 480px) {
    width: 120px;
    margin: -60px 15px 15px 0;

    ${GradeIconWrap} {
      right: 7px;
      top: 7px;
    }
  }
`;

const Poster = styled.img`
  width: 100%;
  /* border: 1px solid #000;
  box-sizing: border-box; */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;

const TitleBox = styled.div`
  h1 {
    font-size: 2.5rem;
    line-height: 1;
  }
  span {
    font-size: 0.8rem;
    color: #999;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 1.75rem;
    }
  }
`;

const TextArea = styled.div`
  div {
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    align-items: center;

    li {
      position: relative;
    }

    li + li {
      margin-left: 30px;

      &:before {
        content: '';
        position: absolute;
        left: -15px;
        top: 10%;
        bottom: 10%;
        width: 1px;
        height: 80%;
        border-left: 1px solid #ccc;
      }
    }
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 480px) {
    div {
      margin-bottom: 0.5rem;
    }

    ul {
      clear: both;
      display: block;
      font-size: 0.875rem;

      li {
        list-style: disc;
        margin-left: 20px;
      }

      li + li {
        margin-left: 20px;
        &:before {
          display: none;
        }
      }
    }
    p {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 481px) and (max-width: 768px) {
    ul > li span {
      display: block;
    }
  }
`;

const SpotItem = props => {
  const {
    title,
    original_title: originalTitle,
    overview,
    poster_path: posterPath,
    genres,
    tagline,
    vote_average: voteAverage,
    runtime,
    release_date: releaseDate,
    certification,
  } = props;

  useEffect(() => {
    mediumZoom('[data-zoomable-poster]', {
      background: 'rgba(0, 0, 0, 1)',
      margin: 30,
    });
  }, []);

  const halfVoteAverage = voteAverage / 2;
  const responseMatch = useMediaQuery('(min-width:600px)');

  return (
    <>
      {tagline && <Headline>{tagline}</Headline>}
      <Box>
        {posterPath && (
          <PosterWrap>
            <Poster
              alt="영화 포스터"
              src={`${IMG_PATH.w342}${posterPath}`}
              data-zoom-src={`${IMG_PATH.w1280}${posterPath}`}
              data-zoomable-poster
            />
            <GradeIconWrap>
              <GradeIcon certification={certification} />
            </GradeIconWrap>
          </PosterWrap>
        )}
        <TextArea>
          <TitleBox>
            <h1>{title}</h1>
            <span>{originalTitle}</span>
          </TitleBox>
          <div>
            <Rating
              name="half-rating-read"
              defaultValue={halfVoteAverage}
              precision={0.5}
              size={responseMatch ? 'large' : 'small'}
              readOnly
            />
          </div>
          <ul>
            <li>
              <span>장르 : </span>
              <span>{genres.map(item => item.name).join(' / ')}</span>
            </li>
            <li>
              <span>개봉일 : </span>
              <span>{releaseDate}</span>
            </li>
            <li>
              <span>러닝타임 : </span>
              <span>{runtime}분</span>
            </li>
          </ul>
          {overview ? <p>{overview}</p> : <p>등록된 줄거리가 없습니다.</p>}
        </TextArea>
      </Box>
    </>
  );
};

SpotItem.defaultProps = {
  title: '',
  original_title: '',
  overview: '',
  poster_path: '',
  genres: [],
  tagline: '',
  vote_average: 0.0,
  release_date: '',
  certification: '',
  runtime: 0,
};

SpotItem.propTypes = {
  title: PropTypes.string,
  original_title: PropTypes.string,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.object),
  tagline: PropTypes.string,
  vote_average: PropTypes.number,
  release_date: PropTypes.string,
  certification: PropTypes.string,
  runtime: PropTypes.number,
};

export default SpotItem;
