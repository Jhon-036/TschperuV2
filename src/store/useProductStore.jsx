import { create } from "zustand";
import { API_URL } from "../utils/ApiConfig";

export const useProductssStore = create((set, get) => ({
  products: [],
  categories: [],
  selectedCategory: 'Todos',
  loading: false,

  fetchProducts: async () => {
    set({ loading: true })
    try {
      const res = await fetch(`${API_URL}products`)
      const data = await res.json()

      if (!res.ok) {
        alert('Error al obtener productos')
      }

      const categories = [...new Set(data.map(p => p.category))]
      set({
        products: data,
        categories
      })
    } catch (err) {
      console.log('Ocurrio un error\n' + 'Detalles :\n' + err.message)
    } finally {
      set({loading: false})
    }
  },

  setSelectedCategory: (category) => set({ selectedCategory: category })
}))