import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface InputProsp extends InputHTMLAttributes<HTMLInputElement> {}
interface TextAreaProsp extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Input({ ...rest }: InputProsp) {
  return (
    <input
      className="mb-4 h-10 rounded-lg border border-solid border-gray-100 bg-dark-900 p-4 text-white placeholder-opacity-80"
      {...rest}
    />
  )
}

export function TextArea({ ...rest }: TextAreaProsp) {
  return (
    <textarea
      className="mb-4 h-10 rounded-lg border border-solid border-gray-100 bg-dark-900 p-4 text-white placeholder-opacity-80"
      {...rest}
    />
  )
}
