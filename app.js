const jokeText = document.getElementById("joke");
const jokeBtn =document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJokes);

generateJokes()

async function generateJokes() {
    const res = await fetch("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit")
    
    const data = await res.json();
    console.log(data)
    console.log(data.joke)
    console.log(data.delivery)
    let joke = ""
    if (data.joke == undefined) {
        joke = `${data.setup} ${data.delivery}`
    } else {
        joke = data.joke
    }
    jokeText.innerHTML = joke;

}