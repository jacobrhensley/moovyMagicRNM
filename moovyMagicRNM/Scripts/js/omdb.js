"use strict";
let results = [];


function getMovies() {
    let searchParam = document.getElementById('search').value;

    results = [];

    fetch("http://www.omdbapi.com/?apikey=64f993ba&s=" + searchParam)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            function count() {

                data.Search.forEach(movie => {
                    results.push(movie);
                });
                //window.location.href = "/home/movies";
                console.log(results);
            };
            count();
        });

};