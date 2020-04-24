import styled from 'styled-components';
import { headerHeight } from 'styles/basic.style';

const ImgWrap = styled.div`
  position: relative;
  margin: 0 auto;
  width: 340px;
  height: 510px;
  background-color: #000;
  box-sizing: border-box;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 600px) {
    width: 240px;
    height: 360px;
  }
  @media only screen and (max-width: 480px) {
    width: 200px;
    height: 300px;
  }
`;

const ImgItem = styled.div`
  position: relative;
  overflow: hidden;
  width: inherit;
  height: inherit;
  background-size: cover;
  background-position: center;
  /* opacity: 1;
  transition: opacity 0.3s ease-in-out; */

  &:after {
    position: absolute;
    display: block;
    content: '';
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    transition: background-color 0.3s ease;
  }

  &:hover:after {
    background-color: rgba(0, 0, 0, 0);
  }
`;

const SliderItem = styled.div`
  overflow: visible;
  /* padding: 20px 0; */
  outline: 0;
  vertical-align: top;

  .more {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    font-weight: normal;
    color: #fff;
    text-align: center;
    background-color: rgba(0, 0, 0, 0);
    opacity: 0;
    transition: all 0.3s ease;

    span {
      position: absolute;
      display: inline-block;
      padding: 17px 40px 15px;
      left: 50%;
      top: 50%;
      /* background-color: rgba(255, 0, 0, 0); */
      transform: translate(-50%, -50%);
      box-sizing: border-box;
      transition: all 0.3s ease;
    }
  }
`;

const SliderWrap = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  min-width: 320px;

  @media screen and (max-height: 610px) and (orientation: landscape) {
    display: block;
  }

  .slick-slider {
    /* overflow: hidden; */
    min-height: 0px;
    min-width: 0px;
    /* max-height: 510px; */
    margin-top: ${headerHeight};

    .slick-list {
      padding-top: 50px !important;
      padding-bottom: 50px !important;
    }

    .slick-arrow {
      z-index: 10;
      width: 60px;
      height: 60px;
      /* background-color: rgba(255, 0, 0, 0);
      transition: background-color 0.3s ease; */

      &:before {
        display: none;
      }

      &.slick-prev {
        left: 0;
      }

      &.slick-next {
        right: 0;
      }

      /* &:hover {
        background-color: rgba(255, 0, 0, 0.4);
      } */

      svg {
        color: #fff;
        width: 2rem;
      }
    }

    .slick-slide {
      transform-origin: 50% 70%;
      transform: scale(0.9);
      transition: all 0.5s ease-in-out;

      /* 간격을 위해 가상 선택자 사용 */
      display: flex;
      &:before {
        display: block;
        content: '';
        width: 30px;
        flex: 1 1 1;
      }
      &:after {
        display: block;
        content: '';
        width: 30px;
        flex: 1 1 1;
      }

      @media only screen and (max-width: 600px) {
        &.slick-center {
          ${ImgWrap} .more {
            font-size: 0.875rem;

            span {
              padding: 12px 20px 10px;
            }
          }
        }
      }

      @media only screen and (max-width: 480px) {
        &:before,
        &:after {
          width: 10px;
        }

        &.slick-center {
          ${ImgWrap} .more {
            font-size: 0.875rem;

            span {
              padding: 7px 10px 5px;
            }
          }
        }
      }

      &.slick-center {
        transform: scale(1);

        ${ImgWrap} .more {
          display: block;
          background-color: rgba(0, 0, 0, 0);
        }

        ${ImgWrap}:hover .more {
          opacity: 1;
          background-color: rgba(0, 0, 0, 0.4);

          /* span {
            background-color: rgba(255, 0, 0, 0.8);
          } */
        }

        ${ImgItem}:after {
          background-color: rgba(0, 0, 0, 0);
        }
      }
    }
  }
`;

export { SliderWrap, SliderItem, ImgWrap, ImgItem };
