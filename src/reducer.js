import { TOGGLE_MENU } from './action';

const initialState = {
  isOpen: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
    	return state.set('isOpen', action.isOpen)
      // return Object.assign({}, state, {
      //   isOpen: action.isOpen
      // });
    default:
      return state;
  }
};

export default reducer;
