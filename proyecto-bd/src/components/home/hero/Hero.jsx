import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Busca Tu Próximo Hogar' subtitle='Encuentra propiedades nuevas y destacadas ubicadas en tu ciudad local..' />

          <form className='flex'>
            <div className='box'>
              <span>Ciudad/Calle</span>
              <input type='text' placeholder='Ubicación' />
            </div>
            <div className='box'>
              <span>Tipo de Propiedad</span>
              <input type='text' placeholder='Tipo de Propiedad' />
            </div>
            <div className='box'>
              <span>Rango de Precios</span>
              <input type='text' placeholder='Rango de Precios' />
            </div>
            <div className='box'>
              <h4>Filtro Avanzado</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Hero
