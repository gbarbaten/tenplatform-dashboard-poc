import { ActionReducer, Action } from '@ngrx/store';

/*
{
  is_logged_in: boolean,
  jwt_auth: {
    token,
    type,
    user_id
  },
}
*/

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function is_logged_in(state:Boolean = false, action: Action): Boolean {
  switch (action.type) {
    case LOGIN:
      return true;
    case LOGOUT:
      return false;
    default:
      return state;
  }
}

export function jwt_auth(state = {}, action: Action): any {
  switch (action.type) {
    case LOGIN:
      return action.payload;
    case LOGOUT:
      return null;
    default:
      return state;
  }
}
