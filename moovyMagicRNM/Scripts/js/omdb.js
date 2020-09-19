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

function getMovie() {
    let id = this.getElementById('id').value;
    console.log(this.id);
    //localResults.forEach(movie => {


    //    console.log(id);
    //});
}

console.log(localResults);
