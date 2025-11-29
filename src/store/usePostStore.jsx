import { create } from "zustand";
import { API_URL } from "../utils/ApiConfig";

export const usePostStore = create((set, get) => ({
  posts: [],
  categories: [],
  selectedCategory: 'Todos',
  loading: false,

  fetchPosts: async () => {
    set({ loading: true })
    try {
      const res = await fetch(`${API_URL}posts`)
      const data = await res.json()

      if (!res.ok) {
        alert('Error al obtener publicaciones')
      }

      const categories = [...new Set(data.map(p => p.category))]
      set({
        posts: data,
        categories: ["Todos", ...categories],
        loading: false
      })
    } catch (err) {
      console.log('Ocurrio un error\n' + 'Detalles :\n' + err.message)
    } finally {
      set({loading: false})
    }
  },

  setSelectedCategory: (category) => set({ selectedCategory: category })
}))