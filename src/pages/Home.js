import React, { useState, useEffect } from 'react'
import '../styles/movies.css';
import Header from "../components/Header";
import Footer from "../components/Footer"
import MovieCollection from "../components/movieCollection";
import logo from "../assets/logo_peliculas.png";
import '../styles/movies_poster.css';
import movieCollectionImage from "../assets/movie_collection.jpg";
import CircleProgress  from "../components/setCircleProgress"

function Home() {

  const [movies, setMovies] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGEzOWYxYzc2OGJlNzI3OTRmOTJmOGYwMDEwOTBhNyIsIm5iZiI6MTczNzIyMjQ4My41NzQwMDAxLCJzdWIiOiI2NzhiZTk1M2Q4YTViMGQwMGM0MzBmNzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.DryujTsC4dJw07GBNe9J2g2x_OnkPsLO1Xo9p_n482E'
      }
    };
    let callMovies = async () => {
      try {

        let response = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc", options)
        let data = await response.json();
        setMovies(data.results);
        setLoading(false);

      } catch (error) {

        console.error("Error al obtener datos:", error);
        setLoading(false);

      }
    }

    let callTvSeries = async () => {
      try {

        let response = await fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1", options)
        let data = await response.json();
        setTvSeries(data.results);
        setLoading(false);

      } catch (error) {

        console.error("Error al obtener datos:", error);
        setLoading(false);

      }
    }

    callMovies();

    callTvSeries();

  }, []);

  return (
    <>
      <main>
        <Header src={logo} color="#121B7E" />
        <section>
          <article>
            <MovieCollection src={movieCollectionImage} text="Descubre Nuevas Experiencias!" />
          </article>
        </section>
        <section>
          <article>
            <h1>Películas Más Populares</h1>
            {loading ? (
              <p>Cargando datos...</p>
            ) : (
              <ul className='posters'>
                {movies.map((movie) => (
                  <li key={movie.id} className="movie-item">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <h2>{movie.title}</h2>
                    <CircleProgress rating={movie.vote_average * 10} />
                  </li>
                ))}
              </ul>

            )}
          </article>
        </section>
        <section>
          <article>
            <h1>Series Más Populares</h1>
            {loading ? (
              <p>Cargando datos...</p>
            ) : (
              <ul className='posters'>
                {tvSeries.map((serie) => (
                  <li key={serie.id} className="movie-item">
                    <img
                      src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`}
                      alt={serie.name}
                    />
                    <h2>{serie.name}</h2>
                    <CircleProgress rating={serie.vote_average * 10} />
                  </li>
                ))}
              </ul>

            )}
          </article>
        </section>
        <Footer src={logo} color="#121B7E" />
      </main>

    </>
  );
}

export default Home;
