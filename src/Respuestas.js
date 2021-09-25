import React from 'react'

function Respuestas() {
    return (
        <div className="App p-5">

<h1 className="fw-bold">Respuestas</h1>
        <div class="toast show bg-danger mb-3 " role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto">C5</strong>
                <small>11 mins ago</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                Auto robado detectado en sector A
            </div>
            </div>


            <div class="toast show bg-success mb-3" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto">C5</strong>
                <small>15 mins ago</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                Trafico liberado.
            </div>
            </div>

            <div class="toast show bg-light mb-3" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto">C5</strong>
                <small>22 mins ago</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                No se encontro amenaza
            </div>
            </div>



    </div>
    )
}

export default Respuestas
