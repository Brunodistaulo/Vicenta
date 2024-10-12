import { IRegister } from "@/interfaces/IRegister";
import Swal from "sweetalert2";

export const registerAuth = async ( data: IRegister ) => {
    const res = await fetch('http://localhost:8080/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    if (res.ok) {
        return res;
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salio mal",
            showConfirmButton: true,
            confirmButtonText: "Aceptar",
            confirmButtonColor: "black",
        })
    }
}