import { TOGGLE_THEME } from './themeActions';

const initialState = {
  darkMode: true,
};

export const themeReducer = (state = initialState, action) => {
  if (action.type === TOGGLE_THEME) {
    return {
      ...state,
      darkMode: !state.darkMode,
    };
  }
  return state;
};
