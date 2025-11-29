import Container from "../components/Container"
import MantIntegralHero from "../components/MantIntegralHero"

const SrvMantIntegral = () => {
  return (
    <article>
      <MantIntegralHero />
      <section>
        <Container className="py-32">
          <h2 className="before:content-[''] before:inline-block before:bg-[#254168] before:w-2 before:h-6 text-2xl text-[#254168] font-bold uppercase flex items-center gap-2">Mantenimiento integral de Maquinarias</h2>
          <div className="pt-12 text-lg">
            <p>T.S.C.H. EIRL (Technological Solutions and Container Handling) es su aliado estratégico en el mantenimiento, reparación y optimización de maquinaria pesada para los sectores portuario, minero y construcción. Nos especializamos en soluciones técnicas avanzadas que maximizan la productividad, reducen tiempos de inactividad y prolongan la vida útil de sus equipos, respaldados por repuestos OEM de marcas líderes como CAT, Terex, Kalmar, Cummins y más.</p>
            <ul className="pt-6 ml-8">
              <li className="list-decimal">Mantenimiento Predictivo y Preventivo.</li>
              <li className="list-decimal">Reparación de componentes eléctricos, hidráulicos y mecánicos.</li>
              <li className="list-decimal">Fabricación de arneses eléctricos y adaptación de dispositivos electrónicos (módulos de control sensores, joysticks).</li>
            </ul>
          </div>
        </Container>
      </section>
    </article>
  )
}
export default SrvMantIntegral