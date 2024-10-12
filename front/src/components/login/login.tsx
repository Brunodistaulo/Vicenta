'use client'

import React, { useState } from 'react'
import { userTokenStore } from '@/store/tokenStore'
import { loginAuth } from '@/helpers/loginAuth'
import Swal from 'sweetalert2'
import { EyeIcon, EyeOffIcon } from 'lucide-react'

export default function Login() {
    const setToken = userTokenStore((state) => state.setToken)
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await loginAuth(inputs)
        const data = await res?.json()
        const { token } = await data
        setToken(token)
        if (res?.ok) {
            setInputs({
                email: '',
                password: ''
            })
            Swal.fire({
                icon: "success",
                title: "Bienvenido",
                text: "Has iniciado sesión",
                showConfirmButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonColor: "black",
            })
        }
    }

    return (
        <div>
            <div className='bg-slate-300 w-[90%] mx-auto mt-20 rounded-lg'>
                <div>
                    <h1 className='text-3xl text-center pt-2'>INICIAR SESION</h1>
                    <p className='text-center pt-1'>Inicia sesión para acceder a todos los apartados</p>
                    <p className='pl-3 py-3'>¿No tienes cuenta? <a href="/register" className='text-blue-600'>Regístrate aquí.</a></p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-10 mx-auto">
                    <div className='flex flex-col w-[80%] mx-auto mt-5'>
                        <label
                            htmlFor="email"
                            className='font-semibold'
                        >Correo</label>
                        <input
                            type="text"
                            name="email"
                            className='text-black rounded-md h-8 pl-2 placeholder:italic outline-none'
                            placeholder='example@example.com'
                            onChange={handleChange}
                            value={inputs.email}
                        />
                    </div>
                    <div className='flex flex-col w-[80%] mx-auto relative'>
                        <label
                            className='font-semibold'
                            htmlFor="password">Contraseña</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className='text-black rounded-md h-8 pl-2 pr-10 w-full placeholder:italic outline-none'
                                onChange={handleChange}
                                placeholder={showPassword ? "ContraseñaSegura" : '********'}
                                value={inputs.password}
                            />
                            <button
                                type="button"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                                onClick={() => setShowPassword(!showPassword)}
                                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                            >
                                {showPassword ? (
                                    <EyeOffIcon className="h-5 w-5 text-gray-500" />
                                ) : (
                                    <EyeIcon className="h-5 w-5 text-gray-500" />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-center gap-7'>
                        <button className='bg-white text-black px-2 py-2 mb-3 rounded-lg' type="submit">Iniciar Sesion</button>
                        <p className='flex items-center mb-3'>O</p>
                        <div className='bg-white text-black px-2 py-2 mb-3 rounded-lg w-[105px] text-center'>Google</div>
                    </div>
                </form>
            </div>
        </div>
    )
}