import { useState } from "react";
import  movieData from "../data/movies";
import {Link} from 'react-router-dom'

export default function Movies() {
  const [movies, setMovies] = useState(movieData);

  console.log(movies)
  return (
    <div>
      <h1>Movies</h1>
      {
        movieData.map((data, index) => {
            return (
                <Link key={index} to={`/movie/${data.id}`} state={data}>
                    <div >{data.name}</div>
                </Link>
            )
        })
      }
    </div>
  );
}
