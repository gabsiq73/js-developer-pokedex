let pokemonName = document.getElementById('namePoke')
let pokemonId = document.getElementById('idPokemon')
let pokemonTypes = document.getElementById('typesPokemon')
let imagesHeader = document.getElementById('imagesHeader')

let infoSpecies = document.getElementById('infoSpecies')
let infoHeight = document.getElementById('infoHeight')
let infoWeight = document.getElementById('infoWeight')
let infoAbilities = document.getElementById('infoAbilities')

let infoGenderMale = document.getElementById('infoGenderMale')
let infoGenderFemale = document.getElementById('infoGenderFemale')
let infoEggGroups = document.getElementById('infoEggGroups')
let InfoHatchCounter = document.getElementById('InfoHatchCounter')

// Função que coloca os Zeros na frente do ID do Pokemon, de um
// jeito que sempre tenham 4 digitos 
function convertNumber(pokemon){
    const number = pokemon.id
    if(number <= 9){
        return '000'
    } else if(number <= 99){
        return '00'
    } else if(number <= 999){
        return '0'
    } else{
        return ''
    }
}

function convertPokeApiDetailToPokemon(pokemon){
    
    

    // HEADER ---------------------------------

    // Adiciona o Id e os zeros na frente
    pokemonId.innerHTML = `#${convertNumber(pokemon)}${pokemon.id}`

    // Adiciona nome do pokemon
    pokemonName.innerHTML = pokemon.name
    
    // Pega os types e adiciona uma linha para cada type dentro de types
    const types = pokemon.types.map((typeSlot) => typeSlot.type.name)
    pokemonTypes.innerHTML = types.map((type) => `<li class="type ${type}">${type}</li>`).join('')
    
    // Adiciona a Imagem dinamicamente
    imagesHeader.innerHTML += `<img class="pokeImage" src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">`

    // BODY
    document.body.classList.add(`body${types[0]}`)
    
    // ABOUT ---------------------------------
   
    pokeAboutApi.collectsPokemonSpeciesDetail(pokemon)

    infoHeight.innerHTML = `(${(pokemon.height * 0.1).toFixed(2)}m)`

    // Pega o peso do Pokemon e tranforma ele em Libras e depois em Kilos
    infoWeight.innerHTML = `${((pokemon.weight * 2.20462)/10).toFixed(2)} lbs (${(pokemon.weight * 0.1).toFixed(2)}kg)`

    // Pega as Abilities e adiciona uma linha para cada Ability dentro de Abilities
    const abilities = pokemon.abilities.map((abilitySlot) => abilitySlot.ability.name)
    infoAbilities.innerHTML = abilities.map((ability) => `<span class="type ${ability}">${ability}</span>`).join('')
}

function convertSpeciesDetailToPokemon(pokemonSpecies){

    // BREEDING -------------------------------

    // Recebe os valores de Gender Rate, que é a representação, em oitavos, da chance do Pokémon ser fêmea. 
    // Com base nesse valor, a fórmula realiza a conversão para porcentagem e obtém o valor masculino.
    const percentFemale = (pokemonSpecies.gender_rate/ 8) * 100
    const percentMale = 100 - percentFemale

    // Adiciona os valores Female e Male ao HTML
    infoGenderFemale.innerHTML = `${percentFemale.toFixed(2)}%`
    infoGenderMale.innerHTML = `${percentMale.toFixed(2)}%`

    // Pega os Grupos de ovos e coloca gera uma linha span pra cada
    const eggGroups = pokemonSpecies.egg_groups.map((eggGroupSlot) => eggGroupSlot.name)
    infoEggGroups.innerHTML = eggGroups.map((eggGroup) => `<span class="type ${eggGroup}">${eggGroup}</span>`).join('')

       
    InfoHatchCounter.innerHTML = `${255 * (pokemonSpecies.hatch_counter + 1)} steps`


    // Aqui eu crio um if pra verificar genus por genus e ver qual deles está em Inglês
    // e me retornar o valor, que eu uso para colocar na parte Species
    let genusInEnglish;
    for (let genus of pokemonSpecies.genera) {
        if (genus.language.name == 'en') {
            genusInEnglish = genus.genus;
            break;
        }
    }

    infoSpecies.innerHTML = genusInEnglish


}


