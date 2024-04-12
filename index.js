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

const noSearch = document.querySelector(".search__none")
const searchResults = document.querySelector(".search__heading")

async function searchMovie() {
  const log = document.getElementById("search").value;
  const data = await fetch(`http://www.omdbapi.com/?apikey=1ee8e7af&s=${log}`);
  const movieData = await data.json();
  console.log(movieData)

  const movieWrapperEl = document.querySelector(".movie__wrapper");
  if (movieData) {
    movieWrapperEl.innerHTML = movieData.Search.map((Search) =>
      movieHTML(Search)
    ).join("");
  } else if (movieData !== true) {
    noSearch.classList.remove("search__none")
    noSearch.classList += " no__search";
  }
  searchResults.innerHTML += ` for ${log}:`
}
searchMovie();

function movieHTML(Search) {
  return ` <div class="movie">
  <img class="movie__img" src="${Search.Poster}" alt="">
  <h1 class="movie__title">${Search.Title}</h1>
  <h2 class="movie__year">Year of Release: ${Search.Year}</h2>
  <h6 class="movie__id">Movie imdbID: ${Search.imdbID}</h6>
</div>`;
}
movieHTML();
