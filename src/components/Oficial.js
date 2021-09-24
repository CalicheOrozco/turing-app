import React from 'react';


function Oficial({children}) {
    return (
        <div className="mt-3 container">
            <div className="row">
                <div className="col-12">
                {children}
                </div>
                <div className="col bg-primary mt-3">
                Lebels del JSON
                </div>
                <div className="col bg-success mt-3">
                Push notifications
                </div>
            </div>
            
            
          </div>
        )
}

export default Oficial
