import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Row.css";
import Youtube from "react-youtube";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fecthData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
    }
    fecthData();
  }, [props.fetchUrl]);

  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${baseURL}${
              props.islargerow ? movie.poster_path : movie.backdrop_path
            }`}
            className={`row-poster ${props.islargerow && "row-posterlarge"}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
