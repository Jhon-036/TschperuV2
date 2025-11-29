import { Search as IconSearch } from "lucide-react"

const Search = ({placeholder, value, onChange}) => {
  return (
    <div className="border-[#254168] border rounded flex items-center gap-2 p-2 max-md:w-full">
      <IconSearch strokeWidth={1.2} size={20} />
      <input 
        value={value}
        onChange={onChange}
        type="text" 
        className="text-sm outline-0 w-full"
        placeholder={placeholder}
      />
    </div>
  )
}
export default Search