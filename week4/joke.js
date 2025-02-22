const jokeButton = document.getElementById('get-joke');
const jokeDisplay = document.getElementById('joke');

// Fetch a random joke
jokeButton.addEventListener('click', async () => {
    jokeDisplay.textContent = 'Loading...';
    
    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        console.log(response);
        if (!response.ok) {
        throw new Error('Failed to fetch joke');
        }
        const joke = await response.json();
        jokeDisplay.textContent = `${joke.setup} - ${joke.punchline}`;
    } catch (error) {
        jokeDisplay.textContent = 'Error fetching joke. Please try again.';
    }
});



getData();

async function populate() {
    const requestURL =
      "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);
  
    const response = await fetch(request);
    const superHeroesText = await response.text();
    console.log(superHeroesText);
    const superHeroes = JSON.parse(superHeroesText);
    populateHeader(superHeroes);
    populateHeroes(superHeroes);
}

//populate();

  


  


