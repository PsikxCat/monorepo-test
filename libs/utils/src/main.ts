import { myFunction } from './utils'

export const isEmpty = (data: unknown): string => {
  if (data === null || data === undefined) return 'It is empty!'
  return 'It is not empty!'
}

export { myFunction }
