import { fetchWrapper } from '@/services/api'

type CategoryListProps = {
  id: string
  name: string
}

export const getCategoryList = async () => {
  const result = await fetchWrapper(
    'listcategory',
    'GET',
    undefined,
    'no-store',
  ).then((response: CategoryListProps[]) => response)

  return result
}

export default async function Select() {
  const categoryList = await getCategoryList()

  return categoryList.map((item, index) => (
    <option key={index}>{item.name} </option>
  ))
}
