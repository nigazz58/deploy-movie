import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { CATEGORY } from 'utils/common';

export const ACTIVE = 'menu/ACTIVE';

export const setActive = createAction(ACTIVE);

export const menuList = [
  { active: '', text: '상영중', path: CATEGORY.NOW_PLAYING },
  { active: '', text: '인기순', path: CATEGORY.POPULAR },
  { active: '', text: '평점순', path: CATEGORY.TOP_RATED },
  { active: '', text: '상영예정', path: CATEGORY.UPCOMING },
];

const initialState = {
  menuList,
};

const reducer = handleActions(
  {
    [ACTIVE]: (state, action) => {
      return produce(state, draft => {
        const updatedMenu = draft.menuList.map(menu => {
          if (menu.path === action.payload) {
            menu.active = 'active';
          } else {
            menu.active = '';
          }
          return menu;
        });
        draft.menuList = updatedMenu;
      });
    },
  },
  initialState,
);

export default reducer;
