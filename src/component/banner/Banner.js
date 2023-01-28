import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios.js";
import requests from "./../../Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  // fecth data
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  // truncking function : fungsi untuk memotong string dengan karakter ditentukan apabila melebihi kembalikan ....
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "...." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundColor: "rgb(0,0,0,0.4)",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <h1 className="banner-description">{truncate(movie.overview, 150)}</h1>
        <div className="banner-buttons">
          <button onClick={() => movie?.video} className="banner-button">
            <i class="bi bi-play-fill"></i> Play
          </button>
          <button className="banner-button">
            <i class="bi bi-exclamation-circle-fill"></i> Details
          </button>
        </div>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
