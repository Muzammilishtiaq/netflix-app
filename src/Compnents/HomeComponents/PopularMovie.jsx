import React, { useEffect, useState } from 'react'
import Titles from './Titles';
import { BiCollection } from "react-icons/bi";
import MovieHome from './MovieHome';
import { Movies } from '../../Data/MovieData';


function PopularMovie() {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmQ0YTg5MWZhYTU5N2JmZjRjMGEyOTk5NjlkYWVkNyIsInN1YiI6IjY1NDcyY2JkNmJlYWVhMDEyYzhlOWFmZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vg9PPpNkGZ9WJNJ2ay0ND4FbZNqO8zaCRhogD9w_Ly4'
      }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
      .then(response => response.json())
      .then((data) => {
        setPopular(data.results)
        console.log(data.results)
      })
      .catch(err => console.error(err));
  }, [])
  return (
    <div className='my-16'>
      <Titles title="Popular Movies" Icon={BiCollection} />
      <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {
          popular.map((movie,index)=>(
            <MovieHome key={index} movie={movie}/>
          ))
        }
      </div>
    </div>
  )
}

export default PopularMovie
