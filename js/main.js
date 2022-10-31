// Access-Control-Allow-Origin: *


// document.getElementById('audioFunction').onclick = soundOn


// function soundOn(){
//     audioFunction.play('file:///Users/mohamed/Desktop/WEBDEV/projects/pokedex/audio/03%20Title%20Screen.mp3')
// }


function play() {
    var audio = document.getElementById("audio");
    audio.play();
  }


document.querySelector('.search').addEventListener('click', runPokeDex);

function runPokeDex(){
 
    let pokemon = document.querySelector('#pokemonID').value.toLowerCase();
    let pokeUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    let randomPPOne = randomPPGenerator()
    let randomPPTwo = randomPPGenerator()
    let randomPPThree = randomPPGenerator()
    let randomPPFour = randomPPGenerator()

    function randomPPGenerator(){
        let value = Math.ceil(Math.random()*20)
        return value
    }

    function randomMoveGenerator(){
        let value = Math.ceil(Math.random()*70)
        return value 
    }
 
    fetch(pokeUrl)
    .then(res => res.json())
  
    .then(data => {
        console.log(data);

        document.querySelector('.pokeImageSrc').src = data.sprites.front_default;
        document.querySelector('.pokeData1Title').innerHTML = data.species.name.toUpperCase();
        document.querySelector('.pokeData1ItemOne').innerHTML = `Type: ${data.types[0].type.name.toUpperCase()}`;
        document.querySelector('.pokeData1ItemTwo').innerHTML = `Height: ${data.height*10}" `;
        document.querySelector('.pokeData1ItemThree').innerHTML = `Weight: ${data.weight} lbs`;
        document.querySelector('.pokeData1ItemFour').innerHTML = `Pokedex ID: ${data.id}`;

        document.querySelector('.abilityOne').innerHTML = data.moves[randomMoveGenerator()].move.name;
        document.querySelector('.abilityTwo').innerHTML = data.moves[randomMoveGenerator()].move.name;
        document.querySelector('.abilityThree').innerHTML = data.moves[randomMoveGenerator()].move.name;
        document.querySelector('.abilityFour').innerHTML = data.moves[randomMoveGenerator()].move.name;

        
        document.querySelector('.abilityOnePP').innerHTML = `PP: ${randomPPOne}/${randomPPOne}`
        document.querySelector('.abilityTwoPP').innerHTML = `PP: ${randomPPTwo}/${randomPPTwo}`
        document.querySelector('.abilityThreePP').innerHTML = `PP: ${randomPPThree}/${randomPPThree}`
        document.querySelector('.abilityFourPP').innerHTML = `PP: ${randomPPFour}/${randomPPFour}`

     })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
