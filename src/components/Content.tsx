import { memo } from "react";
import { Header } from "./Header";
import { MovieCard } from "./MovieCard";

interface ContentProps {
  selectedGenre: {
    id: number;
    title: string;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  };
  movies: Array<{
    imdbID: string;
    Title: string;
    Poster: string;
    Runtime: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
  }>;
}

export function Content({ movies, selectedGenre }: ContentProps) {
  return (
    <div className="container">
      <Header title={selectedGenre.title} />

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              rating={movie.Ratings[0].Value}
              runtime={movie.Runtime}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default memo(Content);