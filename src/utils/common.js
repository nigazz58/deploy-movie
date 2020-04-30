export const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
export const API_URL = 'https://api.themoviedb.org/3/';
export const IMG_URL = 'https://image.tmdb.org/t/p/';

export const language = 'language=ko-KR';
export const region = 'region=KR';

export const IMG_PATH = {
  w185: `${IMG_URL}w185`,
  w342: `${IMG_URL}w342`,
  w500: `${IMG_URL}w500`,
  w780: `${IMG_URL}w780`,
  w1280: `${IMG_URL}w1280`,
  original: `${IMG_URL}original`,
};

export const YOUTUBE_PATH = 'https://www.youtube.com/embed/';

export const CATEGORY = {
  NOW_PLAYING: 'movie/now_playing',
  POPULAR: 'movie/popular',
  TOP_RATED: 'movie/top_rated',
  UPCOMING: 'movie/upcoming',
  MOVIE_DETAIL: 'movie/',
  SEARCH: 'search/',
};

export const shuffleArray = arr => {
  const inArr = arr.slice();
  for (let i = inArr.length; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const x = inArr[i - 1];
    inArr[i - 1] = inArr[j];
    inArr[j] = x;
  }
  return inArr;
};

export const isEmptyObject = obj => {
  return Object.keys(obj).length === 0;
};

export const deviceCheck = () => {
  const pcDevice = 'win16|win32|win64|mac|macintel';
  const thisDevice = navigator.platform;
  let result = '';

  if (thisDevice) {
    if (pcDevice.indexOf(navigator.platform.toLowerCase()) < 0) {
      result = 'MOBILE';
    } else {
      result = 'PC';
    }
    // console.log(result);
  }
  return result;
};

// slick slider bugfix for mobile scrolling
let firstClientX = 0;

function touchStart(e) {
  firstClientX = e.touches[0].clientX;
}

function preventTouch(e) {
  const minValue = 30; // threshold
  const clientX = e.touches[0].clientX - firstClientX;
  // Vertical scrolling does not work when you start swiping horizontally.
  if (Math.abs(clientX) > minValue) {
    e.preventDefault();
    e.returnValue = false;
    return false;
  }
  return 1;
}

export const touchSlideOn = () => {
  window.addEventListener('touchstart', touchStart);
  window.addEventListener('touchmove', preventTouch, { passive: false });
};

export const touchSlideOff = () => {
  window.removeEventListener('touchstart', touchStart);
  window.removeEventListener('touchmove', preventTouch, {
    passive: false,
  });
};
