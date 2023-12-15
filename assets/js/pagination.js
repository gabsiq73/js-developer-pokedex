
// VOLTA PARA A LISTA DE POKEMONS

function returnArrow() {
    window.location.href = '../index.html'
}


// LEVA PARA A PAGINA DE INFORMAÇÕES INDIVIDUAIS

function pagination(number){
    
    // Manda o ID do pokemon como atributo, que será lido pela função URLSearchParams
    var newPagePath = 'paginas/moreAboutPokemon.html?id=' + number;
    
    // Redireciona para a nova página 
    window.location.href = newPagePath  
}