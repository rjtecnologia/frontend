import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import './globals.css'
import AuthProvider from '@/contexts/AuthContext'

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
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
