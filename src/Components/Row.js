import React, { useEffect, useState } from "react";
import axios from "../Other Files/axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [currenttraliermovie, settrailermovie] = useState("");

  useEffect(() => {
    async function fecthData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
    }
    fecthData();
  }, [props.fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleclick = (movie) => {
    if (
      trailerUrl &&
      (movie?.name === currenttraliermovie ||
        movie?.title === currenttraliermovie)
    ) {
      setTrailerUrl("");
    } else {
      settrailermovie(movie?.name || movie?.title);
      movieTrailer(movie?.name || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

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
            onClick={() => handleclick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
