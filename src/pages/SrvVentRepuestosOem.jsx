import Container from "../components/Container"
import VentRepuestosOemHero from "../components/VentRepuestosOemHero"

const SrvVentRepuestosOem = () => {
  return (
    <article>
      <VentRepuestosOemHero />
      <section>
        <Container className="py-32">
          <h2 className="before:content-[''] before:inline-block before:bg-[#254168] before:w-2 before:h-6 text-2xl text-[#254168] font-bold uppercase flex items-center gap-2">Venta de Repuestos OEM</h2>
          <div className="pt-12 text-lg">
            <p>En T.S.C.H. EIRL entendemos lo crítico que es mantener tu maquinaria en movimiento.</p>
            <p>Por eso nos especializamos en proveer repuestos OEM y alternativos de alta calidad para equipos industriales, mineros y portuarios, asegurando que tus operaciones nunca se detengan.</p>
            <ul className="pt-6 ml-8">
              <li className="list-decimal">Trabajamos con proveedores certificados que cumplen altos estándares.</li>
              <li className="list-decimal">Ofrecemos alternativas de calidad comprobada cuando el repuesto original no está disponible.</li>
            </ul>
            <div className="pt-6">
              <p>Brindamos :</p>
              <div className="pt-6">
                <ul className="ml-8">
                  <li>Experiencia técnica:</li>
                    <li className="list-disc ml-8">Asesoría personalizada para identificar exactamente lo que tu equipo necesita.</li>
                    <li className="list-disc ml-8">Conocimiento especializado en marcas como CAT, Kalmar,Hyster, Cummins, Dana y más.</li>
                  <li className="pt-6">Compromiso con Tu Operación:</li>
                    <li className="list-disc ml-8">Entrega rápida para minimizar tiempos de parada.</li>
                    <li className="list-disc ml-8">Precios competitivos sin sacrificar calidad.</li>
                  <li className="pt-6">Repuestos dirigidos para sectores como:</li>
                    <li className="list-disc ml-8">Minería.</li>
                      <li className="ml-12">Excavadoras, perforadoras, volquetes.</li>
                    <li className="list-disc ml-8">Puertos.</li>
                      <li className="ml-12">Grúas, reach stackers, manipuladores de contenedores.</li>
                    <li className="list-disc ml-8">Construcción.</li>
                      <li className="ml-12">Motoniveladoras, gruas telescópica , cargador frontal, bulldozers.</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </article>
  )
}
export default SrvVentRepuestosOem