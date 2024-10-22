'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import { userTokenStore } from '@/store/tokenStore'
import { registerAuth } from '@/helpers/registerAuth'
import { EyeIcon, EyeOffIcon } from 'lucide-react'


const Register = () => {
    const router = useRouter()
    const setToken = userTokenStore((state) => state.setToken)
    const [showPassword, setShowPassword] = useState(false)
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const res = await registerAuth(inputs)
        const data = await res?.json()
        const { token } = await data
        setToken(token)
        if (res?.ok) {
            setInputs({
                name: '',
                email: '',
                password: '',
                phone: '',
                address: ''
            })
            Swal.fire({
                icon: 'success',
                title: 'Registrado Correctamente',
                text: 'Has creado tu cuenta satisfactoriamente, inicia sesión',
                showConfirmButton: true,
                confirmButtonText: 'Aceptar',
                timer: 3000
            })
            router.push('/login')
        }
    }

    return (
        <div>
            <div>
                <div className='bg-white shadow-sm w-[90%] md:w-[70%] lg:w-1/2 mx-auto mt-20 rounded-lg'>
                    <div>
                        <h1 className='text-3xl text-center pt-2 md:pt-5'>REGISTRATE</h1>
                        <p className='text-center pt-1'>Crea tu cuenta para acceder a todos los apartados</p>
                        <p className='pl-3 py-3 md:pl-10 md:py-5'>¿Ya tienes cuenta? <a href="/login" className='text-blue-600'>Inicia sesión aquí.</a></p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 mx-auto">

                        <div className='flex flex-col w-[80%] mx-auto mt-5'>
                            <label className='font-semibold'>Nombre y Apellidos</label>
                            <input type="text" name="name" className='text-black bg-black/5 lg:h-10 rounded-md h-8 pl-2 placeholder:italic outline-none' placeholder='John Doe' onChange={handleChange} value={inputs.name} />
                        </div>

                        <div className='flex flex-col w-[80%] mx-auto '>
                            <label className='font-semibold'>Dirección</label>
                            <input type="text" name="address" className='text-black bg-black/5 lg:h-10 rounded-md h-8 pl-2 placeholder:italic outline-none' placeholder='Calle falsa 123' onChange={handleChange} value={inputs.address} />
                        </div>

                        <div className='flex flex-col w-[80%] mx-auto '>
                            <label className='font-semibold'>Teléfono</label>
                            <input type="text" name="phone" className='text-black bg-black/5 lg:h-10 rounded-md h-8 pl-2 placeholder:italic outline-none' placeholder='381 765 4321' onChange={handleChange} value={inputs.phone} />
                        </div>

                        <div className='flex flex-col w-[80%] mx-auto'>
                            <label className='font-semibold'>Correo</label>
                            <input type="text" name="email" className='text-black bg-black/5 lg:h-10 rounded-md h-8 pl-2 placeholder:italic outline-none' placeholder='example@example.com' onChange={handleChange} value={inputs.email} />
                        </div>

                        <div className='flex flex-col w-[80%] mx-auto relative'>
                            <label
                                className='font-semibold'
                                htmlFor="password">Contraseña</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    className='text-black bg-black/5 rounded-md h-8 pl-2 lg:h-10 pr-10 w-full placeholder:italic outline-none'
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
                        <button className='bg-black text-white px-2 py-2 mb-3 rounded-lg lg:tracking-widest lg:w-36' type="submit">Registrarse</button>
                        <p className='flex items-center mb-3'>O</p>
                        <div className='bg-black cursor-pointer text-white px-2 py-2 mb-3 rounded-lg lg:w-36 w-[105px] lg:tracking-widest text-center'>Google</div>
                    </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register