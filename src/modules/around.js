import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

export const SET_LISTS = 'around/SET_LISTS';
export const SET_PATH = 'around/SET_PATH';

export const setLists = createAction(SET_LISTS); // lists []
export const setPath = createAction(SET_PATH); // path string

const initialState = {
  lists: [], // 검색 결과 리스트
  path: '',
};

const reducer = handleActions(
  {
    [SET_LISTS]: (state, action) => {
      return produce(state, draft => {
        draft.lists = action.payload;
      });
    },
    [SET_PATH]: (state, action) => {
      return produce(state, draft => {
        draft.path = action.payload;
      });
    },
  },
  initialState,
);

export default reducer;
