// http://www.omdbapi.com/?apikey=1ee8e7af&/

function logSubmit(event) {
  event.preventDefault();
  console.log(event);
  console.log(log)
}

const form = document.getElementById("form");
const log = document.getElementById("search");
form.addEventListener("submit", logSubmit);

async function main() {
  const data = await fetch(`http://www.omdbapi.com/?apikey=1ee8e7af&s=big`);
  const movieData = await data.json();
  console.log(movieData);
  const movieWrapperEl = document.querySelector(".movie__wrapper");
  movieWrapperEl.innerHTML = movieData.Search
    .map((Search) => movieHTML(Search))
    .join("");
}

main();

function movieHTML(Search) {
  return ` <div class="movie">
  <img class="movie__img" src="${Search.Poster}" alt="">
  <h1 class="movie__title">${Search.Title}</h1>
  <h2 class="movie__year">Year of Release: ${Search.Year}</h2>
  <h6 class="movie__id">Movie imdbID: ${Search.imdbID}</h6>
</div>`;
}
movieHTML();