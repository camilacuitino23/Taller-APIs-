
const jokeText = document.getElementById('jokeText');
const getJokeBtn = document.getElementById('getJokeBtn');

// Función para obtener un chiste o dato curioso desde la API
async function fetchJoke() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        if (!response.ok) {
            throw new Error('Error fetching the joke');
        }
        const data = await response.json();
        jokeText.textContent = data.value; // Actualizar el texto con el chiste
    } catch (error) {
        jokeText.textContent = 'Oops! Something went wrong.';
        console.error(error);
    }
}

// Agregar evento al botón
getJokeBtn.addEventListener('click', fetchJoke);
