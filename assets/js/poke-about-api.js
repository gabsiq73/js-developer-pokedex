const pokeAboutApi = {}



pokeAboutApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((response) => response.json())
            .then(convertPokeApiDetailToPokemon)
}


pokeAboutApi.collectsPokemonSpeciesDetail = (pokemon) => {
    return fetch(pokemon.species.url)
            .then((response) => response.json())
            .then(convertSpeciesDetailToPokemon)
}


pokeAboutApi.getPokemons =  (idPokemon) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${idPokemon}&limit=1`;
    
    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeAboutApi.getPokemonDetail)) 
       
} 

// Esse codigo lê o atributo da url e verifica o valor ID do Pokemon
var pageNumber = new URLSearchParams(window.location.search).get('id');
pokeAboutApi.getPokemons(pageNumber)