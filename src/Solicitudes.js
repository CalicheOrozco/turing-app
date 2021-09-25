import React from 'react'

function Solicitudes() {
    return (
        <div>
        <h1 className="fw-bold">Busqueda por etiquetas</h1>
        <select class="form-select" aria-label="Default select example">
        <option selected>Selecciona tu busqueda</option>
        <option value="1">Carro</option>
        <option value="2">Peaton</option>
        <option value="3">Arbol</option>
        <option value="3">Camino</option>
        <option value="3">Postel de contención</option>
        <option value="3">Camioneta</option>
             
</select>
<button type="submit" onClick={() => window.confirm("Buscando...")} class="mt-3 btn btn-primary mb-3"> Buscar</button>
       
        
    </div>
    )
}

export default Solicitudes
