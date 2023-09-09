$.ajax({
    url: 'http://www.omdbapi.com/?apikey=d20aad1e&s=avengers',
    success: result => {
        const movies = result.Search;
        let cards = '';
        movies.forEach(m => {
            cards +=`
            <div class="col-md-4 my-5">
            <div class="card" style="width: 18rem;">
                <img src="${m.Poster}" class="card-img-top" >
                <div class="card-body">
                  <h5 class="card-title">${m.Title}</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">${m.Year}</h6>
                  <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Show Details</a>
                </div>
              </div>
            </div>`;
        });
        $('.movie-container').html(cards);

        // ketika tombol di-klik
        $('.modal-detail-button').on('click', function(){
            $.ajax({
                url: 'http://www.omdbapi.com/?apikey=d20aad1e&s=' + $(this).data('imdbid'),
                success: m => {
                    const movieDetail = `
                        <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="${m.Poster}" class="img-fluid">
                            </div>
                            <div class="col-md">
                                <ul class="list-group">
                                    <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                                    <li class="list-group-item">Director : <strong>${m.Director}</strong></h4></li>
                                    <li class="list-group-item">Actor : <strong>${m.Actors}</strong></li>
                                    <li class="list-group-item">Writter : <strong>${m.Writters}</strong></li>
                                    <li class="list-group-item">plot : <strong>${m.Plot}</strong><br></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    `;
                    $('.modal-body').html(movieDetail);
                },
                error: (e) => {
                    console.log(e.responseText)
                }
            })
        })
    },
    error: (e) => {
        console.log(e.responseText);
    }
})