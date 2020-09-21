//Creating variables to store grabbed objects locally
var insert = "";
var searchParam = JSON.parse(window.localStorage.getItem('searchParam'));

//Creating the strings formatted for html
var reference = `Results for "${ searchParam }"</h3>`;
for (let i = 0; i <= localResults.length - 1; i++) {

    insert += (`
                    <div class="card my-3 p-2 bg-light col-12 col-lg-5" style="width: 627px; height=241px; cursor: pointer;">
                          <div id="${localResults[i].imdbID}" onClick="getMovie(this.id)" class="row no-gutters">
                            <div class="col-4">
                              <img src="${ localResults[i].Poster }" class="card-img" style="height:208px; width:138px; object-fit: contain;" alt="Title Poster">
                            </div>
                            <div class="col-8">
                              <div class="card-body">
                                <h5 class="card-title">${ localResults[i].Title }</h5>
                                <p class="card-text">${ localResults[i].Year }</p>
                              </div>
                            </div>
                          </div>
                    </div>
`);
}

//Removing quotation marks from string for easier comparison
details = localStorage.details.slice(1, -1);


//Inserting strings into html
document.getElementById("reference").innerHTML = reference;
document.getElementById("results").innerHTML = insert;
