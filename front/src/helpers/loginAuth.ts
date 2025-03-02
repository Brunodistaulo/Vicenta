import { ILogin } from "@/interfaces/ILogin";
import axios from "axios";

export const loginAuth = async (data: ILogin) => {
  try {
    const res = await axios.post("http://localhost:8080/users/login", {
      email: data.email,
      password: data.password,
    });

    if (res.status === 200) {
      return res.data;
    } else {
      throw new Error("Error en la autenticación");
    }
  } catch (error: any) {
    console.error("Error en login:", error.response?.data || error.message);

    return null;
  }
};
