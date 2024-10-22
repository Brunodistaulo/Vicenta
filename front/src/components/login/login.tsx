'use client'

import React, { useEffect, useState } from 'react'
import { userTokenStore } from '@/store/tokenStore'
import { loginAuth } from '@/helpers/loginAuth'
import Swal from 'sweetalert2'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Login() {
    const router = useRouter()
    const setToken = userTokenStore((state) => state.setToken)
    const token = userTokenStore((state) => state.token)

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
        if (inputs.email === '' || inputs.password === '') {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Debes rellenar todos los campos",
                showConfirmButton: true,
                confirmButtonText: "Aceptar",
                confirmButtonColor: "black",
            })
            return
        }
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
            router.push('/')
        }
    }

    useEffect(() => {
        if (token) {
            const timer = setTimeout(() => {
                Swal.fire({
                    icon: "info",
                    title: "Usuario ya iniciado",
                    text: "Ya has iniciado sesión",
                    confirmButtonText: "Aceptar",
                    confirmButtonColor: "black",
                });
                router.push('/');
            }, 500);
    
            return () => clearTimeout(timer);
        }
    }, [token, router]);

    return (
        <div>
            <div className='bg-white shadow-sm w-[90%] md:w-[70%] lg:w-1/2 mx-auto mt-20 rounded-lg'>
                <div>
                    <h1 className='text-3xl text-center pt-2 md:pt-5'>INICIAR SESION</h1>
                    <p className='text-center pt-1'>Inicia sesión para acceder a todos los apartados</p>
                    <p className='pl-3 py-3 md:pl-10 md:py-5'>¿No tienes cuenta? <a href="/register" className='text-blue-600'>Regístrate aquí.</a></p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-10 mx-auto">
                    <div className='flex flex-col w-[80%] mx-auto mt-5'>
                        <label
                            htmlFor="email"
                            className='font-semibold lg:text-lg'
                        >Correo</label>
                        <input
                            type="text"
                            name="email"
                            className='text-black bg-black/5 rounded-md h-8 lg:h-10 pl-2 placeholder:italic outline-none'
                            placeholder='example@example.com'
                            onChange={handleChange}
                            value={inputs.email}
                        />
                    </div>
                    <div className='flex flex-col w-[80%] mx-auto relative'>
                        <label
                            className='font-semibold lg:text-lg'
                            htmlFor="password">Contraseña</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                className='text-black bg-black/5 rounded-md h-8 lg:h-10 pl-2 pr-10 w-full placeholder:italic outline-none'
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
                        <button className='bg-black text-white px-2 py-2 mb-3 rounded-lg lg:tracking-widest lg:w-36' type="submit">Iniciar Sesion</button>
                        <p className='flex items-center mb-3'>O</p>
                        <div className='bg-black text-white px-2 py-2 mb-3 rounded-lg lg:w-36 w-[105px] lg:tracking-widest text-center'>Google</div>
                    </div>
                </form>
            </div>
        </div>
    )
} 