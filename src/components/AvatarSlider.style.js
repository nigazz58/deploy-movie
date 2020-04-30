import styled from 'styled-components';

const Name = styled.div`
  margin-top: 10px;
  text-align: center;

  strong {
    display: block;
    font-size: 0.75rem;
    color: #999;
  }
`;

const SliderItem = styled.div`
  outline: 0;
`;

const SliderWrap = styled.div`
  padding: 0 30px;
  .slick-slider {
    min-height: 0px;
    min-width: 0px;

    .slick-arrow {
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
        left: -30px;
      }

      &.slick-next {
        right: -30px;
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.8);
      }

      svg {
        color: #fff;
        font-size: 1rem;
      }
    }
  }
`;

export { SliderWrap, SliderItem, Name };
