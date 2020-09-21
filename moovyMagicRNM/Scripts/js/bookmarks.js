
var bookmarks = "";
for (let i = 0; i <= bookmarks.length - 1; i++) {

    bookmarks += (`
                    <div class="card my-3 p-2 bg-light col-12 col-lg-5" style="width: 627px; height=241px; cursor: pointer;">
                          <div id="${bookmarks[i].imdbID}" onClick="getMovie(this.id)" class="row no-gutters">
                            <div class="col-4">
                              <img src="${ bookmarks[i].Poster}" class="card-img" style="height:208px; width:138px; object-fit: contain;" alt="Title Poster">
                            </div>
                            <div class="col-8">
                              <div class="card-body">
                                <h5 class="card-title">${ bookmarks[i].Title}</h5>
                                <p class="card-text">${ localResults[i].Year}</p>
                              </div>
                            </div>
                          </div>
                    </div>
`);
}