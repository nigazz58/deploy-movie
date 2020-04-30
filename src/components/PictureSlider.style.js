import styled from 'styled-components';

const ImgWrap = styled.div`
  overflow: hidden;
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 146px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);

  > img {
    overflow: hidden;
    width: inherit;
    height: inherit;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 480px) {
    width: 200px;
    height: 112px;
  }
`;

const ImgItem = styled.div`
  overflow: hidden;
  width: inherit;
  height: inherit;
  background-size: cover;
  background-position: 50% 50%;
  transition: transform 0.3s ease;
  cursor: zoom-in;

  &:hover {
    transform: scale(1.2);
  }
`;

const SliderItem = styled.div`
  overflow: visible;
  outline: 0;
`;

const SliderWrap = styled.div`
  &.plural .slick-slider {
    margin: 0 -30px;
  }

  @media screen and (max-width: 480px) {
    &.plural .slick-slider {
      margin: 0 -15px;
    }
  }

  .slick-slider {
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

    .slick-slide {
      /* 간격 조절은 따로 없으니 여기서 */
      /* padding: 0 10px; */
      transition: all 0.5s ease-in-out;

      > div {
        font-size: 0;
      }

      /* 간격을 위해 가상 선택자 사용 */
      display: flex;
      &:before {
        display: block;
        content: '';
        width: 10px;
        flex: 1 1 1;
      }
      &:after {
        display: block;
        content: '';
        width: 10px;
        flex: 1 1 1;
      }
      /* 
      @media only screen and (max-width: 480px) {
        &:before,
        &:after {
          width: 10px;
        }
      } */
    }
  }
`;

export { SliderWrap, SliderItem, ImgWrap, ImgItem };
