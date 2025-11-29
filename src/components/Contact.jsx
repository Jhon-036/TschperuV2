import { Mail, MapPin, Phone } from "lucide-react"
import Container from "./Container"
import FormContact from "./FormContact"

const Contact = () => {



  return (
    <article className="bg-[#f8f8f8] py-12">
      <Container>
        <p className="before:content-[''] before:inline-block before:bg-[#254168] before:w-2 before:h-6 text-2xl text-[#254168] font-bold uppercase flex items-center gap-2">Contactos</p>
        <div className="grid grid-cols-2 gap-12 max-xl:grid-cols-1">
          <section className="pt-6 flex flex-col gap-6">
            <p className="text-lg">¿Tienes alguna pregunta o comentario? Nos encantaría saber de ti. Completa el formulario y nuestro equipo te responderá lo antes posible.</p>
            <div className="flex flex-col gap-6">
              <div className="flex gap-3 items-center">
                <div className="p-2.5 rounded-full bg-[#f9bf21]">
                  <Phone size={18} color="#254168" />
                </div>
                <div>
                  <p>Teléfono</p>
                  <span>+51 951 758 040</span>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="p-2.5 rounded-full bg-[#f9bf21]">
                  <Mail size={18} color="#254168" />
                </div>
                <div>
                  <p>Correo electrónico</p>
                  <span>ventas@tschperu.com</span>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="p-2.5 rounded-full bg-[#f9bf21]">
                  <Mail size={18} color="#254168" />
                </div>
                <div>
                  <p>Correo electrónico</p>
                  <span>operaciones@tschperu.com</span>
                </div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="p-2.5 rounded-full bg-[#f9bf21]">
                  <MapPin size={18} color="#254168" />
                </div>
                <div>
                  <p>Ubicación</p>
                  <span>Lima, Lima, Perú</span>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-6">
            <FormContact />
          </section>
        </div>
      </Container>
    </article>
  )
}
export default Contact