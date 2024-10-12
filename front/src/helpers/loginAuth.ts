import { ILogin } from "@/interfaces/ILogin"
import Swal from 'sweetalert2';

export const loginAuth = async ( data: ILogin ) => {
    console.log(data)
    const res = await fetch('http://localhost:8080/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    console.log(res)
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
        });
    }
}