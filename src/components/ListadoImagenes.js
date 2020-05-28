import React, { Fragment } from 'react';
import Imagen from './Imagen';

const ListadoImagenes = ({imagenes}) => {
    return ( 
        <Fragment>
            <div className="col-12 p-3 row">
                {
                    imagenes.map(imagen => (
                        <Imagen key={imagen.id} imagen={imagen} />
                    ))
                }
            </div>
        </Fragment>
     );
}
 
export default ListadoImagenes;