// import { signOut } from '../contexts/AuthContext'
import { parseCookies } from 'nookies'

export async function setupAPIClient(
  input: string | URL | Request,
  method: string,
  body: BodyInit,
  ctx = undefined,
) {
  const cokkies = parseCookies(ctx)
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${input}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${cokkies}`,
    },
    body,
  })
    .then((response) => {
      return response.json()
    })
    .catch((err) => {
      return Promise.reject(err)
    })

  return data
}
