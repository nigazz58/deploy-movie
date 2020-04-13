import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BgImgWrap = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  &.grayscale {
    filter: grayscale(100%);
  }

  div {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    transition: opacity 0.5s linear;
    z-index: -1;
    opacity: 0;

    &.on {
      z-index: 1;
      opacity: 0.4;
    }
  }
`;

const Background = ({ bgImgs, selIdx, grayscale }) => {
  return (
    <BgImgWrap className={grayscale ? 'grayscale' : ''}>
      {bgImgs.map((item, idx) => {
        return bgImgs.length > 1 ? (
          <div
            key={item}
            className={selIdx === idx ? 'on' : ''}
            style={{
              backgroundImage: `url(${item})`,
            }}
          />
        ) : (
          <div
            key={item}
            className="on"
            style={{
              backgroundImage: `url(${item})`,
            }}
          />
        );
      })}
    </BgImgWrap>
  );
};

export default Background;

Background.defaultProps = {
  bgImgs: [],
  selIdx: 0,
  grayscale: false,
};

Background.propTypes = {
  bgImgs: PropTypes.arrayOf(PropTypes.string),
  selIdx: PropTypes.number,
  grayscale: PropTypes.bool,
};
