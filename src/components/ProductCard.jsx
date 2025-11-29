import { Link } from "react-router-dom"

const ProductCard = ({ product, handleOpenModal }) => {

  const productId = product.id

  const handleModal = () => {
    handleOpenModal(product)
  }

  return (
    <div className="bg-white w-[246px] border-1 border-[#f1f1f1f1]">
      <Link to={`/productos/${productId}`}>
        <img src={product.image} alt={product.name} className="pb-1 bg-[#254168]" />
      </Link>
      <div className="p-3 grid grid-rows-[2,auto]">
        <Link to={`/productos/${productId}`}>
          <div className="pb-3">
            <p>{product.name}</p>
            <span className="text-xs text-[#25416866]">{product.category}</span>
            <span className="block text-xs pb-1 text-gray-400">Part. No. : {product.partno}</span>
            <p>{product.description}</p>
          </div>
        </Link>
        <div
          className="w-full bg-[#f9bf21] hover:bg-[#f7c746] transition text-[#254168] text-center p-1 rounded cursor-pointer"
          onClick={handleModal}>
          <button
            className="cursor-pointer"
          >Cotizar</button>
        </div>
      </div>
    </div>
  )
}
export default ProductCard