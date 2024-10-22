'use client'
import React from 'react'
import { userTokenStore } from '@/store/tokenStore'

const page = () => {
  const token = userTokenStore((state) => state.token)
  console.log(token)
  return (
    <div>page</div>
  )
}

export default page