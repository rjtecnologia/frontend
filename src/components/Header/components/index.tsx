'use client'
import { AuthContext } from '@/contexts/AuthContext'
import { useContext } from 'react'
import { FiLogOut } from 'react-icons/fi'

export default function ButtonLogout() {
  const { signOut } = useContext(AuthContext)

  return (
    <div>
      <button onClick={signOut}>
        <FiLogOut color="#FFF" size={24} />
      </button>
    </div>
  )
}
