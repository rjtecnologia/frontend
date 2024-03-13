import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/contexts/AuthContext'
import { ToastContainer } from 'react-toastify'
import { Auth } from './teste/auth'
import 'react-toastify/dist/ReactToastify.css'

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pizzaria - Bom Sabor',
  description: 'O sabor que você gosta',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-dark-700">
        <AuthProvider>
          <Auth />
          {children}
          <ToastContainer autoClose={3000} />
        </AuthProvider>
      </body>
    </html>
  )
}
