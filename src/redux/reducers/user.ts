// Esse reducer será responsável por tratar as informações da pessoa usuária
import { AnyAction } from 'redux';

export const initialState = { email: '' };
export const ATT_EMAIL = 'ATT_EMAIL';

export const userReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ATT_EMAIL:
      return { ...state, email: action.email };
    default:
      return state;
  }
};
