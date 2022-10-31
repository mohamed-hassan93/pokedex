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
 
    let pokemon = document.getElementById('pokemonID')
 
    fetch(apiUrl)
    .then(res => res.json())
  
    .then(data => {
        console.log(data);
     })
    .catch(err => {
        console.log(`error ${err}`)
    })
}
