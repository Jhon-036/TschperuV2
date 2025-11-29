import { useEffect, useMemo, useState } from "react"
import Container from "../components/Container"
import FilterCategory from "../components/FilterCategory"
import ProductList from "../components/ProductList"
import { LoaderCircle } from "lucide-react"
import ProductosHero from "../components/ProductosHero"
import Pagination from "../components/Pagination"
import ModalShop from "../components/ModalShop"
import { useProductssStore } from "../store/useProductStore"
import Search from "../components/Search"
import { useSearchParams } from "react-router-dom"

const Productos = () => {
  const { products,
    categories: uniqueCategories,
    selectedCategory,
    setSelectedCategory,
    loading,
    fetchProducts
  } = useProductssStore()
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPgae, setPostsPerPgae] = useState(15)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [search, setSearch] = useState('')
  const [searchParams] = useSearchParams()
  const categoryFromUrl = searchParams.get('category')

  const handleOpenModal = (product) => {
    setSelectedProduct(product)
    setOpenModal(true)
  }

  useEffect(() => {
    if (!products.length) {
      fetchProducts()
    }
  }, [])

  const handleCloseModal = () => {
    setSelectedProduct(null)
    setOpenModal(false)
  }

  const searcher = (e) => {
    setSearch(e.target.value)
  }

  //Filtro por categorias
  const filterCategory = useMemo(() => {
    if (selectedCategory === 'Todos') {
      return products
    }
    return products.filter(products => products.category === selectedCategory)
  }, [products, selectedCategory])

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    } else {
      setSelectedCategory("Todos");
    }
  }, [categoryFromUrl])


  if (loading) { return <div className="flex items-center justify-center w-full h-[20rem]"><LoaderCircle className="animate-spin" size={32} color="#254168" /></div> }

  //Paginacion
  const lastPostIndex = currentPage * postsPerPgae
  const firsPostIndex = lastPostIndex - postsPerPgae
  const currentPosts = filterCategory.slice(firsPostIndex, lastPostIndex)

  return (
    <main className="bg-[#f8f8f8]">
      <ProductosHero />
      <article >
        <section className="pt-12">
          <Container className="grid grid-cols-[2fr_1fr] max-md:flex max-md:flex-col  gap-6 items-center">
            <Search 
              placeholder={'Buscar producto'}
              value={search}
              onChange={searcher}
            />
            <FilterCategory
              categories={uniqueCategories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </Container>
        </section>
        <section>
          <Container className="py-12">
            <ProductList
              search={search}
              products={currentPosts}
              handleOpenModal={handleOpenModal}
            />
            <Pagination
              totalPosts={filterCategory.length}
              postsPerPage={postsPerPgae}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          </Container>
        </section>
      </article>
      {
        openModal && selectedProduct && (
          <ModalShop
            product={selectedProduct}
            closeModal={handleCloseModal}
          />
        )
      }
    </main>
  )
}
export default Productos