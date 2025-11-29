import { Search } from "lucide-react"
import { useRef, useState } from "react"

const SearchProducts = () => {
  const [isClick, setIsClick] = useState(false)
  const inputRef = useRef(null)

  const handleFocus = () => {
    setIsClick(true)
  }

  const handleBlur = () => {
    setIsClick(false)
  }

  const handleIconFocus = () => {
    inputRef.current.focus()
    handleFocus()
  }

  return (
    <section 
      className={`cursor-pointer flex items-center gap-3 py-2 px-3 bg-[#ffffff] rounded ${isClick ? 'border-2 border-[#c4961a] transition' : 'border-2 border-[#f9c121]'}`}
      onClick={handleIconFocus}>
      <Search size={16} strokeWidth={2} />
      <input 
        type="text" 
        className="outline-0 text-sm w-[16rem]" 
        onClick={handleFocus} 
        onBlur={handleBlur}
        ref={inputRef}
        placeholder="Buscar producto"
      />
    </section>
  )
}
export default SearchProducts