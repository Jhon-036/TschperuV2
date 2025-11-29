import { useSearchParams } from "react-router-dom";

const FilterCategory = ({ categories, selectedCategory, onCategoryChange }) => {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleChange = (e) => {
    const value = e.target.value

    onCategoryChange(value)

    if (value === "Todos") {
      searchParams.delete("category")
      setSearchParams(searchParams)
    } else {
      setSearchParams({ category: value })
    }
  }

  return (
      <section className="text-sm max-md:w-full">
        <select
          value={selectedCategory}
          onChange={handleChange}
          className="uppercase w-full outline-0 cursor-pointer border border-[#254168] px-2 py-2 rounded "
        >
          <option value="Todos" className="hover:bg-[#254168]">Todos</option>

          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </section>
  );
};

export default FilterCategory;
