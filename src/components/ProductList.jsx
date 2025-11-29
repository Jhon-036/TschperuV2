import ProductCard from "./ProductCard"

const ProductList = ({ products, handleOpenModal, search }) => {

  const removeAccents = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
  const term = removeAccents(search)

  const filteredProduct = products.filter((product) => {
    if (!term) return true

    const name = removeAccents(product.name || '')
    const partno = removeAccents(product.partno || '')
    const category = removeAccents(product.category || '')
    const description = removeAccents(product.description || '')

    return (
      name.includes(term) ||
      partno.includes(term) ||
      category.includes(term) ||
      description.includes(term)
    )
  })

  return (
    <article className="grid grid-cols-5 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 max-md:place-self-center max-sm:grid-cols-1 gap-3">
      {
        filteredProduct.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
            handleOpenModal={handleOpenModal}
          />
        ))
      }
    </article>
  )
}
export default ProductList