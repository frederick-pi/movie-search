import type { Movie } from '../types/movie';
import { TMDB_IMAGE_BASE_URL } from '../lib/tmdb';

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const year = movie.release_date ? movie.release_date.slice(0, 4) : '—';

  return (
    <div className="movie-card">
      {movie.poster_path ? (
        <img
          className="movie-card__poster"
          src={TMDB_IMAGE_BASE_URL + movie.poster_path}
          alt={movie.title}
        />
      ) : (
        <div className="movie-card__poster movie-card__poster--empty">
          No Image
        </div>
      )}
      <div className="movie-card__info">
        <p className="movie-card__title">{movie.title}</p>
        <div className="movie-card__meta">
          <span className="movie-card__year">{year}</span>
          <span className="movie-card__rating">
            ★ {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </div>
  );
}
