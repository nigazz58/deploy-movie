import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import mediumZoom from 'medium-zoom';

import * as S from './PictureSlider.style';

function PictureSlider({ basePath, stillCuts }) {
  useEffect(() => {
    mediumZoom('[data-zoomable-stillcut]', {
      background: 'rgba(0, 0, 0, 1)',
      margin: 30,
    });
  }, []);

  const settings = {
    // className: 'slider variable-width',
    className: 'center',
    centerMode: true,
    variableWidth: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    dots: false,
  };

  return (
    <S.SliderWrap className={stillCuts.length > 1 && 'plural'}>
      <Slider {...settings}>
        {stillCuts.map(item => {
          return (
            <S.SliderItem key={item.file_path}>
              <S.ImgWrap>
                <img
                  alt="스틸컷"
                  src={`${basePath}${item.file_path}`}
                  data-zoom-src={`${basePath}${item.file_path}`.replace(
                    'w500',
                    'w1280',
                  )}
                  data-zoomable-stillcut
                />
              </S.ImgWrap>
            </S.SliderItem>
          );
        })}
      </Slider>
    </S.SliderWrap>
  );
}

export default PictureSlider;

PictureSlider.propTypes = {
  basePath: PropTypes.string.isRequired,
  stillCuts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
