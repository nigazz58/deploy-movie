import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotationAni = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const RingWrap = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Ring = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

const RingItem = styled.div`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: rotationAni 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;

  &:nth-child(1) {
    animation-name: ${rotationAni};
    animation-delay: -0.45s;
  }
  &:nth-child(2) {
    animation-name: ${rotationAni};
    animation-delay: -0.3s;
  }
  &:nth-child(3) {
    animation-name: ${rotationAni};
    animation-delay: -0.15s;
  }
`;
const Loading = () => {
  return (
    <RingWrap>
      <Ring>
        <RingItem />
        <RingItem />
        <RingItem />
      </Ring>
    </RingWrap>
  );
};

export default Loading;
