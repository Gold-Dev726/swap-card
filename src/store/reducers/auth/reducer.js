import actions from './action';

const initState = { idToken: "null" };

export default function authReducer(state = initState, action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS:
      return { ...state, idToken: action.token };
    case actions.LOGOUT:
      return initState;
    default:
      return state;
  }
}