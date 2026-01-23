import { toast } from "react-hot-toast";
import { api } from "./config"; 

export const loginApi = async (form) => {
  try {
    const res = await api.post("/auth/login", form);
    toast.success("Login successful!");
    return res.data;
  } catch (error) {
    handleError(error);
  }
};


export const signupApi = async (form) => {
  try {
    const res = await api.post("/auth/signup", form);
    toast.success("Sign up successful!");
    return res.data;
  } catch (error) {
    handleError(error);
  }
};
