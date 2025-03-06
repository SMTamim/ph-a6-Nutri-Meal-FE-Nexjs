export interface IApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data?: T;
  error?: any;
}

export interface ILoginData {
  token: string;
  refreshToken: string;
}

export interface IRegistrationData {
  token: string;
  refreshToken: string;
}
export interface IUserData {
  _id: string;
  name: string;
  email: string;
  role: string;
  address: string;
  isBlocked: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
