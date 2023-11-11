const API_KEY = '218c93476767cb8dd36616f8fbecf3e7';
const language = "&language=pt-BR";
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + `/movie/popular?api_key=${API_KEY}${language}`;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + `/search/movie?api_key=${API_KEY}${language}`;

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");


getMovies(API_URL)

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        if (data.results.length !== 0) {
            showMovies(data.results);
        } else {
            main.innerHTML = `<div class="no-result">
            <img src="img/filmes/pililiu.png" alt="image" class="img-no-results">
            <br>
            <h1 class="no-results">Nenhum resultado encontrada!</h1>
            </div>`
        }

    })
}


function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const { title, poster_path, vote_average, overview, id, release_date } = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
             <img src="${poster_path ? IMG_URL + poster_path : "http://via.placeholder.com/1080x1580"}" alt="${title}">

            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getColor(vote_average)}">${vote_average.toFixed(1)}</span>
            </div>

            <div class="overview">

                <h3>${title}</h3>
                ${overview}
                <br> 
                <small>Data de lançamento: ${release_date}</small>
            </div>
        
        `

        main.appendChild(movieEl);
    });
}


function getColor(vote) {
    if (vote >= 8) {
        return "green"
    } else if (vote >= 5) {
        return "orange"
    } else {
        return "red"
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(searchURL + '&query=' + searchTerm)
    } else {
        getMovies(API_URL);
    }

})