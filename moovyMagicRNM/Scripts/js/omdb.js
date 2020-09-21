"use strict";
//Creating empty variables to store information in locally
let results = [];
var localResults = JSON.parse(localStorage.localResults);

//Adding functionallity to press enter key and submit the input for search
window.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        getMovies()
    }
}, false);

//Taking the value of the search input and runing a fetch to omdb, clearing and then storing the results locally to push to local storage
function getMovies() {
    var searchParam = document.getElementById('search').value;

    results = [];
    localStorage.removeItem("localResults");
    localStorage.removeItem("searchParam");

    fetch("http://www.omdbapi.com/?apikey=64f993ba&s=" + searchParam)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            function count() {
                console.log(data);

                data.Search.forEach(movie => {
                    results.push(movie);
                });
                localStorage.localResults = JSON.stringify(results);
                localStorage.searchParam = JSON.stringify(searchParam);
                window.location.href = "/home/movies";
            };
            count();

        });

};

//Grabbing information to view a single movie and storing the value in local storage

function getMovie(clicked_id) {
    localStorage.removeItem("details");
    localStorage.details = JSON.stringify(clicked_id);
    window.location.href = "/home/details";
}

console.log(localResults);
