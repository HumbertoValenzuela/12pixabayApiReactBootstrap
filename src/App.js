import React, { useEffect, useState } from 'react';

import "bootswatch/dist/quartz/bootstrap.min.css";
import Formulario from './components/Formulario';
import ListadoImagen from './components/ListadoImagen';


// css https://bootswatch.com/ es bootstrap con más estilos
// npm install bootswatch
// import "bootswatch/dist/[theme]/bootstrap.min.css";
// TODO: Note: Replace ^[theme]^ (examples: darkly, slate, cosmo, spacelab, and superhero.

function App() {

  // state de la app
  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState( [] );

   /* Paginar muestra 30, al presionar siguiente. eliminar las anteriores y mostrar 30 nuevas */
  //  state para decir en que página se encuentra
  const [paginaActual, guardarPaginaActual] = useState( 1 );
  // state atento a cuantas páginas se tiene en total
  const [totalPaginas, guardarTotalPaginas] = useState(1);

  // Cuando la búsqueda cambie, queremos que se ejecute, useEffect
  useEffect( () => {
   const consultarAPI = async () => {
    if ( busqueda === '' ) return;
    
    const imagenesPorPagina = 30;
    const key= '21291177-f415154980c4ff4d84ba79eb4';
    // const url= `https://pixabay.com/api/?key=${key}&q=${busqueda}&${imagenesPorPagina}`;

    // Para cambiar de pagina se agrega &page=
    const url= `https://pixabay.com/api/?key=${key}&q=${busqueda}&${imagenesPorPagina}&page=${paginaActual}`;

    const respuesta = await fetch( url );

    const resultado = await respuesta.json();

    // console.log(resultado); // resultado.hits

    guardarImagenes( resultado.hits );//

    // Cuantas páginas tenemos
    //console.log(resultado);//no todas las api la tienen. totalHits
    const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
    // console.log(calcularTotalPaginas);
    guardarTotalPaginas( calcularTotalPaginas );

    // Mover la pantalla hacia arriba
    const junbotron = document.querySelector('.jumbotron');
    junbotron.scrollIntoView( { behavior: 'smooth' } );
   }

   consultarAPI();

  //  Cuando cambie busqueda o paginaActual vuelve a renderizar
  }, [ busqueda, paginaActual ]);

  // definir la página anterior
  const paginaAnterior = () => {

    const nuevaPaginaActual = paginaActual - 1;
    // console.log(nuevaPaginaActual);

    if (nuevaPaginaActual === 0) return;

    // Almacenar en el state
    guardarPaginaActual( nuevaPaginaActual ); // al presionar el boton avanza sin limites validar
  }

  // definir la página sgte.
  const paginaSiguiente = () => {

    const nuevaPaginaActual = paginaActual + 1;
    // console.log(nuevaPaginaActual);

    if (nuevaPaginaActual > totalPaginas ) return;

    // Almacenar en el state
    guardarPaginaActual( nuevaPaginaActual ); // al presionar el boton avanza sin limites validar
  }

  return (
    <div className="container">

      <div className="jumbotron">
        <p className="lead text-center"> Buscador de Imágenes</p>

        <Formulario 
          guardarBusqueda= { guardarBusqueda }
        />
      </div>

      <div className="row justify-content-center">
        <ListadoImagen 
          imagenes={ imagenes }
        />

      <div className="d-grid gap-2 d-md-flex      justify-content-md-center">

        {/* Ocultar mostrar botones */}

        {
          (paginaActual === 1 ) 
            ? null
            : (
                <button 
                  className="btn btn-secondary me-md-2" 
                  type="button"
                  onClick={ paginaAnterior }
                >
                  &laquo; Anterior
                </button>
              )
        }

        {
          (paginaActual === totalPaginas ) 
            ? null
            : (
                <button 
                  className="btn btn-secondary" 
                  type="button"
                  onClick={ paginaSiguiente}
                >
                  Siguiente &raquo;
                </button>
              )
        }


      </div>

      </div>
    </div>
     
    
  );
}

export default App;
