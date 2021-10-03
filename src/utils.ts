import { SortedType } from './constants';
import { Movie } from './types';

export const getSortedMovies = (sortedType: SortedType, movies: Movie[]) => {
  switch (sortedType) {
    case SortedType.ByYear: {
      return movies.sort((a: Movie, b: Movie) => {
        return a.year - b.year;
      });
    }

    case SortedType.ByName: {
      return movies.sort((a: Movie, b: Movie) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
    }

    default:
      return movies;
  }
};

export const generateUniqNumbers = (): number => Date.now() + Math.random();
