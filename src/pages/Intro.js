import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { IMG_PATH, CATEGORY, language } from 'utils/common';
import fetchData from 'utils/fetchData';

import * as loadingActions from 'modules/loading';
import * as dataActions from 'modules/data';
import * as menuActions from 'modules/menu';

import Loading from 'components/Loading';
import IntroContainer from 'containers/IntroContainer';

const Intro = ({ location, history }) => {
  const { isLoading } = useSelector(store => store.loading);
  const { path } = useSelector(store => store.data);
  const dispatch = useDispatch();

  useEffect(() => {
    // 2. fetch 수행.
    function init(url) {
      dispatch(loadingActions.startLoading());

      fetchData(url, [language])
        .then(result => {
          // const moviesArr = shuffleArray(result.results).slice(0, 10);
          const moviesArr = result.results.slice(0, 10);
          const bgImgsArr = moviesArr.map(item => {
            return `${IMG_PATH.w1280}${item.backdrop_path}`;
          });
          dispatch(dataActions.setMovies(moviesArr));
          dispatch(dataActions.setBgImgs(bgImgsArr));
          dispatch(dataActions.setPath(url));
          dispatch(menuActions.setActive(url));

          return 'finished';
        })
        .catch(() => {
          history.push('/NotFound404');
        })
        .then(() => {
          setTimeout(() => {
            dispatch(loadingActions.finishLoading());
          }, 1000);
        });
    }

    // 1. 현재 진입 path경로 가져옴
    // 진입시 '/' 값이 기본이나 저장된 path와 비교 위해 / 삭제
    let curPath = location.pathname.slice(1);

    // 만약 현재 진입 path 경로가 '/' 값이었다면 위에 slice를 통해 빈값이 되었을 것이므로
    if (curPath === '') {
      // 현재 값에 초기 요청할 path 경로를 now_playing 으로 지정
      curPath = CATEGORY.NOW_PLAYING;
    }

    // 만약 스토어에 path값이 존재하지 않는다면 최초 진입으로 볼 수 있다. 반대로 값이 저장되었다는것은 fetch를 이미 수행했다는 것이다.
    if (!path) {
      // console.log('최초 실행', '=================');
      // 초기 fetch 호출 값을 지정해주고 초기화 함수 실행
      init(curPath);
    } else {
      // console.log('두번째 이상 실행', '=================');
      // 만약 저장된 path값이 있다면 최초 요청이 있었다는 것으로 볼 수 있으며,
      // 두번째 부터 수행할 동작을 지정

      // 만약 path 값과 현재 진입 path값이 같으면 fetch 수행할 필요가 없으므로 리턴
      if (path === curPath) {
        return;
      }
      // 그게 아니라면 현재 진입 즉, 요청 path값을 초기화 함수에 전달하여 fetch 수행.
      init(curPath);
    }
  }, [location]); // 페이지 진입시 location에 변화가 있다면 위 조건을 체크하여 동작하게 의존성 주입.

  return isLoading ? <Loading /> : <IntroContainer />;
};

export default Intro;

Intro.propTypes = {
  location: PropTypes.shape({ pathname: PropTypes.string }).isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};
