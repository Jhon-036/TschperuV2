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
    <main className="h-[calc(100vh-134px)] py-12 max-lg:py-0 bg-[#f8f8f8] ">
      <Container className={'flex h-full max-lg:py-16 items-center justify-center'}>
        <section className="flex gap-20 max-lg:flex-col-reverse">
          <div className="w-[35rem] max-lg:w-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-full rounded"
            />
          </div>
          <div className="w-[26rem] max-xl:w-[20rem]">
            <h1 className="text-2xl font-semibold mb-2 uppercase">{product.name}</h1>
            <p className="text-sm text-gray-500 mb-4">Part No. :{product.partno}</p>
            <div className="flex flex-col">
              <p className="uppercase font-semibold">Descripción:</p>
              <p className="mb-4">{product.description}</p>
            </div>
            <div className="py-4 border-b border-t border-gray-300">
              <p className="uppercase font-semibold">Categoría:</p>
              <p>{product.category}</p>
            </div>
            <div
              className="w-full bg-[#f9bf21] hover:bg-[#f7c746] mt-8 transition text-[#254168] text-center py-1 rounded cursor-pointer"
              onClick={handleOpenModal}  
            >
              <button
                className="cursor-pointer"
              >Cotizar</button>
            </div>
          </div>
        </section>
      </Container>
      {
        openModal && product && (
          <ModalShop
            product={product}
            closeModal={handleCloseModal}
          />
        )
      }
    </main>
  )
}

export default ProductDetail
