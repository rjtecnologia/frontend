import { ReactNode, ButtonHTMLAttributes } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  children: ReactNode
}

export default function Button({
  loading,
  children,
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        'flex h-10 items-center justify-center rounded-lg border-none bg-red-900 p-2 text-lg text-white transition duration-200 ease-in hover:brightness-110',
        className,
      )}
      disabled={loading}
      {...rest}
    >
      {loading ? (
        <FaSpinner
          className="animate-spin cursor-not-allowed text-white"
          size={16}
        />
      ) : (
        <>{children}</>
      )}
    </button>
  )
}
