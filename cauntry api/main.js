'use strict';

let apiURL = "https://restcountries.com/v3.1/all";

fetch(apiURL).then(response => {
    return response.json();
}).then(data => {
    const container = document.getElementById('data-container');
    console.log(data);

    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))'; 
    container.style.gap = '10px';

    data.forEach(item => { 
        const div = document.createElement('div');
        div.innerHTML = '<h4>' + item.name.common + '</h4>' + 
                        '<img src="' + item.flags.png + '" alt="Flag of ' + item.name.common + '" style="width: 100%; height: auto;" />';
        div.style.border = '1px solid';  
        div.style.padding = '10px';          
        div.style.margin = '10px';     
        div.style.boxSizing = 'border-box'; 
        container.appendChild(div);
    });
});
