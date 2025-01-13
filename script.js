const jokeElement = document.getElementById('joke');
const jokeButton = document.getElementById('jokeBtn');

async function fetchJoke() {
  try {
    jokeElement.style.opacity = 0; // Smooth fade-out
    jokeElement.textContent = 'Loading a joke... \^o^/';
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    setTimeout(() => {
      jokeElement.style.opacity = 1; // Smooth fade-in
      jokeElement.textContent = `${data.setup} - ${data.punchline}`;
    }, 500); // Delay for smooth transition
  } catch (error) {
    jokeElement.textContent = 'Oops! Could not fetch a joke. Try again later.';
  }
}

jokeButton.addEventListener('click', fetchJoke);
