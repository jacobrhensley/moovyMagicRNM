


var insert = "";
    insert += (`
                    <div class="card my-3 p-2 bg-light col-12 col-lg-5" style="width: 627px; height="241";>
                    <a onclick="this.getMovie()" class="text-dark">
                      <div class="row no-gutters">
                        <div class="col-4">
                          <img src="${ this.Poster}" class="card-img" style="height:208px; width:138px; object-fit: contain;" alt="Title Poster">
                        </div>
                        <div class="col-8">
                          <div class="card-body">
                            <h5 class="card-title">${ this.Title}</h5>
                            <p class="card-text">${ this.Year}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    </div>
                
`);

document.getElementById("details").innerHTML = insert;