// reducers/menuReducer.js

import { FETCH_MENU_REQUEST, FETCH_MENU_SUCCESS, FETCH_MENU_FAILURE } from './actions';

const initialState = {
  menuData: [],
  loading: false,
  error: null,
};

const menuReducer = (state = initialState, action) => {

  switch (action.type) {
    case FETCH_MENU_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_MENU_SUCCESS:
      return {
        
        ...state,
        menuData: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_MENU_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default menuReducer;