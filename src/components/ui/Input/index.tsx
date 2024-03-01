import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface InputProsp extends InputHTMLAttributes<HTMLInputElement> {}
interface TextAreaProsp extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Input({ ...rest }: InputProsp) {
  return (
    <input
      className="mb-4 h-10 border border-solid border-gray-100 rounded-lg bg-dark-900 text-white p-4 placeholder-opacity-80"
      {...rest}
    />
  )
}

export function TextArea({ ...rest }: TextAreaProsp) {
  return (
    <textarea
      className="mb-4 h-10 border border-solid border-gray-100 rounded-lg bg-dark-900 text-white p-4 placeholder-opacity-80"
      {...rest}
    />
  )
}
