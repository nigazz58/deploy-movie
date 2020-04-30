import styled from 'styled-components';

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
`;

const ImgWrap = styled.div`
  overflow: hidden;
  position: relative;
  height: 0;
  padding-bottom: 56.26%;
`;

const SliderItem = styled.div`
  overflow: visible;
  outline: 0;
`;

const SliderWrap = styled.div`
  min-height: 0px;
  min-width: 0px;

  .slick-arrow {
    display: none !important;
    z-index: 10;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease;

    &:before {
      display: none;
    }

    &.slick-prev {
      left: 0;
    }

    &.slick-next {
      right: 0;
    }

    &:hover {
      background-color: rgba(0, 0, 0, 0.8);
    }

    svg {
      color: #fff;
      width: 1rem;
    }
  }

  .slick-track {
    background-color: #000;
  }

  .slick-slide > div {
    font-size: 0;
  }

  .slick-dots {
    position: relative;
    bottom: 0;
    margin-top: 15px;
  }

  @media screen and (max-width: 600px) {
    .slick-dots > li {
      margin: 0;
    }
  }
`;

export { SliderWrap, SliderItem, ImgWrap, Video };
