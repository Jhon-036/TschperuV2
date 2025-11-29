import Container from "../components/Container"
import InnovTecnologiaHero from "../components/InnovTecnologiaHero"

const SrvInnovTecnologia = () => {
  return (
    <article>
      <InnovTecnologiaHero />
      <section>
        <Container className="py-32">
          <h2 className="before:content-[''] before:inline-block before:bg-[#254168] before:w-2 before:h-6 text-2xl text-[#254168] font-bold uppercase flex items-center gap-2">Innovación y tecnología</h2>
          <div className="pt-12 text-lg">
            <p>En T.S.C.H. EIRL, transformamos su maquinaria con soluciones tecnológicas avanzadas que mejoran la seguridad, eficiencia y productividad de sus operaciones. Integramos sistemas inteligentes y automatizados para modernizar equipos en los sectores minero, industrial y portuario, garantizando un rendimiento óptimo y reduciendo riesgos operativos.</p>
            <ul className="pt-6 ml-8">
              <li className="list-decimal">Cámaras 360° y sensores anticolisión con inteligencia artificial para operaciones más segura.</li>
              <li className="list-decimal">Sistemas de pre-arranque automatizados.</li>
              <li className="list-decimal">Sistemas de bloqueo de funciones críticas.</li>
              <li className="list-decimal">Sistemas de alarma y mejora continua.</li>
            </ul>
          </div>
        </Container>
      </section>
    </article>
  )
}
export default SrvInnovTecnologia