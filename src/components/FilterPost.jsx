import { useSearchParams } from "react-router-dom"

const FilterPost = ({ categories, selectedCategory, onCategoryChange }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleClick = (category) => {
    onCategoryChange(category)

    if (category === "Todos") {
      searchParams.delete("category")
      setSearchParams({})
    } else {
      setSearchParams({ category  })
    }
  }

  return (
    <div className="border border-gray-300 w-full place-self-start p-6">
      <p className="text-center pb-3">Filtros</p>
      <div className="pt-3 border-t border-gray-300">
        {categories.map(cate => (
          <button 
            key={cate}
            onClick={() => handleClick(cate)}
            className="cursor-pointer block my-2 text-start hover:text-[#254168] uppercase transition"
          >{cate}</button>
        ))}
      </div>
    </div>
  )
}
export default FilterPost