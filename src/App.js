import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes'; //SIGUIENTE VIDEO: 7, CAPÍTULO: 12

function App() {

  //State principal
  const [busqueda, setBusqueda] = useState('');
  const [imagenes, setImagenes] = useState([]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);
  useEffect(() => {
      const consultarAPI = async () => {
        if(busqueda === ''){
          return;
        }
  
        const imagenesPorPagina = 30;
        const KEY = '4021571-d7d2ade86a3adfc6518db1300';
        const URL = `https://pixabay.com/api/?key=${KEY}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;
  
        const respuesta = await fetch(URL);
        const resultado = await respuesta.json();

        setImagenes(resultado.hits);

        //Calcular total de páginas
        const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
        setTotalPaginas(calcularTotalPaginas);

        //Mover pantalla hacia arriba
        const jumbotron = document.querySelector('.jumbotron');
        jumbotron.scrollIntoView({ behavior: 'smooth' });
      }

      consultarAPI();
  }, [busqueda, paginaActual]);

  //Definir página anterior
  const PaginaAnterior = () => {
    const nuevaPaginaActual = paginaActual - 1;
    
    if(nuevaPaginaActual === 0){
        return;
    }
    setPaginaActual(nuevaPaginaActual);
  }

  //Definir página siguiente
  const PaginaSiguiente = () => {
    const nuevaPaginaActual = paginaActual + 1;

    if(nuevaPaginaActual > totalPaginas){
      return;
    }
    setPaginaActual(nuevaPaginaActual);
  }

  return (
    <Fragment>
        <div className="container mt-4">
            <div className="jumbotron">
                <h1 className="text-center mb-4">Buscador de imágenes</h1>
                <Formulario setBusqueda={setBusqueda} />
            </div>
            <div className="row justify-content-center">
                <ListadoImagenes imagenes={imagenes}/>

            </div>
            <div className=" row justify-content-center mb-5">
              <button
                    className={`btn btn-info mr-2 ${(paginaActual === 1) ? 'disabled' : null}`}
                    onClick={PaginaAnterior}
                  ><span className="mr-2" ><i className="fas fa-angle-left"></i></span>Anterior</button>

                  <button
                    className={`btn btn-info ${(paginaActual === totalPaginas) ? 'disabled' : null}`}
                    onClick={PaginaSiguiente}
                  >Siguiente<span className="ml-2" ><i className="fas fa-angle-right"></i></span></button>
            </div>
        </div>
    </Fragment>
  );
}

export default App;
