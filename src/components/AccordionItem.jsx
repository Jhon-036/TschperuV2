import { ArrowDown, ArrowUp } from "lucide-react"
import { useState } from "react"

const AccordionItem = ( {title, children} ) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleIsOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="bg-[#f8f8f8f8] rounded border-1 border-[#eeeeee]">
      <button onClick={handleIsOpen} className=" p-4 w-full flex cursor-pointer items-center gap-2 justify-between">
        <p className="text-xl text-[#254168]">{title}</p>
        <span>{isOpen ? <ArrowUp color="#254168"/> : <ArrowDown color="#254168"/>}</span>
      </button>
      <div className={`bg-white px-4 overflow-hidden transition-all duration-300 ease-in-out border-t-1 border-[#eeeeee] ${isOpen ? "max-h-96 py-4" : "max-h-0"}`}>
        <div>{children}</div>
      </div>
    </div>
  )
}
export default AccordionItem