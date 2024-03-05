import { setupAPIClient } from './api'

export async function api(
  input: string | URL | Request,
  method: string,
  body: BodyInit,
) {
  return await setupAPIClient(input, method, body)
}
