import { Role } from "../enum/Role"

interface IUser {
    id: string
    name: string
    email: string
    phone: string
    address: string
    password: string
    role: Role
}

export default IUser