import { ReactNode, ButtonHTMLAttributes } from 'react'
import { FaSpinner } from 'react-icons/fa'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  children: ReactNode
}

export default function Button({ loading, children, ...rest }: ButtonProps) {
  return (
    <button
      className="flex justify-center items-center bg-red-900 border-none p-2 text-white rounded-lg hover:brightness-110 transition duration-200 ease-in h-10 text-lg"
      disabled={loading}
      {...rest}
    >
      {loading ? (
        <FaSpinner
          className="text-white animate-spin cursor-not-allowed"
          size={16}
        />
      ) : (
        <a className="text-white">{children}</a>
      )}
    </button>
  )
}
