import { MovieCard } from "./components/MovieCard";
import { SearchInput } from "./components/SearchInput";
import "./App.css";
import { SkeletonGrid } from "./components/SkeletonGrid";
import { useState } from "react";
import type { Movie } from "./types/movie";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="app">
      <header className="app-header">
        <div className="app-header__inner">
          <div className="app-header__brand">
            <span className="app-header__logo">🎬</span>
            <div>
              <h1 className="app-title">Movie Search</h1>
              <p className="app-subtitle">
                Discover popular films and search by title
              </p>
            </div>
          </div>
          <SearchInput value="" onChange={() => {}} />
        </div>
      </header>
      <main className="app-main">
        {loading ? (
          <SkeletonGrid />
        ) : (
          <div className="movie-grid">{/** render movies here */}</div>
        )}
      </main>
    </div>
  );
}

export default App;
