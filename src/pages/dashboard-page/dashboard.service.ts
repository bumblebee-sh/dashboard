import { get } from '@/libraries/http.library.ts'
import { type Purchase } from '@/interfaces'

function getDashboardData(): Promise<Purchase[]> {
  return get<Purchase[]>('/data.json')
}

export default {
  getDashboardData,
}
