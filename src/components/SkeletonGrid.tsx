export function SkeletonGrid() {
  return (
    <div className="movie-grid movie-grid--skeleton">
      {Array.from({ length: 18 }).map((_, i) => (
        <div key={i} className="movie-card movie-card--skeleton">
          <div className="movie-card__poster movie-card__poster--skeleton" />
          <div className="movie-card__info">
            <div className="skeleton-line skeleton-line--title" />
            <div className="skeleton-line skeleton-line--meta" />
          </div>
        </div>
      ))}
    </div>
  );
}
