import { UserModel } from '../user.model';
import * as AuthActions from './auth.action';


export interface State {
  user: UserModel;
  authError: string;
  loading: boolean;
}

const initialState: State = {
  user: null,
  authError: null,
  loading: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case '[Auth] LOGIN':
      const user = new UserModel(
        action.payLoad.email,
        action.payLoad.userId,
        action.payLoad.token,
        action.payLoad.expirationDate
      );
      return {
        ...state,
        authError: null,
        user: user,
        loading: false
      };
    case '[Auth] LOGOUT':
      return {
        ...state,
        user: null
      };
    case AuthActions.LOGIN_START:
      return {
        ...state,
        authError: null,
        loading: true
      };
    case AuthActions.LOGIN_FAIL:
      return {
      ...state,
        user: null,
        authError: action.payLoad,
        loading: false
      };
    default:
      return state;
  }
}
