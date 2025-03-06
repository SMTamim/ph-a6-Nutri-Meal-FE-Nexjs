export interface IApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data?: T;
  error?: any
}

export interface ILoginData {
  token: string;
  refreshToken: string;
}

export interface IRegistrationData {
  token: string;
  refreshToken: string;
}
