// http://www.omdbapi.com/?apikey=1ee8e7af&/

const searchInput = document.querySelector("[data-search]");
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  console.log(value);
});

async function main() {
  const data = await fetch(`http://www.omdbapi.com/?apikey=1ee8e7af&s=${value}`);
  const movieData = await data.json();
  console.log(movieData);
}
main();
