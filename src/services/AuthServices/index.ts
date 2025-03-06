"use server";

import { IApiResponse, ILoginData, IRegistrationData, IUserData } from "@/types/apiResponse.types";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";
import { jwtDecode } from "jwt-decode";
import { IDecodedUser } from "@/types";

export const registerUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });
    const result = await res.json();
    return result as IApiResponse<IRegistrationData>;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (loginData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    });
    const result = (await res.json()) as IApiResponse<ILoginData>;
    if (result.success) {
      const cookieStore = await cookies();
      cookieStore.set("refreshToken", result.data?.refreshToken!);
      cookieStore.set("token", result.data?.token!);
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getCurrentUser = async (): Promise<IDecodedUser | null> => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    return null;
  }
  try {
    const userDecoded = jwtDecode(token) as IDecodedUser;
    return userDecoded;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const logoutUser = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("token");
  cookieStore.delete("refreshToken");
};

export const getMe = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    return null;
  }
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    });
    const result = (await res.json()) as IApiResponse<IUserData>;
    return result.data ?? null;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const updateMyData = async (data: FieldValues) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    return null;
  }
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/update-me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    const result = (await res.json()) as IApiResponse<IUserData>;
    return result.data ?? null;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const updatePassword = async (data: FieldValues) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    return null;
  }
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/update-password`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(data)
    });
    const result = (await res.json()) as IApiResponse<IUserData>;
    return result;
  } catch (error) {
    console.log(error);
  }
};
