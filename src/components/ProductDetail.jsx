import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Container from "./Container"
import { API_URL } from "../utils/ApiConfig"
import ModalShop from "./ModalShop"

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [openModal, setOpenModal] = useState(false)

  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${API_URL}products/${id}`)
        if (!res.ok) throw new Error("Error al obtener el producto")
        const data = await res.json()
        setProduct(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) return <div className="flex justify-center items-center w-full h-[calc(100vh-134px)]"><p className="p-8 text-lg">Cargando producto...</p></div>
  if (error) return <p className="p-8 text-red-500">{error}</p>
  if (!product) return <p className="p-8">Producto no encontrado.</p>

  return (
    <main className="bg-[#f8f8f8] min-h-dvh py-8 md:pt-32">
      <Container className="max-w-6xl mx-auto px-4">
        <section className="flex flex-col md:flex-row gap-8 md:gap-20">
          {/* Imagen */}
          <div className="w-full md:w-[35rem] flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-w-md rounded object-contain"
            />
          </div>

          {/* Texto */}
          <div className="w-full md:w-[26rem]">
            <h1 className="text-xl md:text-2xl font-semibold mb-2 uppercase">
              {product.name}
            </h1>

            <p className="text-xs md:text-sm text-gray-500 mb-4">
              Part No. : {product.partno}
            </p>

            <div className="flex flex-col mb-4">
              <p className="uppercase font-semibold text-sm">Descripción:</p>
              <p className="break-words whitespace-pre-line">{product.description}</p>
            </div>

            <div className="py-3 md:py-4 border-y border-gray-300">
              <p className="uppercase font-semibold text-sm">Categoría:</p>
              <p>{product.category}</p>
            </div>

            <button
              onClick={handleOpenModal}
              className="w-full bg-[#f9bf21] hover:bg-[#f7c746] mt-6 md:mt-8 transition text-[#254168] text-center py-2 rounded cursor-pointer font-semibold text-sm md:text-base"
            >
              Cotizar
            </button>
          </div>
        </section>
      </Container>

      {openModal && product && (
        <ModalShop
          product={product}
          closeModal={handleCloseModal}
        />
      )}
    </main>

  )
}

export default ProductDetail
