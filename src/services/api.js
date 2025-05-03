const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results;
}

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results;
}

const getImdbId = async (movieId) => {
    const response = await fetch(`${BASE_URL}/movie/${movieId}/external_ids?api_key=${API_KEY}`);
    const data = await response.json();
    return data.imdb_id;
}

export const findMovie = async (movieId) => {
    const imdbId = await getImdbId(movieId);
    const response = await fetch(`${BASE_URL}/find/${imdbId}?external_source=imdb_id&api_key=${API_KEY}`);
    const data = await response.json();
    console.log(data);
    return data.movie_results[0];
}