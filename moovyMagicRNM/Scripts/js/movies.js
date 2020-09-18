
var insert = "";
var searchParam = JSON.parse(window.localStorage.getItem('searchParam'));
var reference = `Results for "${ searchParam }"</h3>`;
for (let i = 0; i <= localResults.length - 1; i++) {

    insert += (`<div class="card my-3 p-2 bg-light col-5" style="width: 627px; height="241";>
                  <div class="row no-gutters">
                    <div class="col-4">
                      <img src="${ localResults[i].Poster }" class="card-img" style="height:208px; width:138px; alt="~/Scripts/img/alt-film.jpg">
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



document.getElementById("reference").innerHTML = reference;
document.getElementById("results").innerHTML = insert;
