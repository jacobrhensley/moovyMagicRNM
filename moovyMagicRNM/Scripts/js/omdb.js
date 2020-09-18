"use strict";
let results = [];
var localResults = JSON.parse(localStorage.localResults);


function getMovies() {
    let searchParam = document.getElementById('search').value;

    results = [];
    localStorage.removeItem("localResults");

    fetch("http://www.omdbapi.com/?apikey=64f993ba&s=" + searchParam)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            function count() {

                data.Search.forEach(movie => {
                    results.push(movie);
                });
                localStorage.localResults = JSON.stringify(results);
                window.location.href = "/home/movies";
            };
            count();

            //localResults = JSON.parse(localStorage.localResults);
            //console.log(localResults);

        });

};

console.log(localResults);
