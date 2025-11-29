import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react"
import Container from "./Container"
import TiktokLogo from "../svg/TiktokLogo"

const Footer = () => {
  return (
    <article className="border-t-12 border-[#254168] bg-[#d9d9d9]">
      <Container>
        <div className="grid grid-cols-3 gap-12 py-12 max-md:flex max-md:items-center max-md:flex-col">
          <section>
            <img src="/tsch-logo.webp" alt="tsch.com" className="w-[250px]" />
          </section>
          <section>
            <h2 className="text-xl text-[#254168] font-semibold">Contactos</h2>
            <ul className="flex flex-col pt-3 gap-3">
              <li className="flex gap-3"><MapPin size={18} color="#254168" /><p className="text-[#254168]">Lima, Lima, Perú </p></li>
              <a href="tel:951758040" className="flex gap-3"><Phone size={18} color="#254168" /><p className="text-[#254168]">+51 951 758 040</p></a>
              <a href="mailto:ventas@tschperu.com" className="flex gap-3"><Mail size={18} color="#254168" /><p className="text-[#254168]">ventas@tschperu.com</p></a>
            </ul>
          </section>
          <section>
            <h2 className="text-xl text-[#254168] font-semibold">Legal</h2>
            <ul className="flex flex-col pt-3 gap-3">
              <li className="flex gap-3 text-[#254168]">Términos y Condiciones</li>
              <li className="flex gap-3 text-[#254168]">Política de Privacidad</li>
              <li className="flex gap-3 text-[#254168]">Preguntas Frecuentes</li>
            </ul>
          </section>
        </div>
        <div className="border-t border-[#254168] py-6 flex items-center justify-between">
          <p className="text-sm">Copyright © 2025 T.S.C.H</p>
          <div className="flex items-center gap-2">
                <a className="p-2 cursor-pointer bg-white hover:bg-[#eeeeee] text-white transition rounded-full shadow">
                  <Instagram size={16} strokeWidth={2.5} color="#254168"/>
                </a>
                <a className="p-2 cursor-pointer bg-white hover:bg-[#eeeeee] text-white transition rounded-full shadow">
                  <Facebook size={16} strokeWidth={2.5} color="#254168"/>
                </a>
                <a className="p-2 cursor-pointer bg-white hover:bg-[#eeeeee] text-white transition rounded-full shadow">
                  <Youtube size={16} strokeWidth={2.5} color="#254168"/>
                </a>
                <a className="p-2 cursor-pointer bg-white hover:bg-[#eeeeee] text-white transition rounded-full shadow">
                  <TiktokLogo/>
                </a>
            </div>
        </div>
      </Container>
    </article>
  )
}
export default Footer