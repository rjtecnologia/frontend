import { InputHTMLAttributes } from 'react'

interface InputProsp extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ ...rest }: InputProsp) {
  return (
    <input
      className="mb-4 h-10 border border-solid border-gray-100 rounded-lg bg-dark-900 text-white p-4 placeholder-opacity-80"
      {...rest}
    />
  )
}
