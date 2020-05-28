import React, { Fragment } from 'react';

const Error = ({mensaje}) => {
    return ( 
        <Fragment>
            <p className="my-3 p-4 text-center alert alert-primary">{mensaje}</p>
        </Fragment>
     );
}
 
export default Error;