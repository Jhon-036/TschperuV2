import { Link } from "react-router-dom"
import Container from "./Container"
import TopMenu from "./TopMenu"
import { ChevronDown, ChevronUp, X, MenuIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { servicesData } from "../data/services.data"
import { useProductssStore } from "../store/useProductStore"
import FormContact from "./FormContact"

const Menu = () => {
  const [isChange, setIsChange] = useState(false)
  const [isMenuResponsive, setIsMenuResponsive] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [subMenu, setSubMenu] = useState(false)
  const {
    categories,
    setSelectedCategory,
    fetchProducts,
  } = useProductssStore()

  const handleIsShow = (menu) => {
    setIsChange(menu)
  }

  const handleIsNotShow = () => {
    setIsChange(false)
  }

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleNotModal = () => {
    setShowModal(false)
  }

  const handleMenuResponsive = () => {
    setIsMenuResponsive(!isMenuResponsive)
  }

  const handleSubMenuService = () => {
    setSubMenu(!subMenu)
  }

  useEffect(() => {
    if (!categories.length) {
      fetchProducts()
    }
  }, [categories.length, fetchProducts])

  const handleCategoryClick = (category) => {
    setSelectedCategory(category || "Todos")
    setIsChange(false)
  }

  return (
    <header className="shadow top-0 z-50 w-full bg-white sticky">
      <TopMenu />
      <Container className='flex justify-between items-center'>
        <div className="w-[180px]">
          <picture>
            <Link to={'/'}>
              <img src='/tsch-bg-remove.webp' alt="Tsch" className="py-4 w-[150px]" />
            </Link>
          </picture>
        </div>

        {/* DESKTOP */}
        <ul className="flex gap-8 items-center uppercase max-xl:hidden">
          <Link
            to={'/'}
            className={`py-8 px-3 border-b-2 ${isChange === 'inicio' ? 'border-b-[#f9c121]' : 'border-b-[#ffffff]'}`}
            onMouseEnter={() => handleIsShow('inicio')}
            onMouseLeave={handleIsNotShow}>
            <p className={`text-sm ${isChange === 'inicio' ? 'text-[#f9c121]' : ''}`}>Inicio</p>
          </Link>
          <Link
            to={'/publicaciones'}
            className={`py-8 px-3 border-b-2 ${isChange === 'publicaciones' ? 'border-b-[#f9c121]' : 'border-b-[#ffffff]'}`}
            onMouseEnter={() => handleIsShow('publicaciones')}
            onMouseLeave={handleIsNotShow}>
            <p className={`text-sm ${isChange === 'publicaciones' ? 'text-[#f9c121]' : ''}`}>Publicaciones</p>
          </Link>
          <Link
            to={'/nosotros'}
            className={`py-8 px-3 border-b-2 ${isChange === 'nosotros' ? 'border-b-[#f9c121]' : 'border-b-[#ffffff]'}`}
            onMouseEnter={() => handleIsShow('nosotros')}
            onMouseLeave={handleIsNotShow}>
            <p className={`text-sm ${isChange === 'nosotros' ? 'text-[#f9c121]' : ''}`}>Nosotros</p>
          </Link>
          <Link
            to={'/productos'}
            className={`py-8 px-3 flex items-center gap-2 border-b-2 ${isChange === 'productos' ? 'border-b-[#f9c121]' : 'border-b-[#ffffff]'}`}
            onMouseEnter={() => handleIsShow('productos')}
            onMouseLeave={handleIsNotShow}>
            <p className={`text-sm ${isChange === 'productos' ? 'text-[#f9c121]' : ''}`}>Productos</p>
            {
              isChange === 'productos' ?
                <ChevronUp size={16} strokeWidth={2.75} className={`${isChange === 'productos' ? 'text-[#f9c121]' : ''}`} />
                :
                <ChevronDown size={16} strokeWidth={2.75} />
            }
          </Link>
          <Link
            className={`py-8 px-3 flex items-center gap-2 border-b-2 relative ${isChange === 'servicios' ? 'border-b-[#f9c121]' : 'border-b-[#ffffff]'}`}
            onMouseEnter={() => handleIsShow('servicios')}
            onMouseLeave={handleIsShow}>
            <p className={`text-sm ${isChange === 'servicios' ? 'text-[#f9c121]' : ''}`}>Servicios</p>
            {
              isChange === 'servicios' ?
                <ChevronUp size={16} strokeWidth={2.75} className={`${isChange === 'servicios' ? 'text-[#f9c121]' : ''}`} />
                :
                <ChevronDown size={16} strokeWidth={2.75} />
            }
          </Link>
        </ul>
        <div className="flex items-center max-xl:gap-6">
          <button onClick={handleShowModal} className="px-6 py-2 cursor-pointer bg-[#f9c121] rounded transition hover:bg-[#ffd86e] text-[#254168]">Contáctanos</button>

          {/* MOVIL ICON*/}
          <section className="xl:hidden" onClick={handleMenuResponsive}>
            {isMenuResponsive ? <X color="#254168"/> : <MenuIcon color="#254168"/>}
          </section>
        </div>

      </Container>

      {/* MENU RESPONSIVE MOVIL */}

      <section className={`xl:hidden fixed left-0 w-full bg-white z-40 shadow-md transform transition-all duration-300 ease-out origin-top
          ${isMenuResponsive
          ? "opacity-100 translate-y-0 scale-y-100 pointer-events-auto"
          : "opacity-0 -translate-y-4 scale-y-95 pointer-events-none"
        }
      `}>
        <Container>
          <ul className="uppercase text-[#254168] flex flex-col items-center gap-2 py-4">
            <Link to={'/'} onClick={handleMenuResponsive} className="p-2">Inicio</Link>
            <Link to={'/publicaciones'} onClick={handleMenuResponsive} className="p-2">Publicaciones</Link>
            <Link to={'/nosotros'} onClick={handleMenuResponsive} className="p-2">Nosotros</Link>
            <Link to={'/productos'} onClick={handleMenuResponsive} className="p-2">Productos</Link>
            <Link onClick={handleSubMenuService} className="p-2 flex flex-col items-center ">
              <div className="flex items-center gap-2">
                <p>Servicios</p>
                {subMenu ? <ChevronUp size={16} strokeWidth={2.75} /> : <ChevronDown size={16} strokeWidth={2.75}/> }
              </div>
              <div className={`flex flex-col pt-4 gap-4 items-center ${subMenu ? 'block' : 'hidden'}`}>
                <Link to={'/mantenimiento-integral-maquinaria'} onClick={handleMenuResponsive}>Mantenimiento Integral de maquinaria</Link>
                <Link to={'/venta-de-repuestos-oem'} onClick={handleMenuResponsive}>Venta de repuestos oem</Link>
                <Link to={'/innovacion-y-tecnologia'} onClick={handleMenuResponsive}>Innovación y tecnología</Link>
              </div>
            </Link>
          </ul>
        </Container>
      </section>



      {/* SUBMENU */}
      {
        isChange === 'servicios' && (
          <ul
            className="absolute top-34.1 bg-[#ffffff] shadow w-full h-[22rem]"
            onMouseEnter={() => handleIsShow('servicios')}
            onMouseLeave={handleIsNotShow}>
            <Container className='h-full flex p-4 justify-between items-center'>
              {
                servicesData.map((data) => (
                  <div key={data.name} className="w-[370px]">
                    <Link to={data.url} className="hover:text-[#f9c121] ">
                      <div className="overflow-hidden">
                        <img
                          className="hover:scale-110 transition"
                          src={data.image}
                          alt={data.name} />
                      </div>
                      <div className=" flex items-center">
                        <p className="uppercase py-4 border-b-2 w-full">{data.text}</p>
                      </div>
                    </Link>
                  </div>
                ))
              }
            </Container>
          </ul>
        )
      }

      {
        isChange === 'productos' && (
          <div
            className="absolute top-[8.4rem] left-0 w-full bg-white shadow"
            onMouseEnter={() => handleIsShow('productos')}
            onMouseLeave={handleIsNotShow}
          >
            <Container className="py-10">
              <ul className="grid grid-cols-4 gap-6 text-center uppercase text-sm ">
                <li>
                  <Link
                    to="/productos"
                    className="hover:text-[#f9c121] p-2"
                    onClick={() => handleCategoryClick("Todos")}
                  >
                    Todos
                  </Link>
                </li>

                {/* Categorías dinámicas */}
                {categories.map((cat) => (
                  <li key={cat}>
                    <Link
                      to={`/productos?category=${encodeURIComponent(cat)}`}
                      className="hover:text-[#f9c121] p-2"
                      onClick={() => handleCategoryClick(cat)}
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>
          </div>
        )
      }

      {
        showModal && (
          <div className="absolute top-0 left-0 w-full h-screen bg-[#00000070]">
            <Container className={'flex justify-center items-center h-screen'}>
              <div className="bg-white rounded w-[50%] relative">
                <FormContact />
                <div onClick={handleNotModal} className="absolute top-5 right-5 cursor-pointer">
                  <X color="#254168" />
                </div>
              </div>
            </Container>
          </div>
        )
      }

    </header>
  )
}
export default Menu