const baceURL = {
    baceMovies: 'https://api.themoviedb.org/3/',
    bacePoster: 'https://image.tmdb.org/t/p/w500/'
};
const movieInfo ='movie/'
//const keyAPI = '88a830c900ba5a5844edd20757b40f93';
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OGE4MzBjOTAwYmE1YTU4NDRlZGQyMDc1N2I0MGY5MyIsInN1YiI6IjY1NGEwNjJjNmJlYWVhMDE0YjY5OTM3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eCzrzyaD0JsA2A9iGP-7aJ_2lY1Ks-pwL8fGoJ8ZQ1M';
const allMovies = 'discover/movie';
const allGenres = 'genre/movie/list';
const searchMovie = 'search/movie?query=';

const urls = {
    baceURL,
    allMovies,
    allGenres,
    movieInfo,
    searchMovie:(query:string,page:string )=> `${searchMovie + query}&${page}`,
    allGenreMovies: (id: number, page: string) => `genre/${id}/movies${page}`,
    token
};

export { urls };