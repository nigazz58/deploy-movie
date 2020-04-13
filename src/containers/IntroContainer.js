import React from 'react';
import { useSelector } from 'react-redux';
import { IMG_PATH } from 'utils/common';

import Background from 'components/Background';
import IntroCarousel from 'components/IntroCarousel';

const IntroContainer = () => {
  const { movies, bgImgs, selIdx } = useSelector(store => store.data);

  return (
    <>
      <Background bgImgs={bgImgs} selIdx={selIdx} />
      <IntroCarousel
        movies={movies}
        posterUrl={IMG_PATH.w500}
        selIdx={selIdx}
      />
    </>
  );
};

export default IntroContainer;
