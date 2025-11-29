import { ChartNoAxesCombined, HeartHandshake, HeartPlus, Lightbulb, Medal, ShieldCheck, Target, Zap } from "lucide-react"
import Container from "./Container"
import AccordionItem from "./AccordionItem"

const Description = () => {
  return (
    <article className="bg-[#f8f8f8] pt-12">
      <Container className="py-12">
        <div className="text-center text-xl w-3/4 m-auto font-light">
          <h2>TECHNOLOGICAL SOLUTIONS AND CONTAINER HANDLING E.I.R.L. es una empresa especializada en el mantenimiento, soporte técnico y comercial de maquinaria para los sectores portuario, minero y de construcción.</h2>
        </div>
        <div className="grid pt-18 grid-cols-2 max-md:grid max-md:grid-cols-1 gap-12">
          <section className="text-lg font-light flex flex-col gap-6">
            <p>Somos mucho más que un proveedor de servicios; somos su aliado estratégico, comprometido con la excelencia técnica y la satisfacción de nuestros clientes. Nuestra experiencia nos ha permitido desarrollar un profundo conocimiento en el soporte técnico y comercial de equipos especializados. Entendemos que cada minuto de inactividad representa un costo para su operación, por eso ofrecemos soluciones rápidas, eficientes y con los más altos estándares de calidad.</p>
            <p>Nuestro trabajo se centra en brindar un servicio integral que abarca desde el mantenimiento preventivo, diseñado para anticipar y prevenir fallas, hasta intervenciones correctivas inmediatas cuando los equipos lo requieran. Utilizamos tecnología de vanguardia en mantenimiento predictivo para monitorear el estado de sus máquinas y actuar antes de que se presenten problemas mayores.</p>
          </section>
          <section>
            <img src="/images/nosotros-description.webp" alt="Somos T.S.C.H." className="rounded w-full h-[26rem] object-cover" />
          </section>
        </div>
      </Container>

      <article className="bg-[url(/images/mision-vision.webp)] w-full h-[32rem] max-lg:h-auto mt-12 bg-no-repeat bg-cover bg-fixed">
        <div className="bg-[#254168a8] w-full h-full max-lg:py-12">
          <Container className="h-full">
            <section className="grid items-center h-full grid-cols-2 max-md:grid-cols-1 gap-12">
              <div className="bg-[#f8f8f8af] backdrop-blur-[5px] rounded flex flex-col items-center p-8 shadow">
                <div className="rounded-full bg-white p-6">
                  <Target size={96} color="#254168" />
                </div>
                <h2 className="pt-4 text-xl text-[#254168] uppercase">Misión</h2>
                <p className="text-lg pt-6 font-light text-center">Consolidarnos como una empresa líder en el sector portuario, construcción y minería brindando productos y servicios tecnológicos de alta calidad y garantía logrando así la confianza de nuestros clientes nacionales e internacionales.</p>
              </div>
              <div className="bg-[#f8f8f8af] backdrop-blur-[5px] rounded flex flex-col items-center p-8 shadow">
                <div className="rounded-full bg-white p-6">
                  <Lightbulb size={96} color="#254168" />
                </div>
                <h2 className="pt-4 text-xl text-[#254168] uppercase">Visión</h2>
                <p className="text-lg pt-6 font-light text-center">Ser la empresa más innovadora y visionaria del mercado, brindando servicios confiables, eficientes y de alta calidad, consolidándonos como la mejor opción para nuestros clientes nacionales e internacionales, impulsando su desarrollo y confianza a largo plazo.</p>
              </div>
            </section>
          </Container>
        </div>
      </article>

      <article className="bg-[#f8f8f8f8]">
        <Container className="py-12">
          <p className="before:content-[''] before:inline-block before:bg-[#254168] before:w-2 before:h-6 text-2xl text-[#254168] font-bold uppercase flex items-center gap-2">Nuestros Valores</p>
          <section className="pt-12 grid grid-cols-3 max-lg:text-center max-md:grid-cols-2 gap-6">
            <div className="bg-white border-1 border-[#2f2f2f18] p-8 rounded flex flex-col justify-center items-center gap-6">
              <HeartPlus size={64} color="#f9c121" />
              <p className="text-lg uppercase">Honestidad</p>
            </div>
            <div className="bg-white border-1 border-[#2f2f2f18] p-8 rounded flex flex-col justify-center items-center gap-6">
              <Medal size={64} color="#f9c121" />
              <p className="text-lg uppercase">Calidad</p>
            </div>
            <div className="bg-white border-1 border-[#2f2f2f18] p-8 rounded flex flex-col justify-center items-center gap-6">
              <Zap size={64} color="#f9c121" />
              <p className="text-lg uppercase">Eficiencia</p>
            </div>
            <div className="bg-white border-1 border-[#2f2f2f18] p-8 rounded flex flex-col justify-center items-center gap-6">
              <HeartHandshake size={64} color="#f9c121" />
              <p className="text-lg uppercase">Buen trato</p>
            </div>
            <div className="bg-white border-1 border-[#2f2f2f18] p-8 rounded flex flex-col justify-center items-center gap-6">
              <ChartNoAxesCombined size={64} color="#f9c121" />
              <p className="text-lg uppercase">Mejora continua</p>
            </div>
            <div className="bg-white border-1 border-[#2f2f2f18] p-8 rounded flex flex-col justify-center items-center gap-6">
              <ShieldCheck size={64} color="#f9c121" />
              <p className="text-lg uppercase">Seguridad</p>
            </div>
          </section>
        </Container>
      </article>

      <article className="bg-white">
        <Container className="py-12">
          <p className="before:content-[''] before:inline-block before:bg-[#254168] before:w-2 before:h-6 text-2xl text-[#254168] font-bold uppercase flex items-center gap-2 pb-12">¿Por qué elegirnos?</p>
          <AccordionItem 
            title={'¿Por qué confiar en nuestra empresa para tus repuestos de maquinaria?'} 
            children={'Porque ofrecemos repuestos de alta calidad, diseñados para maximizar el rendimiento y la vida útil de tu equipo. Trabajamos con tecnología de vanguardia y proveedores certificados para garantizar soluciones confiables.'}
          />
          <AccordionItem 
            title={'¿Qué nos hace diferentes de otras empresas del sector?'} 
            children={'No solo vendemos repuestos, ofrecemos soluciones. Nuestro equipo de expertos te asesora para encontrar el producto exacto que necesitas, evitando pérdidas de tiempo y dinero. Además, trabajamos con entregas rápidas y un servicio transparente.'}
          />
          <AccordionItem 
            title={'¿Por qué nuestro servicio integral marca la diferencia?'} 
            children={'No solo vendemos repuestos, brindamos un servicio completo: asesoría experta, seguimiento continuo y soluciones a medida para maximizar la vida útil y eficiencia de tu maquinaria.'}
          />
        </Container>
      </article>
    </article>
  )
}
export default Description