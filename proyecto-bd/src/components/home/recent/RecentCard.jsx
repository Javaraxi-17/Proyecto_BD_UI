import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./recentcard.css";

const RecentCard = () => {
  const [properties, setProperties] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch('http://localhost:3001/homes')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const propertiesWithStringIds = data.map(property => ({
          ...property,
          ID_casa: String(property.ID_casa)
        }));
        setProperties(propertiesWithStringIds);
      })
      .catch(error => console.error('Error fetching properties:', error));
  }, []);

  const handleIdClick = (id) => {
    history.push(`/casas/${id}`);
  };

  return (
    <div className='content mtop'>
      <table className='property-table'>
        <thead>
          <tr>
            <th>ID Casa</th>
            <th>Dirección</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Tipo de Propiedad</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property, index) => (
            <tr key={index}>
              <td>
                <a href="#!" onClick={() => handleIdClick(property.ID_casa)}>{property.ID_casa}</a>
              </td>
              <td>{property.Direccion}</td>
              <td>{property.Descripcion}</td>
              <td>${property.Precio}</td>
              <td>{property.TipoPropiedad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentCard;
