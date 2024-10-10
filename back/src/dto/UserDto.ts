import { Role } from "../enum/Role";

interface UserDto {
    name: string;
    email: string;
    phone: string;
    address: string;
    password: string;
    role?: Role;
}

export default UserDto
