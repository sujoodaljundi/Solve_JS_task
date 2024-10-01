'use strict';

let apiURL = "https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json";

fetch(apiURL).then(response => {
    return response.json();
}).then(banana => {
    const container = document.getElementById('data-container');
    console.log(banana);
    const result = banana.Results; 

    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(4, minmax(200px, 1fr))'; 
    container.style.gap = '10px';

    result.forEach(item => { 
        const div = document.createElement('div');
        div.innerHTML = '<h4>' + item.MakeName + '</h4> Vehicle Type: ' + item.VehicleTypeName;
        div.style.border = '1px solid';  
        div.style.padding = '10px';          
        div.style.margin = '10px';     
        div.style.boxSizing = 'border-box'; 
        container.appendChild(div);
    });
});

