import React from 'react'

function JsonRead() {

   

    

    let names = [];
    let percentages = [];
    let full = []

    async function showData(){
        const json = await getData();

        for (const property in json.Labels) {
            let name = json.Labels[property].Name
            
            names.push(name);
            let porcentaje = json.Labels[property].Confidence
            porcentaje = parseInt(porcentaje);
            porcentaje = porcentaje+"%"
            
            percentages.push(porcentaje);

            let completo = name+" "+porcentaje
            full.push(completo);
            
          }  
            console.log(full)       
    }

    function getData(){
        return fetch('json/test.json')
        .then(response => response.json())
        .then(json => json)
    }

    showData()
    return (
        
        <div>
            <h1 className="fw-bold">Solicitudes</h1>
            <ul className="list-group pb-3 pt-3 d-none">
            <li className="list-group-item text-danger">Construction Crane 89% | Possible obstruction </li>
            <li className="list-group-item">Transportation 87%</li>
            <li className="list-group-item">Vehicle 86%</li>
            <li className="list-group-item">Urban 84%</li>
            <li className="list-group-item">Wood 79%</li>
            <li className="list-group-item">Road 75%</li>
            <li className="list-group-item">Building 73%</li>
            <li className="list-group-item">City 68%</li>
            <li className="list-group-item">Town 68%</li>
            <li className="list-group-item">Housing 63%</li>
            <li className="list-group-item">Boat 60%</li>
            <li className="list-group-item">Street 58%</li>
            <li className="list-group-item">Watercraft 55%</li>
            <li className="list-group-item">Vessel 55%</li>
            </ul>
        </div>
    )
}

export default JsonRead
