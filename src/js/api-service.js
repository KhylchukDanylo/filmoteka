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

export {
  fetchPopularMovies,
  fetchMovieById,
  fetchMoviesBySearch,
  fetchTrailer,
  fetchMoviesByFilters,
};

