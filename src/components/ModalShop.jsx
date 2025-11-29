import { Mail, MessageCircle, X } from "lucide-react"
import Container from "./Container"
import { useState } from "react"
import FormOrder from "./FormOrder"

const ModalShop = ({ product, closeModal }) => {
  const [showFormOrder, setShowFormOrder] = useState(false)

  const handleShowFormOrder = () => {
    setShowFormOrder(!showFormOrder)
  }

  return (
    <section className="fixed top-0 left-0 w-full h-screen bg-[#00000080] z-[9999999]">
      <Container className={'flex justify-center'}>
        <div className="absolute grid w-4/6 h-full">

          <div className="w-[35rem]  max-lg:w-full bg-[#f8f8f8] m-auto">
            <section className="flex items-center justify-between text-white px-6 py-4 bg-[#254168]">
              <h2 className="uppercase text-lg">Solicita tu cotización :</h2>
              <div onClick={closeModal}>
                <X className="cursor-pointer" color="white" />
              </div>
            </section>
            {
              showFormOrder
              ?
                <section className="p-6">
                  <FormOrder 
                    product={product}
                    closeModal={closeModal}
                  />
                </section>
              :
                <section className="p-6">
                  <div className="flex max-sm:flex-col max-sm:items-center max-sm:py-6 bg-white rounded border-1 border-[#f1f1f1f1]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-[140px] bg-[#254168] pr-1 max-sm:p-0"
                    />
                    <div className="p-4">
                      <p>{product.name}</p>
                      <span className="text-xs text-[#25416866]">{product.category}</span>
                      <span className="block pb-1 text-xs text-gray-400">Part. No. : {product.partno}</span>
                      <p>{product.description}</p>
                    </div>
                  </div>
                  <div className="pt-6">
                    <p>¿Cómo prefieres contactarnos?</p>
                    <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-6 pt-4">
                      <div onClick={handleShowFormOrder} className="flex items-center justify-center gap-2 rounded bg-[#254168] text-white p-2 cursor-pointer"><Mail size={18} />Correo</div>
                      <a href={`https://wa.me/51951758040?text=Hola%20TSCH,%20revis%C3%A9%20su%20sitio%20web%20y%20estoy%20interesado%20en%20${product.name}.%20%C2%BFPodr%C3%ADan%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n%3F`} target="_blank" className="flex items-center justify-center gap-2 rounded bg-[#25d366] text-white p-2 cursor-pointer"><MessageCircle size={18} color="white" />Whatsapp</a>
                    </div>
                  </div>
                </section>
            }
          </div>

        </div>
      </Container>
    </section>
  )
}
export default ModalShop