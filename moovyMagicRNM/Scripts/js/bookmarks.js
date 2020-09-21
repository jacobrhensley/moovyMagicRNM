
var replace = "";
let marks = JSON.parse(localStorage.bookmarks);
for (let i = 0; i <= marks.length - 1; i++) {

    replace += (`
                    <div class="card my-3 p-2 bg-light col-12 col-lg-5" style="width: 627px; height=241px; cursor: pointer;">
                          <div id="${ marks[i].imdbID}" onClick="getMovie(this.id)" class="row no-gutters">
                            <div class="col-4">
                              <img src="${ marks[i].Poster}" class="card-img" style="height:208px; width:138px; object-fit: contain;" alt="Title Poster">
                            </div>
                            <div class="col-8">
                              <div class="card-body">
                                <h5 class="card-title">${ marks[i].Title}</h5>
                                <p class="card-text">${ marks[i].Year}</p>
                              </div>
                            </div>
                          </div>
                    </div>
`);
}

document.getElementById("bookmarks").innerHTML = replace;