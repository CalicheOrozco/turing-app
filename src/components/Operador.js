import React from 'react'

function Operador({children}) {
    return (
        <div className="mt-3 container">
            <div className="row">
                <div className="col-12">
                {children[0]}
                </div>
                <div className="col mt-3">
                
                {children[1]}
                </div>
                <div className="col mt-3">
                {children[2]}
                </div>
                <div className="col mt-3">
                {children[3]}
                </div>
                </div>
                
            
            
            
          </div>
    )
}

export default Operador
