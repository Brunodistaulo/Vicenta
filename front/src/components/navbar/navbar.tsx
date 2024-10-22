"use client"

import React, { useState, Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, User, ChevronDown } from 'lucide-react'
import { userTokenStore } from '@/store/tokenStore'
import { Menu, Transition } from '@headlessui/react'
import Swal from 'sweetalert2'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const { token, setToken } = userTokenStore()

  const menuItems = [
    { href: '/', label: 'INICIO' },
    { href: '/contact', label: 'CONTACTO' },
    { href: '/login', label: 'INGRESAR' },
  ]

  const userMenuItems = [
    { href: '/', label: 'INICIO' },
    { href: '/history', label: 'HISTORIAL' },
    { href: '/profile', label: 'PERFIL' },
    { 
      href: '#', 
      label: 'CERRAR SESION',
      onClick: () => {
        setToken("")
        Swal.fire({
          icon: "success",
          title: "Sesión cerrada",
          text: "Has cerrado sesión",
          showConfirmButton: true,
          confirmButtonText: "Aceptar",
          confirmButtonColor: "black",
        })
        router.push('/')
      }
    },
  ]

  const handleMenuItemClick = (item: any) => {
    if (item.onClick) {
      item.onClick()
    } else {
      router.push(item.href) 
    }
  }

  return (
    <nav className="relative z-10 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Image src="/logo-no-background.png" alt="logo" width={120} height={100} className="h-8 w-auto" />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {token ? (
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="flex items-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                      <User className="h-5 w-5 mr-2" />
                      BIENVENIDO
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1">
                        {userMenuItems.map((item) => (
                          <Menu.Item key={item.href}>
                            {({ active }) => (
                              <button
                                onClick={() => handleMenuItemClick(item)}
                                className={`${
                                  active ? 'bg-gray-100 text-gray-900 ' : 'text-gray-700'
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                {item.label}
                              </button>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ) : (
                menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium uppercase"
                  >
                    {item.label}
                  </Link>
                ))
              )}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <Link href="/cart" className="mr-2">
              <ShoppingCart className="h-6 w-6 text-gray-400" />
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                animate={open ? "open" : "closed"}
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 }
                }}
                transition={{ duration: 0.3 }}
              >
                {open ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {token ? userMenuItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleMenuItemClick(item)}
                  className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium uppercase w-full text-left"
                >
                  {item.label}
                </button>
              )) : menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:bg-gray-100 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium uppercase"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar