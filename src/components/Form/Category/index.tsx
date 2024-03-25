'use client'
import Button from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { api } from '@/services/apiClient'
import { FormEvent, useState } from 'react'
import { toast } from 'react-toastify'

export default function FormCategory() {
  const [categoryName, setCategoryName] = useState('')

  async function handleRegister(event: FormEvent) {
    event.preventDefault()

    if (categoryName === '') {
      toast.warning('Informe um nome para a categoria')
      return
    }

    const response = await api(
      'category',
      'POST',
      JSON.stringify({
        name: categoryName,
      }),
    )

    if (response?.id === undefined) {
      toast.warning('Categoria já esta cadastrada')
      return
    }

    toast.success('Categoria cadastrada com sucesso')
  }

  return (
    <div>
      <form onSubmit={handleRegister} className="my-4 flex w-full flex-col">
        <Input
          className="p-6"
          placeholder="Digite um nome para categoria"
          value={categoryName}
          onChange={(e) => {
            setCategoryName(e.target.value)
          }}
        />
        <Button className="bg-green-900 transition duration-200 ease-in hover:brightness-110">
          <p className="text-lg font-semibold text-dark-700">Cadastrar</p>
        </Button>
      </form>
    </div>
  )
}
