function getData() {
    document.getElementById("movie").value;
}
const url = `https://www.omdbapi.com/?apikey=YOURAPIKEY&t=${movie}`;
xhttps.onreadystatechange = function () {};
if (this.readyState === 4 && this.status === 200) { console.log(this.responseText);
}
console.log(JSON.parse(this.responseText));
console.log(this.responseText);{
  "Title": "Blade Runner",
  "Year": "1982",
  "Rated": "R",
  "Released": "25 Jun 1982",
  "Runtime": "117 min",
  "Genre": "Action, Sci-Fi, Thriller",
  "Director": "Ridley Scott",
  "Writer": "Hampton Fancher (screenplay), David Webb Peoples (screenplay), Philip K. Dick (novel)",
  "Actors": "Harrison Ford, Rutger Hauer, Sean Young, Edward James Olmos",
  "Plot": "A blade runner must pursue and terminate four replicants who stole a ship in space, and have returned to Earth to find their creator.",
  "Language": "English, German, Cantonese, Japanese, Hungarian, Arabic",
  "Country": "USA, Hong Kong, UK",
  "Awards": "Nominated for 2 Oscars. Another 12 wins & 16 nominations.",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  "Ratings": [
    { "Source": "Internet Movie Database", "Value": "8.1/10" },
    { "Source": "Rotten Tomatoes", "Value": "90%" },
    { "Source": "Metacritic", "Value": "84/100" }
  ],
  "Metascore": "84",
  "imdbRating": "8.1",
  "imdbVotes": "658,507",
  "imdbID": "tt0083658",
  "Type": "movie",
  "DVD": "27 Aug 1997",
  "BoxOffice": "N/A",
  "Production": "Warner Bros. Pictures",
  "Website": "N/A",
  "Response": "True"
}:
document.getElementById('year').innerHTML = data.Year;

document.getElementById('rated').innerHTML = data.Rated;

document.getElementById('released').innerHTML = data.Released;

document.getElementById('runtime').innerHTML = data.Runtime;

document.getElementById('genre').innerHTML = data.Genre;

document.getElementById('director').innerHTML = data.Director;

document.getElementById('language').innerHTML = data.Language;

`https://www.omdbapi.com/?apikey=YOURAPIKEY&t=${movie}`;

const movie = document.getElementById('movie').value;

xhttps.open();

xhttps.open('GET', url, true
            
function getData() {
  "Blade Runner", "https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  xhttps.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
      console.log(JSON.parse(this.responseText));
      const data = JSON.parse(this.responseText);
 document.getElementById('year').innerHTML = data.Year;

document.getElementById('rated').innerHTML = data.Rated;

document.getElementById('released').innerHTML = data.Released;

document.getElementById('runtime').innerHTML = data.Runtime;

document.getElementById('genre').innerHTML = data.Genre;

document.getElementById('director').innerHTML = data.Director;

document.getElementById('language').innerHTML = data.Language;

    }
  };
  xhttps.open('GET', url, true);
}

const button = document.getElementById('btn');
button.addEventListener('click', () => {
  getData();
  document.getElementById('container').style.border = `2px solid #000`;
});

const button = document.getElementById('btn');
button.addEventListener('click', getData);