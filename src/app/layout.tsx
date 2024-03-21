import type { Metadata } from 'next'
import './globals.css'
import AuthProvider from '@/contexts/AuthContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const metadata: Metadata = {
  title: 'Pizzaria - Bom Sabor',
  description: 'O sabor que você gosta',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: JSX.Element
}>) {
  return (
    <html lang="en">
      <body className="bg-dark-700">
        <AuthProvider>
          {children}
          <ToastContainer autoClose={3000} />
        </AuthProvider>
      </body>
    </html>
  )
}
