// const dotenv = require('dotenv').config();
// const fetch = require('node-fetch');

window.onload = function() {
    getCharacters();
}

const URL = 'https://gateway.marvel.com/v1/public/characters';

const getCharacters = () => {
    fetch(URL+'?apikey=d0c22ebaec8cf66b34b6514b7b7dae5c&hash=fd50be121b33b8b783a2306a864b9f4b&ts=1') 
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        let characters = myJson.data.results;
        return characters.map(function(character) {
            console.log(character.name);
            let containerElement = document.querySelector(".container");
            containerElement.innerHTML += `${character.name}` + "<br/>";
        })
    })
    .catch(function(error) {
        console.log(error);
    });
}
