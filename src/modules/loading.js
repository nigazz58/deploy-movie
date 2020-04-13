import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

export const START_LOADING = 'loading/START_LOADING';
export const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction(START_LOADING);
export const finishLoading = createAction(FINISH_LOADING);

const initialState = {
  isLoading: false,
};

const reducer = handleActions(
  {
    [START_LOADING]: state => {
      return produce(state, draft => {
        draft.isLoading = true;
      });
    },
    [FINISH_LOADING]: state => {
      return produce(state, draft => {
        draft.isLoading = false;
      });
    },
  },
  initialState,
);

export default reducer;
