import Container from "./Container"

const InnovTecnologiaHero = () => {
  return (
    <article className="w-full h-[24rem] relative">
      <div className="w-full h-full">
        <img src="/public/images/innovacion-y-tecnologia.webp" alt="Somos T.S.H.C" className=" w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 w-full h-full bg-[#254168a8] flex items-center justify-center">
        <Container>
          <p className="uppercase text-shadow-lg font-bold text-5xl max-md:text-4xl max-md:text-center leading-[4rem] text-white">Innovación y tecnología</p>
        </Container>
      </div>
    </article>
  )
}
export default InnovTecnologiaHero