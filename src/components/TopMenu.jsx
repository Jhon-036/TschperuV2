import { Facebook, Instagram, Mail, Phone, Youtube } from "lucide-react"
import TiktokLogo from '../svg/TiktokLogo.jsx'
import Container from "./Container.jsx"
import Translator from "./Translator.jsx"

const TopMenu = () => {
  return (
    <section className="bg-[#f9c121] py-2">
        <Container className="flex justify-between ">
          <div className="flex items-center gap-6">
            <a className="flex items-center gap-2" href="tel:951758040">
              <div className="bg-white p-2 rounded-full shadow">
                <Phone size={14} strokeWidth={2.5} color="#254168"/>
              </div>
              <p className="text-sm text-[#254168] font-semibold">+51 951 758 040</p>
            </a>
            <a className="flex items-center gap-2 max-sm:hidden" href="mailto:ventas@tschperu.com">
              <div className="bg-white p-2 rounded-full shadow">
                <Mail size={14} strokeWidth={2.5} color="#254168"/>
              </div>
              <p className="text-sm text-[#254168] font-semibold">ventas@tschperu.com</p>
            </a>
          </div>
          <div className="flex items-center gap-8">
            {/* <Translator /> */}
            <div className="flex items-center gap-2">
                <a href="https://www.instagram.com/tschperu/" target="_blank" className="p-2 cursor-pointer bg-white hover:bg-[#eeeeee] text-white transition rounded-full shadow">
                  <Instagram size={14} strokeWidth={2.5} color="#254168"/>
                </a>
                <a href="https://www.facebook.com/tsch.peru/" target="_blank" className="p-2 cursor-pointer bg-white hover:bg-[#eeeeee] text-white transition rounded-full shadow">
                  <Facebook size={14} strokeWidth={2.5} color="#254168"/>
                </a>
                <a href="https://www.youtube.com/" target="_blank" className="p-2 cursor-pointer bg-white hover:bg-[#eeeeee] text-white transition rounded-full shadow">
                  <Youtube size={14} strokeWidth={2.5} color="#254168"/>
                </a>
                <a href="https://www.tiktok.com/" target="_blank" className="p-2 cursor-pointer bg-white hover:bg-[#eeeeee] text-white transition rounded-full shadow">
                  <TiktokLogo/>
                </a>
            </div>
          </div>
        </Container>
      </section>
  )
}
export default TopMenu