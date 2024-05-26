import React, { useEffect, useState } from "react";
import Heading from "../../common/Heading";
import "./style.css";

const imageCovers = [
  "../images/list/p-1.png",
  "../images/list/p-2.png",
  "../images/list/p-4.png",
  "../images/list/p-5.png",
  "../images/list/p-6.png",
  "../images/list/p-7.png",
];

const Location = () => {
  const [comentarios, setComentarios] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/comentario')
      .then(response => response.json())
      .then(data => setComentarios(data))
      .catch(error => console.error('Error fetching comentarios:', error));
  }, []);

  return (
    <>
      <section className='location padding'>
        <div className='container'>
          <Heading title='Comentarios'/>

          <div className='content grid3 mtop'>
            {comentarios.map((item, index) => (
              <div 
                className='box' 
                key={index}
                style={{ backgroundImage: `url(${imageCovers[index % imageCovers.length]})` }}
              >
                <div className='overlay'>
                  <p>{item.Comentario}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Location;
