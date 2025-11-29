import Container from "./Container"
import { servicesData } from "../data/services.data"
import { Link } from "react-router-dom"

const AllServices = () => {

  return (
    <article className="py-12">
      <Container>
        <p className="before:content-[''] before:inline-block before:bg-[#254168] before:w-2 before:h-6 text-2xl text-[#254168] font-bold uppercase flex items-center gap-2">Nuestros servicios</p>
        <div className="grid grid-cols-3 gap-2 pt-6 max-xl:grid-cols-2 max-md:grid-cols-1">
          {
            servicesData.map((service) => (
              <div key={service.name} className="relative">
                <Link to={service.url}>
                  <img src={service.image} alt={service.name} />
                  <p className="absolute top-5 left-5 bg-[#f9bf21] px-4 py-0.5 rounded text-[#254168] shadow">{service.text}</p>
                </Link>
              </div>
            ))
          }
        </div>
      </Container>
    </article>
  )
}
export default AllServices