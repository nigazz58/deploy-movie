import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

export const PATH = 'data/PATH';
export const MOVIES = 'data/MOVIES';
export const BG_IMG = 'data/BG_IMG';
export const BG_IMGS = 'data/BG_IMGS';
export const SEL_IDX = 'data/SEL_IDX';
export const SEL_MOVIE = 'data/SEL_MOVIE';
export const RELEASE_DATES = 'data/RELEASE_DATES';
export const CASTS = 'data/CASTS';
export const STILLCUTS = 'data/STILLCUTS';
export const VIDEOS = 'data/VIDEOS';

export const setPath = createAction(PATH); // path string
export const setMovies = createAction(MOVIES); // movies []
export const setBgImg = createAction(BG_IMG); // bgImg []
export const setBgImgs = createAction(BG_IMGS); // bgImgs []
export const setSelIdx = createAction(SEL_IDX); // selIdx number
export const setSelMovie = createAction(SEL_MOVIE); // selMovie []
export const setReleaseDates = createAction(RELEASE_DATES); // releaseDates []
export const setCasts = createAction(CASTS); // setCasts []
export const setStillCuts = createAction(STILLCUTS); // setStillCutImgs []
export const setVideos = createAction(VIDEOS); // setVideos []

const initialState = {
  path: '', // 현재 요청 path
  movies: [], // 무비 리스트
  bgImgs: [], // 백그라운드 무비 이미지들 url
  bgImg: [], // 백그라운드 무비 이미지
  selIdx: 0, // 선택한 무비 리스트 인덱스
  selMovie: [], // 선택한 무비 정보
  releaseDates: [], // 선택한 무비 릴리즈 정보들
  casts: [], // 캐스팅 리스트
  stillCuts: [], // 선택중인 무비 이미지들
  videos: [], // 선택중인 무비 비디오들
};

const reducer = handleActions(
  {
    [PATH]: (state, action) => {
      return produce(state, draft => {
        draft.path = action.payload;
      });
    },
    [MOVIES]: (state, action) => {
      return produce(state, draft => {
        draft.movies = action.payload;
      });
    },
    [BG_IMG]: (state, action) => {
      return produce(state, draft => {
        draft.bgImg = action.payload;
      });
    },
    [BG_IMGS]: (state, action) => {
      return produce(state, draft => {
        draft.bgImgs = action.payload;
      });
    },
    [SEL_MOVIE]: (state, action) => {
      return produce(state, draft => {
        draft.selMovie = action.payload;
      });
    },
    [SEL_IDX]: (state, action) => {
      return produce(state, draft => {
        draft.selIdx = action.payload;
      });
    },
    [RELEASE_DATES]: (state, action) => {
      return produce(state, draft => {
        draft.releaseDates = action.payload;
      });
    },
    [CASTS]: (state, action) => {
      return produce(state, draft => {
        draft.casts = action.payload;
      });
    },
    [STILLCUTS]: (state, action) => {
      return produce(state, draft => {
        draft.stillCuts = action.payload;
      });
    },
    [VIDEOS]: (state, action) => {
      return produce(state, draft => {
        draft.videos = action.payload;
      });
    },
  },
  initialState,
);

export default reducer;
