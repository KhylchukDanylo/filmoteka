import { allGenres } from '../data/jenres.js';

export function genresMaker(movies) {
  movies.forEach(movie => {
    movie.genres = movie.genres.map(id => {
      allGenres.forEach(object => {
        if (object.id === id) {
          id = object.name;
        }
      });
      return id;
    });

    switch (true) {
      case movie.genres.length > 0 && movie.genres.length <= 2:
        movie.genres = movie.genres.join(', ');
        break;

      case movie.genres.length > 2:
        movie.genres[2] = 'Other';
        movie.genres = movie.genres.slice(0, 3).join(', ');
        break;

      default:
        movie.genres = 'N/A';
        break;
    }
  });
}