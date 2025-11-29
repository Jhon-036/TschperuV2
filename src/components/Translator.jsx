import { ChevronDown, ChevronUp, Globe } from "lucide-react"
import { useState } from "react"

const Translator = () => {
  const [isChange, setIsChange] = useState(false)
  const [isLanguage, setIsLanguage] = useState('ES')

  const handleIsShow = () => {
    setIsChange(true)
  }

  const handleIsNotShow = () => {
    setIsChange(false)
  }

  const handleIsLanguage = (e) => {
    if (e == 'Español') {
      setIsLanguage('ES')
      setIsChange(false)
    } else {
      setIsLanguage('EN')
      setIsChange(false)
    }
  }

  return (
    <section 
      className="flex text-sm hover:bg-[#ffffff4f] h-full cursor-pointer transition relative rounded" 
      onMouseEnter={handleIsShow}
      onMouseLeave={handleIsNotShow}>
        <div className="flex gap-2 items-center px-3 py-1.5">
          <Globe size={14} strokeWidth={2} />
          <div className="flex gap-2 items-center">
            <p className="text-sm">{isLanguage}</p>
            {
              isChange ?
              <ChevronDown size={16} strokeWidth={2} />
              :
              <ChevronUp size={16} strokeWidth={2} />
            }
          </div>
          <div className={`absolute w-[6rem] pt-2 top-8 -left-[3px] ${isChange ? 'block opacity-100' : 'hidden opacity-0'}`}>
            <ul className='bg-white w-full rounded p-1 shadow'>
              <li className="hover:bg-[#f9bf21] transition rounded text-center p-2" onClick={() => handleIsLanguage('Español')}>Español</li>
              <li className="hover:bg-[#f9c121] transition rounded text-center p-2" onClick={() => handleIsLanguage('Ingles')}>Ingles</li>
            </ul>
          </div>
        </div>
    </section>
  )
}
export default Translator