import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

export const SET_LISTS = 'search/SET_LISTS';

export const setLists = createAction(SET_LISTS); // lists []

const initialState = {
  lists: [], // 검색 결과 리스트
};

const reducer = handleActions(
  {
    [SET_LISTS]: (state, action) => {
      return produce(state, draft => {
        draft.lists = action.payload;
      });
    },
  },
  initialState,
);

export default reducer;
