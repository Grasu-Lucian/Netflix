import React from "react";
import axios from "./axios";
import requests from "./Request.js";
import classes from "./Banner.module.css";
import { useState, useEffect } from "react";
export default function Banner() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);
  function truncate(str,n){
    return str?.length>n? str.substr(0,n-1)+ '...':str;
  }
  return (
    <header
      className={classes.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={classes.banner_content}>
        <h1 className={classes.banner_title}>{movies?.title || movies?.name || movies?.original_name}</h1>
        <div className={classes.banner_buttons}>
          <button className={classes.banner_button}>Play</button>
          <button className={classes.banner_button}>My List </button>
        </div>
        <h1 className={classes.banner_description}>{truncate(movies?.overview,150)}</h1>
        <div className={classes.banner__fadeBottom}></div>
      </div>
    </header>
  );
}
