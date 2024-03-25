import FormCategory from '@/components/Form/Category'
import Header from '@/components/Header'

export default function Category() {
  return (
    <div>
      <Header />
      <main className="mx-auto my-16 flex max-w-[720px] flex-col justify-center px-8 py-0">
        <h1 className="text-3xl font-bold text-white">Cadastrar categoria</h1>
        <FormCategory />
      </main>
    </div>
  )
}
