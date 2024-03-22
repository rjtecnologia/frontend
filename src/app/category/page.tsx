import Header from '@/components/Header'
import Button from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

export default function Category() {
  return (
    <div>
      <Header />
      <main className="max-w=[720px] mx-auto my-16 flex flex-col items-center justify-center px-8 py-0">
        <h1 className="text-3xl font-bold text-white">Cadastrar categoria</h1>

        <form>
          <Input placeholder="Digite um nome para categoria" />
        </form>
        <Button className="flex h-10 items-center justify-center rounded-lg border-none bg-green-900 p-2 text-lg text-white transition duration-200 ease-in hover:brightness-110">
          Cadastrar
        </Button>
      </main>
    </div>
  )
}
