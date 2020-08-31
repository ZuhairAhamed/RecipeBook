import { Action } from '@ngrx/store';

export const LOGIN_START = '[Auth] LOGIN_START';
export const LOGIN = '[Auth] LOGIN';
export const LOGOUT = '[Auth] LOGOUT';
export const LOGIN_FAIL = '[Auth] LOGIN_FAIL';

export class Login implements Action {
  readonly type = LOGIN;

  constructor(
    public payLoad: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date
    }) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class LoginStart implements Action {
  readonly type = LOGIN_START;

  constructor(public payLoad: {
    email: string;
    password: string
  }) {}
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;

  constructor(public payLoad: string) {}
}

export type AuthActions = Login | Logout | LoginStart | LoginFail;
