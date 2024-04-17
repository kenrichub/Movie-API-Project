// http://www.omdbapi.com/?apikey=1ee8e7af&/

// const searchInput = document.querySelector("[data-search]");
// searchInput.addEventListener("input", (e) => {
//   const value = e.target.value.toLowerCase();
//   console.log(value);
// });

const form = document.getElementById("form");
form.addEventListener("submit", searchSubmit);

function searchSubmit(event) {
  event.preventDefault();
}

const noSearch = document.querySelector(".search__none");
const searchResults = document.querySelector(".search__heading");

function toggleSearchOn() {
  noSearch.classList.add("search__none");
}
function toggleSearchOff() {
  noSearch.classList.remove("search__none");
}

let movieData = {};

async function searchMovie() {
  const log = document.getElementById("search").value;
  const data = await fetch(`http://www.omdbapi.com/?apikey=1ee8e7af&s=${log}`);
  movieData = await data.json();
  
  const movieWrapperEl = document.querySelector(".movie__wrapper");
  
  
  if (movieData.Response === "False") {
    movieData = {};
    movieWrapperEl.innerHTML = '';
    console.log(movieData);
    toggleSearchOff();
    noSearch.classList += " no__search";
  } else if (movieData.Response === "True") {
    movieWrapperEl.innerHTML = movieData.Search.map((Search) =>
      movieHTML(Search)
    ).join("");
    toggleSearchOn();
  }
  searchResults.innerHTML = `Search Results for ${log}:`;
}
// searchMovie();

function movieHTML(Search) {
  return ` <div class="movie">
  <img class="movie__img" src="${Search.Poster}" alt="">
  <h1 class="movie__title">${Search.Title}</h1>
  <h2 class="movie__year">Year of Release: ${Search.Year}</h2>
  <h6 class="movie__id">Movie imdbID: ${Search.imdbID}</h6>
</div>`;
}
movieHTML();
