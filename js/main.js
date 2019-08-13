$(document).ready(function() {
	$('#searchForm').on('submit', function(e) {
		let searchText = $('searchText').val();
		getMovies(searchText);
		e.preventDefault();
	});
    });

function getMovies(searchText) {
	axios.get('https://www.omdbapi.com/?s='+searchText+"&apikey=e0620bd4")
		.then(function(response){
			console.log(response);
			var movies = response.data.Search;
			let output = '';
			$.each(movies , function(index , movie){
				output+= `
				<div class="col-md-3">
				<div class= "well text-center">
				 <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}">
				<h5>${movie.Title}</h5>
				<a onclick="movieSelected('${movie.ID}')" class= "btn btn-primary" href="#">Movie Details</a>
				</div>
				</div>
				`;
			})
				$('#movies').html(output);
		})
			.catch(function(error){
				console.log(error);
			});
	}

	