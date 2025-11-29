import Container from "./Container"

const VentRepuestosOemHero = () => {
  return (
    <article className="w-full h-[24rem] relative">
      <div className="w-full h-full">
        <img src="/public/images/venta-de-repuestos-oem.webp" alt="Somos T.S.H.C" className=" w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 w-full h-full bg-[#254168a8] flex items-center justify-center">
        <Container>
          <p className="uppercase text-shadow-lg font-bold text-5xl max-md:text-4xl max-md:text-center leading-[4rem] text-white">Venta de repuestos Oem</p>
        </Container>
      </div>
    </article>
  )
}
export default VentRepuestosOemHero