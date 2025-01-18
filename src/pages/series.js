import React, { useState, useEffect } from 'react'
import '../styles/movies.css';
import Header from "../components/Header";
import Footer from "../components/Footer"
import MovieCollection from "../components/movieCollection";
import logo from "../assets/logo_peliculas.png";
import '../styles/movies_poster.css';
import movieCollectionImage from "../assets/seriesPageCollection.jpeg";
import CircleProgress from "../components/setCircleProgress"

function Series() {

  const [onAirTvSeries, setOnAirTvSeries] =  useState([]);
  const [bestRankedTvSeries, setBestRankedTvSeries] =  useState([]);
  const [upcomingTvSeries, setUpcomingTvSeries] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGEzOWYxYzc2OGJlNzI3OTRmOTJmOGYwMDEwOTBhNyIsIm5iZiI6MTczNzIyMjQ4My41NzQwMDAxLCJzdWIiOiI2NzhiZTk1M2Q4YTViMGQwMGM0MzBmNzciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.DryujTsC4dJw07GBNe9J2g2x_OnkPsLO1Xo9p_n482E'
      }
    };
    

    let callOnAirTvSeries = async() => {
      try{
  
        let response = await fetch("https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1", options)
        let data =  await response.json();
        setOnAirTvSeries(data.results);
        setLoading(false);
  
      }catch(error){
  
        console.error("Error al obtener datos:", error);
        setLoading(false);
  
      }
    }

    let callBestRankedTvSeries = async() => {
        try{
    
          let response = await fetch("https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1", options)
          let data =  await response.json();
          setBestRankedTvSeries(data.results);
          setLoading(false);
    
        }catch(error){
    
          console.error("Error al obtener datos:", error);
          setLoading(false);
    
        }
    }

    let callUpcomingTvSeries = async() => {
        try{
    
          let response = await fetch("https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1", options)
          let data =  await response.json();
          setUpcomingTvSeries(data.results);
          setLoading(false);
    
        }catch(error){
    
          console.error("Error al obtener datos:", error);
          setLoading(false);
    
        }
    }


    callOnAirTvSeries();

    callBestRankedTvSeries();

    callUpcomingTvSeries();
    
  }, []);

  return (
    <>
      <main>
        <Header src={logo} color="#121B7E" />
        <section>
          <article>
            <MovieCollection src={movieCollectionImage} text="¿Cuál Será Tu Siguiente Serie?" />
          </article>
        </section>
        <section>
          <article>
          <h1>Series En Emisión</h1>
          {loading ? (
            <p>Cargando datos...</p>
          ) : (
            <ul className='posters'>
              {onAirTvSeries.map((serie) => (
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
        <section>
          <article>
          <h1>Series Mejor Ranqueadas</h1>
          {loading ? (
            <p>Cargando datos...</p>
          ) : (
            <ul className='posters'>
              {bestRankedTvSeries.map((serie) => (
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
        <section>
          <article>
          <h1>Próximos Episodios</h1>
          {loading ? (
            <p>Cargando datos...</p>
          ) : (
            <ul className='posters'>
              {upcomingTvSeries.map((serie) => (
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

export default Series;
