import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Busca Tu Próximo Hogar' subtitle='Encuentra propiedades nuevas y destacadas ubicadas en tu ciudad local..' />
        </div>
      </section>
    </>
  )
}

export default Hero
