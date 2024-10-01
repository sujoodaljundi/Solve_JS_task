'use strict';

let apiURL = "https://pokeapi.co/api/v2/pokemon?limit=All";

fetch(apiURL)
    .then(response => {
        return response.json(); 
    })
    .then(data => {
        const container = document.getElementById('data-container'); 
        console.log(data); 

        container.style.display = 'grid';
        container.style.gridTemplateColumns = 'repeat(auto-fill, minmax(200px, 1fr))'; 
        container.style.gap = '10px';

        data.results.forEach((pokemon) => {
            fetch(pokemon.url) 
                .then(res => res.json())
                .then(pokeData => {
                    const div = document.createElement('div'); 

                    div.innerHTML = '<h4>' + pokeData.name + '</h4>' + 
                                    '<img src="' + pokeData.sprites.front_default + '" alt="' + pokeData.name + '" style="width: 80%; height: auto;" />' + 
                                    '<p>Abilities: ' + pokeData.abilities.map(ability => ability.ability.name).join(', ') + '</p>';

                    div.style.border = '1px solid'; 
                    div.style.padding = '10px'; 
                    div.style.margin = '10px'; 
                    div.style.boxSizing = 'border-box'; 

                    container.appendChild(div); 
                });
        });
    });
