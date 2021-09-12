import React from 'react';

const Error = ( { mensaje } ) => {
  return ( 

    <div className="alert alert-dismissible alert-danger">
      
      <button 
        type="button" 
        className="btn-close" 
        data-bs-dismiss="alert">
      </button>
      <strong>{ mensaje }</strong>
     
    </div>
   );
}
 
export default Error;