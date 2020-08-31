import { UserModel } from '../user.model';
import * as AuthActions from './auth.action';


export interface State {
  user: UserModel;
}

const initialState: State = {
  user: null
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case 'LOGIN':
      const user = new UserModel(
        action.payLoad.email,
        action.payLoad.userId,
        action.payLoad.token,
        action.payLoad.expirationDate
      );
      return {
        ...state,
        user: user
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
}
