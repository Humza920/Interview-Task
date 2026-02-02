import { toast } from "react-hot-toast";
import { api } from "../../api";

export const loginApi = async (form) => {
  try {
    const res = await api.post("/auth/login", form,);
    toast.success("Login successful!");
    return res.data;
  } catch (error) {
    toast.error(error.message);
  }
};


export const signupApi = async (form) => {
  try {
    const res = await api.post("/auth/register", form, {
    });
    toast.success("Sign up successful!");
    return res.data;
  } catch (error) {    
    toast.error(error.response?.data?.message);
  }
};

export const checkAuthApi = async () => {
  try {
    const res = await api.get("/auth/getMe");
    return res.data;
  } catch (error) {
    console.error("Auth check failed");
    throw new Error("Auth checkfailed");
  }
};