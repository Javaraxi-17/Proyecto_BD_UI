import React from "react"
import img from "../images/pricing.jpg"
import Back from "../common/Back"
import "./contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact mb'>
        <Back name='Contactanos' title='Obtén Ayuda y Soporte Amigable' cover={img} />
        <div className='container'>
          <form className='shadow'>
            <h4>Llena el formulario</h4> <br />
            <div>
              <input type='text' placeholder='Nombre ' />
              <input type='text' placeholder='Correo' />
            </div>
            <input type='text' placeholder='Tema' />
            <textarea cols='30' rows='10'></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
