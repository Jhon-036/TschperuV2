import { brandsData } from "../data/brands.data"
import Container from "./Container"

const Brands = () => {
  return (
    <article className="relative overflow-hidden">
      <section className="bg-[url(/images/marcas-fabricantes.webp)] bg-fixed bg-center bg-cover w-full h-[36rem]">
        <div className="absolute z-40 top-0 bg-[#254168a8] w-full h-full backdrop-blur-[5px] flex items-center justify-center">
          <Container>
            <div className="flex flex-col gap-12 w-full overflow-hidden brands-container">

              {/* Primera fila */}
              <div className="animation-infinite">
                {[...brandsData.slice(0, 8), ...brandsData.slice(0, 8)].map((brands, index) => (
                  <div key={`row1-${index}`} className="flex-shrink-0 w-[14rem] flex items-center justify-center">
                    <img
                      src={brands.source}
                      alt={brands.name}
                      className="w-[9rem] h-[9rem] max-md:w-[7rem] max-md:h-[7rem] object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Segunda fila */}
              <div className="animation-infinite-reverse">
                {[...brandsData.slice(8, 16), ...brandsData.slice(8, 16)].map((brands, index) => (
                  <div key={`row2-${index}`} className="flex-shrink-0 w-[14rem] flex items-center justify-center">
                    <img
                      src={brands.source}
                      alt={brands.name}
                      className="w-[9rem] h-[9rem] max-md:w-[7rem] max-md:h-[7rem] object-contain"
                    />
                  </div>
                ))}
              </div>

            </div>
          </Container>
        </div>
      </section>
    </article>
  )
}
export default Brands