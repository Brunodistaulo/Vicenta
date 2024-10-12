import { create } from "zustand";
import { persist } from "zustand/middleware";


type Action = {
    setToken: (token: string) => void;
  };
  
  type State = {
    token: string;
  };
  

export const userTokenStore = create(
    persist<State & Action>(
        (set) => ({
            token: "",
            setToken: (token: string) => set({ token }),
        }),
        {
            name: "token",
        }
    )
);