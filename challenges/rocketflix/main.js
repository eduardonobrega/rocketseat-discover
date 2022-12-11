import { API_KEY, BASE_URL, IMG_URL, language } from './api.js';

const result = document.getElementById('renderResults');

const button = document.querySelector('button')

button.addEventListener('click', getMovie)

async function getMovie() {
  const maxPages = 500;
  const mimPages = 1;
  const pageRadom = Math.floor(
    Math.random() * (maxPages - mimPages + 1) + mimPages
  );

  const url = `${BASE_URL}?api_key=${API_KEY}&language=${language}&page=${pageRadom}`;

  const listMovies = await axios.get(url).then((res) => res.data.results);

  const listMoviesFilter = listMovies.filter(
    (movie) => !movie.adult && movie.overview
  );
  const movieRadom = Math.floor(Math.random() * listMoviesFilter.length);

  const movie = listMoviesFilter[movieRadom];
  const { title, overview, poster_path } = movie;

  const img = document.createElement('img');

  img.src = `https://image.tmdb.org/t/p/w500${poster_path}`;
  result.innerHTML = ''

  result.appendChild(img);

  result.innerHTML += `
    <div>
      <h2>${title}</h2>
      <p>${overview}</p>
    </div>
  `;
}
