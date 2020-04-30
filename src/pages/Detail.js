import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import fetchData from 'utils/fetchData';
import { CATEGORY, language, IMG_PATH } from 'utils/common';

import * as loadingActions from 'modules/loading';
import * as dataActions from 'modules/data';

import Loading from 'components/Loading';
import DetailContainer from 'containers/DetailContainer';

const Detail = ({ match }) => {
  const { id } = match.params;
  const { isLoading } = useSelector(store => store.loading);
  const dispatch = useDispatch();
  const [loadedPage, setLoadedpage] = useState(false);

  useEffect(() => {
    function init() {
      dispatch(loadingActions.startLoading());

      fetchData(`${CATEGORY.MOVIE_DETAIL}${id}`, [language]).then(result => {
        // console.log(result);
        dispatch(dataActions.setSelMovie(result));
        if (result.backdrop_path !== '') {
          dispatch(
            dataActions.setBgImg([`${IMG_PATH.w1280}${result.backdrop_path}`]),
          );
        }
        return 'finished';
      });

      fetchData(`${CATEGORY.MOVIE_DETAIL}${id}/release_dates`).then(result => {
        // console.log(result);
        const selInfo = result.results.filter(item => item.iso_3166_1 === 'US');
        if (selInfo.length > 0) {
          // console.log(selInfo);
          const lastEl = selInfo[0].release_dates.length - 1;
          // console.log('selInfo : ', selInfo[0].release_dates, lastEl);
          dispatch(
            dataActions.setReleaseDates(selInfo[0].release_dates[lastEl]),
          );
        }
      });

      fetchData(`${CATEGORY.MOVIE_DETAIL}${id}/credits`).then(result => {
        const castsArr = result.cast.slice(0, 9);
        const director = result.crew.filter(item => item.job === 'Director');
        // console.log(castsArr);
        castsArr.unshift(...director);
        dispatch(dataActions.setCasts(castsArr));
        return 'finished2';
      });

      fetchData(`${CATEGORY.MOVIE_DETAIL}${id}/images`).then(result => {
        // console.log('result : ', result);
        const imagesArr = result.backdrops;
        // console.log(result);
        // const imagesArr = result.backdrops.map(item => {
        //   return item.file_path;
        // });
        // console.log('imagesArr : ', imagesArr);
        dispatch(dataActions.setStillCuts(imagesArr));
        return 'finished3';
      });

      // fetchData(`${CATEGORY.MOVIE_DETAIL}${id}/videos`, [language])
      fetchData(`${CATEGORY.MOVIE_DETAIL}${id}/videos`)
        .then(result => {
          // console.log(result);
          const videoArr = result.results.slice(0, 10);
          // const imagesArr = result.backdrops.map(item => {
          //   return item.file_path;
          // });

          // console.log(imagesArr);
          dispatch(dataActions.setVideos(videoArr));
          return 'finished4';
        })
        .then(() => {
          setTimeout(() => {
            dispatch(loadingActions.finishLoading());
            setLoadedpage(true);
          }, 500);
        });
    }
    init();
  }, []);

  return isLoading ? <Loading /> : loadedPage && <DetailContainer />;
};

Detail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  // history: PropTypes.shape({
  //   push: PropTypes.func,
  // }).isRequired,
};

export default Detail;
