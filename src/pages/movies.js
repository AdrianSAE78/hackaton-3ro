import React, { useState, useEffect } from 'react'
import '../styles/movies.css';
import Header from "../components/Header";
import Footer from "../components/Footer"
import MovieCollection from "../components/movieCollection";
import logo from "../assets/logo_peliculas.png";
import '../styles/movies_poster.css';
import movieCollectionImage from "../assets/moviesPageCollection.jpeg";
import CircleProgress from "../components/setCircleProgress"

function Movies() {


  const [theaterMovies, setTheaterMovies] = useState([]);
  const [betterRankedMovies, setBetterRankedMovies] = useState([]);
  const [upcomingMovies, setUpcommingMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGEzOWYxYzc2OGJlNzI3OTRmOTJmOGYwMDEwOTBhNyIsIm5iZiI6MTczNzIyMjQ4My41NzQwMDAxLCJzdWIiOiI2NzhiZTk1M2Q4YTViMGQwMGM0MzBmNzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.DryujTsC4dJw07GBNe9J2g2x_OnkPsLO1Xo9p_n482E'
      }
    };
    let callTheaterMovies = async () => {
      try {

        let response = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", options)
        let data = await response.json();
        setTheaterMovies(data.results);
        setLoading(false);
        console.log(data.results)

      } catch (error) {

        console.error("Error al obtener datos:", error);
        setLoading(false);

      }
    }

    let callBetterRankedMovies = async () => {
      try {

        let response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
        let data = await response.json();
        setBetterRankedMovies(data.results);
        setLoading(false);

      } catch (error) {

        console.error("Error al obtener datos:", error);
        setLoading(false);

      }
    }

    let callUpcomingMovies = async () => {
      try {

        let response = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", options)
        let data = await response.json();
        setUpcommingMovies(data.results);
        setLoading(false);

      } catch (error) {

        console.error("Error al obtener datos:", error);
        setLoading(false);

      }
    }

    callTheaterMovies();

    callBetterRankedMovies();

    callUpcomingMovies();

  }, []);

  return (
    <>
      <main>
        <Header src={logo} color="#121B7E" />
        <section>
          <article>
            <MovieCollection src={movieCollectionImage} text="Adentrate en tus Películas Favoritas!" />
          </article>
        </section>
        <section>
          <article>
            <h1>Ahora en Cines</h1>
            {loading ? (
              <p>Cargando datos...</p>
            ) : (
              <ul className='posters'>
                {theaterMovies.map((movie) => (
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
            <h1>Mejor Ranqueadas</h1>
            {loading ? (
              <p>Cargando datos...</p>
            ) : (
              <ul className='posters'>
                {betterRankedMovies.map((movie) => (
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
            <h1>Próximos Estrenos</h1>
            {loading ? (
              <p>Cargando datos...</p>
            ) : (
              <ul className='posters'>
                {upcomingMovies.map((movie) => (
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
        <Footer src={logo} color="#121B7E" />
      </main>

    </>
  );
}

export default Movies;
