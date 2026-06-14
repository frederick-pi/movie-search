import type { Movie } from './types/movie';
import { MovieCard } from './components/MovieCard';
import './App.css';

const movies: Movie[] = [];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">🎬 Movie Search</h1>
      </header>
      <main className="app-main">
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
