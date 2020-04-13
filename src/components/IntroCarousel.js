import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import * as dataActions from 'modules/data';

import Slider from 'react-slick';
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@material-ui/icons';

import * as S from './IntroCarousel.style';

function IntroCarousel({ movies, posterUrl, selIdx }) {
  const dispatch = useDispatch();
  const sliderRef = useRef();

  function PrevArrow(props) {
    const { className } = props;
    return (
      <button
        type="button"
        className={className}
        onClick={() => {
          sliderRef.current.slickPrev();
        }}
      >
        <ArrowBackIosOutlined />
        Previous
      </button>
    );
  }

  function NextArrow(props) {
    const { className } = props;
    return (
      <button
        type="button"
        className={className}
        onClick={() => {
          sliderRef.current.slickNext();
        }}
      >
        <ArrowForwardIosOutlined />
        Next
      </button>
    );
  }

  PrevArrow.defaultProps = {
    className: '',
  };

  PrevArrow.propTypes = {
    className: PropTypes.string,
  };

  NextArrow.defaultProps = {
    className: '',
  };

  NextArrow.propTypes = {
    className: PropTypes.string,
  };

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    // slidesToShow: 3,
    slideToScroll: 1,
    // centerPadding: '10%',
    speed: 500,
    dots: false,
    initialSlide: selIdx, // 히스토리백 했을 때 해당 인덱스 아이템 활성
    focusOnSelect: true, // 선택 요소 가운데로 이동
    variableWidth: true,
    // autoplay: true,
    // autoplaySpeed: 3000,
    // responsive: [
    //   {
    //     breakpoint: 960,
    //     settings: {
    //       slidesToShow: 1,
    //       centerPadding: '10%',
    //     },
    //   },
    // ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    afterChange(index) {
      dispatch(dataActions.setSelIdx(index));
    },
  };

  return (
    <S.SliderWrap>
      <Slider ref={sliderRef} {...settings}>
        {movies.map(item => {
          return (
            <S.SliderItem key={item.id}>
              <S.ImgWrap>
                <S.ImgItem
                  style={{
                    backgroundImage: `url(${posterUrl}${item.poster_path})`,
                  }}
                />
                <Link to={`/detail/${item.id}`} className="more">
                  <span>자세히 보기</span>
                </Link>
              </S.ImgWrap>
            </S.SliderItem>
          );
        })}
      </Slider>
    </S.SliderWrap>
  );
}

export default IntroCarousel;

IntroCarousel.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  posterUrl: PropTypes.string.isRequired,
  selIdx: PropTypes.number.isRequired,
};
