import { defineStore } from 'pinia'
import { type Purchase } from '@/interfaces'

export const useDashboardStore = defineStore('dashboard', {
  state: () => ({
    purchase: [] as Purchase[],
  }),
  actions: {
    setPurchase(purchases: Purchase[]) {
      this.purchase = purchases
    },
  },
  getters: {
    purchases: (state) => state.purchase,
  },
})
