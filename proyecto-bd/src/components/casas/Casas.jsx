import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './casas.css';

const Casas = () => {
  const { id } = useParams();
  const history = useHistory();
  const [casa, setCasa] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/homes/${id}`)
      .then(response => response.json())
      .then(data => {
        setCasa(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching property details:', error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading property details</div>;
  }

  return (
    <div className="casas-container">
      <button className="regresar-boton" onClick={() => history.push('/pages')}>Regresar</button>
      <h1></h1>
      <h2>Detalles del inmueble</h2>
      <img src="../images/list/room.jpg" className="imagen-casa" alt="Casa" />
      <table className="tabla-casas">
        <tbody>
          <tr>
            <td className="nombre">ID:</td>
            <td>{casa.ID_casa}</td>
          </tr>
          <tr>
            <td className="nombre">Propietario:</td>
            <td>{casa.IDPropietario}</td>
          </tr>
          <tr>
            <td className="nombre">Agente:</td>
            <td>{casa.IDAgente}</td>
          </tr>
          <tr>
            <td className="nombre">Dirección:</td>
            <td>{casa.Direccion}</td>
          </tr>
          <tr>
            <td className="nombre">Ciudad:</td>
            <td>{casa.IDCiudad}</td>
          </tr>
          <tr>
            <td className="nombre">Descripción:</td>
            <td>{casa.Descripcion}</td>
          </tr>
          <tr>
            <td className="nombre">Precio:</td>
            <td>${casa.Precio}</td>
          </tr>
          <tr>
            <td className="nombre">Tipo de Propiedad:</td>
            <td>{casa.TipoPropiedad}</td>
          </tr>
          <tr>
            <td className="nombre">Habitaciones:</td>
            <td>{casa.NumHabitaciones}</td>
          </tr>
          <tr>
            <td className="nombre">Baños:</td>
            <td>{casa.NumBanos}</td>
          </tr>
          <tr>
            <td className="nombre">Amenidades:</td>
            <td>{casa.Amenidades}</td>
          </tr>
          <tr>
            <td className="nombre">Metros Cuadrados:</td>
            <td>{casa.AreaMetrosCuadrados}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Casas;
