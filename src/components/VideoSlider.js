import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Slider from 'react-slick';
import { touchSlideOn, touchSlideOff } from 'utils/common';

import * as S from './VideoSlider.style';

const settings = {
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  dots: true,
  lazyLoad: true,
};

function DetailOtherImgs({ basePath, videos }) {
  useEffect(() => {
    touchSlideOn();
    return () => {
      touchSlideOff();
    };
  }, []);

  return (
    <S.SliderWrap>
      <Slider {...settings}>
        {videos.map(item => {
          return (
            <S.SliderItem key={item.key}>
              <S.ImgWrap>
                <S.Video
                  title={item.name}
                  width="100%"
                  src={`${basePath}${item.key}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </S.ImgWrap>
            </S.SliderItem>
          );
        })}
      </Slider>
    </S.SliderWrap>
  );
}

export default DetailOtherImgs;

DetailOtherImgs.propTypes = {
  basePath: PropTypes.string.isRequired,
  videos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
