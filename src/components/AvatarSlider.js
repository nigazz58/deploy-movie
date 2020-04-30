import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { touchSlideOn, touchSlideOff } from 'utils/common';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from '@material-ui/icons';

import * as S from './AvatarSlider.style';

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: '0 auto',
  },
}));

function AvatarSlider({ basePath, casts }) {
  const classes = useStyles();

  useEffect(() => {
    touchSlideOn();
    return () => {
      touchSlideOff();
    };
  }, []);

  function PrevArrow(props) {
    const { className, onClick } = props;
    return (
      <button type="button" className={className} onClick={onClick}>
        <ArrowBackIosOutlined />
        Previous
      </button>
    );
  }

  function NextArrow(props) {
    const { className, onClick } = props;
    return (
      <button type="button" className={className} onClick={onClick}>
        <ArrowForwardIosOutlined />
        Next
      </button>
    );
  }

  PrevArrow.defaultProps = {
    className: '',
    onClick() {},
  };

  PrevArrow.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
  };

  NextArrow.defaultProps = {
    className: '',
    onClick() {},
  };

  NextArrow.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
  };

  const settings = {
    infinite: false,
    slidesToShow: 7,
    slidesToScroll: 7,
    speed: 500,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <S.SliderWrap>
      <Slider {...settings}>
        {casts.map(item => {
          return (
            <S.SliderItem key={item.id}>
              <Avatar
                className={classes.large}
                alt=""
                src={`${basePath}${item.profile_path}`}
              />
              <S.Name>
                <strong>
                  {(item.job && item.job) || (item.character && item.character)}
                </strong>
                <div>{item.name}</div>
              </S.Name>
            </S.SliderItem>
          );
        })}
      </Slider>
    </S.SliderWrap>
  );
}

export default AvatarSlider;

AvatarSlider.propTypes = {
  basePath: PropTypes.string.isRequired,
  casts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
