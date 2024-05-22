import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/factech.png' alt='' />
              <h2>¿Necesitas Ayuda con Algo??</h2>
              <p>Recibe actualizaciones, ofertas especiales, tutoriales y descuentos directamente en tu bandeja de entrada cada mes.</p>

              <div className='input flex'>
                <input type='text' placeholder='Correo Electronico' />
                <button>Subscribirse</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
     
      </div>
    </>
  )
}

export default Footer
