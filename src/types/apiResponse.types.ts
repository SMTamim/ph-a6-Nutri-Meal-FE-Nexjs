export interface IApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data?: T;
}

export interface IAuthData {
  token: string;
  refreshToken: string;
}
