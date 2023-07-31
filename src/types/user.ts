export interface IUser {
  name: string | null;
  email: string | null;
  password: string | null;
  token: string | null;
};

export interface IUserState {
  user: IUser;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: string | null;
};

export interface IRegisterCred {
  name: string,
  email: string,
  password: string,
};

export interface ILogInCred {
  email: string,
  password: string,
}