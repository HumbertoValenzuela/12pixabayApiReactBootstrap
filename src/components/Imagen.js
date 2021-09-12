import React from 'react'

const Imagen = ( { imagen } ) => {

  // Extraer las variables que viene del componente listaImagen. 
  const { largeImageURL, likes, previewURL, tags, views } = imagen;
  return (
    // grid de bootstrap diferentes tamaños
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3" >

      <div className="card " >

        <img 
          src={previewURL}
          alt={ tags } 
          className="card-img-top" 
        />

        <div className="card-body"> 
          <p className="card-text">{ likes } Me Gusta</p>
          <p className="card-text">{ views } Vistas</p>
        </div>

        <div className="card-footer text-center">
          <a
            href={ largeImageURL }
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Ver Imagen
          </a>

        </div>
       
      </div>
      
    </div>
  )
}

export default Imagen

