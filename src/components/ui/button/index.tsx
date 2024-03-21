import { ReactNode, ButtonHTMLAttributes } from 'react'
import { FaSpinner } from 'react-icons/fa'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  children: ReactNode
}

export default function Button({ loading, children, ...rest }: ButtonProps) {
  return (
    <button
      className="flex h-10 items-center justify-center rounded-lg border-none bg-red-900 p-2 text-lg text-white transition duration-200 ease-in hover:brightness-110"
      disabled={loading}
      {...rest}
    >
      {loading ? (
        <FaSpinner
          className="animate-spin cursor-not-allowed text-white"
          size={16}
        />
      ) : (
        <a className="text-white">{children}</a>
      )}
    </button>
  )
}
