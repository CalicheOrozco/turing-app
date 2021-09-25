import React from 'react'
import { Modal, Button  } from 'react-bootstrap'

function SMS() {
    return (
        <div>
            <form>
            <h1 className="fw-bold">SMS a civil</h1>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="20"></textarea>
            <button type="submit" onClick={() => window.confirm("Mensaje Enviado")} class="mt-3 btn btn-primary mb-3">Enviar SMS</button>
            
            </form>

           
  
  
        </div>
    )
}

export default SMS
