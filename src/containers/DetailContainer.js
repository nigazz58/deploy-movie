import React from 'react';
import { useSelector } from 'react-redux';
import { IMG_PATH, YOUTUBE_PATH } from 'utils/common';
import { DetailWrap, Inner } from 'styles/basic.style';

import Background from 'components/Background';
import SpotItem from 'components/SpotItem';
import AvatarSlider from 'components/AvatarSlider';
import PictureSlider from 'components/PictureSlider';
import VideoSlider from 'components/VideoSlider';
import ArticleItem from 'components/ArticleItem';

const DetailContainer = () => {
  const {
    selMovie,
    releaseDates,
    bgImg,
    casts,
    stillCuts,
    videos,
  } = useSelector(store => store.data);

  return (
    <DetailWrap>
      <Inner>
        <Background bgImgs={bgImg} grayscale />
        <SpotItem {...selMovie} certification={releaseDates.certification} />
        {casts.length > 0 && (
          <ArticleItem title="출연">
            <AvatarSlider basePath={`${IMG_PATH.w185}`} casts={casts} />
          </ArticleItem>
        )}
        {stillCuts.length > 0 && (
          <ArticleItem title="스틸컷">
            <PictureSlider basePath={IMG_PATH.w500} stillCuts={stillCuts} />
          </ArticleItem>
        )}
        {videos.length > 0 && (
          <ArticleItem title="비디오">
            <VideoSlider basePath={YOUTUBE_PATH} videos={videos} />
          </ArticleItem>
        )}
      </Inner>
    </DetailWrap>
  );
};

export default DetailContainer;
