import React, { Fragment, useState } from 'react';

const Imagen = ({imagen}) => {
    const { largeImageURL, likes, previewURL, tags, views, imageWidth, imageHeight, pageURL} = imagen;

    const [hover, setHover] = useState(false);
    
    const handleMouseOver = () => {
        setHover(true);
        return;
    }

    const handleMouseLeave = () => {
        setHover(false);
        return
    }

    return ( 
        <Fragment>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                    <div className="img">
                        <img src={previewURL} alt={tags} className="card-img-top" />
                        <div className={`img-text ${ hover ? 'hover-image' : 'hidden'}`} >
                            <div className="hover-image-text">
                                <p><span className="mr-2"><i className="fas fa-expand"></i></span>{imageWidth + "x" + imageHeight}</p>
                                <a 
                                    href={pageURL} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                ><span className="mr-2"><i className="fas fa-download"></i></span>Ir a Pixabay</a>
                            </div>
                            
                        </div>
                    </div>
                    

                    <div className="card-body">
                        <p className="card-text text-center"><span className="heart mr-2"><i className="fas fa-heart"></i></span>{likes} Me gusta</p>
                        <p className="card-text text-center"><span className="eye mr-2"><i className="fas fa-eye"></i></span>{views} Vistas</p>
                    </div>
                    
                    <div className="card-footer text-center">
                        <a
                            href={largeImageURL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-block"
                        ><span className="mr-2" ><i className="fas fa-external-link-alt"></i></span>Ver Imagen en 1280px</a>
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Imagen;