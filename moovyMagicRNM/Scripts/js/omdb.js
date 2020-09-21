"use strict";
let results = [];
var localResults = JSON.parse(localStorage.localResults);

window.addEventListener('keypress', function (e) {
    if (e.keyCode == 13) {
        getMovies()
    }
}, false);


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

            //localResults = JSON.parse(localStorage.localResults);

        });

};

function getMovie(clicked_id) {
    localStorage.removeItem("details");
    localStorage.details = JSON.stringify(clicked_id);
    window.location.href = "/home/details";
}

function bookmark(clicked_id) {
    console.log(clicked_id);
    localStorage.bookmarks = localStorage.localResults = JSON.stringify(clicked_id);
}

console.log(localResults);
