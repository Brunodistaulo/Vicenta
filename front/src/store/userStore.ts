import { create } from "zustand";
import { IUserStore } from "@/interfaces/IUserStore";
import { jwtDecode } from "jwt-decode";

interface State {
    users: IUserStore[]
    user: Partial<IUserStore>
    getUserById: () => void
    getUsers: () => void
}


export const userStore = create<State>((set) => ({
    users: [],
    user: {},
    getUsers: async () => {
        const response = await fetch("http://localhost:8080/users", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        set({ users: data })
    },
    getUserById: async () => {
        const localToken = localStorage.getItem('token')
        const dataToken = JSON.parse(localToken!)
        const token = dataToken.state?.token
        if (!token) {
            throw new Error('Token not found')
        }
        const { id }: any = jwtDecode(token)

        const response = await fetch(`http://localhost:8080/users/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
        set({ user: data })
    }
}))