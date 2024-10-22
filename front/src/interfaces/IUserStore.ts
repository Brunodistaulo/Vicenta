import { UserEnum } from "@/enum/UserEnum"


export interface IUserStore {
    id: string
    name: string
    email: string
    phone: string
    address: string
    role: UserEnum
}