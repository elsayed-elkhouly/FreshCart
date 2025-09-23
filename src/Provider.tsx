"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import ContextProvider from './context/cartContext'

const Provider = ({children}:{children:React.ReactNode}) => {
  return (
    <SessionProvider>
      <ContextProvider>
        {children}

      </ContextProvider>
    </SessionProvider>
  )
}

export default Provider