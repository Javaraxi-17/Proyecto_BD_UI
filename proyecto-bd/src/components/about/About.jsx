import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='Sobre Nosotros' title='Sobre Nosotros - Quienes somos?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='La Historia de Nuestra Agencia' subtitle='Conoce la historia de nuestra empresa y nuestro proceso de trabajo' />

            <p>En Factech, nos especializamos en ayudarte a encontrar el hogar de tus sueños. Con años de experiencia en el mercado inmobiliario, ofrecemos un servicio excepcional basado en la confianza, la transparencia y la atención personalizada. Nuestro equipo de profesionales está comprometido en hacer que tu proceso de compra, venta o alquiler de propiedades sea sencillo y exitoso. Confía en Factech para todas tus necesidades inmobiliarias.</p>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
