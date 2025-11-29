import Container from "./Container"

const PostsHero = () => {
  return (
    <article className="w-full h-[24rem] relative">
      <div className="w-full h-full">
        <img src="/images/publicaciones.webp" alt="Somos T.S.H.C" className=" w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 w-full h-full bg-[#254168a8] flex items-center justify-center">
        <Container>
          <p className="uppercase text-shadow-lg font-bold text-5xl max-sm:text-4xl leading-[4rem] text-white">Publicaciones</p>
        </Container>
      </div>
    </article>
  )
}
export default PostsHero