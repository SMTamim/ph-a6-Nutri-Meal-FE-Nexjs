// types/api.ts
export interface IDecodedUser {
  name: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

export interface IUser {
  id: string;
  email: string;
  name: string;
  role: "customer" | "provider";
}

export interface IAuthResponse {
  user: IUser;
  token: string;
}

export interface IMeal {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
}

export interface IOrder {
  id: string;
  userId: string;
  meals: Array<{
    mealId: string;
    quantity: number;
  }>;
  status: "pending" | "confirmed" | "delivered";
  totalAmount: number;
  createdAt: string;
}
