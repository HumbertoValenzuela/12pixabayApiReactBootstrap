import React, { useState } from 'react';
import Error from './Error';

const Formulario = ( {  guardarBusqueda } ) => {


  // state de lo que el usuario escriba
  const [termino, guardarTermino] = useState('');

  // Mensajes de error
  const [error, setError] = useState(false);

  const buscarImagenes = e => {
    e.preventDefault();

    // Validar
    if (termino.trim() === '' ) {
      setError( true );
      return;
    }

    setError( false );

    // Enviar o comunicación termino de búsqueda hacia el componente principal

    guardarBusqueda( termino )
  }
  return ( 
    <form
      onSubmit={ buscarImagenes }
    >
      <div className="row">      
        <div className="form-group">
          <div className="input-group mb-3">

            <input 
              type="text" 
              className="form-control" 
              placeholder="Busca una Imagen" 
              onChange={ e => guardarTermino( e.target.value ) }  
            />
            <input 
              className="btn btn-primary" 
              type="submit" 
              value="Buscar"
            />
            
          </div>

        </div>

      </div>

      { error ? <Error mensaje="Agrega un término de búsqueda" /> : null}
    </form>
   );
}
 
export default Formulario;