
//Taking string containing the imdbID from getMovie() and removing the quotes from it and storingit into a local variable
details = localStorage.details.slice(1, -1);

//Creating an empty array and looping through localResults to grab the specific movie object we clicked
let movieDetails = [];
for (var i = 0; i <= localResults.length - 1; i++) {
    if (localResults[i].imdbID === details) {
        movieDetails.push(localResults[i]);
    }
}

//Inserting the object items we grabbed into strings formatted for the html
let poster = `<img src="${movieDetails[0].Poster}" style="width: 100%" />`;


let info = (`
<h3>${movieDetails[0].Title}</h3>

<p>${movieDetails[0].Year}</p>

<div class="d-flex flex-row" onClick="bookmark(this.id)" style="cursor: pointer;" id="${movieDetails[0].imdbId}">
    <svg class="m-1" id="icon" width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bookmark" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
    </svg>
    <p>Add To Watch List</p>
</div>

`)

function bookmark() {
    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('bookmarks')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(movieDetails[0]);
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('bookmarks', JSON.stringify(a));

    // Alert the array value
    alert(JSON.stringify(movieDetails[0].Title) + " has been added to your bookmarks!");  // Should be something like [Object array]

    console.log(localStorage.bookmarks);
}


//inserting formatted strings into the html

document.getElementById("poster").innerHTML = poster;
document.getElementById("info").innerHTML = info;