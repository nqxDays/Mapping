import React from "react";
import Movie from "./Movie";

function App() {
  const movies = [
    {
      title: "Людина-павук",
      director: "Sam Raimi",
      year: 2002,
      studio: "Columbia Pictures",
      poster:
        "https://upload.wikimedia.org/wikipedia/uk/0/04/%D0%9D%D0%BE%D0%B2%D0%B8%D0%B9_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D0%9B%D1%8E%D0%B4%D0%B8%D0%BD%D0%B0-%D0%BF%D0%B0%D0%B2%D1%83%D0%BA_%D0%94%D0%B0%D0%BB%D0%B5%D0%BA%D0%BE_%D0%B2%D1%96%D0%B4_%D0%B4%D0%BE%D0%BC%D1%83.jpg",
    },
    {
      title: "Interstellar",
      director: "Christopher Nolan",
      year: 2014,
      studio: "Paramount Pictures",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg",
    },
    {
      title: "План втечі",
      director: "Mikael Håfström",
      year: 2013,
      studio: "Summit Entertainment",
      poster:
        "https://kinoukr.tv/uploads/posts/2025-09/fdef54aecb_posterx.webp",
    },
  ];

  return (
    <div>
      <h1>Моя колекція улюблених фільмів</h1>

      {movies.map((movie, index) => (
        <Movie
          key={index}
          title={movie.title}
          director={movie.director}
          year={movie.year}
          studio={movie.studio}
          poster={movie.poster}
        />
      ))}
    </div>
  );
}

export default App;
