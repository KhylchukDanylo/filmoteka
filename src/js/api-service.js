import axios from 'axios';

const API_KEY = '7653694c4941db1f3bfb7af19c86b9a8';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchPopularMovies(page) {
  const url = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US&page=${page}`;
  const response = await axios(url);
  console.log(response);
  return response;
}

async function fetchMovieById(movieId) {
  const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  const response = await axios(url);
  console.log(response);
  return response;
}

async function fetchMoviesGenres() {
  const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
  const genres = await axios(url);
  return genres;
}

async function fetchMoviesBySearch(searchQuery, page) {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`;
  const response = await axios(url);
  console.log(response);
  return response;
}

async function fetchTrailer(movieId) {
  const url = `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;
  const data = await axios(url);
  return data;
}

async function fetchMoviesByFilters(params, page) {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}${params}&page=${page}`;
  const response = await axios(url);
  return response;
};

async function fetchMoviesByRating() {
  const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&primary_release_date.gte=2000&primary_release_date.lte=2010&page=1`;
  const response = await axios(url);
  return response;
};

export {
  fetchPopularMovies,
  fetchMovieById,
  fetchMoviesGenres,
  fetchMoviesBySearch,
  fetchTrailer,
  fetchMoviesByFilters,
  fetchMoviesByRating,
};

