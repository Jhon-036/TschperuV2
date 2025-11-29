import { useEffect, useState } from "react"
import { LoaderCircle } from "lucide-react"
import Container from "./Container"
import ModalShop from "./ModalShop"
import ProductCard from "./ProductCard"
import { Link } from "react-router-dom"
import { useProductssStore } from "../store/useProductStore.jsx"

const Featured = () => {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const {loading, products} = useProductssStore()

  const handleOpenModal = (product) => {
    setSelectedProduct(product)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setSelectedProduct(null)
    setOpenModal(false)
  }

  if (loading) { return <div className="flex items-center justify-center w-full h-[20rem]"><LoaderCircle className="animate-spin" size={32} color="#254168" /></div> }

  const categoryFeatured = [
    { id: '01', name: 'Portacontenedores', image: '/images/portacontenedor.webp', url: '/productos' },
    { id: '02', name: 'Componentes eléctricos', image: '/images/componentes-electricos.webp', url: '/productos' },
    { id: '03', name: 'Componentes hidráulicos', image: '/images/componentes-hidraulicos.webp', url: '/productos' },
    { id: '04', name: 'Motores', image: '/images/motores.webp', url: '/productos' }
  ]

  return (
    <article className="bg-[#f8f8f8] flex flex-col gap-12 py-12">
      <section>
        <Container>
          <p className="before:content-[''] before:inline-block before:bg-[#254168] before:w-2 before:h-6 text-2xl text-[#254168] font-bold uppercase flex items-center gap-2">Categorías destacadas</p>
          <div className="grid grid-cols-4 gap-2 pt-6 max-xl:grid-cols-2 max-md:grid-cols-1">
            {
              categoryFeatured.map((category) => (
                <li key={category.id} className="relative list-none" href={category.url}>
                  <Link to={`/productos?category=${encodeURIComponent(category.name)}`}>
                    <img src={category.image} alt={category.name} className="w-full h-full" />
                    <p className="absolute top-5 left-5 text-md bg-[#f9bf21] px-4 py-0.5 rounded text-[#254168] shadow">{category.name}</p>
                  </Link>
                </li>
              ))
            }
          </div>
          <div className="pt-2">
            <Link to={'/productos'} className="text-[#2162a1] hover:text-[#0c3353] text-sm">Ver todas las categorías</Link>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <p className="before:content-[''] before:inline-block before:bg-[#254168] before:w-2 before:h-6 text-2xl text-[#254168] font-bold uppercase flex items-center gap-2">Nuestros Productos destacados</p>
          <div className="flex w-full justify-between gap-3 pt-6 max-xl:grid max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:flex max-sm:justify-center max-sm:flex-col max-sm:items-center">
            {
              products.slice(0, 5).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  handleOpenModal={handleOpenModal}
                />
              ))
            }
          </div>
          <div className="pt-2">
            <Link to={'/productos'} className="text-[#2162a1] hover:text-[#0c3353] text-sm" href="">Ver todos los productos</Link>
          </div>
        </Container>
      </section>

      {
        openModal && selectedProduct && (
          <ModalShop
            product={selectedProduct}
            closeModal={handleCloseModal}
          />
        )
      }
    </article>
  )
}
export default Featured