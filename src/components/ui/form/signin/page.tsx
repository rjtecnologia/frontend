import Link from 'next/link'
import { Input } from '../../Input'
import Button from '../../button'

export default function FormSignIn() {
  return (
    <div className="mt-8 flex w-[90%] flex-col items-center justify-center px-6 py-8 sm:w-[600px]">
      <form className="flex w-full flex-col">
        <Input type="text" placeholder="Digite seu e-mail" name="email" />
        <Input type="password" placeholder="Digite sua senha" name="password" />
        <Button type="submit">Acessar</Button>
      </form>
      <Link className="mt-4 cursor-pointer text-sm text-white" href="/cadastro">
        Não possui uma conta ? Cadastre-se
      </Link>
    </div>
  )
}
