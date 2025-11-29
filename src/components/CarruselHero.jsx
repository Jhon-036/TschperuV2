import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination, Virtual } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Container from "./Container";
import { Link } from "react-router-dom";

const CarruselHero = () => {

  const dataImage = [
    { id: '1', video: '/images/tsch-carrusel-1.mp4', title: 'Repuestos de calidad, rendimiento garantizado', description: 'Repuestos originales y de calidad diseñados para los desafíos más exigentes', url: '/venta-de-repuestos-oem' },
    { id: '2', image: '/images/tsch-carrusel-2.webp', title: 'Soporte experto, soluciones a tu medida', description: 'Servicio técnico especializado para mantener tu maquinaria siempre operativa', url: '/mantenimiento-integral-maquinaria' },
    { id: '3', image: '/images/tsch-carrusel-3.webp', title: 'Innovación y tecnología para potenciar tu maquinaria', description: 'Desarrollamos tecnología para optimizar operatividad, seguridad y mantenimiento a tus equipos', url: '/innovacion-y-tecnologia' }
  ]

  return (
    <section>
      <Swiper 
        modules={[Virtual, Autoplay, Navigation, Pagination]} 
        slidesPerView={1} 
        virtual
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.button-next-slide',
          prevEl: '.button-prev-slide'
        }}>
        {
          dataImage.map((data) => (
            <SwiperSlide key={data.id} virtualIndex={data.id}>
              <div className="w-full">
                <div className="w-full">
                  {data.video ? 
                    <video  className="w-[inherit] h-[52rem] object-cover relative" autoPlay muted src={data.video}></video> :
                    <img className="w-[inherit] h-[52rem] object-cover relative" src={data.image} alt={data.title} />}
                </div>
                <div className="absolute bg-[#2f2f2f67] top-0 left-0 w-full h-full">
                  <Container className={'flex h-[inherit] items-center'}>
                    <div className="flex flex-col gap-2 text-white px-4 w-[55%]">
                      <p className="uppercase text-shadow-lg font-bold text-5xl leading-[4rem] ">{data.title}</p>
                      <span className="text-shadow-lg font-semibold text-[22px] pt-5">{data.description}</span>
                      <div className="pt-12">
                        <Link to={data.url} className="px-6 py-2.5 cursor-pointer bg-[#f9c121] rounded transition hover:bg-[#ffd86e] text-[#254168]">Ver más</Link>
                      </div>
                    </div>
                  </Container>
                </div>
              </div>
            </SwiperSlide>
          ))
        }

        {/* ICONOS PERSONALIZADOS */}
        <div className="button-prev-slide absolute flex left-0 top-1/2 z-50 p-3 ml-5 bg-[#ffffffcc] hover:bg-[#ffffff] transition rounded-full cursor-pointer">
          <img src="/images/flecha-izquierda.png" alt="Tsch - flecha izquierda" className="w-[28px]"/>
        </div>
        <div className="button-next-slide absolute flex right-0 top-1/2 z-50 p-3 mr-5 bg-[#ffffffcc] hover:bg-[#ffffff] transition rounded-full cursor-pointer">
          <img src="/images/flecha-derecha.png" alt="Tsch - flecha derecha" className="w-[28px]"/>
        </div>
      </Swiper>
    </section>
  )
}
export default CarruselHero