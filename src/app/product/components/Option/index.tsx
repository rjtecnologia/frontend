import { fetchWrapper } from '@/services/api'

type CategoryListProps = {
  id: string
  name: string
}

export default async function Select() {
  const categoryList = await fetchWrapper(
    'listcategory',
    'GET',
    undefined,
    'no-store',
  ).then((response: CategoryListProps[]) => response)

  return categoryList.map((item, index) => (
    <option key={index}>{item.name} </option>
  ))
}
