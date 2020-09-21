
details = localStorage.details.slice(1, -1);
var movieDetails = [];
var insert = "";

for (var i = 0; i <= localResults.length - 1; i++) {
    if (localResults[i].imdbID === details) {
        movieDetails.push(localResults[i]);
        console.log("this one!" + i);
    }
}
insert += (`
              <img src="${movieDetails[0].Poster}"  />
`);

document.getElementById("details").innerHTML = insert;