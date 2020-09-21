
details = localStorage.details.slice(1, -1);
let movieDetails = [];

for (var i = 0; i <= localResults.length - 1; i++) {
    if (localResults[i].imdbID === details) {
        movieDetails.push(localResults[i]);
    }
}
let poster = `<img src="${movieDetails[0].Poster}" style="width: 100%" />`;


let info = (`
<h3>${movieDetails[0].Title}</h3>

<p>${movieDetails[0].Year}</p>

<div class="d-flex flex-row" onClick="bookmark(this.id)" style="cursor: pointer;" id="${movieDetails[0]}">
    <svg class="m-1" id="icon" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bookmark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
    </svg>
    <p>Add To Watch List</p>
</div>

`)

document.getElementById("poster").innerHTML = poster;
document.getElementById("info").innerHTML = info;