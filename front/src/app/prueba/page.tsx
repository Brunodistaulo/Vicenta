'use client';
import React, { useState } from 'react';

const AuthForm: React.FC = () => {
    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: '',
    });

    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });

    // Función para manejar cambios en el formulario de registro
    const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    // Función para manejar cambios en el formulario de login
    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    // Función para enviar los datos de registro
    const handleRegisterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(registerData),
            });
            const data = await response.json();
            console.log('Register response:', data);
        } catch (error) {
            console.error('Error in registration:', error);
        }
    };

    // Función para enviar los datos de login
    const handleLoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });
            const data = await response.json();
            console.log('Login response:', data);
        } catch (error) {
            console.error('Error in login:', error);
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {/* Formulario de Registro */}
            <form onSubmit={handleRegisterSubmit} style={{ flex: 1, marginRight: '20px' }}>
                <h2>Register</h2>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={registerData.name}
                    onChange={handleRegisterChange}
                    required
                    className='text-black'
                />
                <input
                    className='text-black'
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={registerData.email}
                    onChange={handleRegisterChange}
                    required
                />
                <input
                    className='text-black'
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={registerData.password}
                    onChange={handleRegisterChange}
                    required
                />
                <input
                    className='text-black'
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={registerData.phone}
                    onChange={handleRegisterChange}
                    required
                />
                <input
                    className='text-black'
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={registerData.address}
                    onChange={handleRegisterChange}
                    required
                />
                <button type="submit">Register</button>
            </form>

            {/* Formulario de Login */}
            <form onSubmit={handleLoginSubmit} style={{ flex: 1 }}>
                <h2>Login</h2>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default AuthForm;
