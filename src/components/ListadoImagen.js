import React from 'react';
import Imagen from './Imagen';

const ListadoImagen = ({imagenes}) => { // extrae la busqueda las imagenes
  return (
    <div className="col-12 p-3 row">
      {
        imagenes.map( imagen => (
          <Imagen 
            key={ imagen.id }
            // pasar todo el objeto imagen, que te entrega la API
            imagen= { imagen }
          />
        ))
      }
    </div>
  )
}

export default ListadoImagen
