import React, { useState, useEffect } from "react";
import axios from "./axios";
import classes from "./Row.module.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://image.tmdb.org/t/p/original/";
const opts = { height: "390", width: "100%", playerVars: { autoplay: 1 } };
export default function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [props.fetchUrl]);
  const HandleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div>
      <h2>{props.title}</h2>
      <div className={classes.row_posters}>
        {movies.map((movie) => (
          <img
            className={`${classes.Image} ${
              props.isLargeRow && `${classes.LargeImage}`
            }`}
            key={movie.id}
            onClick={() => {
              HandleClick(movie);
            }}
            src={`${base_url}${
              props.isLargeRow
                ? `${movie.poster_path}`
                : `${movie.backdrop_path}`
            }`}
            alt={movie.name}
          />
        ))}
      </div>
     {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
