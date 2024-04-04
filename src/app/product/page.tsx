import Header from '@/components/Header'
import { canSSRAuth } from '../utils/canSSR'
import FormProduct from '@/components/Form/Product'
import Select from '@/app/product/components/Option'

export default function Product() {
  canSSRAuth()

  return (
    <div>
      <Header />
      <main className="mx-auto my-16 flex max-w-[720px] flex-col px-4">
        <h1 className="text-3xl font-bold text-white">Novo Produto</h1>
        <FormProduct>
          <Select />
        </FormProduct>
      </main>
    </div>
  )
}
